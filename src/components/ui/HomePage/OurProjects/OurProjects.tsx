
'use client'

import React from "react";

import { TProject } from "@/types/type";
import { useLanguage } from "@/provider/LanguageProvider";
import ProjectsFetchData from "./ProjectsFetchData";


const OurProjects = () => {
  const [projectData, stProjectData] = React.useState<TProject[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const { language } = useLanguage()
  React.useEffect(() => {
    const fetchPrisonData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/project?limit=1000`, {
          cache: 'no-store'
        });
        const data = await response.json();
        stProjectData(data.data?.projects || []);

      } catch (err) {
        setError('Failed to fetch project data.');
      } finally {
        setLoading(false);
      }
    };

    fetchPrisonData();
  }, []);

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
