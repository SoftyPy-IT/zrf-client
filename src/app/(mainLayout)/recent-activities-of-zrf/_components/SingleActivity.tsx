"use client";
import React from "react";
import Image from "next/image";
import Container from "@/components/share/Container";
import ShareLink from "@/components/share/ShareLink/ShareLink";
import { TActivity } from "@/types/type";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import ActivitySidebar from "./ActivitySidebar";


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
                <p className="text-justify mt-5"> {language === 'ENG' ? singleActivityData.english_short_description : singleActivityData.bangla_short_description}
                </p>
              </div>
            </div>
          </div>

         <ActivitySidebar/>
        </div>

        <ShareLink />
      </Container>
    </div>
  );
};

export default SingleActivity;
