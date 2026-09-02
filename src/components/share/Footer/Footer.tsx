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
import MailOutline from "@mui/icons-material/MailOutline";
import { YouTube } from "@mui/icons-material";
import Subscribe from "./Subscribe";
import { Box } from "@mui/material";
import DonationModal from "@/components/Donation/DonationModal";
import { useLanguage } from "@/provider/LanguageProvider";

const FooterData = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { language } = useLanguage();

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const footerLinks = {
    support: [
      {
        name: language === "ENG" ? "Contact Us" : "যোগাযোগ করুন",
        href: "/contact",
      },
      {
        name: language === "ENG" ? "Join Us" : "যোগ দিন",
        href: "#",
        onClick: handleModalOpen,
      },
    ],
    about: [
      {
        name: language === "ENG" ? "About Us" : "আমাদের সম্পর্কে",
        href: "/about",
      },
      {
        name: language === "ENG" ? "Contact Us" : "যোগাযোগ করুন",
        href: "/contact",
      },
      {
        name: language === "ENG" ? "Our Committee" : "আমাদের কমিটি",
        href: "/committee",
      },
    ],
    registration: [
      {
        name:
          language === "ENG"
            ? "Science Fair Registration"
            : "বিজ্ঞান মেলা নিবন্ধন",
        href: "/registration",
        isRegistration: true,
      },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FacebookIcon className="text-[18px]" />,
      href: "https://www.facebook.com/zrf.org/",
    },
    {
      name: "YouTube",
      icon: <YouTube className="text-[18px]" />,
      href: "https://www.youtube.com/@ZiaurRahmanFoundationZRF",
    },
    {
      name: "X",
      icon: <XIcon className="text-[18px]" />,
      href: "https://x.com",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon className="text-[18px]" />,
      href: "https://instagram.com",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon className="text-[18px]" />,
      href: "https://linkedin.com",
    },
  ];

  const ColumnHeading = ({ title }: { title: string }) => (
    <h4 className="font-bold text-white text-lg mb-5 relative inline-block">
      {title}
      <span className="absolute -bottom-2 left-0 w-10 h-[3px] bg-gradient-to-r from-[#FEC909] to-[#20bd86] rounded-full"></span>
    </h4>
  );

  const FooterLink = ({
    href,
    onClick,
    name,
  }: {
    href: string;
    onClick?: () => void;
    name: string;
  }) => (
    <li>
      {onClick ? (
        <button
          onClick={onClick}
          className="group inline-flex items-center gap-2.5 text-[#B8D9C4] hover:text-[#FEC909] transition-colors duration-300 text-sm cursor-pointer text-left"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FEC909]/40 transition-all duration-300 group-hover:bg-[#FEC909] group-hover:scale-125"></span>
          {name}
        </button>
      ) : (
        <Link
          href={href}
          className="group inline-flex items-center gap-2.5 text-[#B8D9C4] hover:text-[#FEC909] transition-colors duration-300 text-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FEC909]/40 transition-all duration-300 group-hover:bg-[#FEC909] group-hover:scale-125"></span>
          {name}
        </Link>
      )}
    </li>
  );

  return (
    <>
      {/* Newsletter Signup Bar */}
      <div className="relative bg-gradient-to-r from-[#0F3D26] via-[#1A5C3D] to-[#20bd86] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-10 w-72 h-72 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute -bottom-24 -left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-2xl" />
        </div>
        <Container>
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6 py-9 md:py-11 z-10">
            <div className="flex items-center gap-4">
              <div className="hidden md:flex w-12 h-12 rounded-full bg-white/15 backdrop-blur border border-white/25 items-center justify-center shrink-0">
                <MailOutline className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-xl lg:text-3xl text-white font-bold uppercase">
                  {language === "ENG"
                    ? "Join Our Newsletter"
                    : "আমাদের নিউজলেটার যোগদান"}
                </p>
                <p className="text-white/80 text-sm mt-1">
                  {language === "ENG"
                    ? "Get the latest updates, messages and program alerts delivered to your inbox."
                    : "সর্বশেষ আপডেট, বার্তা এবং প্রোগ্রামের তথ্য সরাসরি আপনার ইনবক্সে পেতে সাবস্ক্রাইব করুন।"}
                </p>
              </div>
            </div>
            <Subscribe />
          </div>
        </Container>
      </div>

      {/* Main Footer Body */}
      <Box
        component="footer"
        sx={{
          background:
            "linear-gradient(180deg, #06120B 0%, #0A1A12 45%, #050F08 100%)",
          color: "#C8E0D0",
          position: "relative",
          pt: 10,
          pb: 4,
          overflow: "hidden",
        }}
      >
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `url(${footer.src})`,
            backgroundSize: "500px auto",
            backgroundRepeat: "repeat",
          }}
        />

        <Container>
          <div className="relative">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.9fr_1fr_1.2fr] gap-x-8 gap-y-10">
              {/* Brand Section */}
              <div>
                <Link href="/" className="inline-flex items-center gap-4">
                  <Image
                    src={logo}
                    alt="Ziaur Rahman Foundation Logo"
                    width={56}
                    height={60}
                    className="w-12 h-auto"
                  />
                  <span className="text-left">
                    <span className="block font-bold text-white text-lg leading-tight">
                      {language === "ENG"
                        ? "Ziaur Rahman Foundation"
                        : "জিয়াউর রহমান ফাউন্ডেশন"}
                    </span>
                    <span className="block text-[#FEC909] text-xs mt-1 font-medium">
                      {language === "ENG"
                        ? "Working for a better nation"
                        : "রাষ্ট্র গঠনে নিবেদিত"}
                    </span>
                  </span>
                </Link>

