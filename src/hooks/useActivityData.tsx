'use client';
import { useEffect, useState } from "react";
import { TAbout, TActivity,  } from "@/types/type";

export const useActivityData = () => {
    const [activityData, setActivityData] = useState<TActivity[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchActivityData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/activity?limit=1000`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setActivityData(data.data?.activities || []);
            } catch (err) {
                setError("Failed to fetch activity data!");
            } finally {
                setLoading(false);
            }
        };

        fetchActivityData();
    }, []);

    return {  activityData, loading, error };
};
