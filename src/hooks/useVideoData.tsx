'use client';
import { useEffect, useState } from "react";
import { TEbook, TVideo } from "@/types/type";

export const useVideoData = () => {
    const [videoData, setVideoData] = useState<TVideo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);



    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/videos?limit=1000`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setVideoData(data.data?.videos || []);
            } catch (err) {
                setError("Failed to fetch videos data!");
            } finally {
                setLoading(false);
            }
        };

        fetchVideoData();
    }, []);

    return { videoData, loading, error };
};
