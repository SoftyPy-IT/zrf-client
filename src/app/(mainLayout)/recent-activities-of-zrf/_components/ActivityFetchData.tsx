import React from "react";
import Container from "@/components/share/Container";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import { TActivity } from "@/types/type";

interface EducationProps {
    activityData: TActivity[];
    language: string,
}
const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

const ActivityFetchData: React.FC<EducationProps> = ({ activityData, language }) => {
    const activityFilterData = activityData.filter((activity) => activity.category === 'Activity')


    return (
        <div>
            <CommonBanner title={language === 'ENG' ? 'Recent Activities of ZRF' : 'জেডআরএফ এর সাম্প্রতিক কার্যক্রম'} />
            <Container className="my-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {activityFilterData.map((data) => (
                        <div key={data._id} className="shadow-xl bg-white overflow-hidden">
                            <div className="relative">
                                {
                                    data.bng_Images?.slice(0, 1).map((img) => (
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
                                <h3 className="text-xl font-bold">{language == 'ENG' ? data.english_title.slice(0, 60) : data.bangla_title?.slice(0, 60)}</h3>
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
            </Container>
        </div>
    );
};

export default ActivityFetchData;
