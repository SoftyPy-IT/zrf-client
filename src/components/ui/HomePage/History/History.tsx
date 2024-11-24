'use client'
import React from "react";
import HistoryFetchData from "./HistoryFetchData";
import { useAboutData } from "@/hooks/useAboutData";
import { useLanguage } from "@/provider/LanguageProvider";
import Loader from "@/components/Loading/Loading";
const History = () => {
  const { aboutData , loading, error} = useAboutData()
  const { language } = useLanguage()
  if (loading) {
    return <Loader/>
  }
  if (error) {
    return <h2 className='text-center'>Oops!  Something Went Wrong!</h2>
  }

  return (
    <>
      <HistoryFetchData language={language} aboutData={aboutData} />
    </>
  );

};

export default History;
