/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Container from "@/components/share/Container";
import Sidebar from "../_components/Sidebar";
import ShareLink from "@/components/share/ShareLink/ShareLink";
import { TWhatWeDo } from "@/types/type";
import Image from "next/image";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import { useLanguage } from "@/provider/LanguageProvider";
import RenderContent from "@/components/Common/RenderContent";
import { stripHtml } from "@/utils/stripHtml";

type SingleWhatWeDoProps = {
  whatWedoData: TWhatWeDo;
};

const SingleWhatwedo = ({ whatWedoData }: SingleWhatWeDoProps) => {
  const { language } = useLanguage();
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const description =
    language === "ENG"
      ? stripHtml(whatWedoData?.english_description ?? "")
      : stripHtml(whatWedoData?.bangla_description ?? "");

  return (
    <>
      <CommonBanner
        title={
          language === "ENG"
            ? "ZRF Education Programs"
            : "জেডআরএফ শিক্ষা কার্যক্রম"
        }
      />

      <Container>
        <div className="grid md:grid-cols-12 gap-7 my-10">
          <div className="md:col-span-7 lg:col-span-8">
            {/* Top Image */}
            <div className="relative w-full mb-6">
              {whatWedoData.bng_Images?.slice(0, 1).map(() =>
                language === "ENG"
                  ? whatWedoData.eng_images?.slice(0, 1).map((img) => (
                      <div
                        key={img}
                        className="mb-6"
                      >
                        <Image
                          width={500}
                          height={500}
                          key={img}
                          src={img}
                          alt="education"
                          className="rounded-lg w-full h-full"
                        />
                      </div>
                    ))
                  : whatWedoData.bng_Images?.slice(0, 1).map((img) => (
                      <div key={img} className="">
                        <Image
                          width={500}
                          height={500}
                          key={img}
                          src={img}
                          alt="education"
                          className="rounded-lg w-full h-full"
                        />
                      </div>
                    ))
              )}
            </div>

            <h1 className="text-3xl font-bold mb-4">
              {language === "ENG"
                ? whatWedoData.english_title
                : whatWedoData.bangla_title}
            </h1>

            <p className="text-lg text-gray-800 text-justify">
              <RenderContent
                content={
                  language === "ENG"
                    ? whatWedoData.english_description
                    : whatWedoData.bangla_description
                }
              />
            </p>

            <div className=" md:flex lg:flex justify-between items-center mb-8 space-y-3">
              <div className="flex items-center gap-4">
                <ShareLink
                  shareUrl={shareUrl}
                  title={
                    language === "ENG"
                      ? whatWedoData?.english_title
                      : whatWedoData?.bangla_title
                  }
                  hashtag={`#${whatWedoData?.bangla_title}`}
                  description={description}
                />
              </div>
            </div>
            {/* <div className="flex justify-between items-center mt-5">
              <a href="#" className="text-green-600">
                ←{language === "ENG" ? "Prev Post" : "পূর্ববর্তী পোস্ট"}
              </a>
              <a href="#" className="text-green-600">
                {language === "ENG" ? "Next Post" : "পরবর্তী পোস্ট"} →
              </a>
            </div> */}
          </div>

          <div className="md:col-span-5 lg:col-span-4">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleWhatwedo;
