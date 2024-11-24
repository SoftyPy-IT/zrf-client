'use client'
import { useLanguage } from "@/provider/LanguageProvider";
import React from "react";
import AboutTopSectionData from "./AboutTopSectionData";
import { useAboutData } from "@/hooks/useAboutData";
import Loader from "@/components/Loading/Loading";
const AboutTopSection = () => {
  const { aboutData, loading, error } = useAboutData()
  const { language } = useLanguage()

  if (loading) {
    return <Loader />
  }
  if (error) {
    return <h2 className='text-center'>Oops!  Something Went Wrong!</h2>
  }
  return (
    <>
      <AboutTopSectionData language={language} aboutData={aboutData} />
    </>
  );

};

export default AboutTopSection;
