import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/share/Container";
import EastIcon from "@mui/icons-material/East";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import { TActivity } from "@/types/type";
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
                    {element.props.children}...
                </p>
            );
        }


        else if (
            element.type === "div" &&
            element.props.className === "ql-align-center"
        ) {
            return (
                <div key={index} className="text-center mb-2">
                    {element.props.children}
                </div>
            );
        } else if (
            element.type === "div" &&
            element.props.className === "ql-align-right"
        ) {
            return (
                <div key={index} className="text-right mb-2">
                    {element.props.children}
                </div>
            );
        } else if (
            element.type === "div" &&
            element.props.className === "ql-align-left"
        ) {
            return (
                <div key={index} className="text-left mb-2">
                    {element.props.children}
                </div>
            );
        } else {
            return null;
        }
    });
};
interface activityProps {
    activityData: TActivity[];
    language: string,
}


const NewsData: React.FC<activityProps> = ({ activityData, language }) => {

    const filterNewsData = activityData.filter((news) => news.category === 'News')
    return (
        <div>
            <CommonBanner title={language === 'ENG' ? 'News' : 'খবর'} />
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16">
                    {filterNewsData.map((data, index: number) => (
                        <div key={index}>
                            <div className="shadow-lg lg:h-[500px] md:h-[450px] relative">
                                <div className="relative h-[250px]">
                                    {
                                        data.bng_Images?.slice(0, 1).map((img) => (
                                            <Image
                                                width={500}
                                                height={500}
                                                key={img}
                                                src={img}
                                                alt=""
                                                className="h-[250px] object-cover"
                                            />
                                        ))
                                    }
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-semibold mb-3">{language === 'ENG' ? data.english_title : data.bangla_title}</h3>
                                    <p className="text-justify">
                                        {language == 'ENG' ? renderContent(data.english_description?.slice(0, 80)) : renderContent(data.bangla_description?.slice(0, 80))}
                                    </p>
                                    <div className="flex justify-end mt-3 absolute bottom-5">
                                        <Link href={`/news/${data._id}`}>
                                            <button className="hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-1 hover:text-white rounded-full uppercase text-sm border">
                                                {language === 'ENG' ? 'Read More' : 'আরও পড়ুন'} <EastIcon />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default NewsData;
