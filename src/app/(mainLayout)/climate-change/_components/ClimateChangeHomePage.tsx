"use client";
import React, { useEffect, useState } from "react";
import { useLanguage } from "@/provider/LanguageProvider";

import dynamic from "next/dynamic";
import { whatwedoFields } from "@/fields";
import axios from "axios";
import ClimateChange from "./ClimateChange";

const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});

const ClimateChangeHomePage = () => {
  const { language } = useLanguage();
  const [climateChangeData, setClimateChange] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const category = `Climate Change`;

  useEffect(() => {
    const fetchCovidData = async () => {
      setIsLoading(true);
      setError(null); 
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?category=${category}&fields=${whatwedoFields}`
        );
        setClimateChange(res.data?.data?.whatwedoes || []);
      } catch (err) {
        console.error("Error fetching climate change data:", err);
        setError("Failed to load climate change data. Please try again later.");
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
    <div>
      <ClimateChange climateChangeData={climateChangeData} language={language} />
    </div>
  );
};

export default ClimateChangeHomePage;
