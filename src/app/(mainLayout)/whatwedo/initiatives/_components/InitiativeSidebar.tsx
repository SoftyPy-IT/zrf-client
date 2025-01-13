import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import { useWhatwedoData } from '@/hooks/useWhatwedoData';
import InitiativeRecentPost from './InitiativeRecentPost';
import { TWhatWeDo } from '@/types/type';
import axios from 'axios';
import { whatwedoFields } from '@/fields';
import Loader from '@/app/loading';



const InitiativeSidebar = () => {
    const { language } = useLanguage();
    const [initiativeData, setInitiativeData] = useState<TWhatWeDo[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const category = `Initiatives`;

    useEffect(() => {
        const fetchCovidData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?category=${category}&fields=${whatwedoFields}`
                );
                setInitiativeData(res.data?.data?.whatwedoes || []);
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
        return <Loader/>;
    }

    if (error) {
        return <h2>Oops! data not found.</h2>
    }
    return (
        <>
            <InitiativeRecentPost  initiativeData={initiativeData} language={language} />
        </>
    );
};

export default InitiativeSidebar;