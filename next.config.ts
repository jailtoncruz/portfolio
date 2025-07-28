import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://github.com/**"),
      new URL("https://app.kotoba-ai.org/**"),
    ],
  },
};

export default nextConfig;
