/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Configuration des images
  images: {
    domains: ["195.35.48.112", "genieisol.195.35.48.112.nip.io"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: "/erp/:path*",
        destination: "http://genieisol-france.fr/login.php",
        permanent: true,
      },
    ];
  },
  // Configuration des headers de sécurité
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
