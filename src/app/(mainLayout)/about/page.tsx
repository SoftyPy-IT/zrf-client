import Image from "next/image";
import React from "react";
import img from "../../../../src/assets/images/tarek-rahman/tarek.jpg";
import Container from "@/components/share/Container";
import AboutBanner from "./_components/AboutBanner";
import {
  LocalHospital,
  VolunteerActivism,
  MedicalServices,
  Handyman,
  Forest,
  Agriculture,
  School,
  Campaign,
} from "@mui/icons-material";

const AboutUs = () => {
  const programs = [
    {
      title: "ফ্রি মেডিকেল ক্যাম্প আয়োজন",
      description: "অসচ্ছল জনগোষ্ঠীর মাঝে বিনামূল্যে চিকিৎসা সেবা প্রদান।",
      icon: <LocalHospital fontSize="large" className="text-blue-500" />,
    },
    {
      title: "বন্যার্তদের মাঝে ত্রাণ বিতরণ",
      description: "বন্যা কবলিত এলাকায় চিকিৎসা ও খাদ্য সরবরাহ।",
      icon: <VolunteerActivism fontSize="large" className="text-green-500" />,
    },
    {
      title: "অ্যাজমা কেয়ার সেন্টার স্থাপন",
      description: "বগুড়া ও চট্টগ্রামে অ্যাজমা রোগীদের জন্য সহায়তা প্রদান।",
      icon: <MedicalServices fontSize="large" className="text-red-500" />,
    },
    {
      title: "প্লাস্টিক সার্জারি ক্যাম্প আয়োজন",
      description:
        "ঠোঁটকাটা, তালুকাটা এবং পোড়া রোগীদের জন্য প্লাস্টিক সার্জারি ক্যাম্প।",
      icon: <Handyman fontSize="large" className="text-yellow-500" />,
    },
    {
      title: "সামাজিক বনায়ন প্রকল্প",
      description: "পরিবেশ রক্ষার্থে সামাজিক বনায়ন প্রকল্পের আয়োজন।",
      icon: <Forest fontSize="large" className="text-green-700" />,
    },
    {
      title: "বীজ উৎপাদন ও বিতরণ",
      description: "ন্নত মানের বীজ উৎপাদন ও প্রক্রিয়াজাতকরণ।",
      icon: <Agriculture fontSize="large" className="text-green-500" />,
    },
    {
      title: "বৃত্তি প্রদান",
      description: "অস্বচ্ছল মেধাবী ছাত্রছাত্রীদের জন্য বৃত্তি প্রদান।",
      icon: <School fontSize="large" className="text-blue-400" />,
    },
    {
      title: "গণতন্ত্র পুনরুদ্ধারে সহায়তা",
      description:
        "আন্দোলনে পঙ্গুত্ববরণকারী এবং নিহত নেতা কর্মীদের পরিবারের সহায়তা।",
      icon: <Campaign fontSize="large" className="text-purple-500" />,
    },
  ];

  return (
    <div>
      <AboutBanner />
      <Container>
        {/* Foundation Overview Section */}
        <section className="my-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4 lg:order-1 order-2">
              <h2 className="text-3xl font-bold text-center uppercase">
                Who We Are
              </h2>
              <p className="text-justify">
                জিয়াউর রহমান ফাউন্ডেশনের প্রেসিডেন্ট জনাব তারেক রহমান এবং
                নির্বাহী পরিচালক অধ্যাপক ডা. ফরহাদ হালিম ডোনার। প্রতিষ্ঠাকালীন
                পরিচালনায় ছিলেন ২২ সদস্য বিশিষ্ট বোর্ড অব ডাইরেক্টরস। ১৮৬০ সালের
                সোসাইটি অ্যাক্ট দ্বারা সংগঠনটি নিবন্ধিত । সংগঠনটিতে যুক্ত আছেন
                চিকিৎসক, কৃষিবিদ, ইঞ্জিনিয়ার ও শিক্ষক এই ৪টি পেশার জাতীয়তাবাদী
                পেশাজীবীবৃন্দ। বর্তমানে সদস্য হিসেবে যুক্ত হওয়া শুরু হয়েছে
                আইনজীবী ও সাংবাদিক পেশার জাতীয়তাবাদী নেতৃবৃন্দ।
              </p>
              <p className="text-justify">
                ২০০০ সালের ১৪ এপ্রিল, (১লা বৈশাখ,) খুলনা জেলার দীঘলিয়া ও রূপসা
                থানায় আয়োজিত স্বাস্থ্যমেলার সফল আয়োজন দিয়ে যাত্রা শুরু হয় এই
                সংগঠনের। “একটি উদ্যোগ, একটু চেষ্টা, এনে দেবে সচ্ছলতা, দেশে আসবে
                স্বনির্ভরতা” এই স্লোগানকে মূলমন্ত্র ধরে যাত্রা শুরু করা জিয়াউর
                রহমান ফাউন্ডেশন-এর ভিশনারি প্রেসিডেন্ট জনাব তারেক রহমান বিশ্বাস
                করেন আমাদের দেশের প্রতিটি মানুষ যদি ছোট ছোট উদ্যোগ গ্রহণ করেন
                তাহলে এই দেশে অর্থনৈতিক উন্নতি আসবেই। এ লক্ষ্যে তিনি প্রাথমিক
                অবস্থায় জিয়াউর রহমান ফাউন্ডেশনের মাধ্যমে স্বাস্থ্যখাতে,
                শিক্ষাখাতে, কৃষিখাতে বিভিন্ন ধরনের সেবামূলক প্রকল্প গ্রহণ করেন।
                এরপর জিয়াউর রহমান ফাউন্ডেশন আর থেমে থাকে নাই বিভিন্ন
                জনকল্যানমুলক, দেশের ক্রান্তিলগ্নে জনগনের পাশে থেকে সেবা প্রদান ও
                সামাজিক উন্নয়নমুলক কাজ করে যাচ্ছে।
              </p>
            </div>
            <div className="lg:order-2 order-1">
              <Image
                src={img}
                alt="Foundation"
                className="w-full rounded lg:h-[450px]"
              />
            </div>
          </div>
        </section>

        {/* উল্লেখযোগ্য কাজ */}
        <section>
          <h2 className="text-center text-3xl font-bold">উল্লেখযোগ্য কাজ</h2>
          <div className="w-44 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-7 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
              >
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 my-16 bg-green-600 text-white text-center">
          <h2 className="text-3xl font-bold">আমাদের সাথে যোগ দিন</h2>
          <p className="mt-4">
            আপনার সহায়তা অনেক মানুষের জীবনে ইতিবাচক পরিবর্তন আনতে পারে। জাতীয়
            উন্নয়নে আমাদের ফাউন্ডেশনের অংশ হোন।
          </p>
          <button className="mt-5 px-6 py-2 bg-yellow-600 font-semibold rounded">
            যুক্ত হোন
          </button>
        </section>
      </Container>
    </div>
  );
};

export default AboutUs;
