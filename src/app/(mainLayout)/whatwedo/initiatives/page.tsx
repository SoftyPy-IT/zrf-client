'use client'
import React from 'react';

import { useLanguage } from '@/provider/LanguageProvider';
import { useWhatwedoData } from '@/hooks/useWhatwedoData';
import Initiatives from './_components/Initiatives';

const Page = () => {
    const { language } = useLanguage()
    const { whatWedoData } = useWhatwedoData()
    return (
        <div>
            <Initiatives whatWedoData={whatWedoData} language={language} />
        </div>
    );
};

export default Page;