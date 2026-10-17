"use client";

import React from "react";
import { cn } from "@/utils/cn";

type TProps = {
  /** Small uppercase label above the title. */
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  /** Set when the heading sits on a dark or photographic surface. */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * The single section-heading component for the site.
 *
 * Every content section uses this so eyebrow styling, title scale, the gold rule
 * and the subtitle measure stay identical from page to page.
 */
const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className,
}: TProps) => {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "eyebrow mb-3",
            tone === "dark" && "text-gold-400",
          )}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "text-[22px] font-bold leading-tight sm:text-title sm:leading-tight lg:text-display-sm lg:leading-[1.14]",
          tone === "dark" ? "text-white" : "text-slate-900",
        )}
      >
        {title}
      </h2>

      <span className="rule-gold mt-4" aria-hidden="true" />

      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-sm leading-relaxed sm:text-[15px]",
            tone === "dark" ? "text-brand-100" : "text-slate-600",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
