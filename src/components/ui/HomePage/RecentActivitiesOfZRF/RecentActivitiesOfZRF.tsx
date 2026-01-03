import { useLanguage } from "@/provider/LanguageProvider";
import RecentActivity from "./RecentActivity";
import React from "react";
import dynamic from "next/dynamic";
import { useActivityData } from "@/hooks/useActivityData";
 


const RecentActivitiesOfZRF = () => {
  const { language } = useLanguage();
  const { activityData, loading, error } = useActivityData()
   
  if (error) {
    return <p>Oops data not found!</p>
  }


  return (
    <>
      <RecentActivity language={language} activityData={activityData} />
    </>
  );
};

export default RecentActivitiesOfZRF;