<p className="text-[#B8D9C4] text-sm leading-relaxed mt-5 max-w-sm">
  {language === "ENG"
    ? "Ziaur Rahman Foundation is a humanitarian and welfare organization established in memory of the proclaimer of Bangladesh's Independence and the great freedom fighter, Shaheed President Ziaur Rahman Bir Uttam."
    : "জিয়াউর রহমান ফাউন্ডেশন বাংলাদেশের স্বাধীনতার ঘোষক এবং মহান মুক্তিযোদ্ধা শহীদ রাষ্ট্রপতি জিয়াউর রহমান বীর উত্তমের স্মরণে প্রতিষ্ঠিত একটি মানবিক ও কল্যাণমূলক সংগঠন।"}
</p>

                {/* Social Icons */}
                <div className="flex items-center gap-2.5 mt-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/10 text-[#C8E0D0] hover:bg-[#FEC909] hover:text-[#0A1A12] hover:border-[#FEC909] hover:-translate-y-1 transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Support Links */}
              <div className="text-center sm:text-left">
                <ColumnHeading
                  title={language === "ENG" ? "Support" : "সহায়তা"}
                />
                <ul className="space-y-3.5">
                  {footerLinks.support.map((link, index) => (
                    <FooterLink
                      key={index}
                      href={link.href}
                      onClick={link.onClick}
                      name={link.name}
                    />
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div className="text-center sm:text-left">
                <ColumnHeading
                  title={language === "ENG" ? "About" : "আমাদের সম্পর্কে"}
                />
                <ul className="space-y-3.5">
                  {footerLinks.about.map((link, index) => (
                    <FooterLink
                      key={index}
                      href={link.href}
                      name={link.name}
                    />
                  ))}
                </ul>
              </div>

              {/* Registration Section */}
              <div className="text-center sm:text-left">
                <ColumnHeading
                  title={language === "ENG" ? "Registration" : "নিবন্ধন"}
                />
                {footerLinks.registration.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#FEC909] hover:bg-[#FFD633] text-[#1A1A1A] font-semibold text-xs px-4 py-2.5 shadow-lg shadow-yellow-400/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl w-fit"
                  >
                    <span className="leading-tight whitespace-nowrap">
                      {link.name}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                ))}
                <p className="text-[#B8D9C4]/80 text-xs mt-4 leading-relaxed">
                  {language === "ENG"
                    ? "Register now for the upcoming science fair event."
                    : "আসন্ন বিজ্ঞান মেলা ইভেন্টে এখনই নিবন্ধন করুন।"}
                </p>
              </div>
            </div>

            {/* Gradient Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#FEC909] to-transparent my-8" />

            {/* Copyright Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()}{" "}
                {language === "ENG"
                  ? "Ziaur Rahman Foundation. All Rights Reserved."
                  : "জিয়াউর রহমান ফাউন্ডেশন। সর্বস্বত্ব সংরক্ষিত।"}
              </div>
              <div className="flex items-center flex-wrap justify-center gap-x-6 gap-y-2">
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-[#FEC909] transition-colors duration-300 text-sm"
                >
                  {language === "ENG" ? "Privacy Policy" : "প্রাইভেসি পলিসি"}
                </Link>
                <Link
                  href="/terms-&-conditions"
                  className="text-gray-400 hover:text-[#FEC909] transition-colors duration-300 text-sm"
                >
                  {language === "ENG" ? "Terms & Conditions" : "শর্তাবলি"}
                </Link>
                <Link
                  href="/refund-policy"
                  className="text-gray-400 hover:text-[#FEC909] transition-colors duration-300 text-sm"
                >
                  {language === "ENG" ? "Refund Policy" : "রিফান্ড পলিসি"}
                </Link>
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