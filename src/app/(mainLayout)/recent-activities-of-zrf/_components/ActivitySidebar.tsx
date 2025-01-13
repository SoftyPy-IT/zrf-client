import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import RecentActivityPost from './RecentActivityPost';
import { useActivityData } from '@/hooks/useActivityData';
import axios from 'axios';
import { whatwedoFields } from '@/fields';
import { TActivity } from '@/types/type';
import Loader from '@/app/loading';


const ActivitySidebar = () => {
    const { language } = useLanguage();
    const [activityData, setActivityData] = useState<TActivity[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const category = `Activity`;

    useEffect(() => {
        const fetchCovidData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_BASE_API_URL}/activity?category=${category}&fields=${whatwedoFields}`
                );
                setActivityData(res.data?.data?.activities || []);
            } catch (err) {
                console.error("Error fetching climate change data:", err);
                setError("Failed to load climate change data. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchCovidData();
    }, [category]);

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <h2>Oops! data not found.</h2>
    }
    return (
        <>
            <RecentActivityPost
                activityData={activityData} language={language} />
        </>
    );
};
export default ActivitySidebar;
