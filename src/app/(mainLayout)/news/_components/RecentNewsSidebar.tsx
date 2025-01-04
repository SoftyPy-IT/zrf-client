import React from "react";
import { useLanguage } from "@/provider/LanguageProvider";
import { useWhatwedoData } from "@/hooks/useWhatwedoData";

import { useActivityData } from "@/hooks/useActivityData";
import RecentNewsPost from "./RecentNewsPost";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});

const RecentNewsSidebar = () => {
  const { language } = useLanguage();
  const { activityData, error, loading } = useActivityData();
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h2 className="text-center">Oops! Something Went Wrong!</h2>;
  }
  return (
    <>
      <RecentNewsPost activityData={activityData} language={language} />
    </>
  );
};

export default RecentNewsSidebar;
