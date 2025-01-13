"use client";

import React from "react";
import { useLanguage } from "@/provider/LanguageProvider";
import ProjectsFetchData from "./ProjectsFetchData";
import { useProjectdata } from "@/hooks/useProjectdata";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});

const OurProjects = () => {
  const { language } = useLanguage();
  const { projectData, loading, error } = useProjectdata();
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h2 className="text-center">Oops! Something Went Wrong!</h2>;
  }

  return (
    <>
      <ProjectsFetchData language={language} projectData={projectData} />
    </>
  );
};
export default OurProjects;
