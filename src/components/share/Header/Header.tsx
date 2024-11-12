"use client";
import { useState } from "react";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import logo from "../../../assets/images/logo/logo2.svg";
import Container from "../Container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useLanguage } from "@/provider/LanguageProvider";

const Header = () => {
  const { language, setLanguage } = useLanguage();

  const [open, setOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(true)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toggleMobileMenu = () => {
    setOpen((open) => !open)
  }

  const btnStyle = {
    color: 'black',
    background: 'white',
    padding: '0px',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    width: '40px',
    minWidth: '56px',
    height: '33px',
    transition: 'background 0.3s ease',
    '&:hover': {
      background: 'linear-gradient(to right, #dc2626, #16a34a)',
      color: 'white'
    }
  }
  const dropdown =
    "dropdownMenu absolute flex flex-col justify-center mt-[20px] md:mt-[15px] lg:mt-[30px] xl:mt-[18px] rounded-md bg-white shadow-md border border-t-4 border-t-green-600 invisible opacity-0  origin-top z-50 text-black ";


  return (
    <div className="sticky top-0 w-full bg-white shadow-md py-3 md:p-3 z-[999999]">
      <Container>
        <div className="flex justify-between items-center">
          <Box component={Link} href="/">
            <div className="flex items-center gap-2 md:gap-3">
              <Image
                src={logo}
                alt="logo"
                className="rounded-full"
                width={50}
                height={50}
              />
              <Typography component="span" fontWeight={600} color="black">
                <Box component="span" color="primary.main" fontWeight="bold">
                  <b className="md:font-bold text-[12px] md:text-[16px]">{language === 'ENG' ? 'Ziaur Rahman' : 'জিয়াউর রহমান'}</b> <br /><b className="md:font-bold text-[12px] md:text-[16px]"> {language === 'ENG' ? 'Foundation' : ' ফাউন্ডেশন'} </b>
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
                  <Link href="/">Home</Link>
                </li>
                <li className="dropdownMenuWrap relative">
                  <Link href="#">
                    Who We Are <KeyboardArrowDownIcon />
                  </Link>
                  <ul className={`w-[290px] h-[160px]  ${dropdown}`}>
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
                <li className="dropdownMenuWrap  relative">
                  <Link href="#">
                    What We Do <KeyboardArrowDownIcon />
                  </Link>
                  <ul className={`w-[240px] submenu  ${dropdown}`}>
                    <li className="lg:border-none border-b lg:py-0 py-2">
                      <Link href="/education">ZRF Education Program</Link>
                    </li>
                    <li>
                      <Link href="/whatwedo/rehabilitation">
                        ZRF Rehabilitation Team
                      </Link>
                    </li>
                    <li>
                      <Link href="/whatwedo/covid">Covid</Link>
                    </li>
                    <li className="lg:border-none border-b lg:py-0 py-2">
                      <Link href="/education">Climate Change</Link>
                    </li>
                    <li className="lg:border-none border-b lg:py-0 py-2">
                      <Link href="/education">Health Services</Link>
                    </li>

                    <li>
                      <Link href="/whatwedo/initiatives">Initiatives</Link>
                    </li>
                    <li>
                      <Link href="/whatwedo/program">Our Program</Link>
                    </li>


                    <li className="lg:border-none border-b lg:py-0 py-2">
                      <Link href="/education">Our Project</Link>
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
            </>
          </div>
          <div className=" xl:block space-x-1 md:space-x-3 mr-[30px] text-center md:mr-8 xl:mr-0 ">
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
