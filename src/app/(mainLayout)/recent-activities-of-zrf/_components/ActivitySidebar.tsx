"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import PageBody from "@/components/share/PageBody";
import { useLanguage } from "@/provider/LanguageProvider";
import { whatwedoFields } from "@/fields";
import { TActivity } from "@/types/type";
import RecentActivityPost from "./RecentActivityPost";

/** Category and query params are unchanged from the previous implementation. */
const CATEGORY = "Activity";

/**
 * Fetches the activity list for the "more reports" band on a single activity
 * page and renders it as the shared grid.
 */
const ActivitySidebar = () => {
  const { language } = useLanguage();
  const [activityData, setActivityData] = useState<TActivity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchActivityData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/activity?category=${CATEGORY}&fields=${whatwedoFields}`,
        );
        setActivityData(res.data?.data?.activities || []);
      } catch (err) {
        setError("Failed to load activity data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchActivityData();
  }, []);

  if (error) return null;

  return (
    <PageBody tone="slate">
      <RecentActivityPost
        activityData={activityData}
        language={language}
        loading={isLoading}
      />
    </PageBody>
  );
};

export default ActivitySidebar;
