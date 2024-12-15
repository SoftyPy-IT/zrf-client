/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Image from "next/image";
import Container from "@/components/share/Container";
import ShareLink from "@/components/share/ShareLink/ShareLink";
import { TActivity } from "@/types/type";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import ActivitySidebar from "./ActivitySidebar";
import ReactHtmlParser from "react-html-parser";

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
        }else if (element.type === "h4") {
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
        }else if (element.type === "b") {
            return (
                <small key={index} className="text-sm">
                    {element.props.children}
                </small>

            );
        }else if (element.type === "b") {
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
type SingleActivityProps = {
  singleActivityData: TActivity,
  language: string
}


const SingleActivity = ({ singleActivityData, language }: SingleActivityProps) => {


  return (
    <div>
      <CommonBanner title={language === 'ENG' ? "Recent Activities of ZRF" : 'জেডআরএফ এর সাম্প্রতিক কার্যক্রম'} />
      <Container>
        <div className="lg:flex md:flex gap-10 my-16">
          <div className="w-full grid grid-cols-1">
            <div className="h-full w-full">
              <div className="relative overflow-hidden">


                {singleActivityData.bng_Images?.slice(0, 1).map((img) => (
                  <>
                    <Image
                      src={img}
                      alt='activity'
                      className="object-cover w-full lg:h-[400px] rounded"
                      width={1000}
                      height={500}
                    />
                  </>
                ))}
              </div>
              <div className="mt-5">
                <h3 className="text-2xl font-semibold">{language === 'ENG' ? singleActivityData.english_title : singleActivityData.bangla_title}</h3>
                <p className="text-justify mt-5"> {language === 'ENG' ? renderContent(singleActivityData.english_description) : renderContent(singleActivityData.bangla_description)}
                </p>
              </div>
            </div>
          </div>


          <div>
            <div className="sticky top-32 w-full lg:w-[450px]">
              <ActivitySidebar />
            </div>
          </div>
        </div>

        <ShareLink />
      </Container>
    </div>
  );
};

export default SingleActivity;
