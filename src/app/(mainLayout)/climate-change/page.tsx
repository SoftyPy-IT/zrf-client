'use client'
import React from 'react';

import { useLanguage } from '@/provider/LanguageProvider';
import { useWhatwedoData } from '@/hooks/useWhatwedoData';
import ClimateChange from './_components/ClimateChange';

const Page = () => {
    const { language } = useLanguage()
    const { whatWedoData } = useWhatwedoData()
    return (
        <div>
            <ClimateChange whatWedoData={whatWedoData} language={language} />
        </div>
    );
};

export default Page;