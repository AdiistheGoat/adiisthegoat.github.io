// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages base path. For project sites (adityagoyal.github.io/repo-name/)
// this is set in the GitHub Actions workflow. For user/org sites it stays "/".
const basePath = process.env["BASE_PATH"] || "/";

export default defineConfig({
  vite: {
    base: basePath,
  },
  nitro: false,
  tanstackStart: {
    // Keep the SSR entry wrapper for prerendering; the serverless worker build is disabled.
    server: { entry: "server" },
    prerender: {
      enabled: true,
      // One-page site. Following <a href> would prerender /Resume.pdf as HTML
      // (res.text() on a binary file) and overwrite the real PDF.
      crawlLinks: false,
    },
  },
});
