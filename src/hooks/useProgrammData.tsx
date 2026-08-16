'use client';
import { useEffect, useState } from "react";
import { TProgramm } from "@/types/type";
import { activityFields } from "@/fields";
import { API_LIST_LIMIT, getPublicApiUrl } from "@/config/env";

export const useProgrammData = () => {
    const [programmData, setProgrammData] = useState<TProgramm[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProgrammData = async () => {
            try {
                const response = await fetch(`${getPublicApiUrl()}/programm?limit=${API_LIST_LIMIT}&fields=${activityFields}`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setProgrammData(data.data?.programms || []);
            } catch (err) {
                setError("Failed to fetch programm data!");
            } finally {
                setLoading(false);
            }
        };

        fetchProgrammData();
    }, []);

    return { programmData, loading, error };
};
