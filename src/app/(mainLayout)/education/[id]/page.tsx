"use client";
import React from "react";
import Banner from "../_components/Banner";
import Container from "@/components/share/Container";
import Image from "next/image";
import img1 from "../../../../assets/images/education/4.jpg";
import img2 from "../../../../assets/images/education/5.jpg";
import img3 from "../../../../assets/images/education/6.jpg";


import titleImage from "../../../../assets/images/education/1.jpg";

import media1 from "../../../../assets/images/news/news (1).jpg";
import media2 from "../../../../assets/images/news/news (2).jpg";
import media3 from "../../../../assets/images/news/news (3).jpg";
import media4 from "../../../../assets/images/news/news (4).jpg";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Tooltip } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Sidebar from "../_components/Sidebar";
import SendIcon from "@mui/icons-material/Send";
import ZRFInput from "@/components/Forms/Input";
import ZRFForm from "@/components/Forms/Form";
import { blue } from "@mui/material/colors";
import ShareLink from "@/components/share/ShareLink/ShareLink";

const newsData = [
  {
    id: 1,
    description:
      "৭ নভেম্বর জাতীয় বিপ্লব ও সংহতি দিবস ক্রোড়পত্র জিয়াউর রহমান ফাউন্ডেশন (জেডআরএফ)",
    img: media2,
    date: "01/01/2001",
  },
  {
    id: 1,
    description:
      "বৃহস্পতিবার, অক্টোবর ১৯, ২০২৩, জিয়াউর রহমান ফাউন্ডেশন -জেআরএফ এর ২৪তম প্রতিষ্ঠা বার্ষিকী উপলক্ষ্যে গুলশানস্থ বিএনপি চেয়ারপারসন কার্যালয়ে বিশেষ অনুষ্ঠান",
    img: media3,
    date: "01/01/2001",
  },
  {
    id: 1,
    description:
      "জিয়াউর রহমান ফাউন্ডেশন’র ২৪তম প্রতিষ্ঠা বার্ষিকী উপলক্ষে শহিদ প্রেসিডেন্ট জিয়াউর রহমান’র সমাধিতে শ্রদ্ধা নিবেদন।",
    img: media4,
    date: "01/01/2001",
  },
];

