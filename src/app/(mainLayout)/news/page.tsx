'use client'
import React from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import { useProjectdata } from '@/hooks/useProjectdata';
import NewsData from './_components/NewsData';
import { useActivityData } from '@/hooks/useActivityData';

const Project = () => {
  const { language } = useLanguage()
  const { activityData, loading } = useActivityData()
  return (
    <div>
      <NewsData activityData={activityData} language={language} />
    </div>
  );
};

export default Project;
