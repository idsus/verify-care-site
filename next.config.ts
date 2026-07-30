import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  // Static export: `next build` emits a plain-HTML `out/` folder that works on
  // any static host (GitHub Pages, cPanel, S3...). Image optimization needs a
  // Node server, so serve the files as-is.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
