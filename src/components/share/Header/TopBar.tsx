"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/provider/LanguageProvider";
import { contact, socials } from "@/lib/site";
import Container from "../Container";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import { socialIcons } from "../socialIcons";

/**
 * Official utility strip that sits above the main navigation.
 * Deliberately not sticky — it scrolls away so the primary navigation can own the
 * top of the viewport once the user starts reading.
 */
const TopBar = () => {
  const { language, setLanguage } = useLanguage();
  const isBn = language === "BNG";

  return (
    <div className="hidden bg-brand-900 text-brand-100 lg:block">
      <Container>
        <div className="flex h-10 items-center justify-between gap-6 text-[12.5px]">
          {/* Contact block */}
          <div className="flex min-w-0 items-center gap-6">
            <span className="flex min-w-0 items-center gap-1.5">
              <LocationOnOutlinedIcon
                sx={{ fontSize: 15 }}
                className="shrink-0 text-gold-400"
              />
              <span className="truncate">
                {isBn ? contact.addressBn : contact.addressEn}
              </span>
            </span>

            <a
              href={`tel:${contact.phones[0]}`}
              className="hidden items-center gap-1.5 transition-colors hover:text-white xl:flex"
            >
              <CallOutlinedIcon
                sx={{ fontSize: 15 }}
                className="shrink-0 text-gold-400"
              />
              {isBn ? contact.phonesBn[0] : contact.phones[0]}
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="hidden items-center gap-1.5 transition-colors hover:text-white xl:flex"
            >
              <MailOutlinedIcon
                sx={{ fontSize: 16 }}
                className="shrink-0 text-gold-400"
              />
              {contact.email}
            </a>
          </div>

          {/* Language + social */}
          <div className="flex shrink-0 items-center gap-4">
            <div
              className="flex items-center gap-1.5"
              role="group"
              aria-label={isBn ? "ভাষা নির্বাচন" : "Select language"}
            >
              <LanguageIcon sx={{ fontSize: 15 }} className="text-gold-400" />
              <button
                type="button"
                onClick={() => setLanguage("ENG")}
                aria-pressed={language === "ENG"}
                className={`rounded px-2 py-0.5 text-[12px] font-semibold transition-colors ${
                  language === "ENG"
                    ? "bg-gold-500 text-brand-950"
                    : "text-brand-200 hover:text-white"
                }`}
              >
                English
              </button>
              <span className="text-brand-700">|</span>
              <button
                type="button"
                onClick={() => setLanguage("BNG")}
                aria-pressed={language === "BNG"}
                className={`rounded px-2 py-0.5 text-[12px] font-semibold transition-colors ${
                  language === "BNG"
                    ? "bg-gold-500 text-brand-950"
                    : "text-brand-200 hover:text-white"
                }`}
              >
                বাংলা
              </button>
            </div>

            <span className="h-4 w-px bg-brand-700" aria-hidden="true" />

            <div className="flex items-center gap-1">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-6 w-6 items-center justify-center rounded-full text-brand-200 transition-colors hover:bg-brand-700 hover:text-white"
                >
                  {socialIcons[social.name]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
