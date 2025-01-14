"use client";
import React, { useEffect, useState } from "react";
import ProjectData from "./_components/ProjectData";
import { useLanguage } from "@/provider/LanguageProvider";
import dynamic from "next/dynamic";
import { TProject } from "@/types/type";
import { projectsFields } from "@/fields";
const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});

const Project = () => {
  const { language } = useLanguage()
  const [projectData, setProjectData] = useState<TProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchWhatwedoData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/project?&fields=${projectsFields}`, {
          cache: "no-store",
        });
        const data = await response.json();
        setProjectData(data.data?.projects || []);
      } catch (err) {
        setError("Failed to fetch project data!");
      } finally {
        setLoading(false);
      }
    };

    fetchWhatwedoData();
  }, []);

  if (loading) {
    return <Loader />
  }
  if (error) {
    return <p>Oops covid data not found!</p>
  }
  return (
    <div>
      <ProjectData projectData={projectData} language={language} />
    </div>
  );
};

export default Project;
