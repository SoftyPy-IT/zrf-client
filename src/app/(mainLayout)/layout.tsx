

import CursorCustomize from "@/components/CursorCustomize/CursorCustomize";
import Footer from "@/components/share/Footer/Footer";
import Header from "@/components/share/Header/Header";
import Scroll from "@/components/share/Scroll/Scroll";
import LandingPageProvider from "@/lib/Theme/LandingPageProvider";
import { LanguageProvider } from "@/provider/LanguageProvider";
import React, { ReactNode, Suspense, useEffect } from "react";

const Layout = ({ children }: { children: ReactNode }) => {

  return (
    <LanguageProvider>
      <LandingPageProvider>
        <Suspense fallback={<div>Loading...</div>}>
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
