// Vercel Serverless Function — Naver Blog 게시 프록시
// CORS 우회: Naver Blog Open API는 브라우저에서 직접 호출 불가
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { accessToken, title, contents, tag, publishedAtTime } = req.body || {};
  if (!accessToken) return res.status(400).json({ error: "accessToken이 필요합니다." });
  if (!title || !contents) return res.status(400).json({ error: "title과 contents가 필요합니다." });

  try {
    const params = new URLSearchParams({
      title,
      contents,
      tag: tag || "",
      isNewLine: "true",
      isPublic: "0", // 기본 비공개 → 사용자가 검토 후 공개
    });
    if (publishedAtTime) params.append("publishedAtTime", publishedAtTime);

    const naverResp = await fetch("https://openapi.naver.com/blog/post.json", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const text = await naverResp.text();
    let data;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    if (!naverResp.ok) {
      return res.status(naverResp.status).json({
        error: data.errorMessage || data.message || "Naver Blog API 오류",
        detail: data,
      });
    }
    return res.status(200).json({ success: true, data });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
