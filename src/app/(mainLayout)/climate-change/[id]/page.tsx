import React from "react";
import Container from "@/components/share/Container";
import Image from "next/image";
import titleImage from "../../../../../src/assets/images/program/1.1.jpg";
import img1 from "../../../../../src/assets/images/program/1.1.jpg";
import img2 from "../../../../../src/assets/images/program/1.2.jpg";
import img3 from "../../../../../src/assets/images/program/1.3.jpg";
import media2 from "../../../../../src/assets/images/news/news (2).jpg";
import media3 from "../../../../../src/assets/images/news/news (3).jpg";
import media4 from "../../../../../src/assets/images/news/news (4).jpg";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { TextField } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShareLink from "@/components/share/ShareLink/ShareLink";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";

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
            <CommonBanner title="Health Services " />
            <Container>
                <div className="lg:flex gap-5">
                    <div className="w-full mt-2 lg:mt-0 lg:p-6">
                        {/* Top Image */}
                        <div className="relative w-full h-[200px] md:h-[400px] lg:h-[400px] mb-6">
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
                                <h4>Politics,</h4>
                                <h4>Social Work</h4>
                            </div>
                            <ShareLink />
                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <a href="#" className="text-green-600">
                                ← Prev Post
                            </a>
                            <a href="#" className="text-green-600">
                                Next Post →
                            </a>
                        </div>

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


                    </div>
                </div>

            </Container>
        </>
    );
};

export default DescriptionPage;
