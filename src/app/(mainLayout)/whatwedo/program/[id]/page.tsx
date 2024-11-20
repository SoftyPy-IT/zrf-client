import React from "react";
import Banner from "../_components/Banner";
import Container from "@/components/share/Container";
import Image from "next/image";
import titleImage from "../../../../../assets/images/program/1.jpg";
import img1 from "../../../../../assets/images/program/1.1.jpg";
import img2 from "../../../../../assets/images/program/1.2.jpg";
import img3 from "../../../../../assets/images/program/1.3.jpg";
import profile from "../../../../../assets/images/profile.jpg";
import media2 from "../../../../../assets/images/news/news (2).jpg";
import media3 from "../../../../../assets/images/news/news (3).jpg";
import media4 from "../../../../../assets/images/news/news (4).jpg";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import StopIcon from "@mui/icons-material/Stop";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShareIcon from '@mui/icons-material/Share';
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
  return (
    <>
      <Banner />
      <Container>
        <div className="lg:flex gap-5">
          <div className="w-full mt-2 lg:mt-0 lg:p-6">
            {/* Top Image */}
            <div className="relative w-full h-[200px] md:h-[400px] lg:h-[480px]  mb-6">
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
                <CalendarMonthOutlinedIcon /> Published on: ১০ সেপ্টেম্বর,২০২৪
              </p>
              <p className="text-sm">
                <AccountCircleOutlinedIcon /> Author: জেডআরএফ এডমিন
              </p>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">
              বন্যাদুর্গতদের মাঝে চিকিৎসা সেবা ও ঔষধ বিতরন কার্যক্রম
            </h1>

            {/* Description */}
            <p className="mb-6 text-lg text-gray-800 text-justify">
              বিএনপির ভারপ্রাপ্ত চেয়ারম্যান ও জিয়াউর রহমান ফাউন্ডেশন এর
              প্রেসিডেন্ট জনাব তারেক রহমান এর নির্দেশে বন্যাদুর্গত ফেনী জেলায়
              সদর হাসপাতালে জিয়াউর রহমান ফাউন্ডেশন ও ডক্টরস এসোসিয়েশন অব
              বাংলাদেশ (ড্যাব) এর উদ্যোগে অসুস্থ রোগীদের জন্য চলমান ধারাবাহিক
              চিকিৎসা সেবা ও ঔষধ বিতরন কার্যক্রম
            </p>

            {/* Block Quote */}
            <blockquote className="border-l-4 text-2xl border-gray-500 pl-6 italic text-gray-700 mb-10 ">
              <p>
                “বন্যাদুর্গত ফেনী জেলায় সদর হাসপাতালে জিয়াউর রহমান ফাউন্ডেশন ও
                ডক্টরস এসোসিয়েশন অব বাংলাদেশ (ড্যাব) এর উদ্যোগে অসুস্থ রোগীদের
                জন্য চলমান ধারাবাহিক চিকিৎসা সেবা ও ঔষধ বিতরন কার্যক্রম”
              </p>
            </blockquote>

            {/* Additional Description */}
            <p className="mb-6 text-lg text-gray-800 text-justify">
              এর অংশ হিসেবে আজকে চিকিৎসা সেবা প্রদান করেন স্বনামধন্য শিশু
              বিশেষজ্ঞ ঢাকা শিশু হাসপাতাল এর সহযোগী অধ্যাপক ডা সালাহউদ্দিন
              মাহমুদ,ডা: এম.আর. হাসান,ডা: মুননাসির জামান রেমো,ডা:ইমাম
              হাসান,ডা:সৌরভ,ডা: রাকিব
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
              বিএনপির ভারপ্রাপ্ত চেয়ারম্যান ও জিয়াউর রহমান ফাউন্ডেশন এর
              প্রেসিডেন্ট জনাব তারেক রহমান এর নির্দেশে বন্যাদুর্গত ফেনী জেলায়
              সদর হাসপাতালে জিয়াউর রহমান ফাউন্ডেশন ও ডক্টরস এসোসিয়েশন অব
              বাংলাদেশ (ড্যাব) এর উদ্যোগে অসুস্থ রোগীদের জন্য চলমান ধারাবাহিক
              চিকিৎসা সেবা ও ঔষধ বিতরন কার্যক্রম এর অংশ হিসেবে আজকে চিকিৎসা সেবা
              প্রদান করেন স্বনামধন্য শিশু বিশেষজ্ঞ ঢাকা শিশু হাসপাতাল এর সহযোগী
              অধ্যাপক ডা সালাহউদ্দিন মাহমুদ,ডা: এম.আর. হাসান,ডা: মুননাসির জামান
              রেমো,ডা:ইমাম হাসান,ডা:সৌরভ,ডা: রাকিব
            </p>

            {/* Bookmark and Social Media Section */}
            <hr className="my-6" />
            <div className=" md:flex lg:flex justify-between items-center mb-8 space-y-3">
              <div className="flex items-center gap-2">
                <BookmarkIcon className="text-gray-600 cursor-pointer" />
          
                <h4>Social Work</h4>
              </div>
              <div className="flex items-center">
                <h1>Share:</h1>                
                <ShareLink/>                
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
                  src={profile}
                  alt="John Doe"
                  className="rounded-full object-cover w-full h-full border-2 border-green-600"
                />
              </div>
              <div className="w-full">
                <p className="font-medium mt-2">মো. কামাল</p>
                <p className="text-xs">April 24, 2024 at 10:59 am</p>
                <hr className="mt-3" />
                <p className="mt-3 text-sm text-justify">
                  তাদের কার্যক্রমের জন্য ধন্যবাদ।
                </p>
                <button className="mt-4 text-green-600 text-sm font-medium hover:underline">
                  Reply
                </button>
              </div>
            </div> */}

            {/* comment section */}
            {/* <div className="mt-5">
              <TextField
                label="Add a comment"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
              <div className="flex justify-end mt-5">
                <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-7 py-2 text-white font-medium rounded">
                  Submit
                </button>
              </div>
            </div> */}
          </div>
          <div className="w-full lg:w-[600px] lg:mt-6 md:mt-0 mt-5">
            <div className="bg-gray-100 p-5 rounded mb-5">
              <TextField
                id="outlined-basic"
                label="Search Here"
                variant="outlined"
                fullWidth
                size="small"
                className="bg-white"
              />
            </div>

            {/* Recent Posts */}
            <div className="bg-gray-100 p-5 rounded mt-10">
              <h3>Popular Post</h3>
              <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
              <div className="flex flex-col gap-8 mt-5">
                {newsData?.map((data) => (
                  <div key={data.id} className="flex gap-5">
                    <Image
                      src={data.img}
                      width={50}
                      height={30}
                      alt=""
                      className="w-44 h-16 object-contain"
                    />
                    <div>
                      <p className="text-xs">{data.date}</p>
                      <p className="text-sm">{data.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* achieves */}
            {/* <div className="bg-gray-100 p-5 rounded mt-10">
              <h3>Achieves</h3>
              <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
              <div>
                <div className="my-3">
                  <button className="font-medium text-sm">
                    <StopIcon fontSize="small" /> May 2024
                  </button>
                </div>

                <hr />
                <div className="my-3">
                  <button className="font-medium text-sm">
                    <StopIcon fontSize="small" /> April 2024
                  </button>
                </div>
                <hr />
                <div className="my-3">
                  <button className="font-medium text-sm">
                    <StopIcon fontSize="small" /> June 2024
                  </button>
                </div>
                <hr />
                <div className="my-3">
                  <button className="font-medium text-sm">
                    <StopIcon fontSize="small" /> July 2024
                  </button>
                </div>
              </div>
            </div> */}

            {/* category */}
            {/* <div className="bg-gray-100 p-5 rounded mt-10">
              <h3>Category</h3>
              <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
              <div>
                <div className="flex gap-2 my-3">
                  <button className="font-medium text-sm">
                    <StopIcon fontSize="small" /> Education
                  </button>
                  <span className="block font-medium text-sm">(10)</span>
                </div>

                <hr />
                <div className="flex gap-2 my-3">
                  <button className="font-medium text-sm">
                    <StopIcon fontSize="small" /> National
                  </button>
                  <span className="block font-medium text-sm">(20)</span>
                </div>
                <hr />
                <div className="flex gap-2 my-3">
                  <button className="font-medium text-sm">
                    <StopIcon fontSize="small" /> Health
                  </button>
                  <span className="block font-medium text-sm">(17)</span>
                </div>
                <hr />
                <div className="flex gap-2 my-3">
                  <button className="font-medium text-sm">
                    <StopIcon fontSize="small" /> Sports
                  </button>
                  <span className="block font-medium text-sm">(12)</span>
                </div>
                <hr />
                <div className="flex gap-2 my-3">
                  <button className="font-medium text-sm">
                    <StopIcon fontSize="small" /> Magazine
                  </button>
                  <span className="block font-medium text-sm">(16)</span>
                </div>
              </div>
            </div> */}

            {/* tags */}
            {/* <div className="bg-gray-100 p-5 rounded mt-10">
              <h3>Tags</h3>
              <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
              <div className="flex flex-wrap gap-3">
                <button className="border hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-2 rounded hover:text-white text-sm">
                  Fashion
                </button>
                <button className="border hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-2 rounded hover:text-white text-sm">
                  Education
                </button>
                <button className="border hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-2 rounded hover:text-white text-sm">
                  Nation
                </button>
                <button className="border hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-2 rounded hover:text-white text-sm">
                  Study
                </button>
                <button className="border hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-2 rounded hover:text-white text-sm">
                  Health
                </button>
                <button className="border hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-2 rounded hover:text-white text-sm">
                  Food
                </button>
                <button className="border hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-2 rounded hover:text-white text-sm">
                  Travel
                </button>
                <button className="border hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-2 rounded hover:text-white text-sm">
                  Science
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default DescriptionPage;
