import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const root = path.dirname(fileURLToPath(import.meta.url));

// GitHub Pages serves the site under /<repo>/ ; Vercel serves it at the root.
// The Pages workflow sets NEXT_PUBLIC_BASE_PATH, local dev and Vercel leave it empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  // A lockfile exists in a parent folder on this machine; pin the workspace root here.
  turbopack: { root },
};

export default nextConfig;
