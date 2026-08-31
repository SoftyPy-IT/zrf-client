"use client";

import React, { useState, useEffect } from "react";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/provider/LanguageProvider";
import logo from "@/assets/images/logo/logo.svg";
import Container from "../Container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ScienceIcon from "@mui/icons-material/Science";

interface NavSubItem {
  nameEn: string;
  nameBn: string;
  href: string;
}

interface NavItem {
  nameEn: string;
  nameBn: string;
  href: string;
  subItems?: NavSubItem[];
}

const navItems: NavItem[] = [
  {
    nameEn: "Home",
    nameBn: "প্রচ্ছদ",
    href: "/",
  },
  {
    nameEn: "Who We Are",
    nameBn: "আমাদের সম্পর্কে",
    href: "#",
    subItems: [
      {
        nameEn: "Message of President",
        nameBn: "প্রেসিডেন্ট এর বাণী",
        href: "/message-of-president",
      },
      {
        nameEn: "Message of Vice President",
        nameBn: "ভাইস প্রেসিডেন্ট এর বাণী",
        href: "/message-of-vice-president",
      },
      {
        nameEn: "Message of Executive Director",
        nameBn: "নির্বাহী পরিচালক এর বাণী",
        href: "/message-of-director",
      },
      {
        nameEn: "Committee",
        nameBn: "কমিটি",
        href: "/committee",
      },
      {
        nameEn: "About Us",
        nameBn: "আমাদের সম্পর্কে",
        href: "/about",
      },
      {
        nameEn: "Our Volunteers",
        nameBn: "আমাদের স্বেচ্ছাসেবক",
        href: "/volunteer",
      },
    ],
  },
  {
    nameEn: "What We Do",
    nameBn: "আমাদের কার্যক্রম",
    href: "#",
    subItems: [
      {
        nameEn: "Our Projects",
        nameBn: "আমাদের প্রকল্প",
        href: "/our-projects",
      },
      {
        nameEn: "ZRF Education Programs",
        nameBn: "জেডআরএফ শিক্ষা কার্যক্রম",
        href: "/education",
      },
      {
        nameEn: "ZRF Rehabilitation Programs",
        nameBn: "জেডআরএফ পুনর্বাসন কার্যক্রম",
        href: "/whatwedo/rehabilitation",
      },
      {
        nameEn: "Covid Programs",
        nameBn: "কোভিড কার্যক্রম",
        href: "/whatwedo/covid",
      },
      {
        nameEn: "Climate Change Programs",
        nameBn: "জলবায়ু পরিবর্তন কার্যক্রম",
        href: "/climate-change",
      },
      {
        nameEn: "Health Services Programs",
        nameBn: "স্বাস্থ্য সেবা কার্যক্রম",
        href: "/health-services",
      },
      {
        nameEn: "Our Initiatives",
        nameBn: "আমাদের উদ্যোগ",
        href: "/whatwedo/initiatives",
      },
      {
        nameEn: "Our Programs",
        nameBn: "আমাদের কর্মসূচি",
        href: "/program",
      },
    ],
  },
  {
    nameEn: "Biography Of Ziaur Rahman",
    nameBn: "জিয়াউর রহমান এর জীবনী",
    href: "/ziaur-rahman",
  },
  {
    nameEn: "E-Books",
    nameBn: "ই-বুক",
    href: "/ebooks",
  },
  {
    nameEn: "Upcoming Programs",
    nameBn: "আসন্ন প্রোগ্রাম",
    href: "/upcoming-programs",
  },
];

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for elevation effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleMobileSubmenu = (menuName: string) => {
    setOpenMobileSubmenu((prev) => (prev === menuName ? null : menuName));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMobileSubmenu(null);
  };

  const isBn = language === "BNG";

  return (
    <header
      className={`sticky top-0 w-full z-[99999] transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_4px_25px_-5px_rgba(0,0,0,0.1)] border-b border-slate-200 py-2"
          : "bg-white border-b border-slate-100 shadow-sm py-2.5"
      }`}
    >
      <Container className="max-w-[1440px] px-3 sm:px-5 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo only (Clean, no text) */}
          <Link
            href="/"
            className="flex items-center group flex-shrink-0"
            onClick={closeMobileMenu}
            aria-label="Ziaur Rahman Foundation Home"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
              <Image
                src={logo}
                alt="Ziaur Rahman Foundation Logo"
                fill
                sizes="56px"
                className="object-contain drop-shadow-sm"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <ul className="flex items-center gap-1 xl:gap-2 text-[14px] xl:text-[15px] font-semibold text-slate-800 whitespace-nowrap">
              {navItems.map((item) => {
                const isDropdown = Boolean(item.subItems && item.subItems.length > 0);
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href) ||
                      item.subItems?.some((sub) => pathname === sub.href);

                if (isDropdown) {
                  return (
                    <li key={item.nameEn} className="relative group py-2">
                      <button
                        className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap ${
                          isActive
                            ? "text-[#216740] font-bold bg-emerald-50"
                            : "text-slate-800 hover:text-[#216740] hover:bg-emerald-50/70"
                        }`}
                      >
                        <span className="whitespace-nowrap">{isBn ? item.nameBn : item.nameEn}</span>
                        <KeyboardArrowDownIcon
                          sx={{ fontSize: 18 }}
                          className="transition-transform duration-200 group-hover:rotate-180 text-slate-600 group-hover:text-[#216740]"
                        />
                      </button>

                      {/* Dropdown Menu (Solid High-Contrast Card) */}
                      <div className="absolute top-full left-0 mt-1 w-[290px] xl:w-[310px] rounded-xl bg-white p-2 shadow-[0_15px_40px_rgba(0,0,0,0.16),0_2px_8px_rgba(0,0,0,0.06)] border border-slate-200 border-t-2 border-t-[#216740] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50 before:content-[''] before:absolute before:-top-3 before:left-0 before:w-full before:h-3">
                        <div className="flex flex-col gap-0.5">
                          {item.subItems?.map((sub) => {
                            const isSubActive = pathname === sub.href;
                            return (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[13.5px] font-medium whitespace-nowrap transition-all duration-150 group/sub ${
                                  isSubActive
                                    ? "bg-emerald-100 text-[#216740] font-bold"
                                    : "text-slate-800 hover:bg-emerald-50 hover:text-[#216740] hover:pl-4.5"
                                }`}
                              >
                                <span>{isBn ? sub.nameBn : sub.nameEn}</span>
                                <ChevronRightIcon
                                  sx={{ fontSize: 16 }}
                                  className={`opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all ${
                                    isSubActive ? "opacity-100 translate-x-0 text-[#216740]" : "text-emerald-600"
                                  }`}
                                />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={item.nameEn} className="py-2">
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 rounded-lg transition-all duration-150 whitespace-nowrap ${
                        isActive
                          ? "text-[#216740] font-bold bg-emerald-50"
                          : "text-slate-800 hover:text-[#216740] hover:bg-emerald-50/70"
                      }`}
                    >
                      {isBn ? item.nameBn : item.nameEn}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Utilities (Language Switcher & CTA Button & Mobile Toggle) */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            {/* Corporate Segmented Language Pill Switcher */}
            <div className="inline-flex items-center p-0.5 rounded-full bg-slate-100 border border-slate-200 shadow-inner flex-shrink-0">
              <button
                type="button"
                onClick={() => setLanguage("ENG")}
                className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  language === "ENG"
                    ? "bg-[#216740] text-white shadow-sm"
                    : "text-slate-700 hover:text-black font-semibold"
                }`}
                aria-label="Switch to English"
              >
                ENG
              </button>
              <button
                type="button"
                onClick={() => setLanguage("BNG")}
                className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  language === "BNG"
                    ? "bg-[#216740] text-white shadow-sm"
                    : "text-slate-700 hover:text-black font-semibold"
                }`}
                aria-label="Switch to Bengali"
              >
                বাংলা
              </button>
            </div>

            {/* Science Fair Registration CTA Button */}
            <Link
              href="/registration"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-extrabold whitespace-nowrap bg-gradient-to-r from-[#FEC909] to-[#FFD633] text-[#1A1A1A] shadow-sm hover:shadow-md hover:from-[#FFD633] hover:to-[#FEC909] hover:scale-105 active:scale-95 transition-all"
            >
              <ScienceIcon sx={{ fontSize: 16, color: "#1A1A1A" }} />
              <span>{isBn ? "বিজ্ঞান মেলা ২০২৬" : "Science Fair 2026"}</span>
            </Link>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-800 hover:text-[#216740] hover:bg-emerald-50 transition-colors focus:outline-none"
              aria-label="Open mobile navigation menu"
            >
              <MenuIcon sx={{ fontSize: 28 }} />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999999] transition-opacity lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[340px] bg-white z-[1000000] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50/50">
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image
              src={logo}
              alt="Ziaur Rahman Foundation"
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>

          <button
            onClick={closeMobileMenu}
            className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
            aria-label="Close menu"
          >
            <CloseIcon sx={{ fontSize: 24 }} />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 mobile-drawer-scroll flex flex-col gap-2">
          {/* Mobile Registration Banner */}
          <Link
            href="/registration"
            onClick={closeMobileMenu}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#FEC909] to-[#FFD633] text-[#1A1A1A] font-extrabold text-sm shadow-sm mb-2"
          >
            <ScienceIcon sx={{ fontSize: 18 }} />
            <span>{isBn ? "বিজ্ঞান মেলা ২০২৬ এ নিবন্ধন" : "Science Fair 2026 Registration"}</span>
          </Link>

          {/* Navigation Accordion */}
          <ul className="flex flex-col gap-1 text-[15px] font-semibold text-slate-800">
            {navItems.map((item) => {
              const isDropdown = Boolean(item.subItems && item.subItems.length > 0);
              const isOpen = openMobileSubmenu === item.nameEn;
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href) ||
                    item.subItems?.some((sub) => pathname === sub.href);

              if (isDropdown) {
                return (
                  <li key={item.nameEn} className="border-b border-slate-100/80 pb-1">
                    <button
                      onClick={() => toggleMobileSubmenu(item.nameEn)}
                      className={`flex items-center justify-between w-full p-2.5 rounded-xl transition-colors ${
                        isActive || isOpen
                          ? "bg-emerald-50 text-[#216740] font-bold"
                          : "hover:bg-slate-50 text-slate-800"
                      }`}
                    >
                      <span>{isBn ? item.nameBn : item.nameEn}</span>
                      {isOpen ? (
                        <KeyboardArrowUpIcon sx={{ fontSize: 22, color: "#216740" }} />
                      ) : (
                        <KeyboardArrowDownIcon sx={{ fontSize: 22, color: "#64748B" }} />
                      )}
                    </button>

                    {/* Collapsible Submenu */}
                    {isOpen && (
                      <ul className="ml-3 pl-3 border-l-2 border-emerald-400 flex flex-col gap-1 my-1.5">
                        {item.subItems?.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                onClick={closeMobileMenu}
                                className={`block py-2 px-3 rounded-lg text-[14px] font-medium transition-colors ${
                                  isSubActive
                                    ? "bg-emerald-100 text-[#216740] font-bold"
                                    : "text-slate-700 hover:text-[#216740] hover:bg-slate-50"
                                }`}
                              >
                                {isBn ? sub.nameBn : sub.nameEn}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.nameEn} className="border-b border-slate-100/80 pb-1">
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`block p-2.5 rounded-xl transition-colors ${
                      isActive
                        ? "bg-emerald-50 text-[#216740] font-bold"
                        : "hover:bg-slate-50 text-slate-800"
                    }`}
                  >
                    {isBn ? item.nameBn : item.nameEn}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600">
              {isBn ? "ভাষা নির্বাচন করুন" : "Select Language"}
            </span>
            <div className="inline-flex items-center p-0.5 rounded-full bg-slate-200 border border-slate-300">
              <button
                type="button"
                onClick={() => setLanguage("ENG")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  language === "ENG"
                    ? "bg-[#216740] text-white shadow-sm"
                    : "text-slate-700 font-semibold"
                }`}
              >
                ENG
              </button>
              <button
                type="button"
                onClick={() => setLanguage("BNG")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  language === "BNG"
                    ? "bg-[#216740] text-white shadow-sm"
                    : "text-slate-700 font-semibold"
                }`}
              >
                বাংলা
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
