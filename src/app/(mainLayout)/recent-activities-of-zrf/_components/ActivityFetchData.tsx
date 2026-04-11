'use client'
import React, { useState } from "react";
import Container from "@/components/share/Container";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import { TActivity } from "@/types/type";
import { formatDate } from "@/utils/formateDate";
import { Button } from "@mui/material";
import truncateText from "@/utils/truncate";
import Loader from "@/app/loading";
import { useLanguage } from "@/provider/LanguageProvider";

import { useActivityData } from "@/hooks/useActivityData";

const ActivityFetchData = () => {
    const { activityData, loading, error } = useActivityData()
    const { language } = useLanguage();
    const activityFilterData = activityData.filter((activity) => activity.category === 'Activity')
    const [visibleCount, setVisibleCount] = useState(6);
    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 6);
    };
    const sortedActivityData = activityFilterData?.sort((a: TActivity, b: TActivity) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
    });
    // if (loading) {
    //     return <Loader />;
    // }
    if (error) {
        return <h2 className="text-center">Oops! Something Went Wrong!</h2>;
    }

    

    return (
        <div>
            <CommonBanner title={language === 'ENG' ? 'Recent Activities of ZRF' : 'জেডআরএফ এর সাম্প্রতিক কার্যক্রম'} />
            <Container className="my-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {sortedActivityData?.slice(0, visibleCount).map((data) => (
                        <div key={data._id} className="shadow-xl bg-white overflow-hidden">
                            <div className="relative">
                                {
                                    language === 'ENG' ? data.bng_Images?.slice(0, 1).map((img) => (
                                        <Image
                                            width={500}
                                            height={500}
                                            key={img}
                                            src={img}
                                            alt={data.english_title}
                                            className="h-[250px] w-full object-cover transition-transform duration-500 transform hover:scale-105"
                                        />
                                    )) : data.eng_images?.slice(0, 1).map((img) => (
                                        <Image
                                            width={500}
                                            height={500}
                                            key={img}
                                            src={img}
                                            alt={data.english_title}
                                            className="h-[250px] w-full object-cover transition-transform duration-500 transform hover:scale-105"
                                        />
                                    ))
                                }
                            </div>
                            <div className="p-5 space-y-5">
                                <h3 className="text-xl font-bold">{language == 'ENG' ? truncateText(data.english_title, 60) : truncateText(data.bangla_title, 60)}</h3>
                                <p className="text-justify">
                                    {language == 'ENG' ? data.english_short_description?.slice(0, 150) : data.bangla_short_description?.slice(0, 150)}...
                                </p>
                                <div className="flex justify-between">
                                    <p className="text-gray-600">{formatDate(data.date)}</p>
                                    <Link href={`/recent-activities-of-zrf/${data._id}`}>
                                        <button className="hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-1 hover:text-white rounded-full uppercase text-xs border">
                                            {language === 'ENG' ? 'Read More ' : 'আরও পড়ুন'}   <EastIcon fontSize="small" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {visibleCount < sortedActivityData?.length && (<div className="flex items-center justify-center mt-5 ">
                    <Button onClick={loadMore} className="bg-gradient-to-r from-yellow-600 to-green-600 p-1 text-[9px] md:text-sm  md:px-3  md:py-1 rounded text-white">
                        {language === "ENG" ? "Load More" : "আরো লোড"}
                    </Button>
                </div>)}
            </Container>
        </div>
    );
};

export default ActivityFetchData;
