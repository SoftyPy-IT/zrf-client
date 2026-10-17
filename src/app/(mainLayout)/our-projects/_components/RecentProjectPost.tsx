"use client";

import React, { useEffect, useState } from "react";
import PageBody from "@/components/share/PageBody";
import { useLanguage } from "@/provider/LanguageProvider";
import { projectsFields } from "@/fields";
import { TProject } from "@/types/type";
import RecentPostFetchData from "./RecentPostFetchData";

/**
 * Fetches the project list for the "recent projects" band on a single project
 * page. Endpoint, fields and response shape are unchanged from the previous
 * sidebar implementation.
 */
const RecentProjectPost = () => {
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
    <PageBody tone="slate">
      <RecentPostFetchData
        language={language}
        projectData={projectData}
        loading={loading}
      />
    </PageBody>
  );
};

export default RecentProjectPost;
