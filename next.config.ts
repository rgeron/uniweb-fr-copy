import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sdk.hellouniweb.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
