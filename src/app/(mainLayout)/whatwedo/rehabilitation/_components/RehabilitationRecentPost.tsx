import React from "react";
import Image from "next/image";
import { TWhatWeDo, } from "@/types/type";
import Link from "next/link";
import truncateText from "@/utils/truncate";

interface educatoinProps {
    rehabilitationData: TWhatWeDo[];
    language: string,
}
const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

const RecentPostFetchData: React.FC<educatoinProps> = ({ rehabilitationData, language }) => {
    const sortedRehabilitationData = rehabilitationData?.sort(
        (a: TWhatWeDo, b: TWhatWeDo) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return dateB - dateA;
        },
    );
    return (
        <div className=" p-5 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold">{language === 'ENG' ? 'Popular Post' : 'জনপ্রিয় পোস্ট'}</h3>
            <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
            <div className="flex flex-col  gap-y-3 gap-x-3 mt-5">
                {sortedRehabilitationData?.slice(0, 5).map((data) => (
                    <div key={data._id}>
                        <Link href={`/whatwedo/rehabilitation/${data._id}`}>
                            <div className="flex flex-col md:flex-row border rounded-md p-3  gap-2 ">
                                {
                                    data.bng_Images?.slice(0, 1).map((img) => (
                                        <div className="relative w-full max-w-[14rem] aspect-[56/16] rounded-sm " key={img}>
                                            {
                                                language === 'ENG' ? (
                                                    data.eng_images?.slice(0, 1).map((img) => (
                                                        <Image
                                                            key={img}
                                                            src={img}
                                                            alt=""
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    ))
                                                ) : (
                                                    data.bng_Images?.slice(0, 1).map((img) => (
                                                        <Image
                                                            key={img}
                                                            src={img}
                                                            alt=""
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    ))
                                                )
                                            }
                                        </div>
                                    ))
                                }

                                <div>
                                    <b className="text-xs">{formatDate(data.date)}</b>
                                    <p className="text-sm">{language === 'ENG' ? truncateText(data.english_short_description, 80) : truncateText(data.bangla_short_description, 100)}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentPostFetchData;
