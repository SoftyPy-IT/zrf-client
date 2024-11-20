'use client'
import React from 'react';
import FetchImactData from './FetchImactData';
import { useLanguage } from '@/provider/LanguageProvider';
import { useProgrammData } from '@/hooks/useProgrammData';
import { useOverviewCountData } from '@/hooks/useOverviewCountData';

const Impact = () => {
  const { overviewData } = useOverviewCountData()
  const { language } = useLanguage()
  return (
    <>
      <FetchImactData language={language} overviewData={overviewData} />
    </>
  );
};

export default Impact;