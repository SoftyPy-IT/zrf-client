"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/images/logo/transparent.png";
import footer from "../../../assets/images/footer/pattern-2.png";
import Container from "../Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { Button } from "@mui/material";
import { YouTube } from "@mui/icons-material";
import Subscribe from "./Subscribe";
import {
  Box,
  Divider,
} from "@mui/material";
import DonationModal from "@/components/Donation/DonationModal";
import { useLanguage } from "@/provider/LanguageProvider";

const FooterData = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { language } = useLanguage();


  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  // Footer links data
  const footerLinks = {
    support: [
      { name: language === "ENG" ? "Contact Us" : "যোগাযোগ করুন", href: "/contact" },
      { name: language === "ENG" ? "Join Us" : "যোগ দিন", href: "#", onClick: handleModalOpen },
    ],
    about: [
      { name: language === "ENG" ? "About Us" : "আমাদের সম্পর্কে", href: "/about" },
      { name: language === "ENG" ? "Contact Us" : "যোগাযোগ করুন", href: "/contact" },
      { name: language === "ENG" ? "Our Committee" : "আমাদের কমিটি", href: "/committee" },
    ],
  };




  const socialLinks = [
    {
      name: "Facebook",
      icon: <FacebookIcon className="text-2xl" />,
      href: "https://www.facebook.com/zrf.org/",
      color: "hover:text-blue-600",
    },
    {
      name: "YouTube",
      icon: <YouTube className="text-2xl" />,
      href: "https://www.youtube.com/@ZiaurRahmanFoundationZRF",
      color: "hover:text-red-600",
    },
    {
      name: "X",
      icon: <XIcon className="text-2xl" />,
      href: "https://x.com",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon className="text-2xl" />,
      href: "https://instagram.com",
      color: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon className="text-2xl" />,
      href: "https://linkedin.com",
      color: "hover:text-blue-700",
    },
  ];

  return (
    <>
      <div className="bg-[#20bd86] relative ">
        <Container>
          <div className="relative md:gap-0 gap-y-3 flex flex-col md:flex-row justify-between items-center py-8 z-10">
            <p className="text-xl lg:text-3xl text-white font-sans uppercase">
              {language === "ENG"
                ? " Join Our Newsletter"
                : "আমাদের নিউজলেটার যোগদান"}
            </p>
            <Subscribe />
          </div>
        </Container>

      </div>

      <Box
        component="footer"
        sx={{
          background:
            "linear-gradient(135deg, #051008 0%, #0A1A12 50%, #051008 100%)",
          color: "#C8E0D0",
          pt: 8,
          pb: 4,



        }}
      >
        <Container>
          <div className="container ">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 mt-8">
              {/* Logo and Description Section - Centered */}
              <div >
                <Link href="/">
                  <div className="space-y-3 flex flex-col items-center">
                    <Image
                      src={logo}
                      alt="Seville Logo"
                      width={90}
                      height={90}
                      className="cursor-pointer"
                    />
                    <h3 className="font-bold text-lg text-center text-white">
                      {language === "ENG"
                        ? "Ziaur Rahman Foundation"
                        : "জিয়াউর রহমান ফাউন্ডেশন"}
                    </h3>
                  </div>
                </Link>

              </div>

              {/* Support Links */}
              <div className="text-center sm:text-left">
                <h4 className="font-semibold text-white text-lg mb-4 relative inline-block sm:inline-block">
                  {language === "ENG" ? "Support" : "সহায়তা"}
                  <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#FEC909] hidden sm:block"></span>
                </h4>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      {link.onClick ? (
                        <Button
                          onClick={link.onClick}
                          sx={{
                            color: "#B8D9C4",
                            "&:hover": {
                              color: "#FEC909",
                              background: "transparent",
                            },
                            textTransform: "none",
                            padding: 0,
                            minWidth: "auto",
                          }}
                        >
                          {link.name}
                        </Button>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-[#B8D9C4] hover:text-[#FEC909] transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links */}
              <div className="text-center sm:text-left">
                <h4 className="font-semibold text-white text-lg mb-4 relative inline-block sm:inline-block">
                  {language === "ENG" ? "About" : "আমাদের সম্পর্কে"}
                  <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#FEC909] hidden sm:block"></span>
                </h4>
                <ul className="space-y-3">
                  {footerLinks.about.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-[#B8D9C4] hover:text-[#FEC909] transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Media Section - Flex Items */}
              <div className="text-center sm:text-left">
                <h4 className="font-semibold text-white text-lg mb-4 relative inline-block sm:inline-block">
                  {language === "ENG" ? "Follow Us" : "আমাদের অনুসরণ করুন"}
                  <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#FEC909] hidden sm:block"></span>
                </h4>
                <div className="flex justify-center sm:justify-start items-center gap-4 mt-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transform transition-all duration-300 hover:scale-110 ${social.color} text-[#B8D9C4]`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <Divider
              sx={{
                my: 3,
                background:
                  "linear-gradient(90deg, transparent, #216740, #FEC909, #216740, transparent)",
                height: 1,
              }}
            />

            {/* Copyright Section */}
            <div className=" text-center">
              <div className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()}{" "}
                {language === "ENG"
                  ? "Ziaur Rahman Foundation. All Rights Reserved."
                  : "জিয়াউর রহমান ফাউন্ডেশন। সর্বস্বত্ব সংরক্ষিত।"}
              </div>

            </div>
          </div>
        </Container>
      </Box>

      {/* Donation Modal */}
      {modalOpen && <DonationModal onClose={handleModalClose} open={modalOpen} />}
    </>
  );
};

export default FooterData;