"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/images/logo/transparent.png";
import footerPattern from "../../../assets/images/footer/pattern-2.png";
import Container from "../Container";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Subscribe from "./Subscribe";
import MembershipModal from "@/components/Donation/MembershipModal";
import { useLanguage } from "@/provider/LanguageProvider";
import { contact, site, socials } from "@/lib/site";
import { socialIcons } from "../socialIcons";

const FooterData = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { language } = useLanguage();
  const isBn = language === "BNG";

  const linkColumns = [
    {
      heading: isBn ? "আমাদের সম্পর্কে" : "About",
      links: [
        { name: isBn ? "আমাদের সম্পর্কে" : "About Us", href: "/about" },
        { name: isBn ? "কমিটি" : "Committee", href: "/committee" },
        {
          name: isBn ? "প্রেসিডেন্টের বাণী" : "President's Message",
          href: "/message-of-president",
        },
        {
          name: isBn ? "নির্বাহী পরিচালকের বাণী" : "Executive Director's Message",
          href: "/message-of-director",
        },
        {
          name: isBn ? "স্মারক ও প্রকাশনা" : "News & Publications",
          href: "/news",
        },
      ],
    },
    {
      heading: isBn ? "আমাদের কার্যক্রম" : "Our Work",
      links: [
        {
          name: isBn ? "আমাদের প্রকল্প" : "Our Projects",
          href: "/our-projects",
        },
        {
          name: isBn ? "শিক্ষা কার্যক্রম" : "Education Programmes",
          href: "/education",
        },
        { name: isBn ? "স্বাস্থ্য সেবা" : "Health Services", href: "/health-services" },
        {
          name: isBn ? "জলবায়ু পরিবর্তন" : "Climate Change",
          href: "/climate-change",
        },
        { name: isBn ? "ফটো গ্যালারি" : "Photo Gallery", href: "/gallery" },
      ],
    },
    {
      heading: isBn ? "সম্পৃক্ত হোন" : "Get Involved",
      links: [
        {
          name: isBn ? "স্বেচ্ছাসেবক হোন" : "Become a Volunteer",
          href: "/volunteer",
        },
        { name: isBn ? "অনুদান দিন" : "Donate", href: "/donations" },
        { name: isBn ? "যোগাযোগ" : "Contact Us", href: "/contact" },
        { name: isBn ? "ই-বুক" : "E-Books", href: "/ebooks" },
        { name: isBn ? "ভিডিও গ্যালারি" : "Video Gallery", href: "/videos" },
      ],
    },
  ];

  const ColumnHeading = ({ children }: { children: React.ReactNode }) => (
    <h3 className="mb-5 font-bold text-white">
      <span className="text-[15px] tracking-tight">{children}</span>
      <span className="mt-2.5 block h-[2px] w-8 rounded-full bg-gold-500" />
    </h3>
  );

  return (
    <>
      {/* ============================================================== */}
      {/* Newsletter band                                                */}
      {/* ============================================================== */}
      <section className="relative overflow-hidden border-t-4 border-gold-500 bg-brand-800">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url(${footerPattern.src})`,
            backgroundSize: "420px auto",
          }}
          aria-hidden="true"
        />
        <Container>
          <div className="relative z-10 flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center md:py-12">
            <div className="flex items-start gap-4">
              <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20 md:flex">
                <MailOutlineIcon className="text-white" sx={{ fontSize: 22 }} />
              </span>
              <div>
                <h2 className="text-lg font-bold text-white md:text-xl lg:text-2xl">
                  {isBn ? "আমাদের সংবাদপত্রে সাবস্ক্রাইব করুন" : "Subscribe to our newsletter"}
                </h2>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-brand-100">
                  {isBn
                    ? "সর্বশেষ সংবাদ, কার্যক্রমের তথ্য ও ঘোষণা সরাসরি আপনার ইমেইলে পেতে সাবস্ক্রাইব করুন।"
                    : "Get the latest news, programme updates and official announcements delivered straight to your inbox."}
                </p>
              </div>
            </div>
            <Subscribe />
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* Main footer                                                    */}
      {/* ============================================================== */}
      <footer className="relative overflow-hidden bg-brand-950 text-brand-100">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url(${footerPattern.src})`,
            backgroundSize: "500px auto",
          }}
          aria-hidden="true"
        />

        <Container>
          <div className="relative z-10 grid grid-cols-1 gap-x-8 gap-y-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:py-16">
            {/* Brand + contact ------------------------------------------ */}
            <div className="lg:col-span-6 xl:col-span-3">
              <Link href="/" className="inline-flex items-center gap-3.5">
                <Image
                  src={logo}
                  alt=""
                  width={56}
                  height={60}
                  className="h-12 w-auto"
                />
                <span>
                  <span className="block text-[17px] font-bold leading-tight text-white">
                    {isBn ? site.nameBn : site.nameEn}
                  </span>
                  <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-400">
                    {isBn ? site.taglineBn : site.taglineEn}
                  </span>
                </span>
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-200">
                {isBn
                  ? "বাংলাদেশের স্বাধীনতার ঘোষক ও মহান মুক্তিযোদ্ধা শহীদ রাষ্ট্রপতি জিয়াউর রহমান বীর উত্তমের স্মরণে প্রতিষ্ঠিত একটি মানবিক ও কল্যাণমূলক সংগঠন।"
                  : "A humanitarian and welfare organisation established in memory of Shaheed President Ziaur Rahman Bir Uttam, the proclaimer of Bangladesh's Independence."}
              </p>

              {/* Social */}
              <div className="mt-6 flex items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-brand-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-500 hover:bg-gold-500 hover:text-brand-950"
                  >
                    {socialIcons[social.name]}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns -------------------------------------------- */}
            {linkColumns.map((column) => (
              <div key={column.heading} className="lg:col-span-2">
                <ColumnHeading>{column.heading}</ColumnHeading>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-start gap-2 text-[13.5px] leading-snug text-brand-200 transition-colors hover:text-white"
                      >
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold-500/50 transition-colors group-hover:bg-gold-500" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Reach us ------------------------------------------------ */}
            <div className="sm:col-span-2 lg:col-span-12 xl:col-span-3">
              <ColumnHeading>{isBn ? "যোগাযোগ" : "Reach Us"}</ColumnHeading>

              <ul className="space-y-3.5 text-[13.5px] leading-relaxed lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0 xl:block xl:space-y-3.5">
                <li className="flex items-start gap-2.5">
                  <LocationOnOutlinedIcon
                    sx={{ fontSize: 17 }}
                    className="mt-0.5 shrink-0 text-gold-400"
                  />
                  <span className="min-w-0 text-brand-200">
                    {isBn ? contact.addressBn : contact.addressEn}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CallOutlinedIcon
                    sx={{ fontSize: 16 }}
                    className="mt-0.5 shrink-0 text-gold-400"
                  />
                  <span className="flex min-w-0 flex-col gap-0.5">
                    {(isBn ? contact.phonesBn : contact.phones).map((phone, index) => (
                      <a
                        key={phone}
                        href={`tel:${contact.phones[index]}`}
                        className="text-brand-200 transition-colors hover:text-white"
                      >
                        {phone}
                      </a>
                    ))}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MailOutlineIcon
                    sx={{ fontSize: 17 }}
                    className="mt-0.5 shrink-0 text-gold-400"
                  />
                  <a
                    href={`mailto:${contact.email}`}
                    className="min-w-0 break-words text-brand-200 transition-colors hover:text-white"
                  >
                    {/* Zero-width space after the "@" so long addresses wrap readably */}
                    {contact.email.replace("@", "@\u200B")}
                  </a>
                </li>
              </ul>

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3.5 py-2 text-[13px] font-semibold text-white transition-colors hover:border-gold-500 hover:bg-gold-500 hover:text-brand-950"
              >
                {isBn ? "সদস্য হোন" : "Become a member"}
                <ArrowForwardIcon sx={{ fontSize: 15 }} />
              </button>
            </div>
          </div>

          {/* Bottom bar ------------------------------------------------- */}
          <div className="relative z-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 md:flex-row">
            <p className="text-center text-[12.5px] text-brand-300 md:text-left">
              &copy; {new Date().getFullYear()}{" "}
              {isBn
                ? "জিয়াউর রহমান ফাউন্ডেশন। সর্বস্বত্ব সংরক্ষিত।"
                : "Ziaur Rahman Foundation. All rights reserved."}
            </p>

            <nav
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
              aria-label={isBn ? "নীতিমালা" : "Policies"}
            >
              {[
                { name: isBn ? "প্রাইভেসি পলিসি" : "Privacy Policy", href: "/privacy-policy" },
                { name: isBn ? "শর্তাবলি" : "Terms & Conditions", href: "/terms-&-conditions" },
                { name: isBn ? "রিফান্ড পলিসি" : "Refund Policy", href: "/refund-policy" },
                { name: isBn ? "নিবন্ধন" : "Registration", href: "/registration" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[12.5px] text-brand-300 transition-colors hover:text-gold-400"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </Container>
      </footer>

      {modalOpen && (
        <MembershipModal
          onClose={() => setModalOpen(false)}
          open={modalOpen}
        />
      )}
    </>
  );
};

export default FooterData;
