import Footer from "@/components/share/Footer/Footer";
import Header from "@/components/share/Header/Header";
import Scroll from "@/components/share/Scroll/Scroll";
import LandingPageProvider from "@/lib/Theme/LandingPageProvider";
import React, { ReactNode, Suspense } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <LandingPageProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        {children}
        <Scroll />
        <Footer />
      </Suspense>
    </LandingPageProvider>
  );
};

export default layout;
