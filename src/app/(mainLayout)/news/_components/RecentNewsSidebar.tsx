import React from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import { useWhatwedoData } from '@/hooks/useWhatwedoData';

import { useActivityData } from '@/hooks/useActivityData';
import RecentNewsPost from './RecentNewsPost';

const RecentNewsSidebar = () => {
  const {language} = useLanguage() 
  const {activityData} = useActivityData()

    return (
        <>
            <RecentNewsPost
                activityData={activityData} language={language} />
        </>
    );
};

export default RecentNewsSidebar;
