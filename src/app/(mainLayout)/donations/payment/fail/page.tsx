"use client";

import PageBody from "@/components/share/PageBody";
import { useLanguage } from "@/provider/LanguageProvider";
import { contact } from "@/lib/site";
import { AlertTriangle, Mail, Phone, RotateCcw, XCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

/** Gateway error codes mapped to a sentence the donor can act on. */
const errorMessages: Record<string, { en: string; bn: string }> = {
  validation_failed: {
    en: "Payment validation failed. Please try again.",
    bn: "পেমেন্ট ভ্যালিডেশন ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
  },
  payment_failed: {
    en: "Payment processing failed at the gateway.",
    bn: "গেটওয়েতে পেমেন্ট প্রক্রিয়াকরণ ব্যর্থ হয়েছে।",
  },
};

/**
 * Payment failure screen.
 *
 * `error` and `tran_id` from the gateway redirect are still read from the query
 * string exactly as before; the page only changes presentation. Support details
 * come from `@/lib/site`.
 */
const PaymentFailPage = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";
  const searchParams = useSearchParams();

  const error = searchParams.get("error");
  const tranId = searchParams.get("tran_id");

  const phones = isBn ? contact.phonesBn : contact.phones;

  const mappedError = error
    ? (errorMessages[error]?.[isBn ? "bn" : "en"] ?? error)
    : null;

  return (
    <PageBody tone="slate" tight>
      <div className="mx-auto w-full max-w-xl">
        <div className="rounded-panel border border-slate-200 bg-white p-6 text-center shadow-card sm:p-10">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
            <XCircle className="h-8 w-8 text-slate-600" aria-hidden="true" />
          </span>

          <h1 className="mt-5 text-[24px] font-bold text-slate-900 sm:text-[28px]">
            {isBn ? "পেমেন্ট ব্যর্থ হয়েছে" : "Payment Failed"}
          </h1>

          <p className="mt-3 text-[14.5px] leading-[1.85] text-slate-600">
            {isBn
              ? "আমরা আপনার পেমেন্ট প্রক্রিয়া করতে পারিনি। অনুগ্রহ করে আবার চেষ্টা করুন — আপনার অ্যাকাউন্ট থেকে কোনো টাকা কাটা হয়নি।"
              : "We could not process your payment. Please try again — your account has not been charged."}
          </p>

          {(mappedError || tranId) && (
            <div className="mt-7 space-y-3 text-left">
              {mappedError && (
                <div className="flex items-start gap-3 rounded-card border border-slate-200 bg-slate-50 p-4">
                  <AlertTriangle
                    className="mt-0.5 h-4 w-4 shrink-0 text-slate-500"
                    aria-hidden="true"
                  />
                  <p className="text-[13.5px] leading-relaxed text-slate-700">
                    {mappedError}
                  </p>
                </div>
              )}

              {tranId && (
                <p className="text-[12.5px] text-slate-500">
                  {isBn ? "লেনদেন আইডি: " : "Transaction ID: "}
                  <span className="font-semibold text-slate-700">{tranId}</span>
                </p>
              )}
            </div>
          )}

          {/* Support --------------------------------------------------- */}
          <div className="mt-7 rounded-card border border-slate-200 bg-slate-50 p-5 text-left">
            <h2 className="text-[14px] font-bold text-slate-900">
              {isBn ? "সহায়তা প্রয়োজন?" : "Need help?"}
            </h2>
            <p className="mt-1 text-[12.5px] leading-relaxed text-slate-600">
              {isBn
                ? "আমাদের টিম আপনার পেমেন্ট সংক্রান্ত যেকোনো প্রশ্নে সহায়তা করতে প্রস্তুত।"
                : "Our team is ready to help with any question about your payment."}
            </p>

            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2.5 text-[13px] font-medium text-slate-700 transition-colors hover:text-brand-700"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200">
                    <Mail className="h-4 w-4 text-brand-700" aria-hidden="true" />
                  </span>
                  {contact.email}
                </a>
              </li>

              {phones.map((phone, index) => (
                <li key={phone}>
                  <a
                    href={`tel:${contact.phones[index]}`}
                    className="inline-flex items-center gap-2.5 text-[13px] font-medium text-slate-700 transition-colors hover:text-brand-700"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200">
                      <Phone className="h-4 w-4 text-brand-700" aria-hidden="true" />
                    </span>
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions --------------------------------------------------- */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/donations"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              {isBn ? "আবার চেষ্টা করুন" : "Try again"}
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-[14px] font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
            >
              {isBn ? "যোগাযোগ করুন" : "Contact us"}
            </Link>
          </div>
        </div>
      </div>
    </PageBody>
  );
};

export default PaymentFailPage;
