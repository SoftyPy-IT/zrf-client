"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/provider/LanguageProvider";
import SingleProjectData from "../_components/SingleProjectData";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});

interface PressId {
  params: {
    id: string;
  };
}

const Project = ({ params }: PressId) => {
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
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/project/${id}`,
        );
        const result = await res.json();
        if (result?.data) {
          setData(result.data);
        } else {
          setError("Project data not found");
        }
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="text-center text-red-600">
        <h2>Ooops! Something Went Wrong!</h2>
      </div>
    );
  }

  return (
    <div>
      {data && (
        <SingleProjectData language={language} singleProjectData={data} />
      )}
    </div>
  );
};

export default Project;
