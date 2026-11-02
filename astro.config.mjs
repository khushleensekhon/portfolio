import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

// Pages are pre-built as static HTML. Only /api/auth and /api/callback
// (the blog admin's GitHub login) run as serverless functions on Vercel.
export default defineConfig({
  site: process.env.SITE_URL || "https://khushleen.vercel.app",
  output: "static",
  adapter: vercel(),
});
