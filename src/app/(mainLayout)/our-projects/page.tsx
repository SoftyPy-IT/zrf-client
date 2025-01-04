"use client";
import React from "react";
import ProjectData from "./_components/ProjectData";
import { useLanguage } from "@/provider/LanguageProvider";
import { useProjectdata } from "@/hooks/useProjectdata";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});

const Project = () => {
  const { language } = useLanguage();
  const { projectData, loading } = useProjectdata();
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <ProjectData projectData={projectData} language={language} />
    </div>
  );
};

export default Project;
