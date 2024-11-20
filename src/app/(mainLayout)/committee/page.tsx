'use client' 

import React from 'react';
import CommitteeFetchData from './_components/CommitteeFetchData';
import { useLanguage } from '@/provider/LanguageProvider';
import { useCommitteeData } from '@/hooks/useCommitteeData';

const Committee = () => {
  const {language} = useLanguage()
  const {committeeData} = useCommitteeData()
  return (
    <>
      <CommitteeFetchData language={language} committeeData={committeeData}/>
    </>
  );
};

export default Committee;