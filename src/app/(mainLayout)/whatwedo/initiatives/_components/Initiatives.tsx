import Image from "next/image";
import Container from "@/components/share/Container";

import { Button } from "@mui/material";
import { TWhatWeDo } from "@/types/type";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";

interface CovidProps {
    whatWedoData: TWhatWeDo[];
    language: string,
}
const buttonStyle = {
    paddingY: { xs: 1, md: 2 },
    paddingX: { xs: 2, md: 4 },
    fontSize: { xs: '0.75rem', md: '1rem' },
    borderRadius: 2,
    textTransform: 'none',
}
const Initiatives: React.FC<CovidProps> = ({ whatWedoData, language }) => {
    const covidFilterData = whatWedoData.filter((edu) => edu.category === 'Health Services')
    return (
        <>
            <CommonBanner title={language == 'ENG' ? 'Initiatives' : 'উদ্যোগ'} />
            <Container className="my-20">
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {covidFilterData.map((data, index) => (
                        <div
                            className="relative shadow-md overflow-hidden group border"
                            key={index}
                        >

                            {
                                data.bng_Images?.slice(0, 1).map((img) => (
                                    <Image
                                        width={500}
                                        height={500}
                                        key={img}
                                        src={img}
                                        alt='education'
                                        className="w-full h-[300px] lg:h-[400px] object-cover"
                                    />
                                ))
                            }




                            <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 lg:p-4 bg-blue-950 border-t border-gray-300 rounded-t-3xl h-[150px] md:h-[200px] lg:h-[200px] mt-28 md:mt-0 lg:mt-0">
                                <h2 className="text-xl text-white">{language == 'ENG' ? data.english_title : data.bangla_title}</h2>
                                <p className="mt-2 text-white">
                                    {language == 'ENG' ? data.english_short_description?.slice(0, 180) : data.bangla_short_description?.slice(0, 180)} ......
                                </p>
                            </div>
                            {/* Hover content */}

                            <div className="absolute inset-x-0 bottom-0 bg-green-700 text-[#fff] transition-transform transform translate-y-full group-hover:translate-y-0 duration-500 ease-in-out h-[300px] md:h-[300px] lg:h-[300px] md:rounded-t-3xl">
                                <div className="w-full pt-8  p-2 md:p-4 lg:p-6 lg:h-full">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <h2 className="text-xl ">{language == 'ENG' ? data.english_title : data.bangla_title}</h2>
                                        </div>
                                        <p className="text-justify text-sm "> {language == 'ENG' ? data.english_short_description?.slice(0, 200) : data.bangla_short_description?.slice(0, 200)} </p>

                                        <Button
                                            href={`/whatwedo/initiatives/${data._id}`}
                                            className="hover:bg-blue-700 text-white rounded"
                                            sx={buttonStyle}
                                        >
                                            {language === 'ENG' ? 'Details' : 'বিস্তারিত'}
                                        </Button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default Initiatives;
