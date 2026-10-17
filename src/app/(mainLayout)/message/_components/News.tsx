"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useLanguage } from "@/provider/LanguageProvider";
import { TActivity } from "@/types/type";
import NewsData from "./NewsData";

/**
 * Data layer for the messages index.
 *
 * Fetches the public activity feed for the message category and hands it to
 * `NewsData`, which owns the layout and empty state. A failed request falls
 * back to the calm empty state rather than an error screen.
 */
const News = () => {
  const { language } = useLanguage();
  const [newsData, setNewsData] = useState<TActivity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const category = `Message`;

  useEffect(() => {
    const fetchMessageData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/activity?category=${category}`,
        );
        setNewsData(res.data?.data?.activities || []);
      } catch (err) {
        console.error("Error fetching messages:", err);
        setError("Failed to load messages. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessageData();
  }, [category]);

  return (
    <NewsData
      newsData={error ? [] : newsData}
      language={language}
      loading={isLoading}
    />
  );
};

export default News;
