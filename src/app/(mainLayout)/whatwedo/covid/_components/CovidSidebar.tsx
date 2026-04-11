import React, { useEffect, useState } from "react";
import { useLanguage } from "@/provider/LanguageProvider";
import { whatwedoFields } from "@/fields";
import axios from "axios";
import Loader from "@/app/loading";
import { TWhatWeDo } from "@/types/type";
import CovidRecentPost from "./CovidRecentPost";

const CovidSidebar = () => {
  const { language } = useLanguage();
  const title =
    language === "ENG"
      ? " ZRF Rehabilitation Programs"
      : "জেডআরএফ পুনর্বাসন কার্যক্রম";
  const [covidData, setCovidData] = useState<TWhatWeDo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchWhatwedoData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?category=Covid&fields=${whatwedoFields}`,
          {
            cache: "no-store",
          }
        );
        const data = await response.json();
        setCovidData(data.data?.whatwedoes || []);
      } catch (err) {
        setError("Failed to fetch whatwedo data!");
      } finally {
        setLoading(false);
      }
    };

    fetchWhatwedoData();
  }, []);

   
  if (error) {
    return <p>Oops covid data not found!</p>;
  }

  return (
    <>
      <CovidRecentPost covidData={covidData} language={language} />
    </>
  );
};

export default CovidSidebar;
