import React from "react";
import "./LatestNews.css";
import Image from "next/image";
import Link from "next/link";

import EastIcon from "@mui/icons-material/East";
import Marquee from "react-fast-marquee";
import { TActivity } from "@/types/type";


interface newsProps {
    newsData: TActivity[];
    language: string,
}


const LatestNewsFetchData: React.FC<newsProps> = ({ newsData, language }) => {



    return (
        <>
            <div>
                <div className="col-span-12 lg:col-span-5 hidden md:block mb-10 lg:mt-0 mt-10">
                    <div className="flex items-center  border border-green-600 ">
                        <h2 className="text-2xl font-bold uppercase bg-gradient-to-r from-yellow-600 to-green-600 text-white px-6 py-2">
                            {language === 'ENG' ? ' News' : 'খবর'}
                        </h2>
                        <Marquee>
                            <h1>
                                {language === 'ENG' ? ' This publication dives deep into the contributions of Ziaur Rahman !' : 'এই প্রকাশনাটি জিয়াউর রহমানের অবদানের গভীরে ডুব দেয়'}

                            </h1>
                        </Marquee>
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1  md:grid-cols-2 items-center gap-4 lg:mt-0 mt-10">
                    {newsData?.slice(0, 3).map((data) => (
                        <div
                            key={data._id}
                            className="border rounded items-center p-3 shadow-md"
                        >
                            <div className="flex items-center gap-3">
                                <div>
                                    <h4 className="text-sm font-semibold uppercase">
                                        {language === 'ENG' ? data?.english_title?.slice(0, 60) : data?.bangla_title?.slice(0, 60)}
                                        ...

                                    </h4>
                                    <p className="text-sm text-justify">

                                        <>
                                            {data?.english_short_description?.slice(0, 100)} ...
                                            <Link href={`/news/${data._id}`}>
                                                <button className="text-green-600">  {language === 'ENG' ? 'See more' : 'আরো দেখুন'}  </button>
                                            </Link>
                                        </>

                                    </p>
                                </div>
                                <Image
                                    className="w-28 h-20 object-cover rounded"
                                    alt={data.english_title || "E-Book"}
                                    src={data.bng_Images[0] || ''}
                                    width={300}
                                    height={400}
                                    objectFit="cover"
                                />


                            </div>
                        </div>
                    ))}
                    <div className="flex lg:justify-end  mt-5 text-center">
                        <Link href="/news">
                            <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 text-white rounded-full uppercase">
                                {language === 'ENG' ? 'See All ' : 'সব দেখুন'}   <EastIcon fontSize="small" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LatestNewsFetchData;
