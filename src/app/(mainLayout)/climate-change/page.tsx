'use client'
import React from 'react';

import { useLanguage } from '@/provider/LanguageProvider';
import { useWhatwedoData } from '@/hooks/useWhatwedoData';
import ClimateChange from './_components/ClimateChange';
import Loader from '@/components/Loading/Loading';

const Page = () => {
    const { language } = useLanguage()
    const { whatWedoData, loading, error } = useWhatwedoData()
    if (loading) {
        return <Loader />
    }
    if (error) {
        return <h2 className='text-center'>Oops!  Something Went Wrong!</h2>
    }
    return (
        <div>
            <ClimateChange whatWedoData={whatWedoData} language={language} />
        </div>
    );
};

export default Page;