'use client';
import { useEffect, useState } from "react";
import {  TMessage } from "@/types/type";

export const useMessageData = () => {
    const [messageData, setMessageData] = useState<TMessage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMessageData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/message?limit=1000`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setMessageData(data.data?.messages || []);
            } catch (err) {
                setError("Failed to fetch message data!");
            } finally {
                setLoading(false);
            }
        };

        fetchMessageData();
    }, []);

    return { messageData, loading, error };
};
