"use client";
import React from "react";

import { useLanguage } from "@/provider/LanguageProvider";
import { useWhatwedoData } from "@/hooks/useWhatwedoData";
import HealthServices from "./_components/HealthServices";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});

const Page = () => {
  const { language } = useLanguage();
  const { whatWedoData, loading, error } = useWhatwedoData();
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h2 className="text-center">Oops! Something Went Wrong!</h2>;
  }
  return (
    <div>
      <HealthServices whatWedoData={whatWedoData} language={language} />
    </div>
  );
};

export default Page;
