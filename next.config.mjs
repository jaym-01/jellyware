/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [`./src/styles`],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "supabase.com",
      },
      {
        protocol: "https",
        hostname: "assets.vercel.com",
      },
    ],
  },
};

export default nextConfig;
