import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/provider/LanguageProvider';
import RehabilitationRecentPost from './RehabilitationRecentPost';
import { TWhatWeDo } from '@/types/type';
import Loader from '@/app/loading';
import { whatwedoFields } from '@/fields';

const RehabilitationSidebar = () => {
    const { language } = useLanguage()
    const title = language === 'ENG' ? ' ZRF Rehabilitation Programs' : 'জেডআরএফ পুনর্বাসন কার্যক্রম'
    const [rehabilitationData, setRehabilitationData] = useState<TWhatWeDo[]>([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const category = `ZRF Rehabilitation Team`
    useEffect(() => {
        const fetchWhatwedoData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?category=${category}&fields=${whatwedoFields}`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setRehabilitationData(data.data?.whatwedoes || []);
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
        return <p>Oops data not found!</p>
    }
    return (
        <>
            <RehabilitationRecentPost rehabilitationData={rehabilitationData} language={language} />
        </>
    );
};

export default RehabilitationSidebar;
