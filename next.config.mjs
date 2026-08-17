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
    // Rewrites barrel imports so NFT does not pull all of @mui/icons-material (130MB).
    optimizePackageImports: [
      "@mui/material",
      "@mui/icons-material",
      "lucide-react",
    ],
    // Amplify Compute counts traced node_modules toward a 220MB cap.
    outputFileTracingExcludes: {
      "*": [
        "node_modules/@swc/core-linux-x64-gnu/**/*",
        "node_modules/@swc/core-linux-x64-musl/**/*",
        "node_modules/@esbuild/**/*",
        "node_modules/webpack/**/*",
        "node_modules/terser/**/*",
        "node_modules/typescript/**/*",
        "node_modules/eslint/**/*",
        "node_modules/pdfjs-dist/legacy/**/*",
        "node_modules/pdfjs-dist/types/**/*",
      ],
    },
  },
};

export default nextConfig;
