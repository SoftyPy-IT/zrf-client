"use client";

import React, { useEffect, useState } from "react";
import CommitteeFetchData from "./CommitteeFetchData";
import { useLanguage } from "@/provider/LanguageProvider";
import { TCommitte } from "@/types/type";
import axios from "axios";

export default function CommitteeClient() {
  const { language } = useLanguage();
  const [committeeData, setCommitteeData] = useState<TCommitte[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCommitteeData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/committee?limit=1000`,
        );
        setCommitteeData(res.data?.data?.committees || []);
      } catch (err) {
        console.error("Error fetching committee data:", err);
        setError("Failed to load committee data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCommitteeData();
  }, []);

  if (error) return null;

  return (
    <CommitteeFetchData
      language={language}
      committeeData={committeeData}
      loading={isLoading}
    />
  );
}
