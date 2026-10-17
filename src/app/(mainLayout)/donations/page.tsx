"use client";

import { countryList } from "@/constant/country";
import { useLanguage } from "@/provider/LanguageProvider";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import DonationHeader from "@/components/Donation/DonationHeader";
import DonationForm from "@/components/Forms/DonationForm";
import TestimonialsSection from "@/components/Donation/TestimonialsSection";
import PartnerSection from "@/components/Donation/PartnerSection";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import PageBody from "@/components/share/PageBody";
import { getPublicApiUrl } from "@/config/env";
import { AlertTriangle, CheckCircle2, X } from "lucide-react";

const API_BASE_URL = getPublicApiUrl();

const DonationPage = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countryList[0]);
  const [mobileNumber, setMobileNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    fullName: "",
    email: "",
  });

  const [certifyInfo, setCertifyInfo] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [isProcessing, setIsProcessing] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openThankYou, setOpenThankYou] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [paymentStatus, setPaymentStatus] = useState<{
    type: "success" | "fail" | "cancel" | null;
    message: string;
  }>({ type: null, message: "" });

  const thankYouCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const status = searchParams.get("status");
    const tran_id = searchParams.get("tran_id");
    const amount = searchParams.get("amount");
    const error = searchParams.get("error");

    if (status === "success") {
      setPaymentStatus({
        type: "success",
        message: isBn
          ? `ধন্যবাদ! আপনার ৳${amount} অনুদান সফলভাবে সম্পন্ন হয়েছে। লেনদেন আইডি: ${tran_id}`
          : `Thank you! Your donation of ৳${amount} has been successfully processed. Transaction ID: ${tran_id}`,
      });
      setOpenThankYou(true);
      router.replace("/donations", { scroll: false });
    } else if (status === "fail") {
      setPaymentStatus({
        type: "fail",
        message: isBn
          ? `পেমেন্ট ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।${
              error ? ` ত্রুটি: ${error}` : ""
            }`
          : `Payment failed. Please try again. ${error ? `Error: ${error}` : ""}`,
      });
      setSnackbarMessage(
        isBn
          ? "পেমেন্ট ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।"
          : "Payment failed. Please try again.",
      );
      setOpenSnackbar(true);
      router.replace("/donations", { scroll: false });
    } else if (status === "cancel") {
      setPaymentStatus({
        type: "cancel",
        message: isBn
          ? "পেমেন্ট বাতিল হয়েছে। আপনি প্রস্তুত হলে আবার চেষ্টা করতে পারেন।"
          : "Payment was cancelled. You can try again whenever you're ready.",
      });
      setSnackbarMessage(
        isBn
          ? "পেমেন্ট বাতিল হয়েছে। আপনি আবার চেষ্টা করতে পারেন।"
          : "Payment was cancelled. You can try again.",
      );
      setOpenSnackbar(true);
      router.replace("/donations", { scroll: false });
    }
  }, [searchParams, router, isBn]);

  /* Snackbar auto-hides after 6s, matching the previous behaviour. */
  useEffect(() => {
    if (!openSnackbar) return;
    const timer = setTimeout(() => setOpenSnackbar(false), 6000);
    return () => clearTimeout(timer);
  }, [openSnackbar]);

  /* Thank-you dialog: Escape closes, focus lands on the close button,
     and the page behind stays locked while it is open. */
  useEffect(() => {
    if (!openThankYou) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenThankYou(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    thankYouCloseRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [openThankYou]);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const getTotalAmount = () => {
    if (customAmount) return parseFloat(customAmount);
    if (selectedAmount) return selectedAmount;
    return 0;
  };

  const handleDonorInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonorInfo({
      ...donorInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleCountryChange = (event: any) => {
    const country = countryList.find((c) => c.code === event.target.value);
    if (country) {
      setSelectedCountry(country);
      setMobileNumber("");
      setWhatsappNumber("");
    }
  };

  const validatePhoneNumber = (number: string, pattern: RegExp): boolean => {
    if (!number.trim()) return false;
    return pattern.test(number);
  };

  const showValidationError = (message: string) => {
    setSnackbarMessage(message);
    setOpenSnackbar(true);
  };

  const validateForm = () => {
    if (getTotalAmount() <= 0) {
      showValidationError(
        isBn
          ? "অনুগ্রহ করে অনুদানের পরিমাণ নির্বাচন করুন বা লিখুন।"
          : "Please select or enter a donation amount",
      );
      return false;
    }

    if (getTotalAmount() < 10) {
      showValidationError(
        isBn
          ? "সর্বনিম্ন অনুদানের পরিমাণ ১০ টাকা।"
          : "Minimum donation amount is 10 BDT",
      );
      return false;
    }

    if (getTotalAmount() > 500000) {
      showValidationError(
        isBn
          ? "সর্বোচ্চ অনুদানের পরিমাণ ৫,০০,০০০ টাকা।"
          : "Maximum donation amount is 500,000 BDT",
      );
      return false;
    }

    if (!donorInfo.fullName.trim()) {
      showValidationError(
        isBn ? "অনুগ্রহ করে আপনার পূর্ণ নাম লিখুন।" : "Please enter your full name",
      );
      return false;
    }

    if (!donorInfo.email.trim()) {
      showValidationError(
        isBn
          ? "অনুগ্রহ করে আপনার ইমেইল ঠিকানা লিখুন।"
          : "Please enter your email address",
      );
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(donorInfo.email)) {
      showValidationError(
        isBn
          ? "অনুগ্রহ করে সঠিক ইমেইল ঠিকানা লিখুন।"
          : "Please enter a valid email address",
      );
      return false;
    }

    if (!mobileNumber.trim()) {
      showValidationError(
        isBn
          ? "অনুগ্রহ করে আপনার মোবাইল নম্বর লিখুন।"
          : "Please enter your mobile number",
      );
      return false;
    }

    if (!validatePhoneNumber(mobileNumber, selectedCountry.pattern)) {
      showValidationError(
        isBn
          ? `অনুগ্রহ করে সঠিক ${selectedCountry.name} মোবাইল নম্বর লিখুন। উদাহরণ: ${selectedCountry.example}`
          : `Please enter a valid ${selectedCountry.name} mobile number. Example: ${selectedCountry.example}`,
      );
      return false;
    }

    if (whatsappNumber && !validatePhoneNumber(whatsappNumber, selectedCountry.pattern)) {
      showValidationError(
        isBn
          ? `অনুগ্রহ করে সঠিক ${selectedCountry.name} হোয়াটসঅ্যাপ নম্বর লিখুন। উদাহরণ: ${selectedCountry.example}`
          : `Please enter a valid ${selectedCountry.name} WhatsApp number. Example: ${selectedCountry.example}`,
      );
      return false;
    }

    if (!certifyInfo) {
      showValidationError(
        isBn
          ? "অনুগ্রহ করে প্রদত্ত তথ্য সঠিক বলে প্রত্যয়ন করুন।"
          : "Please certify that the information provided is correct",
      );
      return false;
    }

    if (!agreePolicy) {
      showValidationError(
        isBn
          ? "অনুগ্রহ করে গোপনীয়তা নীতিতে সম্মতি দিন।"
          : "Please agree to the Privacy Policy",
      );
      return false;
    }

    if (!agreeTerms) {
      showValidationError(
        isBn
          ? "অনুগ্রহ করে শর্তাবলিতে সম্মতি দিন।"
          : "Please agree to the Terms & Conditions",
      );
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsProcessing(true);

    try {
      const fullPhoneNumber = `${selectedCountry.code}${mobileNumber}`;
      const fullWhatsapp = whatsappNumber ? `${selectedCountry.code}${whatsappNumber}` : "";

      const response = await fetch(`${API_BASE_URL}/donations/initiate-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: donorInfo.fullName,
          email: donorInfo.email,
          phone: fullPhoneNumber,
          amount: getTotalAmount(),
          whatsappNumber: fullWhatsapp,
          country: selectedCountry.name,
          countryCode: selectedCountry.code,
          certifyInfo: certifyInfo,
          agreePolicy: agreePolicy,
          agreeTerms: agreeTerms,
        }),
      });

      const data = await response.json();

      if (data.success && data.data?.GatewayPageURL) {
        window.location.href = data.data.GatewayPageURL;
      } else {
        throw new Error(data.message || "Payment initialization failed");
      }
    } catch (error: any) {
      console.error("Payment error:", error);
      setSnackbarMessage(
        error.message ||
          (isBn
            ? "পেমেন্ট শুরু করা যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।"
            : "Failed to initialize payment. Please try again."),
      );
      setOpenSnackbar(true);
      setIsProcessing(false);
    }
  };

  const allCheckboxesChecked = certifyInfo && agreePolicy && agreeTerms;

  return (
    <>
      <CommonBanner
        title={isBn ? "আমাদের কাজে সহযোগিতা করুন" : "Support Our Work"}
        subtitle={
          isBn
            ? "আপনার অনুদান বাংলাদেশের অবহেলিত জনগোষ্ঠীর শিক্ষা, স্বাস্থ্যসেবা ও পুনর্বাসনের কাজে সরাসরি ব্যবহৃত হয়।"
            : "Your donation directly funds education, healthcare and rehabilitation for communities across Bangladesh."
        }
      />

      <PageBody tone="white">
        <DonationHeader language={language} />

        {paymentStatus.type === "success" && (
          <div
            role="status"
            className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-card border border-brand-100 bg-brand-50 p-4"
          >
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
              aria-hidden="true"
            />
            <p className="text-[13.5px] leading-relaxed text-brand-800">
              {paymentStatus.message}
            </p>
          </div>
        )}

        <div className="mt-10">
          <DonationForm
            language={language}
            onSubmit={handleSubmit}
            isProcessing={isProcessing}
            allCheckboxesChecked={allCheckboxesChecked}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            mobileNumber={mobileNumber}
            setMobileNumber={setMobileNumber}
            whatsappNumber={whatsappNumber}
            setWhatsappNumber={setWhatsappNumber}
            donorInfo={donorInfo}
            handleDonorInfoChange={handleDonorInfoChange}
            certifyInfo={certifyInfo}
            setCertifyInfo={setCertifyInfo}
            agreePolicy={agreePolicy}
            setAgreePolicy={setAgreePolicy}
            agreeTerms={agreeTerms}
            setAgreeTerms={setAgreeTerms}
            customAmount={customAmount}
            handleCustomAmountChange={handleCustomAmountChange}
            getTotalAmount={getTotalAmount}
            handleCountryChange={handleCountryChange}
            selectedAmount={selectedAmount}
            onAmountSelect={handleAmountSelect}
          />
        </div>

        <TestimonialsSection language={language} />
      </PageBody>

      <PartnerSection language={language} />

      {/* Thank-you dialog --------------------------------------------- */}
      {openThankYou && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-950/80 p-4 backdrop-blur-sm"
          onClick={() => setOpenThankYou(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="donation-thank-you-title"
            className="relative w-full max-w-md rounded-panel border border-slate-200 bg-white p-6 text-center shadow-panel sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 ring-1 ring-brand-100">
              <CheckCircle2
                className="h-8 w-8 text-brand-600"
                aria-hidden="true"
              />
            </span>
            <h2
              id="donation-thank-you-title"
              className="mt-5 text-[22px] font-bold text-slate-900"
            >
              {isBn ? "ধন্যবাদ!" : "Thank You!"}
            </h2>
            <p className="mt-3 text-[14.5px] leading-[1.85] text-slate-600">
              {paymentStatus.message ||
                (isBn
                  ? "আপনার উদার অনুদান বহু মানুষের জীবনে পরিবর্তন আনবে। নিশ্চিতকরণ ইমেইল আপনার ইনবক্সে পাঠানো হয়েছে।"
                  : "Your generous donation will help us make a difference in the lives of many. A confirmation email has been sent to your inbox.")}
            </p>
            <button
              ref={thankYouCloseRef}
              type="button"
              onClick={() => setOpenThankYou(false)}
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
            >
              {isBn ? "বন্ধ করুন" : "Close"}
            </button>
          </div>
        </div>
      )}

      {/* Snackbar ------------------------------------------------------ */}
      {openSnackbar && (
        <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[110] flex justify-center px-4">
          <div
            role="alert"
            className={`pointer-events-auto flex w-full max-w-md items-start gap-3 rounded-card border p-4 shadow-panel ${
              paymentStatus.type === "fail"
                ? "border-red-200 bg-red-50"
                : "border-gold-200 bg-gold-50"
            }`}
          >
            <AlertTriangle
              className={`mt-0.5 h-4 w-4 shrink-0 ${
                paymentStatus.type === "fail" ? "text-red-600" : "text-gold-600"
              }`}
              aria-hidden="true"
            />
            <p className="flex-1 text-[13.5px] leading-relaxed text-slate-700">
              {snackbarMessage || paymentStatus.message}
            </p>
            <button
              type="button"
              onClick={() => setOpenSnackbar(false)}
              aria-label={isBn ? "বন্ধ করুন" : "Dismiss notification"}
              className="shrink-0 rounded-md p-1 text-slate-500 transition-colors hover:bg-white/70 hover:text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DonationPage;
