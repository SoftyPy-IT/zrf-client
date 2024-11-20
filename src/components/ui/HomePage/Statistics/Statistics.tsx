'use client'
import React from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import { useOverviewCountData } from '@/hooks/useOverviewCountData';
import FetchStatisticData from './FetchStatisticData';

const Statistics = () => {
  const { overviewData } = useOverviewCountData()
  const { language } = useLanguage()
  return (
    <>
      <FetchStatisticData language={language} overviewData={overviewData} />
    </>
  );
};

export default Statistics;