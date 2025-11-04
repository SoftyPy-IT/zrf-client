/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

import Container from "@/components/share/Container";
import ShareLink from "@/components/share/ShareLink/ShareLink";
import { TActivity } from "@/types/type";
import Image from "next/image";
import RecentNewsSidebar from "./RecentNewsSidebar";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import { useLanguage } from "@/provider/LanguageProvider";
import RenderContent from "@/components/Common/RenderContent";
import { stripHtml } from "@/utils/stripHtml";

type SingleProjectProps = {
  singleNewsData: TActivity;
};

const SingleNews = ({ singleNewsData }: SingleProjectProps) => {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const { language } = useLanguage();
  const description =
    language === "ENG"
      ? stripHtml(singleNewsData?.english_description ?? "")
      : stripHtml(singleNewsData?.bangla_description ?? "");

  return (
    <>
      <CommonBanner
        title={language === "ENG" ? "Upcoming Programs" : "আসন্ন প্রোগ্রাম"}
      />
      <Container>
        <div className="grid md:grid-cols-12 gap-7 my-10">
          <div className="md:col-span-7 lg:col-span-8">
            <div className="relative w-full h-[200px] md:h-[400px] mb-6">
              {language === "BNG"
                ? singleNewsData.bng_Images
                    ?.slice(0, 1)
                    .map((img) => (
                      <Image
                        width={500}
                        height={500}
                        key={img}
                        src={img}
                        alt="Top Image"
                        className="rounded-md w-full h-full"
                      />
                    ))
                : singleNewsData.eng_images
                    ?.slice(0, 1)
                    .map((img) => (
                      <Image
                        width={500}
                        height={500}
                        key={img}
                        src={img}
                        alt="Top Image"
                        className="rounded-md w-full h-full"
                      />
                    ))}
            </div>

            <h1 className="text-2xl font-bold mb-5">
              {language === "ENG"
                ? singleNewsData.english_title
                : singleNewsData.bangla_title}
            </h1>

            <p className="text-lg text-gray-800 text-justify">
              <RenderContent
                content={
                  language === "ENG"
                    ? singleNewsData.english_description
                    : singleNewsData.bangla_description
                }
              />
            </p>

            <div className=" md:flex lg:flex justify-between items-center mb-8 space-y-3">
              <div className="flex items-center gap-4">
                <ShareLink
                  shareUrl={shareUrl}
                  title={
                    language === "ENG"
                      ? singleNewsData?.english_title
                      : singleNewsData?.bangla_title
                  }
                  hashtag={`#${singleNewsData?.bangla_title}`}
                  description={description}
                />
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <a href="#" className="text-green-600">
                ←{language === "ENG" ? "Prev Post" : "পূর্ববর্তী পোস্ট"}
              </a>
              <a href="#" className="text-green-600">
                {language === "ENG" ? "Next Post" : "পরবর্তী পোস্ট"} →
              </a>
            </div>
          </div>

          <div className="md:col-span-5 lg:col-span-4">
            <div className="sticky top-24">
              <RecentNewsSidebar />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleNews;
