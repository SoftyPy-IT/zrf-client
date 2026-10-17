"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import { useLanguage } from "@/provider/LanguageProvider";
import { whatwedoFields } from "@/fields";
import { TWhatWeDo } from "@/types/type";
import Education from "./Education";

const EducationHomePage = () => {
  const { language } = useLanguage();
  const [educationData, setEducationData] = useState<TWhatWeDo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const category = `ZRF Education Programm`;

  useEffect(() => {
    const fetchEducationData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?category=${category}&fields=${whatwedoFields}`,
        );
        setEducationData(res.data?.data?.whatwedoes || []);
      } catch (err) {
        console.error("Error fetching education data:", err);
        setError("Failed to load education data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchEducationData();
  }, [category]);

  if (error) return null;

  const isBn = language === "BNG";

  return (
    <>
      <CommonBanner
        title={isBn ? "জেডআরএফ শিক্ষা কার্যক্রম" : "ZRF Education Programmes"}
        subtitle={
          isBn
            ? "বৃত্তি, শিক্ষা সহায়তা ও কমিউনিটি শিক্ষা কার্যক্রমের মাধ্যমে বাংলাদেশজুড়ে শিক্ষার সুযোগ সম্প্রসারণ করা হচ্ছে।"
            : "Scholarships, learning support and community education programmes that widen access to education across Bangladesh."
        }
      />
      <Education
        educationData={educationData}
        language={language}
        loading={isLoading}
      />
    </>
  );
};

export default EducationHomePage;
