'use client'

import React from 'react';
import Education from './_components/Education';
import Banner from './_components/Banner';
import { useLanguage } from '@/provider/LanguageProvider';
import { useWhatwedoData } from '@/hooks/useWhatwedoData';

const EducationPage = () => {
    const {language} = useLanguage()
    const {whatWedoData} = useWhatwedoData()
    return (
        <div>
            <Banner/>
            <Education whatWedoData={whatWedoData} language={language}/>
        </div>
    );
};


export default EducationPage;