'use client'

import React from 'react';
import CommitteeFetchData from './_components/CommitteeFetchData';
import { useLanguage } from '@/provider/LanguageProvider';
import { useCommitteeData } from '@/hooks/useCommitteeData';
import Loader from '@/components/Loading/Loading';

const Committee = () => {
  const { language } = useLanguage()
  const { committeeData, loading, error } = useCommitteeData()
  if (loading) {
    return <Loader />
  }
  if (error) {
    return <h2 className='text-center'>Oops!  Something Went Wrong!</h2>
  }
  return (
    <>
      <CommitteeFetchData language={language} committeeData={committeeData} />
    </>
  );
};

export default Committee;