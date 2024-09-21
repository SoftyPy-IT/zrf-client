// components/Footer.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/images/logo/zfa.png";
import news1 from "../../../assets/images/news/news (1).jpg";
import news2 from "../../../assets/images/news/news (2).jpg";
import footer from "../../../assets/images/footer/pattern-2.png";
import Container from "../Container";
import EastIcon from "@mui/icons-material/East";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  const handleSubmit = () => {
    console.log();
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
  ];

  const ourServices = [
    { name: "ZRF Rehavalidation Team", href: "/services" },
    { name: "Programm", href: "/about" },
    { name: "Initiativs", href: "/case-studies" },
    { name: "Covid", href: "/services" },
  ];

  const latestNews = [
    {
      title: "Shawl On A Broomstick You Can Crawl",
      date: "April 12, 2017",
      imgSrc: news1,
    },
    {
      title: "Strokes To Move The World",
      date: "April 12, 2017",
      imgSrc: news2,
    },
  ];

  return (
    <>
      <div className="bg-[#20bd86] relative">
        <Container>
          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center py-8 z-10">
            <div className="w-auto">
              <h1 className="text-3xl text-white font-sans uppercase">
                Join Our Newsletter
              </h1>
            </div>
            <div className="w-full lg:w-auto flex justify-center items-center mt-4 md:mt-0 lg:mt-0 xl:mt-0">
              <div className="relative lg:flex items-center w-full">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full lg:w-[500px] py-3 lg:py-6 pl-1 lg:pl-4 border border-gray-300 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-0 py-1 lg:py-4 px-1 lg:px-8 mr-1 lg:mr-2 my-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Subscribe <EastIcon />
                </button>
              </div>
            </div>
          </div>
        </Container>
        <Image
          src={footer}
          alt="Descriptive text"
          className="absolute inset-0 object-cover w-full h-full "
        />
      </div>
      <footer className="bg-gray-900 text-white pt-12 pb-8">
        <Container>
          <div className="container mx-auto">
            {/* Top Section */}

            {/* Middle Section */}
            <div className="flex flex-col md:flex-row justify-between items-start mt-8">
              {/* About */}
              <div className="w-full md:w-1/4 mb-8 md:mb-0">
                <div className="space-y-3 flex flex-col items-center">
                  <Image src={logo} alt="Seville Logo" width={50} height={50} />
                  <h3 className="font-bold text-lg text-center">
                    Ziaur Rahman Foundation
                  </h3>
                </div>
              </div>

              <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center">
                <h4 className="font-semibold">Our Address </h4>
                <p>28/1 VIP Road, Naya Paltan, Dhaka, Bangladesh</p>
              </div>
              {/* Latest News */}
              <div className="w-full md:w-1/4">
                {/* <h4 className="font-semibold text-center md:text-left lg:text-left xl:text-left">
                  Latest News
                </h4> */}
                {/* <div className="mt-4 space-y-4">
                  {latestNews.map((news) => (
                    <div key={news.title} className="flex space-x-4">
                      <Image
                        src={news.imgSrc}
                        alt={news.title}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <p className="hover:text-white cursor-pointer">
                          {news.title.slice(0, 25)}
                        </p>
                        <span className="text-gray-500 text-sm">
                          {news.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div> */}

                <div className=" mt-4 text-center md:text-left lg:text-left xl:text-left">
                  {/* Social Media Icons */}
                  <h4 className="font-semibold text-center">Follow Us</h4>
                  <div className="flex justify-center">
                    <div className="mt-4 flex space-x-4">
                      <a
                        href="https://www.facebook.com/zrf.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white"
                      >
                        <FacebookIcon />
                      </a>
                      <a
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white"
                      >
                        <XIcon />
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white"
                      >
                        <InstagramIcon />
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white"
                      >
                        <LinkedInIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom Section */}
            <div className="mt-8 text-center text-gray-500">
              &copy; Copyrights Ziaur Rahman Foundation 2024. All Rights
              Reserved
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
