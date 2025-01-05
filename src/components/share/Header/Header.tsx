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

  // Close the mobile menu when clicking any menu item
  const closeMobileMenu = () => {
    setOpen(true);
  };

  const btnStyle = {
    color: "black",
    background: "white",
    padding: "0px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    width: "40px",
    minWidth: "56px",
    height: "33px",
    transition: "background 0.3s ease",
    "&:hover": {
      background: "linear-gradient(to right, #dc2626, #16a34a)",
      color: "white",
    },
  };
  const dropdown =
    "dropdownMenu absolute flex flex-col justify-center mt-[20px] md:mt-[15px] lg:mt-[30px] xl:mt-[18px] rounded-md bg-white shadow-md border border-t-4 border-t-green-600 invisible opacity-0  origin-top z-50 text-black ";

  return (
    <div className="sticky top-0 w-full bg-white shadow-md  z-[999999]">
      <Container>
        <div className="flex justify-between items-center py-1 md:py-0">
          <Box component={Link} href="/">
            <div className="flex items-center md:gap-3">
              <Image
                src={logo}
                alt="logo"
                className="rounded-full logo "
                width={80}
                height={80}
              />
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
                  <Link href="/" onClick={closeMobileMenu}> 
                    {language === 'ENG' ? 'Home' : 'প্রচ্ছদ'}
                  </Link>
                </li>
                <li className="dropdownMenuWrap relative">
                  <Link href="#">
                    {language === 'ENG' ? 'Who We Are' : 'আমাদের সম্পর্কে'}   
                    <KeyboardArrowDownIcon />
                  </Link>
                  <ul className={`w-[290px] h-[160px]  ${dropdown}`}>
                    <li>
                      <Link href="/message-of-president" onClick={closeMobileMenu}>
                        {language === 'ENG' ? 'Message of President' : 'প্রেসিডেন্ট এর বাণী'}
                      </Link>
                    </li>
                    <li>
                      <Link href="/message-of-vice-president" onClick={closeMobileMenu}>
                        {language === 'ENG' ? 'Message of Vice President' : 'ভাইস প্রেসিডেন্ট এর বাণী'}
                      </Link>
                    </li>
                    <li>
                      <Link href="/message-of-director" onClick={closeMobileMenu}>
                        {language === 'ENG' ? 'Message of Executive Director' : 'নির্বাহী পরিচালক এর বাণী'}
                      </Link>
                    </li>
                    <li>
                      <Link href="/committee" onClick={closeMobileMenu}>
                        {language === 'ENG' ? 'Committee' : 'কমিটি'} 
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" onClick={closeMobileMenu}>
                        {language === 'ENG' ? 'About Us' : 'আমাদের সম্পর্কে'}
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteer" onClick={closeMobileMenu}>
                        {language === 'ENG' ? 'Our Volunteers' : 'আমাদের স্বেচ্ছাসেবক'}  
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdownMenuWrap relative">
                  <Link href="#" >
                    {language === 'ENG' ? 'What We Do' : 'আমাদের কার্যক্রম'}  
                    <KeyboardArrowDownIcon />
                  </Link>
                  <ul className={`w-[240px] submenu  ${dropdown}`}>
                    <li className="lg:border-none border-b lg:py-0 py-2">
                      <Link href="/our-projects" onClick={closeMobileMenu}>  
                        {language === 'ENG' ? 'Our Project' : 'আমাদের প্রকল্প'} 
                      </Link>
                    </li>
                    <li className="lg:border-none border-b lg:py-0 py-2">
                      <Link href="/education" onClick={closeMobileMenu}>  
                        {language === 'ENG' ? 'ZRF Education Programs' : 'জেডআরএফ শিক্ষা কার্যক্রম'}
                      </Link>
                    </li>
                    <li>
                      <Link href="/whatwedo/rehabilitation" onClick={closeMobileMenu}>
                        {language === 'ENG' ? 'ZRF Rehabilitation Programs' : 'জেডআরএফ পুনর্বাসন কার্যক্রম'}
                      </Link>
                    </li>
                    <li>
                      <Link href="/whatwedo/covid" onClick={closeMobileMenu}> 
                        {language === 'ENG' ? 'Covid Programs ' : 'কোভিড কার্যক্রম'} 
                      </Link>
                    </li>
                    <li className="lg:border-none border-b lg:py-0 py-2">
                      <Link href="/climate-change" onClick={closeMobileMenu}>
                        {language === 'ENG' ? 'Climate Change Programs ' : 'জলবায়ু পরিবর্তন কার্যক্রম'} 
                      </Link>
                    </li>
                    <li className="lg:border-none border-b lg:py-0 py-2">
                      <Link href="/health-services" onClick={closeMobileMenu}>
                        {language === 'ENG' ? 'Health Services Programs ' : ' স্বাস্থ্য সেবা  কার্যক্রম'}
                      </Link>
                    </li>

                    <li>
                      <Link href="/whatwedo/initiatives" onClick={closeMobileMenu}>
                        {language === 'ENG' ? 'Our Initiatives' : 'আমাদের উদ্যোগ'}
                      </Link>
                    </li>
                    <li>
                      <Link href="/Programs" onClick={closeMobileMenu}>
                        {language === 'ENG' ? 'Our Programs' : 'আমাদের কর্মসূচি'} 
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdownMenuWrap relative">
                  <Link href="/ziaur-rahman" onClick={closeMobileMenu}>
                    {language === 'ENG' ? 'Biography Of Ziaur Rahman' : 'জিয়াউর রহমান এর জীবনী'}
                  </Link>
                </li>

                <li className="lg:border-none border-b lg:py-0 py-2">
                  <Link href="/ebooks" onClick={closeMobileMenu}> 
                    {language === 'ENG' ? 'E-Books' : 'ই-বুক'} 
                  </Link>
                </li>
                <li className="lg:border-none border-b lg:py-0 py-2">
                  <Link href="/news" onClick={closeMobileMenu}> 
                    {language === 'ENG' ? 'News' : 'খবর'}
                  </Link>
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
