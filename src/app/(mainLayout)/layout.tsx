import Footer from "@/components/share/Footer/Footer";
import Header from "@/components/share/Header/Header";
import { LanguageProvider } from "@/provider/LanguageProvider";
import { ReactNode, Suspense } from "react";
import dynamic from "next/dynamic";
import Loader from "../loading";

const CursorCustomize = dynamic(
  () => import("@/components/CursorCustomize/CursorCustomize"),
  { ssr: false },
);

const Scroll = dynamic(() => import("@/components/share/Scroll/Scroll"), {
  ssr: false,
});

const LandingPageProvider = dynamic(
  () => import("@/lib/Theme/LandingPageProvider"),
  { ssr: false },
);

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <LanguageProvider>
      <LandingPageProvider>
        {/* <Suspense fallback={<div><Loader /></div>}> */}
        <Suspense fallback={<div></div>}>
          <Header />
          {children}
          <CursorCustomize />
          <Scroll />
          <Footer />
        </Suspense>
      </LandingPageProvider>
    </LanguageProvider>
  );
};

export default Layout;
