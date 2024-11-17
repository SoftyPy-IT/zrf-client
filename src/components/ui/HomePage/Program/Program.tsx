
import { useLanguage } from "@/provider/LanguageProvider";

import React from "react";
import { TActivity } from "@/types/type";
import ProgrammData from "./ProgrammData";


const Programm = () => {
  const [programmData, setProgrammData] = React.useState<TActivity[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const { language } = useLanguage()
  React.useEffect(() => {
    const fetchPrisonData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/programm?limit=1000`, {
          cache: 'no-store'
        });
        const data = await response.json();
        setProgrammData(data.data?.programms || []);

      } catch (err) {
        setError('Failed to fetch programm data.');
      } finally {
        setLoading(false);
      }
    };

    fetchPrisonData();
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <>
      <ProgrammData language={language} programmData={programmData} />
    </>
  );
};

export default Programm;
