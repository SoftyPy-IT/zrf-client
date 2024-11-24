'use client';
import { useEffect, useState } from "react";
import { TEbook } from "@/types/type";

export const useEbookData = () => {
    const [ebookData, setEbookData] = useState<TEbook[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    
    useEffect(() => {
        const fetchEbookData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/ebook?limit=1000`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setEbookData(data.data?.ebooks || []);
            } catch (err) {
                setError("Failed to fetch eBook data!");
            } finally {
                setLoading(false);
            }
        };

        fetchEbookData();
    }, []);

    return { ebookData, loading, error };
};
