import React, { useEffect, useState } from "react";
import { useLanguage } from "@/provider/LanguageProvider";
import { whatwedoFields } from "@/fields";
import { TWhatWeDo } from "@/types/type";
import CovidRecentPost from "./CovidRecentPost";

type Props = {
  /**
   * "compact" renders the sidebar panel used beside a single article,
   * "grid" the full-width card deck that closes the article page.
   */
  variant?: "compact" | "grid";
};

/**
 * Fetches the `Covid` category and renders the recent-post listing. Kept as a
 * self-contained data component so the single article page can drop it straight
 * into its sidebar (or page footer) without owning any fetching logic.
 */
const CovidSidebar = ({ variant = "compact" }: Props) => {
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

  return (
    <CovidRecentPost
      covidData={covidData}
      language={language}
      loading={loading}
      variant={variant}
    />
  );
};

export default CovidSidebar;
