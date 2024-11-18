'use client';
import { useEffect, useState } from "react";
import { TAbout, TEbook } from "@/types/type";

export const useAboutData = () => {
    const [aboutData, setAboutData] = useState<TAbout[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/about?limit=1000`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setAboutData(data.data?.abouts || []);
            } catch (err) {
                setError("Failed to fetch eBook data!");
            } finally {
                setLoading(false);
            }
        };

        fetchAboutData();
    }, []);

    return { aboutData, loading, error };
};
