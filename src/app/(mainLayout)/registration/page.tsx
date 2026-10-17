"use client";

import Link from "next/link";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import PageBody from "@/components/share/PageBody";
import { useLanguage } from "@/provider/LanguageProvider";
import { ArrowLeft, Lock, Send } from "lucide-react";

/**
 * Registration closed-notice.
 *
 * The ZRF Science Fair 2026 registration period is closed by design — no form
 * is offered. This page only states the notice bilingually and points visitors
 * to the contact page or home.
 */
export default function RegistrationPage() {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  return (
    <>
      <CommonBanner
        title={isBn ? "নিবন্ধন" : "Registration"}
        subtitle={
          isBn
            ? "জেডআরএফ বিজ্ঞান মেলা ২০২৬ — নিবন্ধন সংক্রান্ত তথ্য ও ঘোষণা।"
            : "ZRF Science Fair 2026 — registration information and notices."
        }
      />

      <PageBody tone="slate">
        <div className="mx-auto w-full max-w-xl rounded-panel border border-slate-200 bg-white p-6 text-center shadow-card sm:p-10">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
            <Lock className="h-7 w-7 text-slate-600" aria-hidden="true" />
          </span>

          <p className="mt-5 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-600">
            ZRF Science Fair 2026
          </p>

          <h2 className="mt-3 text-[24px] font-bold leading-tight text-slate-900 sm:text-[28px]">
            {isBn ? "নিবন্ধন কার্যক্রম সমাপ্ত" : "Registration is Closed"}
          </h2>

          <p className="mt-4 text-[14.5px] leading-[1.85] text-slate-600">
            {isBn
              ? "জিয়াউর রহমান ফাউন্ডেশন বিজ্ঞান মেলা ২০২৬-এর অনলাইন নিবন্ধন কার্যক্রম সমাপ্ত হয়েছে। আগ্রহের জন্য আন্তরিক ধন্যবাদ।"
              : "Online registration for the ZRF Science Fair 2026 is officially closed. Thank you for your interest and support."}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {isBn ? "প্রধান পাতায় ফিরুন" : "Back to Home"}
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-[14px] font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              {isBn ? "যোগাযোগ করুন" : "Contact Us"}
            </Link>
          </div>
        </div>
      </PageBody>
    </>
  );
}
