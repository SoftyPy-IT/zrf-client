"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/provider/LanguageProvider";
import logo from "@/assets/images/logo/logo.svg";
import Container from "../Container";
import TopBar from "./TopBar";
import { navItems, type NavItem } from "@/lib/site";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { contact, socials } from "@/lib/site";
import { socialIcons } from "../socialIcons";

/** True when the given nav entry (or one of its children) is the current page. */
const isItemActive = (item: NavItem, pathname: string) => {
  const matches = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  if (matches(item.href)) return true;
  return Boolean(item.subItems?.some((sub) => matches(sub.href)));
};

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const isBn = language === "BNG";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Elevate the bar once the user leaves the very top of the page */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll behind the mobile drawer */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  /* Close overlays on route change */
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenMobileSubmenu(null);
    setOpenMenu(null);
  }, [pathname]);

  /* Escape closes whichever overlay is open */
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenMenu(null);
      setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  /* Small close delay keeps the pointer bridge between trigger and panel usable */
  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  useEffect(() => () => cancelClose(), [cancelClose]);

  return (
    <>
      <TopBar />

      {/* Skip link for keyboard and screen-reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100000] focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {isBn ? "মূল বিষয়বস্তুতে যান" : "Skip to main content"}
      </a>

      <header
        className={`sticky top-0 z-[9999] w-full transition-shadow duration-300 ${
          scrolled ? "shadow-header" : ""
        }`}
      >
        {/* Gold hairline marks the official top edge */}
        <div className="h-[3px] w-full bg-gradient-to-r from-brand-700 via-gold-500 to-brand-700" />

        <div className="border-b border-slate-200/80 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/85">
          <Container>
            <div
              className={`flex items-center justify-between gap-4 transition-all duration-300 ${
                scrolled ? "h-[68px]" : "h-[76px] lg:h-[84px]"
              }`}
            >
              {/* ---------------------------------------------------------- */}
              {/* Brand                                                      */}
              {/* ---------------------------------------------------------- */}
              <Link
                href="/"
                className="group flex shrink-0 items-center gap-3"
                aria-label={`${isBn ? "জিয়াউর রহমান ফাউন্ডেশন" : "Ziaur Rahman Foundation"} — ${isBn ? "প্রচ্ছদ" : "Home"}`}
              >
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-brand-50 ring-1 ring-brand-100 sm:h-12 sm:w-12">
                  <Image
                    src={logo}
                    alt=""
                    fill
                    sizes="48px"
                    className="object-contain p-1"
                    priority
                  />
                </span>

                <span className="hidden flex-col leading-tight sm:flex">
                  <span className="text-[15px] font-bold tracking-tight text-slate-900 transition-colors group-hover:text-brand-700 lg:text-[16px]">
                    {isBn ? "জিয়াউর রহমান ফাউন্ডেশন" : "Ziaur Rahman Foundation"}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-600">
                    {isBn ? "রাষ্ট্র গঠনে নিবেদিত" : "Dedicated to nation building"}
                  </span>
                </span>
              </Link>

              {/* ---------------------------------------------------------- */}
              {/* Desktop navigation                                          */}
              {/* ---------------------------------------------------------- */}
              <nav
                className="hidden flex-1 justify-center xl:flex"
                aria-label={isBn ? "প্রধান মেনু" : "Main menu"}
              >
                <ul className="flex items-center gap-0.5 xl:gap-1">
                  {navItems.map((item, index) => {
                    const active = isItemActive(item, pathname);
                    const hasPanel = Boolean(item.subItems?.length);
                    const isMega = (item.subItems?.length ?? 0) > 6;
                    const alignRight = index >= navItems.length - 2;

                    if (!hasPanel) {
                      return (
                        <li key={item.nameEn}>
                          <Link
                            href={item.href}
                            aria-current={active ? "page" : undefined}
                            className={`nav-link ${active ? "nav-link-active" : ""}`}
                          >
                            {isBn ? item.nameBn : item.nameEn}
                          </Link>
                        </li>
                      );
                    }

                    return (
                      <li
                        key={item.nameEn}
                        className="relative"
                        onMouseEnter={() => {
                          cancelClose();
                          setOpenMenu(item.nameEn);
                        }}
                        onMouseLeave={scheduleClose}
                      >
                        <button
                          type="button"
                          aria-expanded={openMenu === item.nameEn}
                          aria-haspopup="true"
                          onClick={() =>
                            setOpenMenu((prev) =>
                              prev === item.nameEn ? null : item.nameEn,
                            )
                          }
                          className={`nav-link ${active ? "nav-link-active" : ""}`}
                        >
                          {isBn ? item.nameBn : item.nameEn}
                          <KeyboardArrowDownIcon
                            sx={{ fontSize: 17 }}
                            className={`-mr-1 transition-transform duration-200 ${
                              openMenu === item.nameEn ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`absolute top-full z-50 pt-2 ${
                            alignRight ? "right-0" : "left-0"
                          } ${
                            openMenu === item.nameEn
                              ? "pointer-events-auto translate-y-0 opacity-100"
                              : "pointer-events-none -translate-y-1 opacity-0"
                          } transition-all duration-200 ease-editorial`}
                        >
                          <div
                            className={`overflow-hidden rounded-panel border border-slate-200 border-t-2 border-t-brand-600 bg-white p-2 shadow-panel ${
                              isMega ? "grid w-[640px] grid-cols-2 gap-0.5" : "w-[340px]"
                            }`}
                            role="menu"
                          >
                            {item.subItems?.map((sub) => {
                              const subActive =
                                pathname === sub.href ||
                                pathname.startsWith(`${sub.href}/`);
                              return (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  role="menuitem"
                                  className={`group/item flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors ${
                                    subActive ? "bg-brand-50" : "hover:bg-slate-50"
                                  }`}
                                >
                                  <span
                                    className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                                      subActive
                                        ? "bg-gold-500"
                                        : "bg-slate-300 group-hover/item:bg-gold-500"
                                    }`}
                                  />
                                  <span className="min-w-0 flex-1">
                                    <span
                                      className={`block text-[13.5px] font-semibold leading-snug transition-colors ${
                                        subActive
                                          ? "text-brand-700"
                                          : "text-slate-800 group-hover/item:text-brand-700"
                                      }`}
                                    >
                                      {isBn ? sub.nameBn : sub.nameEn}
                                    </span>
                                    {(isBn ? sub.descriptionBn : sub.descriptionEn) && (
                                      <span className="mt-0.5 block text-[12px] leading-snug text-slate-500">
                                        {isBn ? sub.descriptionBn : sub.descriptionEn}
                                      </span>
                                    )}
                                  </span>
                                  <ChevronRightIcon
                                    sx={{ fontSize: 15 }}
                                    className={`mt-0.5 shrink-0 text-brand-500 opacity-0 transition-opacity group-hover/item:opacity-100 ${
                                      subActive ? "opacity-100" : ""
                                    }`}
                                  />
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* ---------------------------------------------------------- */}
              {/* Actions                                                     */}
              {/* ---------------------------------------------------------- */}
              <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                <Link
                  href="/donations"
                  className="hidden items-center gap-2 rounded-lg bg-gold-500 px-4 py-2.5 text-[13.5px] font-bold text-brand-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-md focus-visible:outline-offset-2 md:inline-flex"
                >
                  <VolunteerActivismOutlinedIcon sx={{ fontSize: 18 }} />
                  {isBn ? "অনুদান দিন" : "Donate"}
                </Link>

                {/* Compact segmented language switch, main bar only */}
                <div className="hidden items-center rounded-lg border border-slate-200 bg-slate-50 p-0.5 xl:inline-flex">
                  {(["ENG", "BNG"] as const).map((code) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setLanguage(code)}
                      aria-pressed={language === code}
                      aria-label={code === "ENG" ? "English" : "বাংলা"}
                      className={`rounded-[6px] px-2.5 py-1.5 text-[12px] font-bold transition-all ${
                        language === code
                          ? "bg-brand-600 text-white shadow-sm"
                          : "text-slate-600 hover:text-brand-700"
                      }`}
                    >
                      {code === "ENG" ? "EN" : "বাংলা"}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="rounded-lg border border-slate-200 p-2 text-slate-700 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700 xl:hidden"
                  aria-label={isBn ? "মেনু খুলুন" : "Open menu"}
                  aria-expanded={mobileMenuOpen}
                >
                  <MenuIcon sx={{ fontSize: 22 }} />
                </button>
              </div>
            </div>
          </Container>
        </div>
      </header>

      {/* ---------------------------------------------------------------- */}
      {/* Mobile drawer                                                     */}
      {/* ---------------------------------------------------------------- */}
      <div
        className={`fixed inset-0 z-[99998] bg-brand-950/50 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed inset-y-0 right-0 z-[99999] flex w-[88%] max-w-[380px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-editorial xl:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileMenuOpen}
        aria-label={isBn ? "মোবাইল মেনু" : "Mobile menu"}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-3.5">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2.5"
            aria-label={`${isBn ? "জিয়াউর রহমান ফাউন্ডেশন" : "Ziaur Rahman Foundation"} — ${isBn ? "প্রচ্ছদ" : "Home"}`}
          >
            <span className="relative h-10 w-10 shrink-0">
              <Image src={logo} alt="" fill sizes="40px" className="object-contain" />
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="truncate text-[13.5px] font-bold text-slate-900">
                {isBn ? "জিয়াউর রহমান ফাউন্ডেশন" : "Ziaur Rahman Foundation"}
              </span>
              <span className="truncate text-[10.5px] font-semibold uppercase tracking-[0.1em] text-gold-600">
                {isBn ? "রাষ্ট্র গঠনে নিবেদিত" : "Dedicated to nation building"}
              </span>
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="shrink-0 rounded-lg border border-slate-200 p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
            aria-label={isBn ? "মেনু বন্ধ করুন" : "Close menu"}
          >
            <CloseIcon sx={{ fontSize: 20 }} />
          </button>
        </div>

        {/* Drawer nav */}
        <nav className="mobile-drawer-scroll flex-1 overflow-y-auto px-3 py-4">
          <p className="mb-2 px-3 text-[10.5px] font-bold uppercase tracking-[0.14em] text-slate-400">
            {isBn ? "মেনু" : "Menu"}
          </p>
          <ul className="flex flex-col gap-0.5">
            {navItems.map((item) => {
              const active = isItemActive(item, pathname);
              const hasPanel = Boolean(item.subItems?.length);
              const open = openMobileSubmenu === item.nameEn;

              if (!hasPanel) {
                return (
                  <li key={item.nameEn}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative flex items-center rounded-lg px-3 py-2.5 text-[14.5px] font-semibold transition-colors ${
                        active
                          ? "bg-brand-50 font-bold text-brand-700"
                          : "text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      {active && (
                        <span
                          className="absolute inset-y-2 left-0 w-[3px] rounded-full bg-gold-500"
                          aria-hidden="true"
                        />
                      )}
                      <span className="pl-1.5">
                        {isBn ? item.nameBn : item.nameEn}
                      </span>
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.nameEn}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileSubmenu((prev) =>
                        prev === item.nameEn ? null : item.nameEn,
                      )
                    }
                    aria-expanded={open}
                    className={`relative flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-[14.5px] font-semibold transition-colors ${
                      active || open
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    {active && (
                      <span
                        className="absolute inset-y-2 left-0 w-[3px] rounded-full bg-gold-500"
                        aria-hidden="true"
                      />
                    )}
                    <span className="pl-1.5">
                      {isBn ? item.nameBn : item.nameEn}
                    </span>
                    <KeyboardArrowDownIcon
                      sx={{ fontSize: 20 }}
                      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-editorial ${
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="ml-4 flex flex-col gap-0.5 border-l-2 border-brand-100 py-1 pl-3">
                        {item.subItems?.map((sub) => {
                          const subActive =
                            pathname === sub.href ||
                            pathname.startsWith(`${sub.href}/`);
                          return (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                aria-current={subActive ? "page" : undefined}
                                className={`block rounded-lg px-3 py-2 text-[13.5px] transition-colors ${
                                  subActive
                                    ? "bg-brand-50 font-semibold text-brand-700"
                                    : "font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-700"
                                }`}
                              >
                                {isBn ? sub.nameBn : sub.nameEn}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Contact details live with the menu so the pinned action bar stays light */}
          <div className="mt-6 border-t border-slate-200 px-3 pt-5">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-slate-400">
              {isBn ? "যোগাযোগ" : "Get in touch"}
            </p>
            <div className="mt-3 flex flex-col gap-2 text-[12.5px] text-slate-600">
              <a
                href={`tel:${contact.phones[0]}`}
                className="flex items-center gap-2 hover:text-brand-700"
              >
                <CallOutlinedIcon sx={{ fontSize: 15 }} className="text-brand-600" />
                {isBn ? contact.phonesBn[0] : contact.phones[0]}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 break-all hover:text-brand-700"
              >
                <MailOutlinedIcon sx={{ fontSize: 16 }} className="text-brand-600" />
                {contact.email}
              </a>
            </div>
          </div>
        </nav>

        {/* Drawer footer: primary action and language stay within reach */}
        <div className="border-t border-slate-200 bg-slate-50 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4">
          <Link
            href="/donations"
            onClick={() => setMobileMenuOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold-500 px-4 py-3 text-sm font-bold text-brand-950 shadow-sm transition-colors hover:bg-gold-400"
          >
            <VolunteerActivismOutlinedIcon sx={{ fontSize: 19 }} />
            {isBn ? "অনুদান দিন" : "Donate Now"}
          </Link>

          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="inline-flex items-center rounded-lg border border-slate-200 bg-white p-0.5">
              {(["ENG", "BNG"] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLanguage(code)}
                  aria-pressed={language === code}
                  aria-label={code === "ENG" ? "English" : "বাংলা"}
                  className={`rounded-[6px] px-3 py-1.5 text-[12px] font-bold transition-all ${
                    language === code
                      ? "bg-brand-600 text-white"
                      : "text-slate-600"
                  }`}
                >
                  {code === "ENG" ? "English" : "বাংলা"}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                >
                  {socialIcons[social.name]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
