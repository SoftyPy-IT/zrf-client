import { useLanguage } from "@/provider/LanguageProvider";

import React from "react";
import { TActivity, TProject } from "@/types/type";
import RecentPostFetchData from "./RecentPostFetchData";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});

const RecentProjectPost = () => {
  const [projectData, setProjectData] = React.useState<TProject[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const { language } = useLanguage();

  React.useEffect(() => {
    const fetchPrisonData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/project?limit=1000`,
          {
            cache: "no-store",
          },
        );
        const data = await response.json();
        setProjectData(data.data?.projects || []);
      } catch (err) {
        setError("Failed to fetch project data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrisonData();
  }, []);

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
