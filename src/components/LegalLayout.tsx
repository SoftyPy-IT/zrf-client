"use client";

import React from "react";
import CommonBanner from "./share/CommonBanner/CommonBanner";
import PageBody from "./share/PageBody";
import { useLanguage } from "@/provider/LanguageProvider";
import { contact } from "@/lib/site";
import { FileText } from "lucide-react";

type TProps = {
  title: string;
  subtitle?: string;
  /** Human-readable revision date, e.g. "April 15, 2026". */
  lastUpdated?: string;
  children: React.ReactNode;
};

/**
 * Numbered clause of a legal document. Keeps every policy page on the same
 * heading scale and spacing without the pages hand-rolling their own.
 */
export function LegalSection({
  title,
  children,
  tone = "default",
}: {
  title: string;
  children: React.ReactNode;
  /** "note" for an aside/callout, "default" for an ordinary clause. */
  tone?: "default" | "note";
}) {
  if (tone === "note") {
    return (
      <section className="rounded-card border border-slate-200 bg-slate-50 p-5 sm:p-6">
        <h2 className="text-[16px] font-bold text-slate-900">{title}</h2>
        <span className="rule-gold mt-3" aria-hidden="true" />
        <div className="mt-4 space-y-3 text-[14px] leading-[1.8] text-slate-600">
          {children}
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-[19px] font-bold leading-snug text-slate-900 sm:text-xl">
        {title}
      </h2>
      <span className="rule-gold mt-3" aria-hidden="true" />
      <div className="mt-4 space-y-4 text-[14.5px] leading-[1.85] text-slate-600">
        {children}
      </div>
    </section>
  );
}

/**
 * Shell for the legal documents (privacy, refund, terms).
 *
 * Institutional rather than decorative: the shared page banner carries the title,
 * and the document itself sits on a single white sheet — the way a printed policy
 * would be presented on a government site.
 */
export default function LegalLayout({
  title,
  subtitle,
  lastUpdated,
  children,
}: TProps) {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  return (
    <>
      <CommonBanner title={title} subtitle={subtitle} />

      <PageBody>
        <div className="mx-auto max-w-4xl">
          {/* Document meta bar */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-card border border-slate-200 bg-slate-50 px-5 py-4">
            <span className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-slate-700">
              <FileText className="h-4 w-4 text-brand-600" />
              {isBn ? "অফিসিয়াল নথি" : "Official document"}
            </span>

            {lastUpdated && (
              <span className="text-[12.5px] text-slate-500">
                {isBn ? "সর্বশেষ হালনাগাদ" : "Last updated"}:{" "}
                <span className="font-semibold text-slate-700">
                  {lastUpdated}
                </span>
              </span>
            )}
          </div>

          <article className="space-y-8">{children}</article>

          {/* Document footer */}
          <div className="mt-12 border-t border-slate-200 pt-6">
            <p className="text-[12.5px] leading-relaxed text-slate-500">
              {isBn
                ? `এই নথিটি জিয়াউর রহমান ফাউন্ডেশন কর্তৃক প্রকাশিত। যেকোনো প্রশ্নের জন্য যোগাযোগ করুন: ${contact.email}`
                : `Published by Ziaur Rahman Foundation. For any question about this document, contact ${contact.email}.`}
            </p>
          </div>
        </div>
      </PageBody>
    </>
  );
}
