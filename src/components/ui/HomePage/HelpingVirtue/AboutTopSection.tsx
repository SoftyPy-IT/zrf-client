"use client";

import { useLanguage } from "@/provider/LanguageProvider";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AboutTopSectionData from "./AboutTopSectionData";
import { TAbout } from "@/types/type";

/**
 * Data layer for the top of the About page.
 *
 * Same endpoint and category list as before (`About, Mission, Vision, Slogan`);
 * the presentation component owns the two-column story, the pillar grid and the
 * loading placeholders.
 */
const AboutTopSection = () => {
  const { language } = useLanguage();
  const [aboutData, setAboutData] = useState<TAbout[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const categories = `About, Mission, Vision, Slogan`;

  useEffect(() => {
    const fetchAboutData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/about?category=${categories}`,
        );
        setAboutData(res.data?.data?.abouts || []);
      } catch (err) {
        console.error("Error fetching about data:", err);
        setError("Failed to load about data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAboutData();
  }, [categories]);

  if (error) return null;

  return (
    <AboutTopSectionData
      language={language}
      aboutData={aboutData}
      loading={isLoading}
    />
  );
};

export default AboutTopSection;
