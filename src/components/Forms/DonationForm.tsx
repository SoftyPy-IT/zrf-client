"use client";

import { countryList } from "@/constant/country";
import {
  ArrowRight,
  Check,
  CreditCard,
  Droplets,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Landmark,
  ShieldCheck,
  Trees,
  Wallet,
} from "lucide-react";
import React from "react";

interface DonationFormProps {
  language: string;
  onSubmit: (data: any) => Promise<void>;
  isProcessing: boolean;
  allCheckboxesChecked: boolean;
  selectedCountry: any;
  setSelectedCountry: (country: any) => void;
  mobileNumber: string;
  setMobileNumber: (number: string) => void;
  whatsappNumber: string;
  setWhatsappNumber: (number: string) => void;
  donorInfo: { fullName: string; email: string };
  handleDonorInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  certifyInfo: boolean;
  setCertifyInfo: (value: boolean) => void;
  agreePolicy: boolean;
  setAgreePolicy: (value: boolean) => void;
  agreeTerms: boolean;
  setAgreeTerms: (value: boolean) => void;
  customAmount: string;
  handleCustomAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getTotalAmount: () => number;
  handleCountryChange: (event: any) => void;
  /** Currently selected preset tile, owned by the page. */
  selectedAmount: number | null;
  /** Selects a preset tile and clears the custom amount. */
  onAmountSelect: (amount: number) => void;
}

const fieldClass =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";
const labelClass = "mb-1.5 block text-[13px] font-semibold text-slate-700";
const hintClass = "mt-1.5 text-[12px] text-slate-500";
const checkboxClass =
  "mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/30";

const amountPresets = [500, 1000, 2000, 5000, 10000, 25000];

/**
 * The donation form itself.
 *
 * All state, validation and payment handling lives in the page; this component
 * only presents the props it receives. Amount presets are selectable tiles and
 * the custom field clears them (and vice versa) through the page's handlers.
 */
