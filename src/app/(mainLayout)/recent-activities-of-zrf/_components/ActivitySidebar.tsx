import React from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import { useWhatwedoData } from '@/hooks/useWhatwedoData';
import RecentActivityPost from './RecentActivityPost';
import { useActivityData } from '@/hooks/useActivityData';


const ActivitySidebar = () => {
    const { language } = useLanguage()
    const { activityData } = useActivityData()

    return (
        <>
            <RecentActivityPost
                activityData={activityData} language={language} />
        </>
    );
};

export default ActivitySidebar;
