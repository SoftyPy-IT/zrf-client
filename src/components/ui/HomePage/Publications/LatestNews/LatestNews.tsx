import { useLanguage } from "@/provider/LanguageProvider";

import React from "react";
import { TActivity } from "@/types/type";
import LatestNewsFetchData from "./LatestNewsFetchData";
import "./LatestNews.css";
import dynamic from "next/dynamic";
import { useActivityData } from "@/hooks/useActivityData";
const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});

const Programm = () => {

  const { activityData, loading, error } = useActivityData()
  const { language } = useLanguage();
  const newsFilterData = activityData.filter((news) => news.category === 'News')
  const sortedNewsData = newsFilterData?.sort((a: TActivity, b: TActivity) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h2 className="text-center">Oops! Something Went Wrong!</h2>;
  }


  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h2 className="text-center">Oops! Something Went Wrong!</h2>;
  }
  return (
    <>
      <LatestNewsFetchData language={language} newsData={sortedNewsData} />
    </>
  );
};

export default Programm;
