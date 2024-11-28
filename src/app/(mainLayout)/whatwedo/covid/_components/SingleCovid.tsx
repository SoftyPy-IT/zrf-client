"use client";
import React from "react";
import Container from "@/components/share/Container";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareLink from "@/components/share/ShareLink/ShareLink";
import { TWhatWeDo } from "@/types/type";
import Image from "next/image";
import CovidSidebar from "./CovidSidebar";

import ReactHtmlParser from "react-html-parser";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";

type SingleWhatWeDoProps = {
    whatWedoData: TWhatWeDo,
    language: string
}

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

const SingleCovid = ({ whatWedoData, language }: SingleWhatWeDoProps) => {


    const title = language === 'ENG' ? whatWedoData.english_title : whatWedoData.bangla_title
    return (
        <>
            <CommonBanner title={title} />
            <Container>
                <div className="h-auto lg:flex gap-5">
                    <div className="w-full mt-2 lg:mt-0 lg:p-6">
                        {/* Top Image */}
                        <div className="relative w-full h-[200px] md:h-[400px] lg:h-[500px] mb-6">
                            {
                                whatWedoData.bng_Images?.slice(0, 1).map((img) => (
                                    <Image
                                        width={500}
                                        height={500}
                                        key={img}
                                        src={img}
                                        alt="Top Image"

                                        className="rounded-lg w-full h-full object-cover"
                                    />
                                ))
                            }
                        </div>

                        <h1 className="text-xl md:text-3xl font-bold mb-4">{language === 'ENG' ? whatWedoData.english_title : whatWedoData.bangla_title}
                        </h1>

                        <p className="text-lg text-gray-800 text-justify">
                            {
                                language === 'ENG' ? renderContent(whatWedoData.english_description) : renderContent(whatWedoData.bangla_description)

                            }
                        </p>

                        <hr className="my-6" />
                        <div className=" md:flex lg:flex justify-between items-center mb-8 space-y-3">
                            <div className="flex items-center gap-2">
                                <BookmarkIcon className="text-gray-600 cursor-pointer" />

                                <h4>{language === 'ENG' ? 'Social Work' : 'সামাজিক কাজ'}  </h4>
                            </div>
                            <div className="flex items-center gap-4">
                                <ShareLink />

                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <a href="#" className="text-green-600">
                                ←{language === 'ENG' ? 'Prev Post' : 'পূর্ববর্তী পোস্ট'}
                            </a>
                            <a href="#" className="text-green-600">
                                {language === 'ENG' ? 'Next Post' : 'পরবর্তী পোস্ট'}   →
                            </a>
                        </div>

                    </div>

                    <div className="w-full lg:w-[600px] lg:mt-6 md:mt-0 mt-5">
                        <CovidSidebar />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default SingleCovid;
