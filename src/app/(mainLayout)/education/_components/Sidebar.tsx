import React, { useEffect, useState } from 'react';
import RecentEducation from './RecentEducation';
import { useLanguage } from '@/provider/LanguageProvider';
import axios from 'axios';
import { TWhatWeDo } from '@/types/type';
import { whatwedoFields } from '@/fields';
import Loader from '@/app/loading';

const Sidebar = () => {
  const { language } = useLanguage();
  const [educationData, setEducationData] = useState<TWhatWeDo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const category = `ZRF Education Programm`;

  useEffect(() => {
    const fetchCovidData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?category=${category}&fields=${whatwedoFields}`
        );
        setEducationData(res.data?.data?.whatwedoes || []);
      } catch (err) {
        console.error("Error fetching climate change data:", err);
        setError("Failed to load climate change data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCovidData();
  }, [category]);

  if (isLoading) {
    return <Loader/>;
  }

  if (error) {
    return <h2>Oops! data not found.</h2>
  }
  return (
    <>
      <RecentEducation educationData={educationData} language={language} />
    </>
  );
};

export default Sidebar;