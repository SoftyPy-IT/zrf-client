'use client'


import React from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import { useCommitteeData } from '@/hooks/useCommitteeData';
import Volunteer from './Volunteer';


const VolunteerHomePage = () => {
    const {language} = useLanguage()
    const {committeeData} = useCommitteeData()
    return (
        <>
           <Volunteer committeeData={committeeData} language={language} />
        </>
    );
};

export default VolunteerHomePage;