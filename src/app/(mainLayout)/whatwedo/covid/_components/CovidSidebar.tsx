import React from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import { useWhatwedoData } from '@/hooks/useWhatwedoData';

import CovidRecentPost from './CovidRecentPost';

const CovidSidebar = () => {
    const { language } = useLanguage()
    const { whatWedoData } = useWhatwedoData()

    return (
        <>
            <CovidRecentPost
                whatWedoData={whatWedoData} language={language} />
        </>
    );
};

export default CovidSidebar;