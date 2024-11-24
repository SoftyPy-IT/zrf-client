'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import SingleHeathService from '../_components/SingleHeathService';
import Loader from '@/components/Loading/Loading';

interface ParamsId {
  params: {
    id: string;
  };
}

const Rehabilitation = ({ params }: ParamsId) => {
  const { language } = useLanguage();
  const { id } = params;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); 
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo/${id}`);
        const result = await res.json();
        if (result?.data) {
          setData(result.data);
        } else {
          setError("Report data not found");
        }
      } catch (err) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <Loader />
    );
  }

  if (error) {
    return <div className="text-center text-red-600"><h2>Oops! Something Went Wrong!</h2></div>;
  }

  return (
    <>
      {data && <SingleHeathService language={language} whatWedoData={data} />}
    </>
  );
};

export default Rehabilitation;
