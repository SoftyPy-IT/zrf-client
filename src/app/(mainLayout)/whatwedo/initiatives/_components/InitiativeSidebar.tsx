import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLanguage } from "@/provider/LanguageProvider";
import { whatwedoFields } from "@/fields";
import { TWhatWeDo } from "@/types/type";
import InitiativeRecentPost from "./InitiativeRecentPost";

type Props = {
  /**
   * "compact" renders the sidebar panel used beside a single article,
   * "grid" the full-width card deck that closes the article page.
   */
  variant?: "compact" | "grid";
};

/**
 * Fetches the `Initiatives` category and renders the recent-post listing. Kept
 * as a self-contained data component so the single article page can drop it
 * straight into its sidebar (or page footer) without owning any fetching logic.
 */
const InitiativeSidebar = ({ variant = "compact" }: Props) => {
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
    <InitiativeRecentPost
      initiativeData={initiativeData}
      language={language}
      loading={isLoading}
      variant={variant}
    />
  );
};

export default InitiativeSidebar;
