'use client'
import React from 'react';
import FetchImactData from './FetchImactData';
import { useLanguage } from '@/provider/LanguageProvider';
import { useProgrammData } from '@/hooks/useProgrammData';
import { useOverviewCountData } from '@/hooks/useOverviewCountData';
import Loader from '@/components/Loading/Loading';

const Impact = () => {
  const { overviewData, loading, error } = useOverviewCountData()
  const { language } = useLanguage()
  if (loading) {
    return <Loader />
  }
  if (error) {
    return <h2 className='text-center'>Oops!  Something Went Wrong!</h2>
  }
  return (
    <>
      <FetchImactData language={language} overviewData={overviewData} />
    </>
  );
};

export default Impact;