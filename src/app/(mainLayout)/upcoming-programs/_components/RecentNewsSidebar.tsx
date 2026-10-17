"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useLanguage } from "@/provider/LanguageProvider";
import { TActivity } from "@/types/type";
import RecentNewsPost from "./RecentNewsPost";

/**
 * Fetches the sidebar feed for the single-programme view and renders the
 * text-first "recent posts" panel. A failed request renders nothing rather
 * than an error message — the panel is supplementary to the article.
 */
const RecentNewsSidebar = () => {
  const { language } = useLanguage();
  const [newsData, setNewsData] = useState<TActivity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const category = `Upcoming Programs`;

  useEffect(() => {
    const fetchSidebarData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/activity?category=${category}`,
        );
        setNewsData(res.data?.data?.activities || []);
      } catch (err) {
        console.error("Error fetching recent programmes:", err);
        setError("Failed to load recent programmes.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSidebarData();
  }, [category]);

  if (error && !isLoading) return null;

  return (
    <RecentNewsPost
      newsData={newsData}
      language={language}
      loading={isLoading}
    />
  );
};

export default RecentNewsSidebar;
