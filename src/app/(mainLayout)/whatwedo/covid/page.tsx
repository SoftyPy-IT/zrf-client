'use client'
import React from 'react';
import Covid from './_components/Covid';
import { useLanguage } from '@/provider/LanguageProvider';
import { useWhatwedoData } from '@/hooks/useWhatwedoData';

const Page = () => {
    const { language } = useLanguage()
    const { whatWedoData } = useWhatwedoData()
    return (
        <div>
            <Covid whatWedoData={whatWedoData} language={language} />
        </div>
    );
};

export default Page;