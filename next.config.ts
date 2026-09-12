import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "estelledeclercq.fr" }],
        destination: "https://www.estelledeclercq.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
