"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/provider/LanguageProvider";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import { TWhatWeDo } from "@/types/type";
import { whatwedoFields } from "@/fields";
import Loader from "@/app/loading";
import Rehabilitation from "./Rehabilitation";

const RehabilitationHomePage = () => {
  const { language } = useLanguage();
  const title =
    language === "ENG"
      ? " ZRF Rehabilitation Programs"
      : "জেডআরএফ পুনর্বাসন কার্যক্রম";
  const [whatWedoData, setWhatWedoData] = useState<TWhatWeDo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchWhatwedoData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?limit=1000&fields=${whatwedoFields}&category=ZRF Rehabilitation Team`,
          {
            cache: "no-store",
          }
        );
        const data = await response.json();
        setWhatWedoData(data.data?.whatwedoes || []);
      } catch (err) {
        setError("Failed to fetch whatwedo data!");
      } finally {
        setLoading(false);
      }
    };

    fetchWhatwedoData();
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <p>Oops data not found!</p>;
  }
  return (
    <div>
      <CommonBanner title={title} />
      <Rehabilitation whatWedoData={whatWedoData} language={language} />
    </div>
  );
};
export default RehabilitationHomePage;
