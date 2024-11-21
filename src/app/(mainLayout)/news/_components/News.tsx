'use client'
import React from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import { useProjectdata } from '@/hooks/useProjectdata';
;
import { useActivityData } from '@/hooks/useActivityData';
import NewsData from './NewsData';

const News = () => {
  const { language } = useLanguage()
  const { activityData, loading } = useActivityData()
  return (
    <div>
      <NewsData activityData={activityData} language={language} />
    </div>
  );
};

export default News;
