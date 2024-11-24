import { TIntroduction } from '@/types/type';
import { Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';


interface introductionProps {
    introductionData: TIntroduction[];
    language: string,
    handleOpen: (
        englishTitle: string,
        banglaDescription: string,
        banglaTitle: string,
        englishDescription: string
    ) => void;

}
import ReactHtmlParser from "react-html-parser";

const renderContent = (content: string) => {
    const parsedContent = ReactHtmlParser(content);

    return parsedContent.map((element, index) => {
        if (element.type === "h1") {
            return (
                <h1 key={index} className="text-2xl font-bold mb-2 ">
                    {element.props.children}
                </h1>
            );
        } else if (element.type === "h2") {
            return (
                <h2 key={index} className="text-xl font-bold mb-2 ">
                    {element.props.children}
                </h2>
            );
        } else if (element.type === "h3") {
            return (
                <h3 key={index} className="text-xl font-bold mb-2 ">
                    {element.props.children}
                </h3>
            );
        } else if (element.type === "p") {
            return (
                <p key={index} className="mb-2">
                    {element.props.children}
                </p>
            );




        } else {
            return null;
        }
    });
};



const Biography: React.FC<introductionProps> = ({ handleOpen, introductionData, language, }) => {

    const filteredData = introductionData.slice(1);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredData.map((data) => (
                    <div
                        key={data._id}
                        className="rounded shadow-lg p-5 grid grid-cols-1 xl:grid-cols-2 gap-5"
                    >

                        <div className="order-1 xl:order-2 md:h-64 object-fill lg:h-64 overflow-hidden">
                            {
                                data.bng_images?.slice(0, 1).map((img) => (
                                    <Image
                                        width={500}
                                        height={500}
                                        key={img}
                                        src={img}
                                        alt=""
                                        className="w-full h-full rounded"
                                    />
                                ))
                            }
                        </div>

                        <div className="order-2 xl:order-1">
                            <h2 className="text-xl font-bold mb-3 text-center">
                                {language === 'ENG' ? data.english_title : data.bangla_title}
                            </h2>
                            <p className="text-justify">
                                {language === 'ENG' ? renderContent(data.english_description?.slice(0, 300)) : renderContent(data.bangla_description?.slice(0, 300))}
                                <button
                                    className="text-blue-600 text-xs"
                                    onClick={() => handleOpen(data.english_title, data.bangla_description, data.bangla_title, data.english_description)}
                                > ... {language === 'ENG' ? 'See All' : 'সব দেখুন'}
                                </button>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Biography;