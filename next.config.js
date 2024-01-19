/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gevhgupbxtboigkclsuh.supabase.co",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/novels",
        destination: "/",
        permanent: true,
      },
      {
        source: "/genre",
        destination: "/search",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
