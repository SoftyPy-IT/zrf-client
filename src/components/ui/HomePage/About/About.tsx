import React from "react";
import Container from "@/components/share/Container";
import Image from "next/image";
import img from "../../../../../src/assets/images/tarek-rahman/tarek.jpg";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-16">
          <div className="lg:order-1 md:order-1 order-2">
            <h1 className="text-5xl font-bold uppercase border-l-4 pl-2 rounded-tl-full border-green-600">
              জিয়াউর রহমান ফাউন্ডেশন
            </h1>
            <p className="text-justify mt-5">
              জিয়াউর রহমান ফাউন্ডেশন বাংলাদেশের স্বাধীনতার ঘোষক ও মহান
              মুক্তিযোদ্ধা শহীদ রাষ্ট্রপতি জিয়াউর রহমানের স্মৃতির উদ্দেশ্যে
              প্রতিষ্ঠিত একটি মানবিক ও কল্যাণমূলক সংস্থা। এই ফাউন্ডেশনটি সমাজের
              উন্নয়ন, মুক্তিযুদ্ধের চেতনা প্রচার, ও মানুষের কল্যাণে নিবেদিত।তাঁর
              আদর্শে এবং দেশের প্রতি তাঁর অঙ্গীকারের প্রতি সম্মান জানিয়ে, এই
              ফাউন্ডেশনটি জাতীয় উন্নয়নে অবদান রাখার জন্য কাজ করছে ।
            </p>
            <Link href="/about">
              <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 rounded-full text-white uppercase text-sm font-semibold mt-5">
                আরো দেখুন
              </button>
            </Link>
          </div>
          <div className="lg:order-2 md:order-2 order-1">
            <Image src={img} alt="" className="rounded" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
