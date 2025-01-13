"use client";

import React, { useEffect, useState } from "react";
import CommitteeFetchData from "./_components/CommitteeFetchData";
import { useLanguage } from "@/provider/LanguageProvider";
import dynamic from "next/dynamic";
import { TCommitte } from "@/types/type";
import axios from "axios";
const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});

const Committee = () => {
  const { language } = useLanguage();
  const [committeeData, setCommitteeData] = useState<TCommitte[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const category = `Committee, Advisory Council`;

  useEffect(() => {
    const fetchCovidData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/committee?category=${category}`
        );
        setCommitteeData(res.data?.data?.committees || []);
      } catch (err) {
        console.error("Error fetching committee data:", err);
        setError("Failed to load committee data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCovidData();
  }, [category]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h2>Oops! data not found.</h2>
  }

  return (
    <>
      <CommitteeFetchData language={language} committeeData={committeeData} />
    </>
  );
};


export default Committee;
