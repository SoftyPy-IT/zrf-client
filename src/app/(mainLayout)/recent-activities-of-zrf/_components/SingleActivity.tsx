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
import { useLanguage } from "@/provider/LanguageProvider";

const renderContent = (content: string) => {
  const parsedContent = ReactHtmlParser(content);

  return parsedContent.map((element: any, index: number) => {
    const { type, props } = element;

    switch (type) {
      case "h1":
        return (
          <h1 key={index} className="text-2xl font-bold mb-2">
            {props.children}
          </h1>
        );
      case "h2":
        return (
          <h2 key={index} className="text-xl font-bold mb-2">
            {props.children}
          </h2>
        );
      case "h3":
        return (
          <h3 key={index} className="text-lg font-bold mb-2">
            {props.children}
          </h3>
        );
      case "h4":
        return (
          <h4 key={index} className="font-bold mb-2">
            {props.children}
          </h4>
        );
      case "b":
        return (
          <b key={index} className="font-bold">
            {props.children}
          </b>
        );
      case "p":
        return (
          <p key={index} className="mb-3 leading-relaxed">
            {props.children}
          </p>
        );
      case "img":
        return (
          <div key={index} className="my-4 w-full flex justify-center">
            <img
              src={props.src}
              alt={props.alt || "content image"}
              className="max-w-full rounded-lg object-cover"
            />
          </div>
        );
      case "ul":
        return (
          <ul key={index} className="list-disc list-inside mb-3">
            {props.children}
          </ul>
        );
      case "ol":
        return (
          <ol key={index} className="list-decimal list-inside mb-3">
            {props.children}
          </ol>
        );
      case "video":
        return (
          <video key={index} controls className="w-full h-auto my-4">
            <source src={props.src} />
            Your browser does not support the video tag.
          </video>
        );
      case "iframe":
        return (
          <iframe
            key={index}
            src={props.src}
            className="w-full h-[400px] my-4 rounded"
            title={`iframe-${index}`}
            frameBorder="0"
            allowFullScreen
          />
        );
      case "div":
        if (props.className === "ql-align-center")
          return (
            <div key={index} className="text-center mb-2">
              {props.children}
            </div>
          );
        if (props.className === "ql-align-right")
          return (
            <div key={index} className="text-right mb-2">
              {props.children}
            </div>
          );
        if (props.className === "ql-align-left")
          return (
            <div key={index} className="text-left mb-2">
              {props.children}
            </div>
          );
        // ✅ fallback for all other divs
        return (
          <div key={index} className="mb-2">
            {props.children}
          </div>
        );

      case "span":
        // ✅ fallback for spans with inline styles (retain their text)
        return (
          <span key={index} style={props.style}>
            {props.children}
          </span>
        );

      case "br":
        return <br key={index} />;

      default:
        // ✅ fallback for any unknown tag
        return (
          <React.Fragment key={index}>
            {props?.children || element}
          </React.Fragment>
        );
    }
  });
};

type SingleActivityProps = {
  singleActivityData: TActivity;
};

const SingleActivity = ({ singleActivityData }: SingleActivityProps) => {
  console.log("data check ", singleActivityData);
  const { language } = useLanguage();
  return (
    <div>
      <CommonBanner
        title={
          language === "ENG"
            ? "Recent Activities of ZRF"
            : "জেডআরএফ এর সাম্প্রতিক কার্যক্রম"
        }
      />
      <Container>
        <div className="lg:flex md:flex gap-10 my-16">
          <div className="w-full grid grid-cols-1">
            <div className="h-full w-full">
              <div className="relative overflow-hidden">
                {language === "BNG"
                  ? singleActivityData.bng_Images
                      ?.slice(0, 1)
                      .map((img) => (
                        <Image
                          width={500}
                          height={500}
                          key={img}
                          src={img}
                          alt="Top Image"
                          className="rounded-lg w-full h-full object-cover"
                        />
                      ))
                  : singleActivityData.eng_images
                      ?.slice(0, 1)
                      .map((img) => (
                        <Image
                          width={500}
                          height={500}
                          key={img}
                          src={img}
                          alt="Top Image"
                          className="rounded-lg w-full h-full object-cover"
                        />
                      ))}
              </div>
              <div className="mt-5">
                <h3 className="text-2xl font-semibold">
                  {language === "ENG"
                    ? singleActivityData.english_title
                    : singleActivityData.bangla_title}
                </h3>
                <p className="text-justify mt-5">
                  {" "}
                  {language === "ENG"
                    ? renderContent(singleActivityData.english_description)
                    : renderContent(singleActivityData.bangla_description)}
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
