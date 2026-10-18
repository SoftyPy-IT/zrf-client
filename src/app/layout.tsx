import "./globals.css";
import Providers from "@/lib/Providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Toaster } from "sonner";
import { fontVariables } from "@/lib/fonts";
import { getPublicSiteUrl } from "@/config/env";
import WelcomePopup from "@/components/WelcomePopup";

import type { Metadata } from "next";

export const metadata: Metadata = {
  /* Resolves every relative canonical / OG image against the deployed origin. */
  metadataBase: new URL(getPublicSiteUrl()),
  title: "Ziaur Rahman Foundation | Dedicated to Nation Building",
  description:
    "Official website of Ziaur Rahman Foundation (ZRF). Established in memory of Shaheed President Ziaur Rahman, dedicated to health services, education, poverty alleviation, and community empowerment across Bangladesh.",
  keywords: [
    "Ziaur Rahman Foundation",
    "ZRF",
    "জিয়াউর রহমান ফাউন্ডেশন",
    "Shaheed President Ziaur Rahman",
    "humanitarian organisation Bangladesh",
    "community welfare Bangladesh",
    "charity Bangladesh",
    "free healthcare Bangladesh",
    "scholarships Bangladesh",
    "disaster relief Bangladesh",
  ],
  authors: [{ name: "Ziaur Rahman Foundation", url: getPublicSiteUrl() }],
  creator: "Ziaur Rahman Foundation",
  publisher: "Ziaur Rahman Foundation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ziaur Rahman Foundation | Dedicated to Nation Building",
    description:
      "Empowering communities across Bangladesh through education, health services, and humanitarian initiatives.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ziaur Rahman Foundation — Dedicated to Nation Building",
        type: "image/png",
      },
    ],
    url: "/",
    siteName: "Ziaur Rahman Foundation",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziaur Rahman Foundation | Dedicated to Nation Building",
    description:
      "Empowering communities across Bangladesh through education, health services, and humanitarian initiatives.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

/**
 * Applies the persisted language preference before first paint so Bangla copy is
 * never briefly rendered in Inter (and vice-versa). Must stay inline and blocking.
 */
const languageBootstrap = `(function(){try{var l=localStorage.getItem("language");if(l==="BNG"){document.documentElement.lang="bn";document.documentElement.classList.add("lang-bn");}}catch(e){}})();`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Ziaur Rahman Foundation",
  alternateName: ["ZRF", "জিয়াউর রহমান ফাউন্ডেশন"],
  url: getPublicSiteUrl(),
  logo: `${getPublicSiteUrl()}/logo.png`,
  image: `${getPublicSiteUrl()}/og-image.png`,
  description:
    "Ziaur Rahman Foundation is a humanitarian and welfare organisation working in education, health services, poverty alleviation, and community empowerment across Bangladesh.",
  foundingDate: "1999",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  sameAs: [
    "https://www.facebook.com/ziaurrahmanfoundation",
    "https://www.youtube.com/@ziaurrahmanfoundation",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={fontVariables}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{ __html: languageBootstrap }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>

      <body>
        <Providers>
          <AppRouterCacheProvider>
            <Toaster position="bottom-right" richColors />
            {children}
            <WelcomePopup />
          </AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
}
