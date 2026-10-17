import { useLanguage } from "@/provider/LanguageProvider";
import RecentActivity from "./RecentActivity";
import React from "react";
import { useActivityData } from "@/hooks/useActivityData";

const RecentActivitiesOfZRF = () => {
  const { language } = useLanguage();
  const { activityData, loading, error } = useActivityData();

  if (error) return null;

  return (
    <>
      <RecentActivity
        language={language}
        activityData={activityData}
        loading={loading}
      />
    </>
  );
};

export default RecentActivitiesOfZRF;
