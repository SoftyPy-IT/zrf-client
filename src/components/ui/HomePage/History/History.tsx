'use client'
import React from "react";
import HistoryFetchData from "./HistoryFetchData";
import { useAboutData } from "@/hooks/useAboutData";
import { useLanguage } from "@/provider/LanguageProvider";
const History = () => {
  const { aboutData } = useAboutData()
  const { language } = useLanguage()


  return (
    <>
      <HistoryFetchData language={language} aboutData={aboutData} />
    </>
  );

};

export default History;
