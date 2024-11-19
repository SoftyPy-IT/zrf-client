import React from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import { useWhatwedoData } from '@/hooks/useWhatwedoData';
import InitiativeRecentPost from './InitiativeRecentPost';



const InitiativeSidebar = () => {
    const { language } = useLanguage()
    const { whatWedoData } = useWhatwedoData()

    return (
        <>
            <InitiativeRecentPost
                whatWedoData={whatWedoData} language={language} />
        </>
    );
};

export default InitiativeSidebar;