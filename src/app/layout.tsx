import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Toaster } from 'sonner';
import { Noto_Sans_Bengali } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Ziaur Rahman Foundation",
  description: "Empowering communities through social services and non-profit initiatives.",
};

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Empowering communities through social services and non-profit initiatives." />
        <meta name="keywords" content="ziaurrahman foundation, non-profit, charity, social services" />
        <meta name="author" content="Ziaur Rahman Foundation" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Ziaur Rahman Foundation" />
        <meta property="og:description" content="Empowering communities through social services and non-profit initiatives." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://www.ziaurrahmanfoundation.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ziaur Rahman Foundation" />
        <meta name="twitter:description" content="Empowering communities through social services and non-profit initiatives." />
        <meta name="twitter:image" content="/twitter-image.png" />
        <link rel="icon" href="/public/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/public/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://www.ziaurrahmanfoundation.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ziaur Rahman Foundation",
              url: "https://www.ziaurrahmanfoundation.com",
              logo: "https://www.ziaurrahmanfoundation.com/logo.png",
              description: "Empowering communities through social services and non-profit initiatives.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "House#4, Road#7, Niketon Gate #2, ",
                addressLocality: "Gulshan-1",
                addressRegion: "Dhaka",
                postalCode: "1212",
                addressCountry: "Bangladesh",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "01819213236",
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </head>
      <Providers>
        <body className={`${inter.className} ${notoSansBengali.className}`}>
          <Toaster position="bottom-right" richColors />
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </body>
      </Providers>
    </html>
  );
}
