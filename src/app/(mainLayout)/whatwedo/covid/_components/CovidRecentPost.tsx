import React from "react";
import Image from "next/image";
import { TWhatWeDo } from "@/types/type";
import Link from "next/link";

interface covidProps {
    covidData: TWhatWeDo[] | null;
    language: string;
}



export const CovidRecentPost: React.FC<covidProps> = ({ covidData, language }) => {

    const formatDate = (dateString: string | number | Date) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }
    const sortedCovidData = covidData?.sort((a: TWhatWeDo, b: TWhatWeDo) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
    });


    return (
        <div>
            <div className="bg-gray-100 p-5 rounded">
                <h3>{language === 'ENG' ? 'Popular Post' : 'জনপ্রিয় পোস্ট'}</h3>
                <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
                <div className="flex flex-col gap-3 mt-5">
                    {sortedCovidData?.slice(0, 5).map((data) => (
                        <div key={data._id}>
                            <Link href={`/whatwedo/covid/${data._id}`}>
                                <div className="flex flex-col md:flex-row gap-5 ">

                                    {
                                        data.bng_Images?.slice(0, 1).map((img) => (
                                            <div className="relative w-full max-w-[14rem] aspect-[56/16]" key={img}>
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
                                        <p className="text-xs">{formatDate(data.date)}</p>
                                        <p className="text-sm">
                                            {language === 'ENG'
                                                ? data.english_short_description?.slice(0, 100)
                                                : data.bangla_short_description?.slice(0, 100)}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
