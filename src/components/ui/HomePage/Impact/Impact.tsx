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

  if (error) return null;

  return (
    <FetchImactData
      handleModalClose={handleModalClose}
      modalOpen={modalOpen}
      language={language}
      overviewData={overviewData}
      handleModalOpen={handleModalOpen}
      loading={loading}
    />
  );
};

export default Impact;
