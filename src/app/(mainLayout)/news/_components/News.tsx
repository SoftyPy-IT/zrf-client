"use client";
import React from "react";
import { useLanguage } from "@/provider/LanguageProvider";
import { useActivityData } from "@/hooks/useActivityData";
import NewsData from "./NewsData";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});

const News = () => {
  const { language } = useLanguage();
  const { activityData, loading, error } = useActivityData();
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h2 className="text-center">Oops! Something Went Wrong!</h2>;
  }
  return (
    <div>
      <NewsData activityData={activityData} language={language} />
    </div>
  );
};

export default News;
