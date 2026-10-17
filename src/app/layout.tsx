import "./globals.css";
import Providers from "@/lib/Providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Toaster } from "sonner";
import { fontVariables } from "@/lib/fonts";
import { getPublicSiteUrl } from "@/config/env";
import WelcomePopup from "@/components/WelcomePopup";

export const metadata = {
  /* Resolves every relative canonical / OG image against the deployed origin. */
  metadataBase: new URL(getPublicSiteUrl()),
  /* Pages set their own full titles, so no template is applied here. */
  title: "Ziaur Rahman Foundation",
  description:
    "Ziaur Rahman Foundation is a humanitarian and welfare organisation working in education, health services and community empowerment across Bangladesh.",
  keywords:
    "Ziaur Rahman Foundation, ZRF, non-profit organisation, community service, charity, education, health programmes",
  authors: [{ name: "Ziaur Rahman Foundation" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Ziaur Rahman Foundation",
    description:
      "Empowering communities across Bangladesh through education, health services and humanitarian initiatives.",
    images: ["/logo.png"],
    url: "/",
    siteName: "Ziaur Rahman Foundation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziaur Rahman Foundation",
    description:
      "Empowering communities across Bangladesh through education, health services and humanitarian initiatives.",
    images: ["/logo.png"],
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
