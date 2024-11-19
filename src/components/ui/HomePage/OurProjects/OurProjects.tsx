
'use client'

import React from "react";

import { TProject } from "@/types/type";
import { useLanguage } from "@/provider/LanguageProvider";
import ProjectsFetchData from "./ProjectsFetchData";
import { useProjectdata } from "@/hooks/useProjectdata";


const OurProjects = () => {
  const { language } = useLanguage()
  const {projectData, loading} = useProjectdata()

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <>
      <ProjectsFetchData language={language} projectData={projectData} />
    </>
  );
  
};

export default OurProjects;

