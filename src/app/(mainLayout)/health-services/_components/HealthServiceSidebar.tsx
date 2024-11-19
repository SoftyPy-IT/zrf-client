import React from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import { useWhatwedoData } from '@/hooks/useWhatwedoData';
import HealthServiceRecentpost from './HealthServiceRecentpost';



const HealthServiceSidebar = () => {
    const { language } = useLanguage()
    const { whatWedoData } = useWhatwedoData()

    return (
        <>
            <HealthServiceRecentpost
                whatWedoData={whatWedoData} language={language} />
        </>
    );
};

export default HealthServiceSidebar;