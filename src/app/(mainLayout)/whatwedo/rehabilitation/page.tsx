'use client'

import React from 'react';
import Banner from './_components/Banner';
import { useLanguage } from '@/provider/LanguageProvider';
import { useWhatwedoData } from '@/hooks/useWhatwedoData';
import Rehabilitation from './_components/Rehabilitation';

const EducationPage = () => {
    const {language} = useLanguage()
    const {whatWedoData} = useWhatwedoData()
    return (
        <div>
            <Banner/>
            <Rehabilitation whatWedoData={whatWedoData} language={language}/>
        </div>
    );
};

export default EducationPage;