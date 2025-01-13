import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import { whatwedoFields } from '@/fields';
import axios from 'axios';
import { CovidRecentPost } from './CovidRecentPost';

const CovidSidebar = () => {
    const { language } = useLanguage();
    const [covidData, setCovidData] = useState(null);
    useEffect(() => {
        const fetchCovidData = async () => {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?category=Covid&fields=${whatwedoFields}`
                );
                setCovidData(res.data?.data?.whatwedoes
                );

            } catch (err) {
                console.log('Error fetching Covid data:', err);
            }
        };

        fetchCovidData();
    }, []);


    return (
        <>
            <CovidRecentPost covidData={covidData} language={language} />
        </>
    );
};

export default CovidSidebar;