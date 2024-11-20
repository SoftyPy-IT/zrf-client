'use client';
import { useEffect, useState } from "react";
import { TOverview } from "@/types/type";

export const useOverviewCountData = () => {
    const [overviewData, setOverviewData] = useState<TOverview[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchOverviewData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/overview?limit=1000`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setOverviewData(data.data?.overviews || []);
            } catch (err) {
                setError("Failed to fetch programm data!");
            } finally {
                setLoading(false);
            }
        };

        fetchOverviewData();
    }, []);

    return { overviewData, loading, error };
};
