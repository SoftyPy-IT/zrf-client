'use client'

import React from 'react';
import Education from './_components/Education';

import { useLanguage } from '@/provider/LanguageProvider';
import { useWhatwedoData } from '@/hooks/useWhatwedoData';
import Loader from '@/components/Loading/Loading';
import CommonBanner from '@/components/share/CommonBanner/CommonBanner';

const EducationPage = () => {
    const { language } = useLanguage()
    const { whatWedoData, loading, error } = useWhatwedoData()
    if (loading) {
        return <Loader />
    }
    if (error) {
        return <h2 className='text-center'>Oops!  Something Went Wrong!</h2>
    }
    const title = language === 'ENG' ? ' ZRF Education Program' : 'জেডআরএফ শিক্ষা কার্যক্রম'

    return (
        <div>
            <CommonBanner title={title} />
            <Education whatWedoData={whatWedoData} language={language} />
        </div>
    );
};


export default EducationPage;