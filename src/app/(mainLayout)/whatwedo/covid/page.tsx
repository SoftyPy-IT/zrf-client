'use client';
import React, { useEffect, useState } from 'react';
import Covid from './_components/Covid';
import { useLanguage } from '@/provider/LanguageProvider';
import { whatwedoFields } from '@/fields';
import Loader from '@/app/loading';
import { TWhatWeDo } from '@/types/type';
const Page = () => {
    const { language } = useLanguage()
    const title = language === 'ENG' ? ' ZRF Rehabilitation Programs' : 'জেডআরএফ পুনর্বাসন কার্যক্রম'
    const [covidData, setCovidData] = useState<TWhatWeDo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchWhatwedoData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?category=Covid&fields=${whatwedoFields}`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setCovidData(data.data?.whatwedoes || []);
            } catch (err) {
                setError("Failed to fetch whatwedo data!");
            } finally {
                setLoading(false);
            }
        };

        fetchWhatwedoData();
    }, []);

    if (loading) {
        return <Loader />
    }
    if (error) {
        return <p>Oops covid data not found!</p>
    }


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
