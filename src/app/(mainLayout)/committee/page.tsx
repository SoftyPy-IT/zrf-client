"use client";

import React, { useEffect, useState } from "react";
import CommitteeFetchData from "./_components/CommitteeFetchData";
import { useLanguage } from "@/provider/LanguageProvider";
import { TCommitte } from "@/types/type";
import axios from "axios";

const Committee = () => {
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
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/committee?limit=1000`
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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <h2 className="text-xl text-red-500 font-semibold">{error}</h2>
      </div>
    );
  }

  return (
    <>
      <CommitteeFetchData language={language} committeeData={committeeData} />
    </>
  );
};

export default Committee;
