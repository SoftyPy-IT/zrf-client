"use client";
import React from "react";

import Image from "next/image";
import Container from "@/components/share/Container";
import ShareLink from "@/components/share/ShareLink/ShareLink";
import { TProject } from "@/types/type";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import RecentProjectPost from "./RecentProjectPost";
import { useLanguage } from "@/provider/LanguageProvider";
import { stripHtml } from "@/utils/stripHtml";
import RenderContent from "@/components/Common/RenderContent";

type SingleProjectProps = {
  singleProjectData: TProject;
};

const SingleProjectData = ({ singleProjectData }: SingleProjectProps) => {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const { language } = useLanguage();
  const description =
    language === "ENG"
      ? stripHtml(singleProjectData?.english_description ?? "")
      : stripHtml(singleProjectData?.bangla_description ?? "");

  return (
    <div>
      <CommonBanner
        title={language === "ENG" ? "Our Projects" : "আমাদের প্রকল্প"}
      />
      <Container>
        <div className="grid md:grid-cols-12 gap-7 my-10">
          <div className="md:col-span-7 lg:col-span-8">
            <div className=" mb-6">
              {language === "BNG"
                ? singleProjectData.bng_Images
                    ?.slice(0, 1)
                    .map((img) => (
                      <Image
                        width={500}
                        height={400}
                        key={img}
                        src={img}
                        alt="Top Image"
                        className="rounded-md w-full h-full"
                      />
                    ))
                : singleProjectData.eng_images
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
            <div className="mt-5">
              <h3 className="text-2xl font-semibold">
                {language === "ENG"
                  ? singleProjectData.english_title
                  : singleProjectData.bangla_title}
              </h3>
              <p className="text-justify mt-5">
                <RenderContent
                  content={
                    language === "ENG"
                      ? singleProjectData.english_description
                      : singleProjectData.bangla_description
                  }
                />
              </p>
            </div>
          </div>

          <div className="md:col-span-5 lg:col-span-4">
            <div className="sticky top-24">
              <RecentProjectPost />
            </div>
          </div>
        </div>

        <ShareLink
          shareUrl={shareUrl}
          title={
            language === "ENG"
              ? singleProjectData?.english_title
              : singleProjectData?.bangla_title
          }
          hashtag={`#${singleProjectData?.bangla_title}`}
          description={description}
        />
      </Container>
    </div>
  );
};

export default SingleProjectData;
