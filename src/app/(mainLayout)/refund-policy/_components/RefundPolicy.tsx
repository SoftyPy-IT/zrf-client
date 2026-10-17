"use client";

import React from "react";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";
import { useLanguage } from "@/provider/LanguageProvider";
import { contact } from "@/lib/site";
import {
  CheckCircle,
  Clock,
  CreditCard,
  Heart,
  HelpCircle,
  Landmark,
  MailCheck,
  Smartphone,
} from "lucide-react";

const REFUND_STEPS = [
  "Submit Request",
  "Review (48 Hours)",
  "Verification",
  "Refund Processed",
];

const NON_REFUNDABLE_ITEMS = [
  "Membership fees after 30 days",
  "Event tickets after event date",
  "Recurring donations after 1st charge",
  "In-kind donations (goods/services)",
];

const GUARANTEES = [
  "100% Donor Satisfaction Guarantee",
  "No Restocking Fees",
  "24/7 Donor Support",
];

const linkClass =
  "font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800";

/**
 * Return & refund policy document body.
 *
 * The four-step process is presented as an ordered list of numbered cards in
 * place of the old MUI Stepper; everything else is the same policy text on the
 * institutional palette.
 */
const RefundPolicy = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  return (
    <LegalLayout
      title="Return & Refund Policy"
      subtitle="Ziaur Rahman Foundation operates with 100% financial transparency. We honor every donor's trust with a fair, compassionate refund process."
      lastUpdated="April 15, 2026"
    >
      <p className="text-[14.5px] leading-[1.85] text-slate-600">
        {isBn
          ? "এই নীতিমালায় অনুদান, সদস্যপদ, অনুষ্ঠানের পেমেন্ট ও অন্যান্য ক্ষেত্রে জিয়াউর রহমান ফাউন্ডেশন কীভাবে ফেরত ও রিফান্ডের আবেদন নিষ্পত্তি করে তা বর্ণনা করা হয়েছে।"
          : "This policy explains how the Ziaur Rahman Foundation handles return and refund requests for donations, memberships, event payments and other contributions."}
      </p>

      {/* Our promise */}
      <div className="flex items-start gap-3 rounded-card border border-brand-200 bg-brand-50/60 p-5">
        <Heart
          className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
          aria-hidden="true"
        />
        <p className="text-[14.5px] leading-relaxed text-slate-700">
          <strong className="font-semibold text-slate-900">Our Promise:</strong>{" "}
          We process refunds fairly and quickly. No hidden fees, no restocking
          charges, no complicated forms.
        </p>
      </div>

      <LegalSection title="1. Our 4-Step Refund Process">
        <ol className="grid gap-4 sm:grid-cols-2">
          {REFUND_STEPS.map((label, index) => (
            <li key={label} className="rounded-card border border-slate-200 p-4">
              <span className="text-[12px] font-bold uppercase tracking-wide tabular-nums text-brand-700">
                Step {index + 1}
              </span>
              <p className="mt-1.5 text-[14.5px] font-semibold text-slate-900">
                {label}
              </p>
            </li>
          ))}
        </ol>
      </LegalSection>

      <LegalSection title="2. Refund Eligibility">
        <p>
          You may request a refund within{" "}
          <strong className="font-semibold text-slate-900">
            14 calendar days
          </strong>{" "}
          of your donation date.
        </p>
        <div className="flex items-start gap-3 rounded-card border border-slate-200 bg-slate-50 p-4">
          <Clock
            className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
            aria-hidden="true"
          />
          <p className="text-[13.5px] leading-relaxed text-slate-600">
            <strong className="font-semibold text-slate-800">
              Exceptions processed anytime:
            </strong>{" "}
            Duplicate transactions, technical errors, unauthorized charges, or
            donations made under duress.
          </p>
        </div>
        <p className="text-[12.5px] text-slate-500">
          Standard processing: 5-10 business days
        </p>
      </LegalSection>

      <LegalSection title="3. Non-Refundable Items">
        <p>The following are generally non-refundable:</p>
        <ul className="list-disc space-y-2 pl-5">
          {NON_REFUNDABLE_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-[12.5px] text-slate-500">
          We review each case compassionately — contact us for exceptions.
        </p>
      </LegalSection>

      <LegalSection title="4. How to Request a Refund">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-card border border-slate-200 p-5">
            <MailCheck className="h-4 w-4 text-brand-600" aria-hidden="true" />
            <h3 className="mt-2 text-[15px] font-bold text-slate-900">
              Email Your Request
            </h3>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">
              Send to{" "}
              <a
                href="mailto:finance@ziaurrahmanfoundation.org"
                className={linkClass}
              >
                finance@ziaurrahmanfoundation.org
              </a>{" "}
              with:
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[13.5px]">
              <li>Donation receipt/proof</li>
              <li>Date and amount of donation</li>
              <li>Reason for refund request</li>
              <li>Your contact information</li>
            </ul>
          </div>

          <div className="rounded-card border border-slate-200 p-5">
            <CreditCard className="h-4 w-4 text-brand-600" aria-hidden="true" />
            <h3 className="mt-2 text-[15px] font-bold text-slate-900">
              Refund Method &amp; Timeline
            </h3>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">
              Refunds are issued to the original payment method:
            </p>
            <ul className="mt-2 space-y-1.5 text-[13.5px]">
              <li className="flex items-center gap-2">
                <CreditCard
                  className="h-4 w-4 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                Credit/Debit Cards: 5-7 business days
              </li>
              <li className="flex items-center gap-2">
                <Landmark
                  className="h-4 w-4 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                Bank Transfer: 7-10 business days
              </li>
              <li className="flex items-center gap-2">
                <Smartphone
                  className="h-4 w-4 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                Mobile Banking (bKash/Nagad): 3-5 business days
              </li>
            </ul>
          </div>
        </div>
      </LegalSection>

      {/* Donor guarantees */}
      <div className="rounded-card border border-gold-200 bg-gold-50/60 p-5">
        <ul className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8">
          {GUARANTEES.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-[13.5px] font-semibold text-slate-700"
            >
              <CheckCircle
                className="h-4 w-4 shrink-0 text-brand-600"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Support contact */}
      <div className="rounded-card border border-slate-200 bg-slate-50 p-5">
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center">
          <HelpCircle
            className="h-4 w-4 shrink-0 text-brand-600"
            aria-hidden="true"
          />
          <p className="text-[13.5px] leading-relaxed text-slate-600">
            Still have questions? Our team is here for you —{" "}
            <a href={`mailto:${contact.email}`} className={linkClass}>
              {contact.email}
            </a>{" "}
            {contact.phones.map((phone) => (
              <React.Fragment key={phone}>
                {" · "}
                <a
                  href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                  className={linkClass}
                >
                  {phone}
                </a>
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </LegalLayout>
  );
};

export default RefundPolicy;
