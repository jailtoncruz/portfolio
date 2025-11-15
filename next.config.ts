import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://github.com/**"),
      new URL("https://app.kotoba-ai.org/**"),
    ],
  },
};

export default nextConfig;
