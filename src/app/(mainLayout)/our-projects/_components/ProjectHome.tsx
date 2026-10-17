"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/provider/LanguageProvider";
import { TProject } from "@/types/type";
import { projectsFields } from "@/fields";
import ProjectData from "./ProjectData";

/**
 * Fetches the project list for the index page and hands it to the presentation
 * component. The endpoint, fields and response shape are unchanged from the
 * previous implementation.
 */
const ProjectHome = () => {
  const { language } = useLanguage();
  const [projectData, setProjectData] = useState<TProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/project?&fields=${projectsFields}`,
          {
            cache: "no-store",
          },
        );
        const data = await response.json();
        setProjectData(data.data?.projects || []);
      } catch (err) {
        setError("Failed to fetch project data!");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, []);

  if (error) return null;

  return (
    <ProjectData
      projectData={projectData}
      language={language}
      loading={loading}
    />
  );
};

export default ProjectHome;
