import React, { useEffect, useState } from "react";
import { useLanguage } from "@/provider/LanguageProvider";
import { whatwedoFields } from "@/fields";
import { TWhatWeDo } from "@/types/type";
import RehabilitationRecentPost from "./RehabilitationRecentPost";

type Props = {
  /**
   * "compact" renders the sidebar panel used beside a single article,
   * "grid" the full-width card deck that closes the article page.
   */
  variant?: "compact" | "grid";
};

/**
 * Fetches the `ZRF Rehabilitation Team` category and renders the recent-post
 * listing. Kept as a self-contained data component so the single article page
 * can drop it straight into its sidebar (or page footer) without owning any
 * fetching logic.
 */
const RehabilitationSidebar = ({ variant = "compact" }: Props) => {
  const { language } = useLanguage();
  const [rehabilitationData, setRehabilitationData] = useState<TWhatWeDo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const category = `ZRF Rehabilitation Team`;

  useEffect(() => {
    const fetchWhatwedoData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?category=${category}&fields=${whatwedoFields}`,
          {
            cache: "no-store",
          },
        );
        const data = await response.json();
        setRehabilitationData(data.data?.whatwedoes || []);
      } catch (err) {
        setError("Failed to fetch whatwedo data!");
      } finally {
        setLoading(false);
      }
    };

    fetchWhatwedoData();
  }, [category]);

  if (error) {
    return null;
  }

  return (
    <RehabilitationRecentPost
      rehabilitationData={rehabilitationData}
      language={language}
      loading={loading}
      variant={variant}
    />
  );
};

export default RehabilitationSidebar;
