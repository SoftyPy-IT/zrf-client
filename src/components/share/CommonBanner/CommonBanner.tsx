"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import bannerImage from "../../../../src/assets/images/banner/banner-new.jpg";
import Container from "../Container";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useLanguage } from "@/provider/LanguageProvider";
import { breadcrumbLabels } from "@/lib/site";

type TProps = {
  title: string;
  /** Optional supporting line rendered under the title. */
  subtitle?: string;
  /** Hides the breadcrumb trail when a page supplies its own. */
  hideBreadcrumb?: boolean;
};

/**
 * Institutional page header used by every inner page.
 *
 * Background photo is scrimmed with the brand gradient so the headline stays
 * legible, and a breadcrumb is derived from the pathname unless one is supplied.
 */
const CommonBanner = ({ title, subtitle, hideBreadcrumb }: TProps) => {
  const pathname = usePathname();
  const { language } = useLanguage();
  const isBn = language === "BNG";

  const segments = pathname.split("/").filter(Boolean);

  /* Detail routes end in a database id — never show that as a breadcrumb. */
  const isId = (segment: string) => /^[a-f0-9]{16,}$/i.test(segment);

  const crumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    const label = breadcrumbLabels[segment];
    const fallback = isId(segment)
      ? isBn
        ? "বিস্তারিত"
        : "Details"
      : segment
          .replace(/[-_]+/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());
    return {
      href,
      label: label ? (isBn ? label.bn : label.en) : fallback,
    };
  });

  const current = crumbs[crumbs.length - 1];

  return (
    <section className="relative isolate overflow-hidden bg-brand-900">
      {/* Background photograph */}
      <Image
        src={bannerImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center opacity-40"
      />

      {/* Brand scrim keeps the headline readable over any photo */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950 via-brand-900/95 to-brand-800/70"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 22%, rgba(200,160,46,0.55) 0%, transparent 45%)",
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="py-10 sm:py-12 md:py-16 lg:py-20">
          {/* Breadcrumb */}
          {!hideBreadcrumb && (
            <nav
              aria-label={isBn ? "পথনির্দেশ" : "Breadcrumb"}
              className="mb-4 flex flex-wrap items-center gap-1.5 text-[12.5px] font-medium text-brand-200"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-gold-400"
              >
                <HomeOutlinedIcon sx={{ fontSize: 15 }} />
                {isBn ? "প্রচ্ছদ" : "Home"}
              </Link>

              {crumbs.map((crumb, index) => {
                const isLast = index === crumbs.length - 1;
                return (
                  <React.Fragment key={crumb.href}>
                    <ChevronRightIcon
                      sx={{ fontSize: 15 }}
                      className="shrink-0 text-brand-500"
                      aria-hidden="true"
                    />
                    {isLast ? (
                      <span className="text-gold-400" aria-current="page">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="capitalize transition-colors hover:text-gold-400"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </React.Fragment>
                );
              })}
            </nav>
          )}

          <h1 className="max-w-4xl text-[26px] font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-[42px]">
            {title}
          </h1>

          <span className="rule-gold mt-4" aria-hidden="true" />

          {(subtitle || current) && (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-100 md:text-[15px]">
              {subtitle ??
                (isBn
                  ? "জিয়াউর রহমান ফাউন্ডেশন — মানবতার সেবায় নিবেদিত একটি প্রতিষ্ঠান।"
                  : "Ziaur Rahman Foundation — an institution devoted to the service of humanity.")}
            </p>
          )}
        </div>
      </Container>

      {/* Gold base rule ties the banner to the page body */}
      <div className="h-1 w-full bg-gold-rule" />
    </section>
  );
};

export default CommonBanner;
