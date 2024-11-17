"use client";
import React from "react";
import Image from "next/image";
import Container from "@/components/share/Container";
import ShareLink from "@/components/share/ShareLink/ShareLink";
import ReactHtmlParser from "react-html-parser";
import { TActivity } from "@/types/type";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";

const recentPost = [
  {
    id: 1,
    date: "November 8, 2023",
    description:
      "November 7, National Revolution and Solidarity Day Feature by Ziaur Rahman Foundation (ZRF)",
  },
  {
    id: 2,
    date: "October 21, 2023",
    description:
      "Thursday, October 19, 2023, Special event at the BNP Chairperson's Office in Gulshan on the occasion of the 24th founding anniversary of the Ziaur Rahman Foundation (ZRF)",
  },
  {
    id: 3,
    date: "October 18, 2023",
    description:
      "Tribute to the grave of Martyred President Ziaur Rahman on the occasion of the 24th founding anniversary of the Ziaur Rahman Foundation.",
  },
];

type SingleActivityProps = {
  singleActivityData: TActivity,
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
                <p className="text-justify mt-5"> {language === 'ENG' ? singleActivityData.english_short_description : singleActivityData.bangla_short_description}
                </p>
              </div>
            </div>
          </div>

          <div className="border p-5 rounded lg:w-[600px]">
            <h3 className="text-xl font-bold">Recent Post</h3>
            <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
            <div className="flex flex-col gap-8 mt-5">
              {recentPost?.map((data) => (
                <div key={data.id}>
                  <div>
                    <p className="hover:underline cursor-pointer text-justify font-semibold">
                      {data.description}
                    </p>
                    <p className="text-sm mt-2">{data.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ShareLink />
      </Container>
    </div>
  );
};

export default SingleActivity;
