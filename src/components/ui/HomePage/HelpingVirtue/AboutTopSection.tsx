'use client'
import { useLanguage } from "@/provider/LanguageProvider";
import React from "react";
import AboutTopSectionData from "./AboutTopSectionData";
import { useAboutData } from "@/hooks/useAboutData";
const AboutTopSection = () => {
  const { aboutData } = useAboutData()
  const { language } = useLanguage()


  return (
    <>
      <AboutTopSectionData language={language} aboutData={aboutData} />
    </>
  );

};

export default AboutTopSection;
