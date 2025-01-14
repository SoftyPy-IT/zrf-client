"use client";
import React, { useEffect, useState } from "react";
import { useLanguage } from "@/provider/LanguageProvider";
import { useWhatwedoData } from "@/hooks/useWhatwedoData";
import dynamic from "next/dynamic";
import axios from "axios";
import { whatwedoFields } from "@/fields";
import { TWhatWeDo } from "@/types/type";
import HealthServices from "./HealthServices";
const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});

const HealthServiceHome = () => {
  const { language } = useLanguage();
  const [healthServicesData, setHealthServicesData] = useState<TWhatWeDo[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const category = `Health Services`;

  useEffect(() => {
    const fetchCovidData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?category=${category}&fields=${whatwedoFields}`
        );
        setHealthServicesData(res.data?.data?.whatwedoes || []);
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
      <HealthServices healthServicesData={healthServicesData} language={language} />
    </div>
  );
};

export default HealthServiceHome;
