"use client";
import React, { useState } from "react";
import FetchImactData from "./FetchImactData";
import { useLanguage } from "@/provider/LanguageProvider";
import { useOverviewCountData } from "@/hooks/useOverviewCountData";

const Impact = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const { overviewData, loading, error } = useOverviewCountData();
  const { language } = useLanguage();

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-emerald-900 to-teal-900">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-emerald-500 border-b-transparent rounded-full animate-spin" />
          </div>
        </div>
      </div>
    );
  }


  return (
    <FetchImactData
      handleModalClose={handleModalClose}
      modalOpen={modalOpen}
      language={language}
      overviewData={overviewData}
      handleModalOpen={handleModalOpen}
    />
  );
};


export default Impact;
