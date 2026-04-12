/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/share/Container";
import ShareLink from "@/components/share/ShareLink/ShareLink";
import { TActivity } from "@/types/type";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import ActivitySidebar from "./ActivitySidebar";
import { useLanguage } from "@/provider/LanguageProvider";
import RenderContent from "@/components/Common/RenderContent";
import { stripHtml } from "@/utils/stripHtml";

type SingleActivityProps = {
  singleActivityData: TActivity;
  initialLanguage?: string;
};

const SingleActivity = ({
  singleActivityData,
  initialLanguage = "ENG",
}: any) => {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Sync client language with server language
  useEffect(() => {
    if (initialLanguage && setLanguage) {
      setLanguage(initialLanguage);
    }
    setMounted(true);
  }, [initialLanguage, setLanguage]);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  const isEnglish = language === "ENG";

  // Use bangla_title and bangla_short_description when language is BNG
  const title = isEnglish
    ? singleActivityData.english_title
    : singleActivityData.bangla_title;

  // FIX: Use correct short description based on language
  const description = isEnglish
    ? stripHtml(singleActivityData.english_short_description ?? "")
    : stripHtml(singleActivityData.bangla_short_description ?? "");

  const hashtag = isEnglish
    ? `#${singleActivityData.english_title?.replace(/\s+/g, "")}`
    : `#${singleActivityData.bangla_title?.replace(/\s+/g, "")}`;

  // FIX: Use correct images based on language
  const shareImage = isEnglish
    ? singleActivityData.eng_images?.[0]
    : singleActivityData.bng_Images?.[0];

  // Debug log to verify data
  console.log("Current language:", language);
  console.log("Is English:", isEnglish);
  console.log("Title:", title);
  console.log("Description:", description);
  console.log("Share Image:", shareImage);

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
                {isEnglish
                  ? singleActivityData.eng_images
                      ?.slice(0, 1)
                      .map((img: string) => (
                        <Image
                          width={500}
                          height={500}
                          key={img}
                          src={img}
                          alt={title || "Activity Image"}
                          className="rounded-lg w-full h-full object-cover"
                        />
                      ))
                  : singleActivityData.bng_Images
                      ?.slice(0, 1)
                      .map((img: string) => (
                        <Image
                          width={500}
                          height={500}
                          key={img}
                          src={img}
                          alt={title || "Activity Image"}
                          className="rounded-lg w-full h-full object-cover"
                        />
                      ))}
              </div>
              <div className="mt-5">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-justify mt-5">
                  <RenderContent
                    content={
                      isEnglish
                        ? singleActivityData.english_description
                        : singleActivityData.bangla_description
                    }
                  />
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

        <ShareLink
          shareUrl={shareUrl}
          title={title || ""}
          hashtag={hashtag}
          description={description}
          imageUrl={shareImage}
        />
      </Container>
    </div>
  );
};

export default SingleActivity;
