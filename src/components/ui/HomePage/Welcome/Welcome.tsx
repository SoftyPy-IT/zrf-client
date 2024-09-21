import Image from "next/image";
import envir1 from "../../../../assets/images/environment/1-1.jpg";
import envir2 from "../../../../assets/images/environment/3-1.jpg";
import envir3 from "../../../../assets/images/environment/4-2.jpeg";
import envir4 from "../../../../assets/images/environment/5.1.jpg";
// import envir1 from "../../../../public/assests/environment/about-1.webp"
// import envir2 from "../../../../public/assests/environment/about-2.webp"
// import envir3 from "../../../../public/assests/environment/about-3.webp"
// import envir4 from "../../../../public/assests/environment/about-4.webp"
import envir5 from "../../../../assets/images/environment/icon-1.webp";
import envir6 from "../../../../assets/images/environment/icon-2.webp";
import envir7 from "../../../../assets/images/environment/icon-3.webp";
import envir8 from "../../../../assets/images/environment/icon-4.webp";

import "./Welcome.css";
import Container from "@/components/share/Container";
import Link from "next/link";

const Welcome = () => {
  return (
    <Container>
      <div className=" py-10 lg:py-32 lg:flex lg:justify-between  mt-5 md:mt-14 lg:mt-0 mb-5 md:mb-8 lg:mb-0 text-center md:text-left lg:text-left">
        <div className="h-full lg:w-[500px] mx-0 md:mx-5 lg:mx-0 mb-4 md:mb-0 lg:mb-0">
          <h4 className="text-2xl md:text-3xl lg:text-3xl font-bold">
            Welcome To{" "}
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold">
            <span className="text-green-600 text-4xl lg:text-6xl ">
              Ziaur Rahman{" "}
            </span>
            Foundation
          </h2>

          <div className="w-44 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-5"></div>
          <p className="text-justify lg:my-10">
            জিয়াউর রহমান ফাউন্ডেশন বাংলাদেশের স্বাধীনতার ঘোষক ও মহান
            মুক্তিযোদ্ধা শহীদ রাষ্ট্রপতি জিয়াউর রহমানের স্মৃতির উদ্দেশ্যে
            প্রতিষ্ঠিত একটি মানবিক ও কল্যাণমূলক সংস্থা। এই ফাউন্ডেশনটি সমাজের
            উন্নয়ন, মুক্তিযুদ্ধের মূলমন্ত্র ও মানুষের কল্যাণে নিবেদিত। তাঁর
            আদর্শে এবং দেশের প্রতি তাঁর অঙ্গীকারের প্রতি সম্মান জানিয়ে, এই
            ফাউন্ডেশনটি জাতীয় উন্নয়নে অবদান রাখার জন্য কাজ করছে ।
          </p>
          <Link href="/about">
            <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 rounded-full text-white uppercase text-sm font-semibold mt-5">
              Learn More
            </button>
          </Link>
        </div>

        <div className="xl:-mt-14">
          <div>
            <Image
              src={envir5}
              className="absolute lg:h-auto lg:w-auto -ml-1 md:ml-[140px] lg:-ml-[240px] xl:-ml-[300px] mt-[20px] md:mt-[120px] lg:mt-[140px] xl:mt-[150px] "
              alt="this is img"
            />
          </div>
          <div>
            <Image
              src={envir6}
              className="absolute lg:h-auto lg:w-auto -mt-[30px] md:mt-[30px] lg:mt-[0px] xl:mt-24 ml-[170px] md:ml-[400px] lg:-ml-[30px] xl:-ml-[40px]"
              alt="this is img"
            />
          </div>

          {/* -------------Main Images----------------- */}
          <div className="mt-[70px] md:mt-[0px] lg:mt-[50px] flex flex-col ">
            <div className="md:mt-10">
              <div className="absolute ml-[70px] md:ml-0 lg:-ml-[100px] xl:-ml-[200px] -mt-[25px] md:mt-[0px] lg:mt-0 xl:mt-0 ">
                <div className="absolute bg-blue-500 h-[80px] md:h-[140px] lg:h-[140px] w-[80px] md:w-[140px] lg:w-[140px] rotate-45 rounded-xl ml-0 md:ml-[240px] lg:-ml-[0px] mt-0 md:mt-[0px] lg:-mt-[20px]"></div>
                <Image
                  src={envir4}
                  className="h-[80px] md:h-[140px] lg:h-[140px] w-[80px] md:w-[140px] lg:w-[140px] rotate-45 rounded-xl ml-0 md:ml-[239px] lg:-ml-[0px] mt-[15px] md:mt-[20px] lg:-mt-[0px]"
                  alt="this is img"
                />
              </div>

              <div className="ml-[190px] md:ml-0 lg:ml-0 xl:-ml-10 mt-[40px] md:mt-[50px] lg:-mt-[110px] xl:mt-[30px]">
                <div className="absolute bg-yellow-300 h-[100px] md:h-[290px] lg:h-[290px] w-[100px] md:w-[290px] lg:w-[290px] rotate-45 rounded-xl -ml-[40px] md:ml-[400px] lg:-ml-[0px] md:-mt-[0px] lg:-mt-[0px]"></div>
                <Image
                  src={envir1}
                  className="h-[100px] md:h-[290px] lg:h-[290px] xl:h-[290px] w-[100px] md:w-[290px] lg:w-[290px] xl:w-[290px] rotate-45 rounded-xl  -ml-[50px] md:ml-[380px] lg:-ml-[10px] mt-0 md:-mt-[0px] lg:-mt-[0px] imgResponsive"
                  alt="this is img"
                />
              </div>
            </div>

            <div className="-mt-0 md:-mt-[180px] lg:mt-0 xl:-mt-[150px] ml-[30px] md:ml-0 lg:ml-0 xl:-ml-8">
              <div className=" -ml-6 md:ml-0 lg:ml-0 xl:-ml-[300px] -mt-14 md:-mt-[0px] lg:-mt-[140px] xl:-mt-4">
                <div className="absolute bg-green-600 h-[100px] md:h-[190px] lg:h-[190px] w-[100px] md:w-[190px] lg:w-[190px] rotate-45 rounded-xl ml-0 md:ml-[90px] lg:-ml-[0px] mt-0 md:-mt-[0px] lg:-mt-[0px]"></div>
                <Image
                  src={envir3}
                  className="h-[100px] md:h-[190px] lg:h-[190px] xl:h-[190px] w-[100px] md:w-[190px] lg:w-[190px] xl:w-[190px] rotate-45 rounded-xl ml-2 md:ml-[110px] lg:-ml-[260px] xl:ml-[20px] md:-mt-[0px] lg:-mt-[0px] imgResponsive"
                  alt="this is img"
                />
              </div>

              <div className="ml-[70px] md:ml-0 lg:ml-0 xl:-ml-5 -mt-6 md:-mt-[0px] lg:-mt-8 xl:-mt-[30px]">
                <div className="absolute bg-[#8d5afb] h-[80px] md:h-[225px] lg:h-[225px] w-[80px] md:w-[225px] lg:w-[225px] rotate-45 rounded-xl ml-[0px] md:ml-[240px] lg:-ml-[120px] mt-[10px] md:mt-[20px] lg:mt-[20px] xl:mt-[20px]"></div>
                <Image
                  src={envir2}
                  className="h-[80px] md:h-[225px] lg:h-[225px] w-[80px] md:w-[225px] lg:w-[225px] rotate-45 rounded-xl ml-[0px] md:ml-[240px] lg:-ml-[120px] -mt-[0px] md:-mt-[30px] lg:mt-[0px] imgResponsive"
                  alt="this is img"
                />
              </div>
            </div>
          </div>
          {/* ------------------------------ */}

          <div>
            <Image
              src={envir7}
              className="absolute lg:h-auto lg:w-auto ml-8 md:ml-[130px] lg:-ml-[0px] xl:-ml-[280px] -mt-8 md:-mt-[150px] lg:-mt-[150px]"
              alt="this is img"
            />
          </div>
          <div>
            <Image
              src={envir8}
              className="absolute lg:h-auto lg:w-auto ml-[200px] md:ml-[520px] lg:ml-[110px] xl:ml-[110px] -mt-[80px] md:-mt-[100px] lg:-mt-[150px] xl:-mt-[150px] "
              alt="this is img"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Welcome;
