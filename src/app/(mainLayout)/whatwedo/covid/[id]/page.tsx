import React from "react";
import Banner from "../_components/Banner";
import Container from "@/components/share/Container";
import Image from "next/image";
import titleImage from "../../../../../assets/images/covid/c1.jpg";
import img1 from "../../../../../assets/images/covid/c2.jpg";
import img2 from "../../../../../assets/images/covid/c3.jpg";
import img3 from "../../../../../assets/images/covid/c4.jpg";
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
import ShareIcon from "@mui/icons-material/Share";
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
              চিকিৎসকদেরকে পিপিই দিলো জেডআরএফ ও ড্যাব
            </h1>

            {/* Description */}
            <p className="mb-6 text-lg text-gray-800 text-justify">
              বিশ্বব্যাপী মহামারী করোনাভাইরাসের কারণে সৃষ্ট সঙ্কট থেকে
              বাংলাদেশের মানুষ যাতে দ্রুত বেরিয়ে আসতে পারে সে জন্য নানামুখী
              উদ্যোগ গ্রহণ করেছে জিয়াউর রহমান ফাউন্ডেশন (জেডআরএফ) ও ডক্টরস
              অ্যাসোসিয়েশন অব বাংলাদেশ (ড্যাব)। এ লক্ষ্যে বর্ধিত আকারে
              কর্মতৎপরতা শুরু করেছে উভয় সংগঠন। আজ শুক্রবার সকাল ১১ টায় রাজধানীর
              হলি ফ্যামিলি হাসপাতালের জরুরি বিভাগে কর্মরত চিকিৎসক ও অন্যদের জন্য
              ব্যক্তিগত সুরক্ষা সরঞ্জাম (পিপিই) প্রদান করেছে জেডআরএফ ও ড্যাব।
              বিএনপির সিনিয়র যুগ্ম মহাসচিব রুহুল কবির রিজভী প্রধান অতিথি হিসেবে
              উপস্থিত থেকে এই কর্মসূচীর আনুষ্ঠানিক উদ্বোধন করেন। এসময় উপস্থিত
              ছিলেন- ডক্টরস অ্যাসোসিশেয়ন অব বাংলাদেশের (ড্যাব) সভাপতি অধ্যাপক
              ডা: হারুন আল রশিদ, মহাসচিব অধ্যাপক ডা: মো: আব্দুস সালাম, জিয়াউর
              রহমান ফাউন্ডেশনের (জেডআরএফ) আহমেদ শফিকুল হায়দার পারভেজ, অধ্যাপক ড.
              মো: মোর্শেদ হাসান খান, ডা: শাহ মুহাম্মদ আমান উল্লাহ্, প্রকৌশলী
              মাহবুব, ব্যারিস্টার মীর হেলাল, অধ্যাপক ড: আব্দুল করিম,
              এ্যামট্যাবের বিপ্লবুজ্জামান বিপ্লব, ছাত্রদলের সভাপতি ফজলুর রহমান
              খোকন, বেসরকারি মেডিক্যাল ও ডেন্টাল কলেজ শাখা ছাত্রদলের ডা: রাকিবুল
              ইসলাম আকাশ, আতিকুর রহমান রিমন, শায়রুল কবির খান ছাড়াও হলি ফ্যামিলি
              হাসপাতালের ডেপুটি ডাইরেক্টর ডাঃ এনামুল সহ চিকিৎসক, নার্স সহ
              অন্যান্য ব্যক্তিবর্গ। বিএনপির ভারপ্রাপ্ত চেয়ারম্যান ও জিয়াউর রহমান
              ফাউন্ডেশনের প্রেসিডেন্ট তারেক রহমানের পরামর্শে এই কার্যক্রমে
              নানাভাবে সম্পৃক্ত থেকে সহযোগিতা করছে জাতীয়তাবাদী ছাত্রদল কেন্দ্রীয়
              সংসদ, ঢাকা বিশ্ববিদ্যালয় শাখা এবং বেসরকারি মেডিক্যাল ও ডেন্টাল
              কলেজ শাখা ছাত্রদল।
            </p>

            {/* Block Quote */}
            <blockquote className="border-l-4 text-2xl border-gray-500 pl-6 italic text-gray-700 mb-10 ">
              <p>
                “সংকট মোকাবিলায় আমাদের জাতীয় ঐক্য দরকার।”
              </p>
            </blockquote>

            {/* Additional Description */}
            <p className="mb-6 text-lg text-gray-800 text-justify">
              রাজধানীর হলি ফ্যামিলি হাসপাতালের চিকিৎসকদের মাঝে পিপিই প্রদানকালে
              প্রধান অতিথির বক্তব্যে রুহুল কবির রিজভী জেডআরএফ এবং ড্যাবের এই
              কার্যক্রমের সাথে সম্পৃক্ত সবাইকে ধন্যবাদ জানিয়ে বলেন, সমস্ত
              দেশবাসী এখন বৈশ্বিক মহামারী করোনার ভয়ে ভীত এবং মারাত্মক সঙ্কটের
              মধ্যে রয়েছে। পরীক্ষিতদের মধ্যে করোনা রোগী সনাক্তকরণের হার
              প্রতিদিনই আশঙ্কাজনকহারে বাড়ছে। ঢাকাসহ সারাদেশর ২০ জেলায় এখন
              পর্যন্ত করোনা ভাইরাসের থাবা লক্ষ্য করা গেছে। এই সংকট মোকাবিলায়
              আমাদের জাতীয় ঐক্য দরকার। তিনি বলেন, গণমাধ্যমের খবর অনুযায়ী ২৪
              ঘন্টায় (বৃহস্পতিবার) দেশের ১০টি জেলায় করোনা উপসর্গ নিয়ে মৃত্যুবরণ
              করেছেন কমপক্ষে ১৫জন। এমন হিসাব প্রায় প্রতিদিনের। সত্যিকারার্থে
              জনস্বাস্থ্য নিয়ে এ সরকার কিছুই করেনি। সরকারের মন্ত্রীদের মুখে দেশে
              উন্নয়নের জোয়ারের খবরে এতদিন দেশ ভেসে গেছে! তাহলে স্বাস্থ্যে খাতের
              এত বেহাল দশা কেনো? হাসপাতালে নেই কোনো আধুনিক সরঞ্জামাদি। পরীক্ষা
              করতে নেই সামগ্রী, রোগ ডায়ালাইসিসের কোনো ব্যবস্থা নেই, তেমন কোনো
              আইসিউ নেই, ১৭ কোটি মানুষের জন্য ভেন্টিলেটর আছে মাত্র ১৭শ।
              হাসপাতালে চিকিৎসক নেই, নার্স নেই। হাসপাতালে ঘুরতে ঘুরতে চিকিৎসা না
              পেয়ে মারা গেছে ঢাবি শিক্ষার্থীসহ অসংখ্য মানুষ। এমন পরিস্থিতিতে
              মানুষের বর্তমানে বেঁচে থাকা কঠিন হয়ে পড়েছে। রিজভী বলেন, যখন থেকে
              করোনাভাইরাসের প্রার্দুভাব শুরু হয়েছে সরকার তখন থেকেই কোনো পদক্ষেপ
              নেয়নি বলেই মেডিকেল সেক্টরে করোনাভাইরাস প্রতিরোধর কোনো ব্যবস্থা
              নিতে পারছে না। সরকারের অবহেলার কারণেই স্বাস্থ্যখাতে চরম সঙ্কট
              বিরাজ করছে। এই সঙ্কটের মধ্যেও অনেক চিকিৎসক এবং স্বাস্থ্যকর্মী
              নিবেদিতভাবে কাজ করছেন। তাদেরকে ধন্যবাদ জানাই। যার যার অবস্থানে
              থেকে সবাইকে সচেতনভাবে কাজ করতে হবে।
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
              তিনি বলেন, আমাদের এই দরিদ্র দেশে এই মুহুর্তে দৈনিক আয়ের উপর
              নির্ভরশীল কোটি কোটি মানুষ এখন কর্মহীন। চাল-ডাল যোগাড় করতে তারা যদি
              সামাজিক দূরত্বের দেয়াল ভেঙে বেরিয়ে আসেন সংক্রমণ প্রতিরোধ তখন
              অসম্ভব হয়ে পরবে। কারণ ক্ষুধার আক্রমণ করোনার চেয়েও ভয়ঙ্কর। তাই
              রাষ্ট্রের পক্ষ থেকে ওইসকল জনগোষ্ঠীর জন্য আপদকালীন সহযোগীতাই পারে
              করোনার সংক্রমণ প্রতিরোধ করতে। এ লক্ষ্যে ইতিমধ্যেই বিএনপি বেশকিছু
              প্রস্তাবনা জাতির সামনে পেশ করেছে। রুহুল কবির রিজভী অনুষ্ঠানের
              আয়োজকদের উদ্দেশে বলেন, আপনাদের ফাউন্ডেশনের সভাপতি ও দেশনায়ক তারেক
              রহমান প্রবাসে। কিন্তু ইতিমধ্যেই তিনি আপনাদেরকে এবং সর্বস্তরের দলীয়
              নেতা কর্মীদের এই মহামারী মোকাবিলায় ঝাঁপিয়ে পড়তে নির্দেশ দিয়েছেন।
              আজকে জিয়াউর রহমান ফাউন্ডেশন এবং ডক্টরস অ্যাসোসিয়েশন অব বাংলাদেশ
              (ড্যাব) যৌথভাবে তার ডাকে সাড়া দিয়ে হটলাইনের মাধ্যমে চিকিৎসা
              পরামর্শ দিতে শুরু করেছেন। আপনাদের নির্বাহী পরিচালক ডাঃ ফরহাদ হালিম
              ডোনার এই মুহুর্তে অসুস্থ। এ অবস্থায়ও বাকী সহকর্মীরা মিলে বর্তমানে
              চলমান কর্মসূচীকে আপনারা বর্ধিত আকারে বেগবান করে যাচ্ছেন। বিএনপি
              তথা মহামারী আক্রান্ত জাতির পক্ষ থেকে আপনাদেরকে কৃতজ্ঞতা জানাই এবং
              আপনাদের সফলতা কামনা করি। সকলকে এই মহামারী মোকাবিলায় ঐক্যবদ্ধভাবে
              সহযোগিতা করার জন্য উদাত্ত আহ্বান জানাই। সর্বোপরি বিএনপির
              চেয়ারপারসন বেগম খালেদা জিয়ার কারামুক্তিতে আল্লাহর কাছে শুকরিয়া
              জানিয়ে তার আশুরোগ মুক্তি কামনা করেন বিএনপির সিনিয়র যুগ্ম মহাসচিব
              রুহুল কবির রিজভী। উল্লেখ্য যে, করোনাভাইরাসে ক্ষতিগ্রস্তদের মাঝে
              নিত্যপ্রয়োজনীয় খাদ্যসামগ্রী বিতরণের পাশাপাশি করোনা সংক্রান্ত বিষয়ে
              কোনো পরামর্শ এবং প্রাথমিক জরুরি স্বাস্থ্যসেবার জন্য ২৪ ঘন্টার
              মোবাইল হটলাইন চালু করেছে জেডআরএফ ও ড্যাব। রোগের ধরণ বুঝে সংশ্লিষ্ট
              ব্যক্তিকে বিশেষজ্ঞ ডাক্তারের সাথে ফোনে সংযুক্ত করার পাশাপাশি
              সমস্যা জেনে টেলিফোনেই রোগিকে প্রেসক্রিপশন দেয়া এবং মূল্য পরিশোধ
              সাপেক্ষে রোগীর চাহিদা অনুযায়ী ঔষধ রোগীর বাড়ী পৌঁছানোর জন্য একটি
              টিম বিনামুল্যে সেবাদানে নিয়োজিত আছেন। এছাড়াও দেশের প্রায় সব
              বেসরকারি মেডিক্যাল কলেজ হাসপাতালের জরুরি বিভাগে কর্মরতদের জন্য
              ব্যাক্তিগত সুরক্ষা সরঞ্জাম বা পিপিই প্রদানের সিদ্ধান্ত নিয়েছে
              জিয়াউর রহমান ফাউন্ডেশন ও ড্যাব।
            </p>

            {/* Bookmark and Social Media Section */}
            <hr className="my-6" />
            <div className=" md:flex lg:flex justify-between items-center mb-8 space-y-3">
              <div className="flex items-center gap-2">
                <BookmarkIcon className="text-gray-600 cursor-pointer" />
                <h4>Politics,</h4>
                <h4>Social Work</h4>
              </div>
              <div className="flex items-center">
                <h1>Share:</h1>
                <ShareLink />
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
