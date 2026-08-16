/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Do not set output: "export" — Amplify Hosting Compute (WEB_COMPUTE)
  // needs the .next SSR build, not a static export.
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 7,
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "http", hostname: "res.cloudinary.com" },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
      { protocol: "https", hostname: "api.zrf.info" },
      { protocol: "http", hostname: "api.zrf.info" },
      { protocol: "https", hostname: "**.elb.amazonaws.com" },
      { protocol: "http", hostname: "**.elb.amazonaws.com" },
    ],
  },
  experimental: {
    // Required so Amplify / ALB Host headers are trusted in SSR.
    trustHostHeader: true,
  },
};

export default nextConfig;
