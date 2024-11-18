import React from 'react';
import ProgrammSection from './_components/ProgrammSection';
import ProgramBanner from './_components/ProgramBanner';
import { useLanguage } from '@/provider/LanguageProvider';

const page = () => {

  return (
    <>
      <ProgramBanner />
      <ProgrammSection />

    </>
  );
};

export default page;