// Vercel Cron Job — 매분 실행, 예약된 콘텐츠 자동 발행
// vercel.json 에서 cron: "* * * * *" 으로 설정

import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  // Vercel Cron 인증 헤더 확인
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const now = new Date();
    const items = await kv.get("scheduled_posts") || [];

    const due = items.filter(p =>
      p.status === "scheduled" &&
      p.scheduledAt &&
      new Date(p.scheduledAt) <= now
    );

    if (!due.length) {
      return res.status(200).json({ message: "발행할 예약 없음", checked: items.length });
    }

    const results = [];

    for (const post of due) {
      const postResults = {};

      // Naver Blog 발행
      if (post.platforms?.includes("naver") && post.platformDrafts?.naver?.trim()) {
        try {
          const resp = await fetch(`${process.env.VITE_APP_URL || "https://snsdashboard.vercel.app"}/api/naver-blog`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              accessToken: post.naverAccessToken,
              title: post.title,
              contents: post.platformDrafts.naver,
              tag: post.naverTags || "",
            }),
          });
          const data = await resp.json();
          postResults.naver = resp.ok
            ? `✅ 예약발행완료 ${now.toLocaleDateString("ko-KR")}`
            : `❌ 오류: ${data.error}`;
        } catch (e) {
          postResults.naver = `❌ 오류: ${e.message}`;
        }
      }

      results.push({ id: post.id, title: post.title, results: postResults });

      // 발행 완료 → KV에서 상태 업데이트
      const updated = items.map(p =>
        p.id === post.id
          ? { ...p, status: "published", publishResults: { ...p.publishResults, ...postResults }, firstPublishedAt: now.toISOString() }
          : p
      );
      await kv.set("scheduled_posts", updated);
    }

    return res.status(200).json({ published: results.length, results });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
