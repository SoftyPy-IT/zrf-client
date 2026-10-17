"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLanguage } from "@/provider/LanguageProvider";
import { whatwedoFields } from "@/fields";
import { TWhatWeDo } from "@/types/type";
import HealthServiceRecentpost from "./HealthServiceRecentpost";

const HealthServiceSidebar = () => {
  const { language } = useLanguage();
  const [healthServicesData, setHealthServicesData] = useState<TWhatWeDo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const category = `Health Services`;

  useEffect(() => {
    const fetchHealthServicesData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?category=${category}&fields=${whatwedoFields}`,
        );
        setHealthServicesData(res.data?.data?.whatwedoes || []);
      } catch (err) {
        console.error("Error fetching health services data:", err);
        setError("Failed to load health services data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHealthServicesData();
  }, [category]);

  if (error) return null;

  return (
    <HealthServiceRecentpost
      healthServicesData={healthServicesData}
      language={language}
      loading={isLoading}
    />
  );
};

export default HealthServiceSidebar;
