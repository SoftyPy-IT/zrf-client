import React from "react";
import "./LatestNews.css";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import { TActivity } from "@/types/type";
import Marquee from "react-fast-marquee";


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
                            <div className="flex items-center">
                                {
                                    newsData.map((title) => (
                                        <h2 key={title._id} className="capitalize">
                                            {language === 'ENG' ? title.english_title : title.bangla_title}
                                        </h2>
                                    ))
                                }
                            </div>
                        </Marquee>
                    </div>
                </div>
                <div className="w-full grid grid-cols-1  xl:grid-cols-1  md:grid-cols-1 items-center gap-4 lg:mt-5  mt-10 ">
                    {newsData?.slice(0, 3).map((data) => (
                        <div
                            key={data._id}
                            className="border rounded items-center p-2 md:h-40 shadow-md"
                        >
                            <div className="flex flex-col md:flex-row  items-center gap-3">
                                <div className="flex-1 order-3 md:order-1">
                                    <h4 className="text-sm font-semibold uppercase">
                                        {language === 'ENG' ? data?.english_title?.slice(0, 60) : data?.bangla_title?.slice(0, 60)}
                                        ...

                                    </h4>
                                    <p className="text-sm text-justify mt-2 ">

                                        <>
                                            {language === 'ENG' ? data?.english_short_description?.slice(0, 100) : data?.bangla_short_description?.slice(0, 100)} ...
                                            <Link href={`/news/${data._id}`}>
                                                <button className="text-green-600">  {language === 'ENG' ? 'See more' : 'আরো দেখুন'}  </button>
                                            </Link>
                                        </>

                                    </p>
                                </div>
                                <Image
                                    className="md:w-52 h-[200px]   md:h-32 object-fill rounded order-1   md:order-3 "
                                    alt={data.english_title || "E-Book"}
                                    src={data.bng_Images[0] || ''}
                                    width={300}
                                    height={400}
                                    objectFit="cover"
                                />


                            </div>
                        </div>
                    ))}
                    <div className="flex lg:justify-end  mt-8 text-center">
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
