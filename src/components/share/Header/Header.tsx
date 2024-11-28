"use client";
import { useState } from "react";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import logo from "../../../assets/images/logo/logo.svg";
import Container from "../Container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useLanguage } from "@/provider/LanguageProvider";

const Header = () => {
  const { language, setLanguage } = useLanguage();

  const [open, setOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toggleMobileMenu = () => {
    setOpen((open) => !open);
  };


  const dropdown =
    "dropdownMenu absolute flex flex-col justify-center mt-[20px] md:mt-[15px] lg:mt-[30px] xl:mt-[18px] rounded-md bg-white shadow-md border border-t-4 border-t-green-600 invisible opacity-0  origin-top z-50 text-black ";

  return (
    <div className="sticky top-0 w-full bg-white shadow-md  z-[999999]">
      <Container>
        <div className="flex justify-between items-center py-1 md:py-1">
          <Box component={Link} href="/">
            <div className="flex items-center gap-x-1 md:gap-3">
              <div className="w-10 h-10 md:w-[65px] md:h-[65px]">
                <Image
                  src={logo}
                  alt="logo"
                  className="rounded-full logo w-full h-full  "
                  width={75}
                  height={75}
                />
              </div>
              <Typography component="span" fontWeight={600} color="black">
                <Box component="span" color="primary.main" fontWeight="bold">
                  <p className="md:font-bold text-[12px] md:text-[20px]">
                    {language === "ENG" ? "Ziaur Rahman" : "জিয়াউর রহমান"}
                  </p>

                  <p
                    className="md:font-bold text-[12px] md:text-[20px]"
                    style={{ letterSpacing: "0.15em" }}
                  >
                    {language === "ENG" ? "Foundation" : " ফাউন্ডেশন"}
                  </p>

                </Box>
              </Typography>
            </div>
          </Box>

          <div>
            {open ? (
              <div onClick={handleClose} className="bar1">
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : (
              <div
                onClick={handleOpen}
                className={`bar2 ${open ? "" : "activeBar"}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}

            <>
              <ul
                className={`lg:w-full xl:w-full lg:py-2 flex justify-center text-sm lg:text-base xl:text-bas  navItems ${open ? "" : "activeMenu z-50"
                  }`}
              >
                <li className="lg:border-none border-b lg:py-0 py-1">
                  <Link onClick={toggleMobileMenu} href="/"> {language === "ENG" ? "Home" : " প্রচ্ছদ"}</Link>
                </li>
                <li className="dropdownMenuWrap relative">
                  <Link href="#">
                    {language === "ENG" ? "Who We Are" : " আমাদের সম্পর্কে"}  <KeyboardArrowDownIcon />
                  </Link>
                  <ul className={`w-[290px] h-[160px]  ${dropdown}`}>
                    <li>
                      <Link onClick={toggleMobileMenu} href="/message-of-president">
                        {language === "ENG" ? "Message of President" : "প্রেসিডেন্ট এর বাণী"}
                      </Link>
                    </li>
                    <li>
                      <Link  onClick={toggleMobileMenu} href="/message-of-vice-president">
                        {language === "ENG" ? "Message of Vice President" : "ভাইস প্রেসিডেন্ট এর বাণী"}
                      </Link>
                    </li>
                    <li>
                      <Link onClick={toggleMobileMenu} href="/message-of-director">
                        {language === "ENG" ? "Message of Executive Director" : "নির্বাহী পরিচালক এর বাণী"}
                      </Link>
                    </li>
                    <li>
                      <Link onClick={toggleMobileMenu} href="/committee">  {language === "ENG" ? "Committee" : "কমিটি"}  </Link>
                    </li>
                    <li>
                      <Link onClick={toggleMobileMenu} href="/about">  {language === "ENG" ? "Our History" : "আমাদের ইতিহাস "}   </Link>
                    </li>
                    <li>
                      <Link onClick={toggleMobileMenu} href="/volunteer">  {language === "ENG" ? "Our Volunteers" : "আমাদের স্বেচ্ছাসেবক "}   </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdownMenuWrap  relative">
                  <Link  href="#">
                    {language === "ENG" ? "What We Do" : "আমাদের কার্যক্রম "} <KeyboardArrowDownIcon />
                  </Link>
                  <ul className={`w-[240px] submenu  ${dropdown}`}>
                    <li className="lg:border-none border-b lg:py-0 py-2">
                      <Link onClick={toggleMobileMenu} href="/our-projects">

                        {language === "ENG" ? "Our Project" : "আমাদের প্রকল্প "} </Link>
                    </li>
                    <li className="lg:border-none border-b lg:py-0 py-2">
                      <Link onClick={toggleMobileMenu} href="/education"> {language === "ENG" ? "ZRF Education Program" : "জেডআরএফ শিক্ষা কার্যক্রম  "}  </Link>
                    </li>
                    <li>
                      <Link onClick={toggleMobileMenu} href="/whatwedo/rehabilitation">
                        {language === "ENG" ? "ZRF Rehabilitation Program" : "জেডআরএফ পুনর্বাসন কার্যক্রম"}
                      </Link>
                    </li>
                    <li>
                      <Link onClick={toggleMobileMenu} href="/whatwedo/covid"> {language === "ENG" ? "Covid Programm " : "কোভিড কার্যক্রম"}</Link>
                    </li>
                    <li className="lg:border-none border-b lg:py-0 py-2">
                      <Link onClick={toggleMobileMenu} href="/climate-change">
                        {language === "ENG" ? " Climate Change " : "জলবায়ু পরিবর্তন  "}
                      </Link>
                    </li>
                    <li className="lg:border-none border-b lg:py-0 py-2">
                      <Link onClick={toggleMobileMenu} href="/health-services">
                        {language === "ENG" ? "Health Services" : "স্বাস্থ্য সেবা "}
                      </Link>
                    </li>

                    <li>
                      <Link onClick={toggleMobileMenu} href="/whatwedo/initiatives">
                        {language === "ENG" ? "Our Initiatives" : "আমাদের উদ্যোগ "}
                      </Link>
                    </li>
                    <li>
                      <Link href="/program"> {language === "ENG" ? "Our Program" : "আমাদের কর্মসূচি "} </Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdownMenuWrap relative">
                  <Link onClick={toggleMobileMenu} href="/ziaur-rahman">
                    {language === "ENG" ? "Shaheed President Ziaur Rahman" : "শহীদ প্রেসিডেন্ট জিয়াউর রহমান "}
                    {/* <KeyboardArrowDownIcon /> */}
                  </Link>
                  {/* <ul className={`w-[220px] h-[160px] ${dropdown}`}>
                    <li>
                      <Link href="/ziaur-rahman">Ziaur Rahman</Link>
                    </li>
                    <li>
                      <Link href="/khaleda-zia">Begum Khaleda Zia</Link>
                    </li>
                    <li>
                      <Link href="/tarique-rahman">Tarique Rahman</Link>
                    </li>
                    <li>
                      <Link href="/arafat-rahman">Arafat Rahman Koko</Link>
                    </li>
                  </ul> */}
                </li>

                <li className="lg:border-none border-b lg:py-0 py-2">
                  <Link onClick={toggleMobileMenu} href="/ebooks">{language === "ENG" ? "E-Books" : "ই-বুক "} </Link>
                </li>
                <li className="lg:border-none border-b lg:py-0 py-2">
                  <Link onClick={toggleMobileMenu} href="/news"> {language === "ENG" ? "News" : "খবর "} </Link>
                </li>
              </ul>
            </>
          </div>

          <div className=" xl:block space-x-1 md:space-x-3 mr-[30px] text-center lg:mr-20 md:mr-12 xl:mr-0 ">
            <button
              onClick={() => setLanguage("ENG")}
              className={`bg-gradient-to-r from-yellow-600 to-green-600 p-1 text-[9px] md:text-sm  md:px-3  md:py-1 rounded text-white ${language === "ENG" ? "opacity-100" : "opacity-60"
                }`}
            >
              ENG
            </button>
            <button
              onClick={() => setLanguage("BNG")}
              className={`bg-gradient-to-r from-yellow-600 to-green-600 p-1 text-[9px] md:text-sm  md:px-3 rounded text-white ${language === "BNG" ? "opacity-100" : "opacity-60"
                }`}
            >
              বাংলা
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
