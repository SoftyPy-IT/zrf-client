'use client'

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import SingleInitiative from '../_components/SingleInitiative';
interface paramsId {
  params: {
    id: string;
  };
}
const Rehabilitation = ({ params }: paramsId) => {
  const { language } = useLanguage();
  const { id } = params;

  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo/${id}`);
        const result = await res.json();
        if (result?.data) {
          setData(result.data);
        } else {
          setError("Report data not found");
        }
      } catch (error) {
        setError("An error occurred while fetching data.");
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <>{data && <SingleInitiative language={language} whatWedoData={data} />}</>

    </>
  );
};

export default Rehabilitation;
