'use client'
import React from 'react';
import FooterData from './FooterData';
import { useLanguage } from '@/provider/LanguageProvider';

const Footer = () => {
  const { language } = useLanguage()
  return (
    <>
      <FooterData language={language} />
    </>
  );
};

export default Footer;