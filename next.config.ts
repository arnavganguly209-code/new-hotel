import type { NextConfig } from "next";
import path from "path";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  basePath: basePath || undefined,
};

export default nextConfig;
