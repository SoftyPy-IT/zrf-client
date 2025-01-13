import { useLanguage } from "@/provider/LanguageProvider";
import React from "react";
import RecentPostFetchData from "./RecentPostFetchData";
import dynamic from "next/dynamic";
import { useProjectdata } from "@/hooks/useProjectdata";
const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});

const RecentProjectPost = () => {
  const { language } = useLanguage();
  const { projectData, loading, error } = useProjectdata()

  if (loading) {
    return <Loader />;
  }


  return (
    <>
      <RecentPostFetchData language={language} projectData={projectData} />
    </>
  );
};

export default RecentProjectPost;
