'use client'


import React from 'react';
import Volunteer from './_components/Volunteer';
import { useLanguage } from '@/provider/LanguageProvider';
import { useCommitteeData } from '@/hooks/useCommitteeData';


const VolunteerPage = () => {
    const {language} = useLanguage()
    const {committeeData} = useCommitteeData()
    return (
        <>
           <Volunteer committeeData={committeeData} language={language} />
        </>
    );
};

export default VolunteerPage;