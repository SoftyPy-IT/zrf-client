

'use client';
import { useEffect, useState } from "react";
import {  TCommitte,  } from "@/types/type";

export const useCommitteeData = () => {
    const [committeeData, setCseCommitteeData] = useState<TCommitte[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/committee?limit=1000`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setCseCommitteeData(data.data?.committees || []);
            } catch (err) {
                setError("Failed to fetch committee data!");
            } finally {
                setLoading(false);
            }
        };

        fetchAboutData();
    }, []);

    return { committeeData, loading, error };
};
