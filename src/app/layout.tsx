import type { Metadata } from "next";
import { Inter, Baloo_Da_2 } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Toaster } from "sonner";
import { Noto_Sans, Noto_Sans_Bengali } from "next/font/google";
// Load Noto Sans for English
const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-noto-sans",
});

// Load Noto Sans Bengali for Bangla
const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-noto-sans-bengali",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${notoSans.variable} ${notoSansBengali.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Empowering communities through social services and non-profit initiatives."
        />
        <meta
          name="keywords"
          content="ziaurrahman foundation, non-profit, charity, social services"
        />
        <meta name="author" content="Ziaur Rahman Foundation" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Ziaur Rahman Foundation" />
        <meta
          property="og:description"
          content="Empowering communities through social services and non-profit initiatives."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta
          property="og:url"
          content="https://www.ziaurrahmanfoundation.com"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ziaur Rahman Foundation" />
        <meta
          name="twitter:description"
          content="Empowering communities through social services and non-profit initiatives."
        />
        <meta name="twitter:image" content="/twitter-image.png" />

        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://www.ziaurrahmanfoundation.com" />
      </head>

      <body>
        <Providers>
          <AppRouterCacheProvider>
            <Toaster position="bottom-right" richColors />
            {children}
          </AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
}
