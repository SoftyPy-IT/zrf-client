"use client";
import React from "react";

import Image from "next/image";
import Container from "@/components/share/Container";
import ShareLink from "@/components/share/ShareLink/ShareLink";
import { TProject } from "@/types/type";
import ReactHtmlParser from "react-html-parser";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import RecentProjectPost from "./RecentProjectPost";


type SingleProjectProps = {
    singleProjectData: TProject,
    language: string
}

const renderContent = (content: string) => {
    const parsedContent = ReactHtmlParser(content);

    return parsedContent.map((element, index) => {
        if (!element || !element.type) return null;

        switch (element.type) {
            case "h1":
                return (
                    <h1 key={index} className="text-2xl font-bold mb-2">
                        {element.props.children}
                    </h1>
                );
            case "h2":
                return (
                    <h2 key={index} className="text-xl font-bold mb-2">
                        {element.props.children}
                    </h2>
                );
            case "h3":
                return (
                    <h3 key={index} className="text-lg font-bold mb-2">
                        {element.props.children}
                    </h3>
                );
            case "h4":
                return (
                    <h4 key={index} className="text-md font-semibold mb-2">
                        {element.props.children}
                    </h4>
                );
            case "h5":
                return (
                    <h5 key={index} className="text-sm font-medium mb-2">
                        {element.props.children}
                    </h5>
                );
            case "p":
                return (
                    <p key={index} className="mb-2 text-justify">
                        {element.props.children}
                    </p>
                );
            case "blockquote":
                return (
                    <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic mb-4">
                        {element.props.children}
                    </blockquote>
                );
            case "ul":
                return (
                    <ul key={index} className="list-disc ml-5 mb-2">
                        {element.props.children}
                    </ul>
                );
            case "ol":
                return (
                    <ol key={index} className="list-decimal ml-5 mb-2">
                        {element.props.children}
                    </ol>
                );
            case "li":
                return (
                    <li key={index} className="mb-1">
                        {element.props.children}
                    </li>
                );
            case "b":
                return (
                    <b key={index} className="font-bold">
                        {element.props.children}
                    </b>
                );
            case "small":
                return (
                    <small key={index} className="text-xs text-gray-600">
                        {element.props.children}
                    </small>
                );
            case "div":
                const alignmentClass =
                    element.props.className === "ql-align-center"
                        ? "text-center"
                        : element.props.className === "ql-align-right"
                            ? "text-right"
                            : "text-left";
                return (
                    <div key={index} className={`${alignmentClass} mb-2`}>
                        {element.props.children}
                    </div>
                );
            default:
                // Render unhandled tags as-is
                return React.createElement(
                    element.type,
                    { ...element.props, key: index },
                    element.props.children
                );
        }
    });
};

const SingleProjectData = ({ singleProjectData, language }: SingleProjectProps) => {


    return (
        <div>
            <CommonBanner title={language === 'ENG' ? 'Our Project' : 'আমাদের প্রকল্প'} />
            <Container>
                <div className="lg:flex md:flex gap-10  mt-10 ">
                    <div className="w-full grid grid-cols-1">
                        <div className="h-full w-full">

                            <div className="relative w-full h-[200px] md:h-[400px] mb-6">
                                {
                                    singleProjectData.bng_Images?.slice(0, 1).map((img) => (
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
                            <div className="mt-5">
                                <h3 className="text-2xl font-semibold">{language === 'ENG' ? singleProjectData.english_title : singleProjectData.bangla_title}</h3>
                                <p className="text-justify mt-5"> {language === 'ENG' ? renderContent(singleProjectData.english_description) : renderContent(singleProjectData.bangla_description)} </p>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="sticky top-24">
                            <RecentProjectPost />
                        </div>
                    </div>
                </div>


                <ShareLink />
            </Container>
        </div>
    );
};

export default SingleProjectData;
