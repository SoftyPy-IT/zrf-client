"use client";
import React from "react";

import Image from "next/image";
import Container from "@/components/share/Container";
import ShareLink from "@/components/share/ShareLink/ShareLink";
import { TProject } from "@/types/type";
import ReactHtmlParser from "react-html-parser";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import RecentProjectPost from "./RecentProjectPost";
import { TextField } from "@mui/material";
import Link from "next/link";


type SingleProjectProps = {
    singleProjectData: TProject,
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


                    <RecentProjectPost />
                </div>

            
                <ShareLink />
            </Container>
        </div>
    );
};

export default SingleProjectData;
