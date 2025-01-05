'use client';
import React, { useEffect, useState } from 'react';
import Covid from './_components/Covid';
import { useLanguage } from '@/provider/LanguageProvider';
import axios from 'axios';

const Page = () => {
    const { language } = useLanguage();

    const [covidData, setCovidData] = useState(null);

    useEffect(() => {
        const fetchCovidData = async () => {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?category=Covid`
                );
                setCovidData(res.data?.data?.
                    whatwedoes
                );
                console.log('Covid data:', res.data);
            } catch (err) {
                console.log('Error fetching Covid data:', err);
            }
        };

        fetchCovidData();
    }, []);

    return (
        <div>
            {covidData ? (
                <Covid covidData={covidData} language={language} />
            ) : (
                <p>Loading Covid data...</p>
            )}
        </div>
    );
};

export default Page;
