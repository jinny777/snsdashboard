// Vercel Serverless Function — 예약 발행 관리 API
// GET  /api/schedule        → 예약 목록 조회
// POST /api/schedule        → 예약 추가/수정
// DELETE /api/schedule?id=X → 예약 삭제

import { kv } from "@vercel/kv";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default async function handler(req, res) {
  Object.entries(CORS).forEach(([k, v]) => res.setHeader(k, v));
  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    if (req.method === "GET") {
      const items = await kv.get("scheduled_posts") || [];
      return res.status(200).json({ items });
    }

    if (req.method === "POST") {
      const post = req.body;
      if (!post?.id || !post?.scheduledAt) {
        return res.status(400).json({ error: "id와 scheduledAt이 필요합니다." });
      }
      const items = await kv.get("scheduled_posts") || [];
      const filtered = items.filter(p => p.id !== post.id);
      filtered.push(post);
      await kv.set("scheduled_posts", filtered);
      return res.status(200).json({ success: true });
    }

    if (req.method === "DELETE") {
      const { id } = req.query;
      if (!id) return res.status(400).json({ error: "id가 필요합니다." });
      const items = await kv.get("scheduled_posts") || [];
      await kv.set("scheduled_posts", items.filter(p => p.id !== id));
      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
