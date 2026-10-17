"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import { useLanguage } from "@/provider/LanguageProvider";
import { whatwedoFields } from "@/fields";
import { TWhatWeDo } from "@/types/type";
import HealthServices from "./HealthServices";

const HealthServiceHome = () => {
  const { language } = useLanguage();
  const [healthServicesData, setHealthServicesData] = useState<TWhatWeDo[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const category = `Health Services`;

  useEffect(() => {
    const fetchHealthServicesData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?category=${category}&fields=${whatwedoFields}`,
        );
        setHealthServicesData(res.data?.data?.whatwedoes || []);
      } catch (err) {
        console.error("Error fetching health services data:", err);
        setError("Failed to load health services data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHealthServicesData();
  }, [category]);

  if (error) return null;

  const isBn = language === "BNG";

  return (
    <>
      <CommonBanner
        title={isBn ? "স্বাস্থ্য সেবা কার্যক্রম" : "Health Services Programmes"}
        subtitle={
          isBn
            ? "অসহায় ও অবহেলিত জনগোষ্ঠীর জন্য বিনামূল্যে চিকিৎসা ক্যাম্প, চিকিৎসা সহায়তা ও স্বাস্থ্য সচেতনতা কার্যক্রম।"
            : "Free medical camps, treatment support and health awareness programmes for underserved communities across Bangladesh."
        }
      />
      <HealthServices
        healthServicesData={healthServicesData}
        language={language}
        loading={isLoading}
      />
    </>
  );
};

export default HealthServiceHome;
