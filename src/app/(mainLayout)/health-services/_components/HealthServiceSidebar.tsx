import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import { useWhatwedoData } from '@/hooks/useWhatwedoData';
import HealthServiceRecentpost from './HealthServiceRecentpost';
import Loader from '@/app/loading';
import { whatwedoFields } from '@/fields';
import axios from 'axios';
import { TWhatWeDo } from '@/types/type';



const HealthServiceSidebar = () => {
    const { language } = useLanguage();
    const [healthServicesData, setHealthServicesData] = useState<TWhatWeDo[]>([]);
    console.log(healthServicesData)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const category = `Health Services`;

    useEffect(() => {
        const fetchCovidData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?category=${category}&fields=${whatwedoFields}`
                );
                setHealthServicesData(res.data?.data?.whatwedoes || []);
            } catch (err) {
                console.error("Error fetching climate change data:", err);
                setError("Failed to load health services data. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchCovidData();
    }, [category]);

    // if (isLoading) {
    //     return <Loader />;
    // }

    if (error) {
        return <h2>Oops! data not found.</h2>
    }
    return (
        <>
            <HealthServiceRecentpost
                healthServicesData={healthServicesData} language={language} />
        </>
    );
};

export default HealthServiceSidebar;