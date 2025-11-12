import { useLanguage } from "@/provider/LanguageProvider";
import React, { useState } from "react";
import { TActivity } from "@/types/type";
import LatestNewsFetchData from "./LatestNewsFetchData";
import dynamic from "next/dynamic";
import { useActivityData } from "@/hooks/useActivityData";

const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});

const Programm = () => {
  const { activityData, loading, error } = useActivityData();
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("Upcoming Programs");

  const filteredData = activityData
    ?.filter(
      (news) =>
        news.category?.trim().toLowerCase() ===
        activeCategory.trim().toLowerCase()
    )
    ?.sort((a: TActivity, b: TActivity) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  if (loading) return <Loader />;
  if (error) return <h2 className="text-center">Oops! Something Went Wrong!</h2>;

  return (
    <>
   
      {/* Pass Filtered Data */}
      <LatestNewsFetchData
        language={language}
        newsData={activityData}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

    </>
  );
};

export default Programm;
