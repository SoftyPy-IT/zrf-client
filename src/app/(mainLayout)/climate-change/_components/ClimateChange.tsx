import Image from "next/image";
import Container from "@/components/share/Container";

import { Button } from "@mui/material";
import { TWhatWeDo } from "@/types/type";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import { useState } from "react";
import { buttonStyle } from "@/utils/btnStyle";
import { formatDate } from "@/utils/formateDate";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";

interface CovidProps {
    climateChangeData: TWhatWeDo[] | null;
    language: string,
}
const ClimateChange: React.FC<CovidProps> = ({ climateChangeData, language }) => {

    const title = language === 'ENG' ? 'Climate Change Programs' : 'জলবায়ু পরিবর্তন কার্যক্রম'

    const [visibleCount, setVisibleCount] = useState(6);
    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 6);
    };

    const sortedClimateChangeData = climateChangeData?.sort((a: TWhatWeDo, b: TWhatWeDo) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
    });


    return (
        <>
            <CommonBanner title={title} />
            <Container className="my-20">
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    {sortedClimateChangeData?.slice(0, visibleCount)?.map((data, index) => (
                        <div
                            className="relative shadow-md overflow-hidden group border"
                            key={index}
                        >

                            {
                                language === 'ENG' ? (
                                    data.eng_images?.slice(0, 1).map((img) => (
                                        <Image
                                            width={500}
                                            height={500}
                                            key={img}
                                            src={img}
                                            alt=""
                                            className="w-full h-[300px] lg:h-[400px] object-cover"
                                        />
                                    ))
                                ) : (
                                    data.bng_Images?.slice(0, 1).map((img) => (
                                        <Image
                                            width={500}
                                            height={500}
                                            key={img}
                                            src={img}
                                            alt=""
                                            className="w-full h-[300px] lg:h-[400px] object-cover"
                                        />
                                    ))
                                )
                            }

                            <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 lg:p-4 bg-blue-950 border-t border-gray-300 md:rounded-t-3xl h-[150px] md:h-[200px] lg:h-[200px] mt-28 md:mt-0 lg:mt-0">
                                <h4 className="text-xl text-white ">{language == 'ENG' ? data.english_title?.slice(0, 50) : data.bangla_title?.slice(0, 50)}...</h4>
                                <p className="mt-2 text-white">
                                    {language == 'ENG' ? data.english_short_description?.slice(0, 180) : data.bangla_short_description?.slice(0, 180)} ...
                                </p>
                            </div>

                            <div className="absolute inset-x-0 bottom-0 bg-green-700 text-[#fff] transition-transform transform translate-y-full group-hover:translate-y-0 duration-500 ease-in-out h-[250px] md:h-[230px] md:rounded-t-3xl">
                                <div className="w-full p-2 md:p-4 lg:p-4 lg:h-full">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <h4 className="text-xl ">{language == 'ENG' ? data.english_title?.slice(0, 50) : data.bangla_title?.slice(0, 50)}...</h4>
                                        </div>
                                        <p className="text-justify  text-sm "> {language == 'ENG' ? data.english_short_description?.slice(0, 200) : data.bangla_short_description?.slice(0, 200)}... </p>


                                        <div className="flex justify-between mt-3 w-full items-center ">
                                            <b>
                                                {formatDate(data.date)}
                                            </b>
                                            <Link href={`/climate-change/${data._id}`}>
                                                <Button sx={buttonStyle}>
                                                    {language === "ENG" ? "Read More" : "আরও পড়ুন"}{" "}
                                                    <EastIcon sx={{ fontSize: { md: '20px', xs: '20px' } }} />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleCount < (sortedClimateChangeData?.length || 0) && (
                    <div className="flex items-center justify-center mt-5 ">
                        <Button
                            onClick={loadMore}
                            className="bg-gradient-to-r from-yellow-600 to-green-600 p-1 text-[9px] md:text-sm  md:px-3  md:py-1 rounded text-white"
                        >
                            {language === "ENG" ? "Load More" : "আরো লোড"}
                        </Button>
                    </div>
                )}

            </Container>
        </>
    );
};

export default ClimateChange;
