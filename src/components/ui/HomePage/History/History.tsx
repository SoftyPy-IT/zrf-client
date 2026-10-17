"use client";

import React from "react";
import HistoryFetchData from "./HistoryFetchData";
import { useAboutData } from "@/hooks/useAboutData";
import { useLanguage } from "@/provider/LanguageProvider";

/**
 * Journey timeline section of the About page.
 *
 * `useAboutData` still supplies the shared about feed while `HistoryFetchData`
 * keeps its dedicated `category=History` request and rendering logic.
 */
const History = () => {
  const { aboutData, error } = useAboutData();
  const { language } = useLanguage();

  if (error) return null;

  return <HistoryFetchData language={language} aboutData={aboutData} />;
};

export default History;
