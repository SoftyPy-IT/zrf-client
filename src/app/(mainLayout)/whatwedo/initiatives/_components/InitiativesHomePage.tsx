"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLanguage } from "@/provider/LanguageProvider";
import { TWhatWeDo } from "@/types/type";
import { whatwedoFields } from "@/fields";
import Initiatives from "./Initiatives";

/**
 * Initiatives listing page.
 *
 * Fetches the `Initiatives` category once and hands the result to the
 * presentational `Initiatives` component along with the loading flag, so the
 * banner and skeleton grid render on first paint. A failed request renders
 * nothing rather than a stray error message inside the page layout.
 */
const InitiativesHomePage = () => {
  const { language } = useLanguage();
  const [initiativeData, setInitiativeData] = useState<TWhatWeDo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const category = `Initiatives`;

  useEffect(() => {
    const fetchWhatwedoData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?category=${category}&fields=${whatwedoFields}`,
        );
        setInitiativeData(res.data?.data?.whatwedoes || []);
      } catch (err) {
        setError("Failed to fetch whatwedo data!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchWhatwedoData();
  }, [category]);

  if (error) {
    return null;
  }

  return (
    <Initiatives
      initiativeData={initiativeData}
      language={language}
      loading={isLoading}
    />
  );
};

export default InitiativesHomePage;
