"use client";

import React from "react";
import { useLanguage } from "@/provider/LanguageProvider";
import ProjectsFetchData from "./ProjectsFetchData";
import { useProjectdata } from "@/hooks/useProjectdata";
 

const OurProjects = () => {
  const { language } = useLanguage();
  const { projectData, loading, error } = useProjectdata();

  // A failed feed should leave the page intact rather than print a raw error
  // string in the middle of the editorial layout.
  if (error) return null;

  return (
    <>
      <ProjectsFetchData
        language={language}
        projectData={projectData}
        loading={loading}
      />
    </>
  );
};
export default OurProjects;