const DonationForm: React.FC<DonationFormProps> = ({
  language,
  onSubmit,
  isProcessing,
  allCheckboxesChecked,
  selectedCountry,
  mobileNumber,
  setMobileNumber,
  whatsappNumber,
  setWhatsappNumber,
  donorInfo,
  handleDonorInfoChange,
  certifyInfo,
  setCertifyInfo,
  agreePolicy,
  setAgreePolicy,
  agreeTerms,
  setAgreeTerms,
  customAmount,
  handleCustomAmountChange,
  getTotalAmount,
  handleCountryChange,
  selectedAmount,
  onAmountSelect,
}) => {
  const isBn = language === "BNG";

  const impactStats = [
    {
      icon: <GraduationCap className="h-5 w-5 text-brand-700" aria-hidden="true" />,
      number: "15,000+",
      label: isBn ? "শিক্ষার্থী সহায়তা" : "Students Supported",
    },
    {
      icon: <HeartPulse className="h-5 w-5 text-brand-700" aria-hidden="true" />,
      number: "50,000+",
      label: isBn ? "চিকিৎসা সহায়তা" : "Medical Aid Provided",
    },
    {
      icon: <Droplets className="h-5 w-5 text-brand-700" aria-hidden="true" />,
      number: "100+",
      label: isBn ? "নিরাপদ পানির প্রকল্প" : "Clean Water Projects",
    },
    {
      icon: <Trees className="h-5 w-5 text-brand-700" aria-hidden="true" />,
      number: "25,000+",
      label: isBn ? "বৃক্ষরোপণ" : "Trees Planted",
    },
  ];

  const impactExamples = [
    {
      amount: 500,
      impact: isBn
        ? "একজন শিশুর শিক্ষা উপকরণ নিশ্চিত করে"
        : "Provides educational materials for 1 child",
    },
    {
      amount: 2000,
      impact: isBn
        ? "একটি পরিবারের এক মাসের খাদ্য সহায়তা"
        : "Monthly food support for a family",
    },
    {
      amount: 5000,
      impact: isBn
        ? "একজন রোগীর চিকিৎসার ব্যবস্থা"
        : "Medical treatment for a patient",
    },
    {
      amount: 10000,
      impact: isBn
        ? "একটি জনগোষ্ঠীর জন্য নিরাপদ পানির ব্যবস্থা"
        : "Clean water facility for a community",
    },
  ];

  return (
    <>
      {/* Impact stats ------------------------------------------------- */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {impactStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-card border border-slate-200 bg-white p-5 text-center"
          >
            <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 ring-1 ring-brand-100">
              {stat.icon}
            </span>
            <p className="mt-3 text-[20px] font-bold tabular-nums text-slate-900">
              {stat.number}
            </p>
            <p className="mt-0.5 text-[12.5px] text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main donation card ------------------------------------------- */}
      <div className="mt-10 overflow-hidden rounded-panel border border-slate-200 bg-white shadow-card">
        <div className="grid lg:grid-cols-12">
          {/* Left — the form ---------------------------------------- */}
          <div className="p-6 sm:p-8 lg:col-span-7 lg:p-10">
            <h2 className="text-[20px] font-bold text-slate-900">
              {isBn ? "আপনার অনুদান সম্পন্ন করুন" : "Complete Your Donation"}
            </h2>

            {/* Amount */}
            <div className="mt-6">
              <p className={labelClass}>
                {isBn ? "অনুদানের পরিমাণ" : "Donation amount"}{" "}
                <span className="text-red-600" aria-hidden="true">
                  *
                </span>
              </p>
              <div
                className="grid grid-cols-2 gap-2.5 sm:grid-cols-3"
                role="group"
                aria-label={isBn ? "অনুদানের পরিমাণ নির্বাচন করুন" : "Choose a donation amount"}
              >
                {amountPresets.map((amount) => {
                  const isSelected = selectedAmount === amount;
                  return (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => onAmountSelect(amount)}
                      aria-pressed={isSelected}
                      className={`rounded-lg border px-3 py-2.5 text-[13.5px] font-semibold tabular-nums transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 ${
                        isSelected
                          ? "border-brand-500 bg-brand-50 text-brand-800 ring-1 ring-brand-500"
                          : "border-slate-300 bg-white text-slate-700 hover:border-brand-300 hover:text-brand-700"
                      }`}
                    >
                      ৳{amount.toLocaleString("en-US")}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4">
                <label htmlFor="donation-custom-amount" className={labelClass}>
                  {isBn ? "কাস্টম পরিমাণ (টাকা)" : "Custom amount (BDT)"}
                </label>
                <div className="relative">
                  <span
                    className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[14px] font-semibold text-slate-500"
                    aria-hidden="true"
                  >
                    ৳
                  </span>
                  <input
                    id="donation-custom-amount"
                    type="number"
                    inputMode="numeric"
                    min={10}
                    max={500000}
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder={isBn ? "যেমন ১৫০০" : "e.g. 1500"}
                    className={`${fieldClass} pl-8`}
                  />
                </div>
                <p className={hintClass}>
                  {isBn
                    ? "সর্বনিম্ন ১০ টাকা, সর্বোচ্চ ৫,০০,০০০ টাকা।"
                    : "Minimum ৳10 — maximum ৳500,000."}
                </p>
              </div>
            </div>

            {/* Donor information */}
            <div className="mt-8">
              <h3 className="text-[15px] font-bold text-slate-900">
                {isBn ? "আপনার তথ্য" : "Your Information"}
              </h3>

              <div className="mt-4 grid gap-5">
                <div>
                  <label htmlFor="donation-name" className={labelClass}>
                    {isBn ? "পূর্ণ নাম" : "Full name"}{" "}
                    <span className="text-red-600" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="donation-name"
                    type="text"
                    name="fullName"
                    autoComplete="name"
                    value={donorInfo.fullName}
                    onChange={handleDonorInfoChange}
                    placeholder={isBn ? "আপনার পূর্ণ নাম" : "Your full name"}
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="donation-email" className={labelClass}>
                    {isBn ? "ইমেইল ঠিকানা" : "Email address"}{" "}
                    <span className="text-red-600" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="donation-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={donorInfo.email}
                    onChange={handleDonorInfoChange}
                    placeholder={
                      isBn ? "আপনার ইমেইল ঠিকানা" : "you@example.com"
                    }
                    className={fieldClass}
                  />
                </div>
              </div>
            </div>

            {/* Phone --------------------------------------------------- */}
            <div className="mt-8">
              <div className="grid gap-4 sm:grid-cols-[150px_1fr]">
                <div>
                  <label htmlFor="donation-mobile-country" className={labelClass}>
                    {isBn ? "দেশের কোড" : "Country code"}
                  </label>
                  <select
                    id="donation-mobile-country"
                    value={selectedCountry.code}
                    onChange={handleCountryChange}
                    className={fieldClass}
                  >
                    {countryList.map((country) => (
                      <option
                        key={`${country.code}-${country.name}`}
                        value={country.code}
                      >
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="donation-mobile" className={labelClass}>
                    {isBn ? "মোবাইল নম্বর" : "Mobile number"}{" "}
                    <span className="text-red-600" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="donation-mobile"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={mobileNumber}
                    onChange={(event) => setMobileNumber(event.target.value)}
                    placeholder={selectedCountry.example}
                    className={fieldClass}
                  />
                  <p className={hintClass}>
                    {isBn ? "দেশ: " : "Country: "}
                    {selectedCountry.name} ·{" "}
                    {isBn ? "উদাহরণ: " : "Example: "}
                    {selectedCountry.example}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-[150px_1fr]">
                <div>
                  <label htmlFor="donation-whatsapp-country" className={labelClass}>
                    {isBn ? "দেশের কোড" : "Country code"}
                  </label>
                  <select
                    id="donation-whatsapp-country"
                    value={selectedCountry.code}
                    onChange={handleCountryChange}
                    className={fieldClass}
                  >
                    {countryList.map((country) => (
                      <option
                        key={`${country.code}-${country.name}`}
                        value={country.code}
                      >
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="donation-whatsapp" className={labelClass}>
                    {isBn ? "হোয়াটসঅ্যাপ নম্বর (ঐচ্ছিক)" : "WhatsApp number (optional)"}
                  </label>
                  <input
                    id="donation-whatsapp"
                    type="tel"
                    inputMode="tel"
                    value={whatsappNumber}
                    onChange={(event) => setWhatsappNumber(event.target.value)}
                    placeholder={selectedCountry.example}
                    className={fieldClass}
                  />
                  <p className={hintClass}>
                    {isBn ? "উদাহরণ: " : "Example: "}
                    {selectedCountry.example} ({isBn ? "ঐচ্ছিক" : "optional"})
                  </p>
                </div>
              </div>
            </div>

            {/* Consents ------------------------------------------------ */}
            <fieldset className="mt-8">
              <legend className="text-[13px] font-semibold text-slate-700">
                {isBn ? "অনুগ্রহ করে নিশ্চিত করুন:" : "Please confirm the following:"}
              </legend>

              <div className="mt-3 space-y-3.5">
                <div className="flex items-start gap-2.5">
                  <input
                    id="donation-certify"
                    type="checkbox"
                    checked={certifyInfo}
                    onChange={(event) => setCertifyInfo(event.target.checked)}
                    className={checkboxClass}
                  />
                  <label
                    htmlFor="donation-certify"
                    className="text-[12.5px] leading-relaxed text-slate-600"
                  >
                    {isBn
                      ? `আমি প্রত্যয়ন করছি যে উপরের তথ্যগুলো সঠিক। আমি ${selectedCountry.name} এর নাগরিক এবং ঘোষণা করছি যে এই অনুদান আমার ব্যক্তিগত তহবিল থেকে দেওয়া হচ্ছে।`
                      : `I certify that the above provided information is correct. I am a ${selectedCountry.name} citizen and I do hereby declare that the contributions are from my personal fund.`}
                  </label>
                </div>

                <div className="flex items-start gap-2.5">
                  <input
                    id="donation-policy"
                    type="checkbox"
                    checked={agreePolicy}
                    onChange={(event) => setAgreePolicy(event.target.checked)}
                    className={checkboxClass}
                  />
                  <label
                    htmlFor="donation-policy"
                    className="text-[12.5px] leading-relaxed text-slate-600"
                  >
                    {isBn ? "আমি " : "I agree to the "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-brand-700 underline underline-offset-2 transition-colors hover:text-brand-800"
                    >
                      {isBn ? "গোপনীয়তা নীতিতে" : "Privacy Policy"}
                    </a>
                    {isBn ? " সম্মত।" : "."}
                  </label>
                </div>

                <div className="flex items-start gap-2.5">
                  <input
                    id="donation-terms"
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(event) => setAgreeTerms(event.target.checked)}
                    className={checkboxClass}
                  />
                  <label
                    htmlFor="donation-terms"
                    className="text-[12.5px] leading-relaxed text-slate-600"
                  >
                    {isBn ? "আমি " : "I agree to the "}
                    <a
                      href="/terms-&-conditions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-brand-700 underline underline-offset-2 transition-colors hover:text-brand-800"
                    >
                      {isBn ? "শর্তাবলিতে" : "Terms & Conditions"}
                    </a>
                    {isBn ? " সম্মত।" : "."}
                  </label>
                </div>
              </div>
            </fieldset>

            {/* Payment note + summary ---------------------------------- */}
            <p className="mt-6 flex items-start gap-2 text-[13px] leading-relaxed text-slate-600">
              <ShieldCheck
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                aria-hidden="true"
              />
              {isBn
                ? "৩৭+ পেমেন্ট অপশনসহ SSLCommerz-এর নিরাপদ পেমেন্ট পেজে আপনাকে নিয়ে যাওয়া হবে।"
                : "You will be redirected to the SSLCommerz secure payment page with 37+ payment options."}
            </p>

            <div className="mt-5 rounded-card border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-[14px] font-bold text-slate-900">
                {isBn ? "অনুদানের সারসংক্ষেপ" : "Donation Summary"}
              </h3>
              <div className="mt-3 flex items-center justify-between gap-4 text-[13.5px]">
                <span className="text-slate-600">
                  {isBn ? "অনুদানের পরিমাণ" : "Donation amount"}
                </span>
                <span className="font-semibold tabular-nums text-slate-900">
                  ৳{getTotalAmount().toLocaleString("en-US")}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between gap-4 border-t border-slate-200 pt-3">
                <span className="text-[13.5px] font-bold text-slate-900">
                  {isBn ? "মোট" : "Total"}
                </span>
                <span className="text-[17px] font-bold tabular-nums text-brand-700">
                  ৳{getTotalAmount().toLocaleString("en-US")}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onSubmit}
              disabled={isProcessing || !allCheckboxesChecked}
              aria-busy={isProcessing}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isProcessing
                ? isBn
                  ? "প্রক্রিয়া চলছে…"
                  : "Processing…"
                : isBn
                  ? "পেমেন্টে এগিয়ে যান"
                  : "Proceed to Payment"}
              {!isProcessing && (
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              )}
            </button>

            <p className="mt-3 text-center text-[12px] text-slate-500">
              {isBn
                ? "SSLCommerz দ্বারা সুরক্ষিত — আপনার লেনদেন নিরাপদ ও এনক্রিপ্টেড।"
                : "Secured by SSLCommerz — your transaction is safe and encrypted."}
            </p>
          </div>

          {/* Right — impact preview ---------------------------------- */}
          <div className="bg-brand-900 p-6 text-white sm:p-8 lg:col-span-5 lg:p-10">
            <div className="text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                <HandHeart className="h-7 w-7 text-gold-400" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-[19px] font-bold leading-snug">
                {isBn ? "আপনার অনুদান জীবন বদলে দেয়" : "Your Donation Changes Lives"}
              </h3>
            </div>

            <div className="mt-8">
              <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-gold-300">
                {isBn ? "আপনার অনুদান যা করতে পারে" : "What your donation can do"}
              </p>
              <ul className="mt-4 space-y-3">
                {impactExamples.map((item) => (
                  <li
                    key={item.amount}
                    className="flex items-start gap-3 rounded-card bg-white/[0.06] p-3.5 ring-1 ring-white/10"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold-400"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-[13.5px] font-bold tabular-nums">
                        ৳{item.amount.toLocaleString("en-US")}
                      </p>
                      <p className="mt-0.5 text-[12.5px] leading-relaxed text-brand-100">
                        {item.impact}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-white/15 pt-6 text-center">
              <p className="text-[13px] leading-relaxed text-brand-100">
                {isBn
                  ? "আপনার অনুদানের ১০০% সরাসরি অসহায় মানুষের কাছে পৌঁছায়।"
                  : "100% of your donation goes directly to those in need."}
              </p>
              <div className="mt-4 flex items-center justify-center gap-3 text-brand-200">
                <CreditCard className="h-5 w-5" aria-hidden="true" />
                <Landmark className="h-5 w-5" aria-hidden="true" />
                <Wallet className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="mt-2 text-[12px] text-brand-200">
                {isBn ? "কার্ড · ব্যাংক · মোবাইল ব্যাংকিংসহ ৩৭+ পদ্ধতি" : "Card · bank · mobile banking — 37+ methods"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationForm;
