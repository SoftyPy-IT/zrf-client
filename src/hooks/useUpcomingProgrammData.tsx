'use client';
import { useEffect, useState } from "react";
import { TProject } from "@/types/type";
import { projectsFields } from "@/fields";

export const useUpcommingProgrammData = () => {
    const [upcomingProgramm, setUpcommingData] = useState<TProject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUpcomingData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/project?limit=1000&fields=${projectsFields}`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setUpcommingData(data.data?.projects || []);
            } catch (err) {
                setError("Failed to fetch upcomming programm data!");
            } finally {
                setLoading(false);
            }
        };

        fetchUpcomingData();
    }, []);

    return { projectData: upcomingProgramm, loading, error };
};