const DescriptionPage = () => {
  const handleSubmit = () => {

  };
  return (
    <>
      <Banner />
      <Container>
        <div className="h-auto lg:flex gap-5">
          <div className="w-full mt-2 lg:mt-0 lg:p-6">
            {/* Top Image */}
            <div className="relative w-full h-[200px] md:h-[400px] lg:h-[700px] mb-6">
              <Image
                src={titleImage}
                alt="Top Image"
                layout="fill"
                className="rounded-lg "
              />
            </div>

            {/* Publish Time */}
            <div className="flex gap-5 mb-4 text-gray-600">
              <p className="text-sm">
                <CalendarMonthOutlinedIcon /> Published on: November 23, 2021
              </p>
              <p className="text-sm">
                <AccountCircleOutlinedIcon /> Author: ZRF Admin
              </p>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">ভবিষ্যত বিজ্ঞানীর খোজেঁ</h1>

            {/* Description */}
            <p className="mb-6 text-lg text-gray-800 text-justify">
              শিশুদের একান্ত বন্ধু শহীদ রাষ্ট্রপতি জিয়াউর রহমান শিশুদের সুস্থ
              সুন্দর মানসিকতায় গড়ে তোলার বাসনায় গ্রহন করেছিলেন ‘নতুন কুড়িঁ’ এর
              মতো প্রতিভা বিকাশের প্লাটফর্ম। 
            </p>

            {/* Block Quote */}
            <blockquote className="border-l-4 text-2xl border-gray-500 pl-6 italic text-gray-700 mb-10 ">
              <p>
                “করোনা মহামারীতে স্থবির হয়ে যাওয়া শিক্ষা ব্যবস্থায় প্রানের
                স্পন্দন ফিরিয়ে আনতে গতবছর আয়োজন করেছিল বিজ্ঞানমনস্ক
                শিক্ষার্থীদের মেধাবিকাশের প্লাটফর্ম ভার্চুয়াল বিজ্ঞান মেলা
                ‘ভবিষ্যত বিজ্ঞানীর খোজেঁ’।”
              </p>
            </blockquote>

            {/* Additional Description */}
            <p className="mb-6 text-lg text-gray-800 text-justify">
            শহীদ রাষ্ট্রপতি জিয়াউর রহমান এর
              লালিত স্বপ্ন গুলো বাস্তবায়নে প্রতিনিয়ত কাজ করে যাওয়া জিয়াউর রহমান
              ফাউন্ডেশন, করোনা মহামারীতে স্থবির হয়ে যাওয়া শিক্ষা ব্যবস্থায়
              প্রানের স্পন্দন ফিরিয়ে আনতে গতবছর আয়োজন করেছিল বিজ্ঞানমনস্ক
              শিক্ষার্থীদের মেধাবিকাশের প্লাটফর্ম ভার্চুয়াল বিজ্ঞান মেলা
              ‘ভবিষ্যত বিজ্ঞানীর খোজেঁ’।

              
            </p>

            {/* Three Images in One Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="relative w-full h-[200px]">
                <Image
                  src={img1}
                  alt="Image 1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="relative w-full h-[200px]">
                <Image
                  src={img2}
                  alt="Image 2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="relative w-full h-[200px]">
                <Image
                  src={img3}
                  alt="Image 3"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Final Description */}
            <p className="text-lg text-gray-800 text-justify">
            এর ধারাবাহিকতায় জিয়াউর রহমান ফাউন্ডেশনের উদ্যোগে এ বছর আবারো
              অনুষ্ঠিত হতে যাচ্ছে ভার্চুয়াল বিজ্ঞান মেলা। সকলের আন্তরিক
              প্রচেষ্টা আর প্রচারণাই পারে ভার্চুয়াল বিজ্ঞান মেলা “ভবিষ্যৎ
              বিজ্ঞানীর খোজেঁ” এর সফলতা এনে দিতে। বিজ্ঞানের ছোঁয়ায় জ্ঞানের আলোয়
              উদ্ভাসিত হোক মানবজীবন।
            </p>

            {/* Bookmark and Social Media Section */}
            <hr className="my-6" />
            <div className=" md:flex lg:flex justify-between items-center mb-8 space-y-3">
              <div className="flex items-center gap-2">
                <BookmarkIcon className="text-gray-600 cursor-pointer" />
                <h4>Politics,</h4>
                <h4>Social Work</h4>
              </div>
              <div className="flex items-center gap-4">
                <ShareLink/>
                {/* <h1>Share:</h1>
                <FacebookIcon className="text-gray-600 cursor-pointer" />
                <LinkedInIcon className="text-gray-600 cursor-pointer" />
                <XIcon className="text-gray-600 cursor-pointer" /> */}
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <a href="#" className="text-green-600">
                ← Prev Post
              </a>
              <a href="#" className="text-green-600">
                Next Post →
              </a>
            </div>
            {/* user comment */}
            {/* <div className="p-5 bg-gray-100 mt-5 rounded">
              <div className="w-16 h-16">
                <Image
                  src={media1}
                  alt="John Doe"
                  className="rounded-full object-cover w-full h-full border-2 border-green-600"
                />
              </div>
              <div className="w-full">
                <p className="font-medium mt-2">John Doe</p>
                <p className="text-xs">April 24, 2024 at 10:59 am</p>
                <hr className="mt-3" />
                <p className="mt-3 text-sm text-justify">
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
                <button className="mt-4 text-green-600 text-sm font-medium hover:underline">
                  Reply
                </button>
              </div>
            </div> */}

            {/* comment section */}
            {/* <ZRFForm onSubmit={handleSubmit}>
              <div className="flex justify-between content-center items-center gap-5 mt-5">
                <ZRFInput
                  name="comment"
                  label="Add a Comment..."
                  variant="outlined"
                  fullWidth
                  
                />
                <div className="flex justify-end mt-5">
                  <button className="">
                    <Tooltip title="Submit">
                      <SendIcon sx={{color:blue}}/>
                    </Tooltip>
                  </button>
                </div>
              </div>
            </ZRFForm> */}
          </div>
          {/* Sidebar */}
          <div className="w-full lg:w-[600px] lg:mt-6 md:mt-0 mt-5">
            <Sidebar />
          </div>
        </div>
      </Container>
    </>
  );
};

export default DescriptionPage;
