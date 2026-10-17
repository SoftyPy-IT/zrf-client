"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLanguage } from "@/provider/LanguageProvider";
import { whatwedoFields } from "@/fields";
import { TWhatWeDo } from "@/types/type";
import RecentEducation from "./RecentEducation";

const Sidebar = () => {
  const { language } = useLanguage();
  const [educationData, setEducationData] = useState<TWhatWeDo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const category = `ZRF Education Programm`;

  useEffect(() => {
    const fetchEducationData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?category=${category}&fields=${whatwedoFields}`,
        );
        setEducationData(res.data?.data?.whatwedoes || []);
      } catch (err) {
        console.error("Error fetching education data:", err);
        setError("Failed to load education data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchEducationData();
  }, [category]);

  if (error) return null;

  return (
    <RecentEducation
      educationData={educationData}
      language={language}
      loading={isLoading}
    />
  );
};

export default Sidebar;
