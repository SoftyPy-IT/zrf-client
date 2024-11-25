'use client'

import React from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import { useWhatwedoData } from '@/hooks/useWhatwedoData';
import Rehabilitation from './_components/Rehabilitation';
import CommonBanner from '@/components/share/CommonBanner/CommonBanner';

const EducationPage = () => {
    const { language } = useLanguage()
    const { whatWedoData } = useWhatwedoData()
    const title = language === 'ENG' ? ' ZRF Rehabilitation Program' : 'জেডআরএফ পুনর্বাসন কার্যক্রম'

    return (
        <div>
            <CommonBanner title={title} />
            <Rehabilitation whatWedoData={whatWedoData} language={language} />
        </div>
    );
};

export default EducationPage;