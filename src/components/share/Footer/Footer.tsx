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
  Typography,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import DonationModal from "@/components/Donation/DonationModal";
import { useLanguage } from "@/provider/LanguageProvider";



const FooterData = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { language } = useLanguage()
  const buttonStyle = {
    width: "120px",
    height: "30px",
    borderRadius: "10px",
    color: "white",
    background: "#216740",
    padding: "0px",
    "&:hover": {
      background: "#FEC909",
      color: "#1A1A1A",
    },
  };

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        <Image
          src={footer}
          alt="Descriptive text"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>

      <Box
        component="footer"
        sx={{
          background:
            "linear-gradient(135deg, #051008 0%, #0A1A12 50%, #051008 100%)",
          color: "#C8E0D0",
          pt: 8,
          pb: 4,
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(33, 103, 64, 0.3)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle, rgba(33, 103, 64, 0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 300,
            height: 300,
            background:
              "radial-gradient(circle, rgba(254, 201, 9, 0.05) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          },
        }}
      >
        <Container>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start mt-8">
              <div className="w-full md:w-1/4 mb-8 md:mb-0">
                <Link href="/">
                  <div className="space-y-3 flex flex-col items-center">
                    <Image
                      src={logo}
                      alt="Seville Logo"
                      width={90}
                      height={90}
                    />
                    <h3 className="font-bold text-lg text-center text-white">
                      {language === "ENG"
                        ? "Ziaur Rahman Foundation"
                        : "জিয়াউর রহমান ফাউন্ডেশন"}
                    </h3>
                  </div>
                </Link>
              </div>

              <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center">
                <h4 className="font-semibold text-white">
                  {language === "ENG" ? "Our Address" : "আমাদের ঠিকানা"}
                </h4>
                <p className="text-[#B8D9C4]">
                  {language === "ENG"
                    ? "House#2, Road#23/A, Gulshan-1, Near Gulshan 1 Post Office, Dhaka-1212, Bangladesh."
                    : "বাড়ি #২, রোড #২৩/এ, গুলশান-১, গুলশান ১ পোস্ট অফিস, ঢাকা-১২১২, বাংলাদেশ।"}
                </p>
              </div>

              <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center">
                <ul className="space-y-3">
                  <li>
                    <Button component={Link} href="/contact" sx={buttonStyle}>
                      {language === "ENG" ? "Contact Us" : "যোগাযোগ করুন"}
                    </Button>
                  </li>
                  <li>
                    <Button onClick={handleModalOpen} sx={buttonStyle}>
                      {language === "ENG" ? "Join Us" : "যোগ দিন"}
                    </Button>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-1/4">
                <div className="mt-4 text-center md:text-left lg:text-left xl:text-left">
                  <h4 className="font-semibold text-center text-white">
                    {language === "ENG"
                      ? "Follow Us"
                      : "আমাদের অনুসরণ করুন"}
                  </h4>
                  <div className="flex justify-center">
                    <div className="mt-4 flex space-x-4">
                      <a
                        href="https://www.facebook.com/zrf.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        <FacebookIcon className="text-blue-600 hover:text-blue-700" />
                      </a>
                      <a
                        href="https://www.youtube.com/@ZiaurRahmanFoundationZRF"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        <YouTube className="text-red-600 hover:text-red-700" />
                      </a>
                      <a
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        <XIcon className="text-blue-600 hover:text-blue-700" />
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        <InstagramIcon className="text-pink-500 hover:text-pink-600" />
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        <LinkedInIcon className="text-blue-700 hover:text-blue-800" />
                      </a>
                    </div>
                  </div>
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

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center text-gray-500">
                &copy;{" "}
                {language === "ENG"
                  ? " Copyrights Ziaur Rahman Foundation 2026. All Rights Reserved "
                  : "কপিরাইট জিয়াউর রহমান ফাউন্ডেশন ২০২৬. সর্বস্বত্ব সংরক্ষিত"}
              </div>


            </div>
          </div>
        </Container>
      </Box>

      {/* Donation Modal - Only renders when modalOpen is true */}
      {modalOpen && <DonationModal onClose={handleModalClose} open={modalOpen} />}
    </>
  );
};

export default FooterData;