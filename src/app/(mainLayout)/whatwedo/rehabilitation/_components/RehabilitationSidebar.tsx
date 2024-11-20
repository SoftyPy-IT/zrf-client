import React from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import { useWhatwedoData } from '@/hooks/useWhatwedoData';
import RehabilitationRecentPost from './RehabilitationRecentPost';

const RehabilitationSidebar = () => {
    const { language } = useLanguage()
    const { whatWedoData } = useWhatwedoData()

    return (
        <>
            <RehabilitationRecentPost
                whatWedoData={whatWedoData} language={language} />
        </>
    );
};

export default RehabilitationSidebar;
