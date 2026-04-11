"use client";
import { useLanguage } from "@/provider/LanguageProvider";
import React, { useEffect, useState } from "react";
import AboutTopSectionData from "./AboutTopSectionData";
import dynamic from "next/dynamic";
import { TAbout } from "@/types/type";
import axios from "axios";
 

const AboutTopSection = () => {
  const { language } = useLanguage();
  const [aboutData, setAboutData] = useState<TAbout[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const categories = `About, Mission, Vision, Slogan`;

  useEffect(() => {
    const fetchCovidData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/about?category=${categories}`
        );
        setAboutData(res.data?.data?.abouts || []);
      } catch (err) {
        console.error("Error fetching climate change data:", err);
        setError("Failed to load climate change data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCovidData();
  }, [categories]);

   

  if (error) {
    return <h2>Oops! data not found.</h2>
  }

  return (
    <>
      <AboutTopSectionData language={language} aboutData={aboutData} />
    </>
  );
};


export default AboutTopSection;
