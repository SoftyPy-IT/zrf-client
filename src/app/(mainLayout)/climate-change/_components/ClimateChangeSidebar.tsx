"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLanguage } from "@/provider/LanguageProvider";
import { whatwedoFields } from "@/fields";
import { TWhatWeDo } from "@/types/type";
import ClimateChangeRecentPost from "./ClimateChangeRecentPost";

const ClimateChangeSidebar = () => {
  const { language } = useLanguage();
  const [climateChangeData, setClimateChangeData] = useState<TWhatWeDo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const category = `Climate Change`;

  useEffect(() => {
    const fetchClimateChangeData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?category=${category}&fields=${whatwedoFields}`,
        );
        setClimateChangeData(res.data?.data?.whatwedoes || []);
      } catch (err) {
        console.error("Error fetching climate change data:", err);
        setError("Failed to load climate change data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchClimateChangeData();
  }, [category]);

  if (error) return null;

  return (
    <ClimateChangeRecentPost
      climateChangeData={climateChangeData}
      language={language}
      loading={isLoading}
    />
  );
};

export default ClimateChangeSidebar;
