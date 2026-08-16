'use client';
import { useEffect, useState } from "react";
import { TActivity, } from "@/types/type";
import { activityFields } from "@/fields";
import { API_LIST_LIMIT, getPublicApiUrl } from "@/config/env";

export const useActivityData = () => {
    const [activityData, setActivityData] = useState<TActivity[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchActivityData = async () => {
            try {
                const response = await fetch(`${getPublicApiUrl()}/activity?limit=${API_LIST_LIMIT}&fields=${activityFields}`, {
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

    return { activityData, loading, error };
};
