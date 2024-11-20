'use client'
import CommonBanner from '@/components/share/CommonBanner/CommonBanner';
import { useLanguage } from '@/provider/LanguageProvider';
import React from 'react';

const AboutBanner = () => {
    const { language } = useLanguage()
    return (
        <>
            <CommonBanner title={language === 'ENG' ? 'About Us' : 'আমাদের সম্পর্কে'} />
        </>
    );
};

export default AboutBanner;