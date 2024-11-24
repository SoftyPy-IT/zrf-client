'use client'

import React from 'react';
import Education from './_components/Education';
import Banner from './_components/Banner';
import { useLanguage } from '@/provider/LanguageProvider';
import { useWhatwedoData } from '@/hooks/useWhatwedoData';
import Loader from '@/components/Loading/Loading';

const EducationPage = () => {
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
            <Banner />
            <Education whatWedoData={whatWedoData} language={language} />
        </div>
    );
};


export default EducationPage;