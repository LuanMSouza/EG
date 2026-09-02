import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.gestao.egpersonalizados.com.br',
      },
    ],
  },
};

export default nextConfig;
