
import { useLanguage } from "@/provider/LanguageProvider";
import RecentActivity from "./RecentActivity";
import React from "react";
import { TActivity } from "@/types/type";



const RecentActivitiesOfZRF = () => {
  const [activityData, setActivityData] = React.useState<TActivity[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const { language } = useLanguage()
  React.useEffect(() => {
    const fetchPrisonData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/activity?limit=1000`, {
          cache: 'no-store'
        });
        const data = await response.json();
        setActivityData(data.data?.activities || []);

      } catch (err) {
        setError('Failed to fetch welcome data.');
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
      <RecentActivity language={language} activityData={activityData} />
    </>
  );
};

export default RecentActivitiesOfZRF;
