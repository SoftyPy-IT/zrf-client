import React from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import { useWhatwedoData } from '@/hooks/useWhatwedoData';
import ClimateChangeRecentPost from './ClimateChangeRecentPost';



const ClimateChangeSidebar = () => {
    const { language } = useLanguage()
    const { whatWedoData } = useWhatwedoData()

    return (
        <>
            <ClimateChangeRecentPost
                whatWedoData={whatWedoData} language={language} />
        </>
    );
};

export default ClimateChangeSidebar;