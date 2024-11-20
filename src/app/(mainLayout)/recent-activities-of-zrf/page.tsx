'use client'
import React from 'react';
import ActivityFetchData from './_components/ActivityFetchData';
import { useLanguage } from '@/provider/LanguageProvider';
import { useActivityData } from '@/hooks/useActivityData';

const Activity = () => {
  const {language} = useLanguage()
  const {activityData} = useActivityData()
  return (
    <>
      <ActivityFetchData  activityData={activityData} language={language}/>
    </>
  );
};

export default Activity;