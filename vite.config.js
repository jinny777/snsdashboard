import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages 배포 시 레포지토리 이름으로 변경하세요
// 예: base: "/sns-dashboard/"
// 커스텀 도메인 사용 시: base: "/"
const base = process.env.GITHUB_PAGES === "true" ? "/snsdashboard/" : "/";

export default defineConfig({
  plugins: [react()],
  base,
});
