"use client";
// components/Header.tsx
import "./Header.css";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Container from "../Container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../../../assets/images/logo/zfa.png";
import { useLanguage } from "@/provider/LanguageProvider";
import { Button } from "@mui/material";
import DonationModal from "./DonationModal";

const dropdown =
  "dropdownMenu absolute flex flex-col justify-center mt-[20px] md:mt-[15px] lg:mt-[30px] xl:mt-[18px] rounded-md bg-white shadow-md border border-t-4 border-t-green-600 invisible opacity-0  origin-top z-50 ";

const Header = () => {
  const [open, setOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const [isSticky, setIsSticky] = useState(false);
  const { language, setLanguage } = useLanguage();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const buttonStyle = { width: '150px', height: '45px', borderRadius: '50px', color: 'white', background: '#E3C80D', padding: '0px', }

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <>
      <Container>
        <div className="relative py-3 z-40">
          <div>
            <div className=" lg:mx-auto lg:flex lg:justify-between lg:items-center lg:mb-3">
              <div className="lg:flex lg:items-center lg:space-x-4">
                <Link href="/">
                  {/* Logo */}
                  <Image
                    src={logo}
                    alt="Seville"
                    className="h-14 lg:h-20 w-auto lg:w-24"
                  />
                </Link>
              </div>
              <h2 className="font-bold text-xl hidden lg:flex">

                {language === 'ENG' ? 'An initiative, a little effort, will bring prosperity, will come to the country self reliance' : " একটি উদ্যোগ, একটু চেষ্টা, এনে দিবে স্বচ্ছলতা, দেশে আসবেস্বনির্ভরতা।"}
              </h2>
              {/* Contact Info */}
              <div className="hidden lg:flex space-x-4">
                <button
                  onClick={() => setLanguage("ENG")}
                  className={`bg-gradient-to-r from-yellow-600 to-green-600 p-1 text-[9px] md:text-sm  md:px-3  md:py-1 rounded text-white ${language === "ENG" ? "opacity-100" : "opacity-60"
                    }`}
                //  className="bg-gradient-to-r  text-white px-4 py-2 rounded"
                >
                  ENG
                </button>
                <button
                  onClick={() => setLanguage("BNG")}
                  className={`bg-gradient-to-r from-yellow-600 to-green-600 p-1 text-[9px] md:text-sm  md:px-3 rounded text-white ${language === "BNG" ? "opacity-100" : "opacity-60"
                    }`}
                // className=" bg-gradient-to-r from-yellow-600 to-green-600 text-white px-4 py-2 rounded"
                >
                  বাংলা
                </button>
              </div>
            </div>

            {/* Navbar */}
            <div
              className={`${isSticky
                ? "fixed top-0 left-0 w-full bg-white shadow-lg z-50"
                : "relative"
                } transition-all duration-300`}
            >
              {open ? (
                <div onClick={handleClose} className="bar1 z-50">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              ) : (
                <div
                  onClick={handleOpen}
                  className={`bar2 z-50 ${open ? "" : "activeBar"}`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}

              <div className="flex items-center justify-between absolute z-50 md:w-[1100px] left-1/2 transform -translate-x-1/2  bg-green-700 px-4">
                <ul
                  className={`lg:w-full xl:w-full lg:py-2 flex justify-center text-sm lg:text-base xl:text-base text-white  navItems ${open ? "" : "activeMenu z-50"
                    }`}
                >
                  <li className="lg:border-none border-b lg:py-0 py-1">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="dropdownMenuWrap relative">
                    <Link href="#">
                      Who We Are <KeyboardArrowDownIcon />
                    </Link>
                    <ul className={`w-[290px] h-[160px] ${dropdown}`}>
                      <li>
                        <Link href="/message-of-president">
                          Message of President
                        </Link>
                      </li>
                      <li>
                        <Link href="/message-of-director">
                          Message of Executive Director
                        </Link>
                      </li>
                      <li>
                        <Link href="/committee">Committee</Link>
                      </li>
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdownMenuWrap relative">
                    <Link href="#">
                      What We Do <KeyboardArrowDownIcon />
                    </Link>
                    <ul className={`w-[240px] h-[160px] ${dropdown}`}>
                      <li>
                        <Link href="/whatwedo/program">Program</Link>
                      </li>
                      <li>
                        <Link href="/whatwedo/rehabilitation">
                          ZRF Rehabilitation Team
                        </Link>
                      </li>
                      <li className="lg:border-none border-b lg:py-0 py-2">
                        <Link href="/education">ZRF Education Program</Link>
                      </li>
                      <li>
                        <Link href="/whatwedo/initiatives">Initiatives</Link>
                      </li>
                      <li>
                        <Link href="/whatwedo/covid">Covid</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdownMenuWrap relative">
                    <Link href="#">
                      History of the Family <KeyboardArrowDownIcon />
                    </Link>
                    <ul className={`w-[220px] h-[160px] ${dropdown}`}>
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
                    </ul>
                  </li>

                  <li className="lg:border-none border-b lg:py-0 py-2">
                    <Link href="/ebooks">E-Books</Link>
                  </li>
                  <li className="lg:border-none border-b lg:py-0 py-2">
                    <Link href="/news">News</Link>
                  </li>


                </ul>
                <div >

                  <Button onClick={handleModalOpen} sx={buttonStyle}>Join Us </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      

      {

        modalOpen && (
          <DonationModal onClose={handleModalClose} />
        )
      }
    </>
  );
};

export default Header;
