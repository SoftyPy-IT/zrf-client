'use client'

import React from "react";
import "./Welcome.css";
import WelcomeData from "./WelcomeData";
import { useLanguage } from "@/provider/LanguageProvider";
import { TBanner } from "@/types/type";
import Loader from "@/components/Loading/Loading";

const Welcome = () => {
  const [welcomeData, setWelcomeData] = React.useState<TBanner[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const { language } = useLanguage()
  React.useEffect(() => {
    const fetchPrisonData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/banner?limit=1000`, {
          cache: 'no-store'
        });
        const data = await response.json();
        setWelcomeData(data.data?.banners || []);

      } catch (err) {
        setError('Failed to fetch welcome data.');
      } finally {
        setLoading(false);
      }
    };

    fetchPrisonData();
  }, []);

  if (loading) {
    return <Loader />

  }

  return (
    <>
      <WelcomeData language={language} welcomeData={welcomeData} />
    </>
  );
};

export default Welcome;
