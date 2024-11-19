import React from 'react';
import RecentEducation from './RecentEducation';
import { useLanguage } from '@/provider/LanguageProvider';
import { useWhatwedoData } from '@/hooks/useWhatwedoData';

const Sidebar = () => {
  const { language } = useLanguage()
  const { whatWedoData } = useWhatwedoData()

  return (
    <>
      <RecentEducation whatWedoData={whatWedoData} language={language} />
    </>
  );
};

export default Sidebar;