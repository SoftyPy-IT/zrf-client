/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

import Container from "@/components/share/Container";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Sidebar from "../_components/Sidebar";
import ReactHtmlParser from "react-html-parser";
import ShareLink from "@/components/share/ShareLink/ShareLink";
import { TWhatWeDo } from "@/types/type";
import Image from "next/image";
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
                <h1 key={index} className="text-2xl font-bold mb-2">
                    {element.props.children}
                </h1>
            );
        } else if (element.type === "h2") {
            return (
                <h2 key={index} className="text-xl font-bold mb-2">
                    {element.props.children}
                </h2>
            );
        } else if (element.type === "h4") {
            return (
                <h2 key={index} className=" font-bold mb-2">
                    {element.props.children}
                </h2>
            );
        } else if (element.type === "h3") {
            return (
                <h3 key={index} className="text-lg font-bold mb-2">
                    {element.props.children}
                </h3>
            );
        } else if (element.type === "b") {
            return (
                <b key={index} className="font-bold">
                    {element.props.children}
                </b>

            );
        } else if (element.type === "b") {
            return (
                <small key={index} className="text-sm">
                    {element.props.children}
                </small>

            );
        } else if (element.type === "b") {
            return (
                <span key={index} className="inline-block">
                    {element.props.children}
                </span>

            );
        } else if (element.type === "img") {
            return (
                <div key={index} className="w-[700px] h-[400px]">
                    <img

                        src={element.props.src}
                        alt="this is image"
                        className="mb-2"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
            );
        } else if (element.type === "ol") {
            return (
                <ol key={index} className="list-decimal list-inside mb-5">
                    {element.props.children}
                </ol>
            );
        } else if (element.type === "ul") {
            return (
                <ul key={index} className="list-disc list-inside mb-5">
                    {element.props.children}
                </ul>
            );
        }
        else if (element.type === "p") {
            return (
                <p key={index} className="mb-2">
                    {element.props.children}
                </p>
            );
        } else if (element.type === "video") {
            return (
                <video
                    key={index}
                    className="w-full h-auto mb-4"
                    controls
                    src={element.props.src}
                >
                    Your browser does not support the video tag.
                </video>
            );
        } else if (element.type === "iframe") {
            return (
                <iframe
                    key={index}
                    className="w-full h-[500px] mb-4"
                    src={element.props.src}
                    title={`iframe-${index}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            );
        } else if (
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

const SingleWhatwedo = ({ whatWedoData, language }: SingleWhatWeDoProps) => {


    const title = language === 'ENG' ? 'ZRF Education Programs' : 'জেডআরএফ শিক্ষা কার্যক্রম'
    return (
        <>
            <CommonBanner title={title} />

            <Container>
                <div className="h-auto lg:flex gap-5">
                    <div className="w-full mt-2 lg:mt-0 lg:p-6">
                        {/* Top Image */}
                        <div className="relative w-full   mb-6">

                            {
                                whatWedoData.bng_Images?.slice(0, 1).map(() => (
                                    language === "ENG"
                                        ? whatWedoData.eng_images?.slice(0, 1).map((img) => (
                                            <Image
                                                width={500}

                                                height={500}
                                                key={img}
                                                src={img}
                                                alt="Top Image"
                                                className="rounded-lg w-full h-full object-cover"
                                            />
                                        ))
                                        : whatWedoData.bng_Images?.slice(0, 1).map((img) => (
                                            <Image
                                                width={500}
                                                height={500}
                                                key={img}
                                                src={img}
                                                alt="education"
                                                className="rounded-lg w-full h-full object-cover"
                                            />
                                        ))
                                ))
                            }
                        </div>

                        <h1 className="text-3xl font-bold mb-4">{language === 'ENG' ? whatWedoData.english_title : whatWedoData.bangla_title}
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
                        <Sidebar />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default SingleWhatwedo;
