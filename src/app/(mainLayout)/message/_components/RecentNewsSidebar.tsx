import React, { useEffect, useState } from "react";
import { useLanguage } from "@/provider/LanguageProvider";
import { useActivityData } from "@/hooks/useActivityData";
import RecentNewsPost from "./RecentNewsPost";
import dynamic from "next/dynamic";
import axios from "axios";
import { TActivity } from "@/types/type";
 

const RecentNewsSidebar = () => {
  const { language } = useLanguage();
  const [newsData, setNewsData] = useState<TActivity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const category = `Message`;
  // console.log(category)

  useEffect(() => {
    const fetchCovidData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/activity?category=${category}`
        );
        setNewsData(res.data?.data?.activities || []);
      } catch (err) {
        setError("Failed to load news data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCovidData();
  }, [category]);

   

  if (error) {
    return <h2>Oops! data not found.</h2>
  }
  return (
    <>
      <RecentNewsPost newsData={newsData} language={language} />
    </>
  );
};

export default RecentNewsSidebar;
