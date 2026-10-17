import Footer from "@/components/share/Footer/Footer";
import Header from "@/components/share/Header/Header";
import { LanguageProvider } from "@/provider/LanguageProvider";
import { ReactNode, Suspense } from "react";
import dynamic from "next/dynamic";
import LandingPageProvider from "@/lib/Theme/LandingPageProvider";

/**
 * Client-only affordance. It adds no content, so keeping it out of the server
 * bundle is purely a win.
 */
const Scroll = dynamic(() => import("@/components/share/Scroll/Scroll"), {
  ssr: false,
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <LanguageProvider>
      <LandingPageProvider>
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
          <Header />
          <main id="main-content">{children}</main>
          <Scroll />
          <Footer />
        </Suspense>
      </LandingPageProvider>
    </LanguageProvider>
  );
};

export default Layout;
