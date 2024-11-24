
import React from 'react';
import Image from "next/image";
import img1 from "../../../../assets/images/welcome/3-1.jpg";
import img2 from "../../../../assets/images/welcome/2.jpg";
import img3 from "../../../../assets/images/welcome/3.jpg";
import img4 from "../../../../assets/images/welcome/4.jpg";
import "./Welcome.css";
import Container from "@/components/share/Container";
import Link from "next/link";
import { TBanner } from "@/types/type";
interface welcomeProps {
    welcomeData: TBanner[];
    language: string,
}

const WelcomeData: React.FC<welcomeProps> = ({ welcomeData, language }) => {

    const welcomeFilterData = welcomeData.filter((welcome: any) => welcome.category === 'Welcome')
    return (
        <Container>
            <div className=" py-10 lg:pb-28 grid xl:grid-cols-2 2xl:grid-cols-2 mt-5 md:mt-14 lg:mt-0 mb-5 md:mb-8 lg:mb-0 text-center md:text-left lg:text-left">
                {
                    welcomeFilterData?.map((data: TBanner) => (
                        <div key={data._id}>
                            <div className="h-full xl:w-[500px] mx-0 md:mx-5 lg:mx-0 mb-4 md:mb-0 lg:mb-0 space-y-3">
                                <h4 className="text-2xl md:text-3xl lg:text-3xl font-bold">

                                    {
                                        language === 'ENG' ? ' Welcome To ' : 'স্বাগতম'
                                    }
                                </h4>
                                <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold">
                                    <span className="text-green-600 text-4xl lg:text-6xl ">

                                        {
                                            language === 'ENG' ? '  Ziaur Rahman' : 'জিয়াউর রহমান'
                                        }
                                    </span>
                                    <span className="block mt-2">  {
                                        language === 'ENG' ? '  Foundation' : 'ফাউন্ডেশন'
                                    } </span>
                                </h2>

                                <div className=" w-full md:w-44 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-5 hidden lg:block md:block"></div>
                                <p className="text-justify lg:my-10">
                                    {
                                        language === 'ENG' ? data.english_short_description : data.bangla_short_description
                                    }
                                </p>
                                <Link href="/about">
                                    <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 rounded-full text-white uppercase text-sm font-semibold mt-5">
                                        {
                                            language === 'ENG' ? " Learn More" : "আরও জানুন"
                                        }
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                }

                <div className="xl:-mt-0">
                    {/* -------------Main Images----------------- */}
                    <div className="mt-[60px] md:mt-[0px] lg:mt-[0px] xl:mt-[180px] 2xl:mt-[180px] ml-[15px] md:-ml-[5px] lg:ml-[450px] xl:ml-[290px] 2xl:ml-[300px] flex flex-col gap-10">
                        <div className="mt-[0px] md:mt-[40px] lg:mt-[100px] xl:-mt-[150px] 2xl:-mt-[180px] xl:-ml-[0px] ">
                            {/* blue */}
                            <div className="absolute ml-[90px] md:ml-3 lg:-ml-[100px] xl:-ml-[215px] 2xl:-ml-[200px] -mt-[25px] md:mt-[20px] lg:mt-0 xl:mt-0 2xl:-mt-2 ">
                                <div className="absolute bg-blue-500 h-[80px] md:h-[140px] lg:h-[140px] xl: 2xl: w-[80px] md:w-[140px] lg:w-[140px] xl:w-[140px] 2xl:w-[140px] rotate-45 rounded-xl ml-0 md:ml-[240px] lg:-ml-[0px] xl: 2xl: mt-0 md:mt-[0px] lg:-mt-[20px] xl:-mt-[20px] 2xl:-mt-[20px]"></div>
                                <Image
                                    src={img1}
                                    className="h-[80px] md:h-[140px] lg:h-[140px] xl: 2xl: w-[80px] md:w-[140px] lg:w-[140px] xl: 2xl: rotate-45 rounded-xl ml-0 md:ml-[239px] lg:-ml-[0px] mt-[15px] md:mt-[20px] lg:-mt-[0px] xl: 2xl:"
                                    alt="this is img"
                                />
                            </div>

                            <div className="ml-[0px] md:ml-0 lg:ml-[60px] xl:-ml-10 2xl:-ml-10 mt-[50px] md:mt-[100px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[30px]">
                                {/* yellow */}
                                <div className="absolute bg-yellow-300 h-[100px] md:h-[230px] lg:h-[290px] xl:h-[290px] 2xl:h-[290px] w-[100px] md:w-[230px] lg:w-[290px] xl:w-[290px] 2xl:w-[290px] rotate-45 rounded-xl -ml-[0px] md:ml-[400px] lg:ml-[10px] xl:-ml-[0px] 2xl:ml-[10px] -mt-0 md:-mt-[0px] lg:-mt-[0px] xl:-mt-[0px] 2xl:-mt-[0px]"></div>

                                <div className="h-[10px] md:h-[230px] lg:h-[290px] xl:h-[290px] 2xl: w-[180px] md:w-[230px] lg:w-[290px] xl:w-[290px] 2xl: rounded-xl">
                                    <Image
                                        src={img3}
                                        className=" h-[100px] md:h-[230px] lg:h-[290px] xl:h-[290px] 2xl: w-[100px] md:w-[230px] lg:w-[290px] xl:w-[290px] 2xl:  rotate-45 rounded-xl ml-[10px] md:ml-[380px] lg:-ml-[10px] xl:-ml-[25px] 2xl:-ml-[15px] mt-0 md:-mt-[0px] lg:-mt-[0px] xl: 2xl: "
                                        alt="this is img"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-[40px] md:-mt-[210px] lg:-mt-[100px] xl:-mt-[190px] 2xl:-mt-[200px] ml-[25px] md:ml-0 lg:-ml-[260px] xl:-ml-[30px] 2xl:-ml-8">
                            <div className="ml-[120px] md:ml-0 lg:ml-0 xl:-ml-[300px] 2xl: -mt-[75px] md:-mt-[0px] lg:-mt-[140px] xl:-mt-4 2xl:">
                                <div className="absolute bg-green-600 h-[100px] md:h-[190px] lg:h-[190px] xl:h-[190px] 2xl:h-[190px] w-[100px] md:w-[190px] lg:w-[190px] xl:w-[190px] 2xl:w-[190px] rotate-45 rounded-xl ml-[10px] md:ml-[90px] lg:ml-[0px] xl:ml-[0px] 2xl:ml-[0px] mt-0 md:-mt-[0px] lg:-mt-[0px] xl: 2xl:"></div>
                                <Image
                                    src={img2}
                                    className="h-[100px] md:h-[190px] lg:h-[190px] xl:h-[190px] 2xl:h-[190px] w-[100px] md:w-[190px] lg:w-[190px] xl:w-[190px] 2xl:w-[190px] rotate-45 rounded-xl ml-0 md:ml-[110px] lg:ml-[20px] xl:ml-[20px] 2xl:ml-[20px] mt-0 md:-mt-[0px] lg:-mt-[0px] xl: 2xl:"
                                    alt="this is img"
                                />
                            </div>

                            <div className="ml-[55px] md:ml-0 lg:ml-[160px] xl:-ml-[140px] 2xl:-ml-[140px] -mt-[20px] md:-mt-[0px] lg:-mt-8 xl:-mt-[30px] 2xl:-mt-[30px]">
                                <div className="absolute bg-[#8d5afb] h-[80px] md:h-[225px] lg:h-[225px] xl: 2xl: w-[80px] md:w-[225px] lg:w-[225px] xl: 2xl: rotate-45 rounded-xl ml-[0px] md:ml-[240px] lg:ml-[0px] xl:ml-[0px] 2xl:ml-[0px] mt-[10px] md:mt-[20px] lg:mt-[20px] xl:mt-[20px] 2xl:mt-[20px]"></div>
                                <Image
                                    src={img4}
                                    className="h-[80px] md:h-[225px] lg:h-[225px] xl:h-[225px] 2xl:h-[225px] w-[80px] md:w-[225px] lg:w-[225px] xl:w-[225px] 2xl:w-[225px] rotate-45 rounded-xl ml-[0px] md:ml-[240px] lg:-ml-[0px] xl:-ml-[0px] 2xl:-ml-[0px] -mt-[0px] md:-mt-[30px] lg:mt-[0px] xl:mt-[0px] 2xl:mt-[0px]"
                                    alt="this is img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default WelcomeData;