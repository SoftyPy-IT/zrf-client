"use client";
import React, { useState } from "react";
import FetchImactData from "./FetchImactData";
import { useLanguage } from "@/provider/LanguageProvider";
import { useOverviewCountData } from "@/hooks/useOverviewCountData";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});

const Impact = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const { overviewData, loading, error } = useOverviewCountData();
  const { language } = useLanguage();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2 className="text-center">Oops! Something Went Wrong!</h2>;
  }

  return (
    <>
      <FetchImactData
        handleModalClose={handleModalClose}
        modalOpen={modalOpen}
        language={language}
        overviewData={overviewData}
        handleModalOpen={handleModalOpen} // Pass the function here
      />
    </>
  );
};

export default Impact;
