'use client'
import React from "react";
import Container from "@/components/share/Container";
import Image from "next/image";

import { useEbookData } from "@/hooks/useEbookData";
import Ebook from "./Ebook";
import Loader from "@/components/Loading/Loading";

function EbookFetchData() {
    const { ebookData, loading, error } = useEbookData();

    if (loading) return <Loader />;
    if (error) return <p>Oops Something Went to Wrong! </p>;

    return (
        <div>
            <Ebook />
            <Container>
                <div className="my-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {ebookData?.map((book) => (
                            <div key={book._id} className="bg-white p-5 shadow-lg border">
                                <div className="relative w-full h-[450px] overflow-hidden group">
                                    {book.images?.[0] ? (
                                        <Image
                                            src={book.images[0]}
                                            alt={book.title || "E-Book"}
                                            width={300}
                                            height={450}
                                            className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500">
                                            No Image Available
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default EbookFetchData;
