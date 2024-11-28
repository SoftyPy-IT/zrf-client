'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/images/logo/transparent.png";
import footer from "../../../assets/images/footer/pattern-2.png";
import Container from "../Container";
import EastIcon from "@mui/icons-material/East";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { Button } from "@mui/material";
import DonationModal from "../Header/DonationModal";
import { YouTube } from "@mui/icons-material";

type FooterProps = {
    language: string,
}
const FooterData = ({ language }: FooterProps) => {
    const [open, setOpen] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const handleSubmit = () => {

    };

    const buttonStyle = { width: '120px', height: '30px', borderRadius: '10px', color: 'white', background: '#216740', padding: '0px', }

    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    return (
        <>
            <div className="bg-[#20bd86] relative sectionMargin">
                <Container>
                    <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center py-8 z-10">
                        <div className="w-auto">
                            <span className="text-3xl text-white font-sans uppercase">
                                {
                                    language === 'ENG' ? ' Join Our Newsletter' : 'আমাদের নিউজলেটার যোগদান'
                                }
                            </span>
                        </div>
                        <div className="w-full lg:w-auto flex justify-center items-center mt-4 md:mt-0 lg:mt-0 xl:mt-0">
                            <div className="relative lg:flex items-center w-full">
                                <input
                                    type="text"
                                    placeholder={
                                        language === 'ENG' ? 'Enter your email' : 'আপনার ইমেইল লিখুন'
                                    }
                                    className="w-full lg:w-[500px] py-3 lg:py-6 px-4 border border-gray-300 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="absolute right-0 py-1 lg:py-4 px-2 lg:px-8 mx-2  my-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    {
                                        language === 'ENG' ? 'Subscribe' : 'সাবসক্রাইব'
                                    }  <EastIcon />
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

                        <div className="flex flex-col md:flex-row justify-between items-start mt-8">

                            <div className="w-full md:w-1/4 mb-8 md:mb-0">
                                <div className="space-y-3 flex flex-col items-center">
                                    <Image src={logo} alt="Seville Logo" width={50} height={50} />
                                    <h3 className="font-bold text-lg text-center">
                                        {
                                            language === 'ENG' ? 'Ziaur Rahman Foundation' : 'জিয়াউর রহমান ফাউন্ডেশন'
                                        }
                                    </h3>
                                </div>
                            </div>

                            <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center">
                                <h4 className="font-semibold"> {
                                    language === 'ENG' ? 'Our Address' : 'আমাদের ঠিকানা'
                                }  </h4>
                                <p> {
                                    language === 'ENG' ? 'House#4, Road#7, Niketon Gate #2, Gulshan-1, Dhaka-1212, Bangladesh.' : 'বাড়ি#৪, রোড#৭, নিকেতন গেট#২, গুলশান-১, ঢাকা-১২১২, বাংলাদেশ।'
                                } </p>
                            </div>
                            <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center">

                                <ul className="space-y-3 ">

                                    <li><Button component={Link} href='/contact' sx={buttonStyle}>
                                        {
                                            language === 'ENG' ? 'Contact Us' : ' যোগাযোগ করুন'
                                        }  </Button> </li>
                                    <li><Button onClick={handleModalOpen} sx={buttonStyle}> {
                                        language === 'ENG' ? 'Join Us' : 'যোগ দিন'
                                    }
                                    </Button> </li>

                                </ul>
                            </div>

                            <div className="w-full md:w-1/4">


                                <div className=" mt-4 text-center md:text-left lg:text-left xl:text-left">

                                    <h4 className="font-semibold text-center"> {
                                        language === 'ENG' ? 'Follow Us' : 'আমাদের অনুসরণ করুন'
                                    }   </h4>
                                    <div className="flex justify-center">
                                        <div className="mt-4 flex space-x-4">
                                            <a
                                                href="https://www.facebook.com/zrf.org/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-white"
                                            >
                                                <FacebookIcon className="text-blue-600 hover:text-blue-700" />
                                            </a>
                                            <a
                                                href="https://www.youtube.com/@ZiaurRahmanFoundationZRF"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-white"
                                            >
                                                <YouTube className="text-red-600 hover:text-red-700" /> 
                                            </a>
                                            <a
                                                href="https://x.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-white"
                                            >
                                                <XIcon className="text-blue-600 hover:text-blue-700" /> 
                                            </a>
                                            <a
                                                href="https://instagram.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-white"
                                            >
                                                <InstagramIcon className="text-pink-500 hover:text-pink-600" />
                                            </a>
                                            <a
                                                href="https://linkedin.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-white"
                                            >
                                                <LinkedInIcon className="text-blue-700 hover:text-blue-800" /> 
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center text-gray-500">
                            &copy; {
                                language === 'ENG' ? ' Copyrights Ziaur Rahman Foundation 2024. All Rights Reserved ' : 'কপিরাইট জিয়াউর রহমান ফাউন্ডেশন 2024. সর্বস্বত্ব সংরক্ষিত'
                            }

                        </div>
                    </div>
                </Container>
            </footer>

            {

                modalOpen && (
                    <DonationModal onClose={handleModalClose} />
                )
            }
        </>
    );
};

export default FooterData;
