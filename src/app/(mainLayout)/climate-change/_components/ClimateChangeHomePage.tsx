"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import { useLanguage } from "@/provider/LanguageProvider";
import { whatwedoFields } from "@/fields";
import { TWhatWeDo } from "@/types/type";
import ClimateChange from "./ClimateChange";

const ClimateChangeHomePage = () => {
  const { language } = useLanguage();
  const [climateChangeData, setClimateChangeData] = useState<TWhatWeDo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const category = `Climate Change`;

  useEffect(() => {
    const fetchClimateChangeData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?category=${category}&fields=${whatwedoFields}`,
        );
        setClimateChangeData(res.data?.data?.whatwedoes || []);
      } catch (err) {
        console.error("Error fetching climate change data:", err);
        setError("Failed to load climate change data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchClimateChangeData();
  }, [category]);

  if (error) return null;

  const isBn = language === "BNG";

  return (
    <>
      <CommonBanner
        title={isBn ? "জলবায়ু পরিবর্তন কার্যক্রম" : "Climate Change Programmes"}
        subtitle={
          isBn
            ? "বৃক্ষরোপণ, সচেতনতা ও টেকসই কমিউনিটি উদ্যোগের মাধ্যমে জলবায়ু সহনশীলতা গড়ে তোলা হচ্ছে।"
            : "Building climate resilience through tree plantation, awareness and sustainable community programmes."
        }
      />
      <ClimateChange
        climateChangeData={climateChangeData}
        language={language}
        loading={isLoading}
      />
    </>
  );
};

export default ClimateChangeHomePage;
