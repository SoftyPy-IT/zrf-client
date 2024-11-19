'use client';
import { useEffect, useState } from "react";
import { TAbout, TWhatWeDo, } from "@/types/type";

export const useWhatwedoData = () => {
    const [whatWedoData, setWhatWedoData] = useState<TWhatWeDo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWhatwedoData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/whatwedo?limit=1000`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setWhatWedoData(data.data?.whatwedoes || []);
            } catch (err) {
                setError("Failed to fetch whatwedo data!");
            } finally {
                setLoading(false);
            }
        };

        fetchWhatwedoData();
    }, []);

    return { whatWedoData, loading, error };
};
