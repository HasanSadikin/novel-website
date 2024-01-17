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
};

module.exports = nextConfig;
