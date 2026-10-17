"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/provider/LanguageProvider";
import { TWhatWeDo } from "@/types/type";
import { whatwedoFields } from "@/fields";
import Rehabilitation from "./Rehabilitation";

/**
 * Rehabilitation listing page.
 *
 * Fetches the `ZRF Rehabilitation Team` category once and hands the result to
 * the presentational `Rehabilitation` component along with the loading flag, so
 * the banner and skeleton grid render on first paint. A failed request renders
 * nothing rather than a stray error message inside the page layout.
 */
const RehabilitationHomePage = () => {
  const { language } = useLanguage();
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
          },
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

  if (error) {
    return null;
  }

  return (
    <Rehabilitation
      whatWedoData={whatWedoData}
      language={language}
      loading={loading}
    />
  );
};

export default RehabilitationHomePage;
