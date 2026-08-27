"use client";
import React, { useEffect, useState } from "react";
import { useLanguage } from "@/provider/LanguageProvider";
import NewsData from "./NewsData";
import { TActivity } from "@/types/type";
import axios from "axios";

const News = () => {
  const { language } = useLanguage();
  const [newsData, setNewsData] = useState<TActivity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const category = `Upcoming Programs,upcoming programs,Upcoming Program,upcoming program,Program,Event,Events`;

  useEffect(() => {
    const fetchUpcomingPrograms = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/activity?category=${category}&limit=1000`
        );
        setNewsData(res.data?.data?.activities || []);
      } catch (err) {
        console.error("Error fetching upcoming programs:", err);
        setError("Failed to load upcoming programs data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUpcomingPrograms();
  }, [category]);

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
    <div>
      <NewsData newsData={newsData} language={language} />
    </div>
  );
};

export default News;
