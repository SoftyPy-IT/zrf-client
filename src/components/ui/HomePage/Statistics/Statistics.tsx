"use client";
import React from "react";
import { useLanguage } from "@/provider/LanguageProvider";
import { useOverviewCountData } from "@/hooks/useOverviewCountData";
import FetchStatisticData from "./FetchStatisticData";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});

const Statistics = () => {
  const { overviewData, loading, error } = useOverviewCountData();
  const { language } = useLanguage();
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h2 className="text-center">Oops! Something Went Wrong!</h2>;
  }
  return (
    <>
      <FetchStatisticData language={language} overviewData={overviewData} />
    </>
  );
};

export default Statistics;
