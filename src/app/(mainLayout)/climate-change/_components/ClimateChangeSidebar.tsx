import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import ClimateChangeRecentPost from './ClimateChangeRecentPost';
import axios from 'axios';
import { whatwedoFields } from '@/fields';
import { TWhatWeDo } from '@/types/type';
const ClimateChangeSidebar = () => {
    const { language } = useLanguage();
    const [climateChangeData, setClimateChange] = useState<TWhatWeDo[]>([]);
    const category = `Climate Change`
    useEffect(() => {
        const fetchCovidData = async () => {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?category=${category}&fields=${whatwedoFields}`
                );
                setClimateChange(res.data?.data?.whatwedoes || []
                );

            } catch (err) {
                console.log('Error fetching climate change data:', err);
            }
        };

        fetchCovidData();
    }, [category]);

    return (
        <>
            <ClimateChangeRecentPost climateChangeData={climateChangeData} language={language} />
        </>
    );
};

export default ClimateChangeSidebar;