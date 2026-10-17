"use client";

import PageBody from "@/components/share/PageBody";
import { getPublicApiUrl } from "@/config/env";
import { useLanguage } from "@/provider/LanguageProvider";
import { ArrowRight, CheckCircle2, Home } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const API_BASE_URL = getPublicApiUrl();

type TDonationDetails = {
  transaction_id?: string;
  donor_name?: string;
  donor_email?: string;
  amount?: number | string;
  payment_status?: string;
};

/**
 * Payment success screen.
 *
 * The gateway redirects here with `tran_id` (and usually `amount`) in the query
 * string; the transaction reference renders straight away and, when the status
 * endpoint answers, a short receipt block is added underneath. Endpoint and
 * query parameters are unchanged from the previous implementation.
 */
const PaymentSuccessPage = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";
  const searchParams = useSearchParams();

  const tranId = searchParams.get("tran_id");
  const amount = searchParams.get("amount");

  const [donationDetails, setDonationDetails] =
    useState<TDonationDetails | null>(null);

  useEffect(() => {
    if (!tranId) return;

    let cancelled = false;

    const fetchDonationDetails = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/donations/payment/status/${tranId}`,
        );
        const data = await response.json();

        if (!cancelled && data.success && data.data) {
          setDonationDetails(data.data as TDonationDetails);
        }
      } catch {
        /* The confirmation stands on its own; the receipt block is optional. */
      }
    };

    fetchDonationDetails();

    return () => {
      cancelled = true;
    };
  }, [tranId]);

  const reference = donationDetails?.transaction_id || tranId;

  const rawAmount = donationDetails?.amount ?? amount;
  const amountLabel =
    rawAmount === null || rawAmount === undefined || rawAmount === ""
      ? null
      : Number.isFinite(Number(rawAmount))
        ? Number(rawAmount).toLocaleString("en-US")
        : String(rawAmount);

  const hasReceipt = Boolean(
    reference || amountLabel || donationDetails?.donor_name,
  );

  const rowClass =
    "flex items-start justify-between gap-4 border-t border-slate-200 pt-3 first:border-t-0 first:pt-0";

  return (
    <PageBody tone="slate" tight>
      <div className="mx-auto w-full max-w-xl">
        <div className="rounded-panel border border-slate-200 bg-white p-6 text-center shadow-card sm:p-10">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 ring-1 ring-brand-100">
            <CheckCircle2 className="h-8 w-8 text-brand-600" aria-hidden="true" />
          </span>

          <h1 className="mt-5 text-[24px] font-bold text-slate-900 sm:text-[28px]">
            {isBn ? "পেমেন্ট সফল হয়েছে!" : "Payment Successful!"}
          </h1>

          <p className="mt-3 text-[14.5px] leading-[1.85] text-slate-600">
            {isBn
              ? "আপনার উদার অনুদানের জন্য আন্তরিক ধন্যবাদ। আপনার সহযোগিতা বাংলাদেশজুড়ে আমাদের শিক্ষা, স্বাস্থ্যসেবা ও পুনর্বাসনের কাজ চালিয়ে যেতে সাহায্য করে।"
              : "Thank you for your generous donation. Your support helps us continue our education, healthcare and rehabilitation work across Bangladesh."}
          </p>

          {hasReceipt && (
            <dl className="mt-7 space-y-3 rounded-card border border-slate-200 bg-slate-50 p-5 text-left">
              {reference && (
                <div className={rowClass}>
                  <dt className="text-[12.5px] text-slate-500">
                    {isBn ? "লেনদেন রেফারেন্স" : "Transaction reference"}
                  </dt>
                  <dd className="break-all text-right text-[12.5px] font-semibold text-slate-900">
                    {reference}
                  </dd>
                </div>
              )}

              {amountLabel && (
                <div className={rowClass}>
                  <dt className="text-[12.5px] text-slate-500">
                    {isBn ? "অনুদানের পরিমাণ" : "Donation amount"}
                  </dt>
                  <dd className="text-[13.5px] font-bold tabular-nums text-brand-700">
                    ৳{amountLabel}
                  </dd>
                </div>
              )}

              {donationDetails?.donor_name && (
                <div className={rowClass}>
                  <dt className="text-[12.5px] text-slate-500">
                    {isBn ? "দাতার নাম" : "Donor name"}
                  </dt>
                  <dd className="text-right text-[12.5px] font-semibold text-slate-900">
                    {donationDetails.donor_name}
                  </dd>
                </div>
              )}

              {donationDetails?.payment_status && (
                <div className={rowClass}>
                  <dt className="text-[12.5px] text-slate-500">
                    {isBn ? "পেমেন্ট স্ট্যাটাস" : "Payment status"}
                  </dt>
                  <dd>
                    <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[11.5px] font-semibold text-brand-700 ring-1 ring-brand-100">
                      {donationDetails.payment_status}
                    </span>
                  </dd>
                </div>
              )}
            </dl>
          )}

          <p className="mt-6 text-[12.5px] leading-relaxed text-slate-500">
            {isBn
              ? "নিশ্চিতকরণ ইমেইল আপনার ইনবক্সে পাঠানো হয়েছে।"
              : "A confirmation email has been sent to your inbox."}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              {isBn ? "হোমে ফিরে যান" : "Back to Home"}
            </Link>

            <Link
              href="/program"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-[14px] font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
            >
              {isBn ? "আমাদের কর্মসূচি দেখুন" : "View our programmes"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <p className="mt-6 text-[12.5px] text-slate-500">
            {isBn ? "কোনো প্রশ্ন থাকলে " : "Any questions? "}
            <Link
              href="/contact"
              className="font-semibold text-brand-700 underline underline-offset-2 transition-colors hover:text-brand-800"
            >
              {isBn ? "আমাদের সঙ্গে যোগাযোগ করুন।" : "Contact us."}
            </Link>
          </p>
        </div>
      </div>
    </PageBody>
  );
};

export default PaymentSuccessPage;
