"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/provider/LanguageProvider";
import { whatwedoFields } from "@/fields";
import { TWhatWeDo } from "@/types/type";
import Covid from "./Covid";

/**
 * COVID-19 listing page.
 *
 * Fetches the `Covid` category once and hands the result to the presentational
 * `Covid` component along with the loading flag, so the banner and skeleton
 * grid render on first paint. A failed request renders nothing rather than a
 * stray error message inside the page layout.
 */
const CovidHomePage = () => {
  const { language } = useLanguage();
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
          },
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
    return null;
  }

  return <Covid covidData={covidData} language={language} loading={loading} />;
};

export default CovidHomePage;
