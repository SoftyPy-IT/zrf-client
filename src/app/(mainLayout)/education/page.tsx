"use client";

import React, { useEffect, useState } from "react";
import Education from "./_components/Education";
import { useLanguage } from "@/provider/LanguageProvider";
import { useWhatwedoData } from "@/hooks/useWhatwedoData";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import dynamic from "next/dynamic";
import { TWhatWeDo } from "@/types/type";
import axios from "axios";
import { whatwedoFields } from "@/fields";
const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});

const EducationPage = () => {
  const { language } = useLanguage();
  const [educationData, setEducationData] = useState<TWhatWeDo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const category = `ZRF Education Programm`;
  useEffect(() => {
    const fetchCovidData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?category=${category}&fields=${whatwedoFields}`
        );
        setEducationData(res.data?.data?.whatwedoes || []);
      } catch (err) {
        console.error("Error fetching education change data:", err);
        setError("Failed to load education change data. Please try again later.");
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

  const title =
    language === "ENG" ? " ZRF Education Programs" : "জেডআরএফ শিক্ষা কার্যক্রম";
  return (
    <div>
      <CommonBanner title={title} />
      <Education educationData={educationData} language={language} />
    </div>
  );
};
export default EducationPage;
