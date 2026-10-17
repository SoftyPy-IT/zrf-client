"use client";

import ZRFForm from "@/components/Forms/Form";
import { useLanguage } from "@/provider/LanguageProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormContext } from "react-hook-form";
import { toast } from "sonner";
import { Send } from "lucide-react";

const fieldClass =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";
const labelClass = "mb-1.5 block text-[13px] font-semibold text-slate-700";
const errorClass = "mt-1.5 text-[12px] font-medium text-red-600";

type TMembershipFieldsProps = { isBn: boolean };

/** The registered fields live inside `ZRFForm`'s provider, hence the split. */
const MembershipFields = ({ isBn }: TMembershipFieldsProps) => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="membership-name" className={labelClass}>
          {isBn ? "পূর্ণ নাম" : "Full Name"}{" "}
          <span className="text-red-600" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="membership-name"
          type="text"
          autoComplete="name"
          placeholder={isBn ? "আপনার পূর্ণ নাম লিখুন" : "Enter your full name"}
          className={fieldClass}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "membership-name-error" : undefined}
          {...register("name", {
            required: isBn
              ? "অনুগ্রহ করে আপনার নাম লিখুন।"
              : "Please enter your name.",
          })}
        />
        {errors.name?.message && (
          <p id="membership-name-error" role="alert" className={errorClass}>
            {String(errors.name.message)}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="membership-email" className={labelClass}>
          {isBn ? "ইমেইল ঠিকানা" : "Email Address"}{" "}
          <span className="text-red-600" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="membership-email"
          type="email"
          autoComplete="email"
          placeholder={isBn ? "আপনার ইমেইল লিখুন" : "Enter your email"}
          className={fieldClass}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "membership-email-error" : undefined}
          {...register("email", {
            required: isBn
              ? "অনুগ্রহ করে আপনার ইমেইল ঠিকানা লিখুন।"
              : "Please enter your email address.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: isBn
                ? "অনুগ্রহ করে সঠিক ইমেইল ঠিকানা লিখুন।"
                : "Please enter a valid email address.",
            },
          })}
        />
        {errors.email?.message && (
          <p id="membership-email-error" role="alert" className={errorClass}>
            {String(errors.email.message)}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="membership-address" className={labelClass}>
          {isBn ? "ঠিকানা" : "Address"}{" "}
          <span className="text-red-600" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="membership-address"
          type="text"
          autoComplete="street-address"
          placeholder={isBn ? "আপনার ঠিকানা লিখুন" : "Enter your address"}
          className={fieldClass}
          aria-invalid={Boolean(errors.address)}
          aria-describedby={
            errors.address ? "membership-address-error" : undefined
          }
          {...register("address", {
            required: isBn
              ? "অনুগ্রহ করে আপনার ঠিকানা লিখুন।"
              : "Please enter your address.",
          })}
        />
        {errors.address?.message && (
          <p id="membership-address-error" role="alert" className={errorClass}>
            {String(errors.address.message)}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="membership-phone" className={labelClass}>
          {isBn ? "ফোন নম্বর" : "Phone Number"}{" "}
          <span className="text-red-600" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="membership-phone"
          type="tel"
          autoComplete="tel"
          placeholder={
            isBn ? "আপনার ফোন নম্বর লিখুন" : "Enter your phone number"
          }
          className={fieldClass}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "membership-phone-error" : undefined}
          {...register("phone", {
            required: isBn
              ? "অনুগ্রহ করে আপনার ফোন নম্বর লিখুন।"
              : "Please enter your phone number.",
          })}
        />
        {errors.phone?.message && (
          <p id="membership-phone-error" role="alert" className={errorClass}>
            {String(errors.phone.message)}
          </p>
        )}
      </div>

      <div className="pt-1">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting
            ? isBn
              ? "জমা হচ্ছে…"
              : "Submitting…"
            : isBn
              ? "আবেদন জমা দিন"
              : "Submit Application"}
          {!isSubmitting && <Send className="h-4 w-4" aria-hidden="true" />}
        </button>
      </div>

      <p className="text-center text-[11px] leading-relaxed text-slate-500">
        {isBn
          ? "আমরা আপনার গোপনীয়তাকে সম্মান করি। আপনার তথ্য আমাদের কাছে নিরাপদ।"
          : "We respect your privacy. Your information is safe with us."}
      </p>
    </div>
  );
};

/**
 * Membership request opened from the site header / footer modal.
 *
 * Endpoint (`POST /membership`), field names and post-submit behaviour
 * (success toast → home → close the modal) are unchanged; only the presentation
 * moved from the MUI `Paper` stack to the light institutional form style.
 */
const MembershipForm = ({ onClose }: { onClose: () => void }) => {
  const { language } = useLanguage();
  const router = useRouter();
  const isBn = language === "BNG";

  const handleSubmit = async (data: any) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/membership`,
        data,
      );
      toast.success(
        isBn
          ? "ZRF পরিবারে স্বাগতম! আপনার সদস্যপদের অনুরোধ সফলভাবে জমা দেওয়া হয়েছে।"
          : "Welcome to ZRF family! Your membership request has been submitted successfully.",
        { duration: 3000 },
      );
      router.push("/");
      setTimeout(() => onClose(), 1000);
    } catch (error) {
      toast.error(
        isBn
          ? "কিছু ভুল হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।"
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div className="rounded-panel border border-slate-200 bg-white p-6 shadow-card sm:p-8">
      <div className="text-center">
        <h2 className="text-[21px] font-bold text-slate-900">
          {isBn ? "সদস্য হোন" : "Become a Member"}
        </h2>
        <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">
          {isBn
            ? "জিয়াউর রহমান ফাউন্ডেশনে যোগ দিন এবং আমাদের মিশনের অংশ হন।"
            : "Join Ziaur Rahman Foundation and be a part of our mission."}
        </p>
      </div>

      <div className="mt-6">
        <ZRFForm onSubmit={handleSubmit}>
          <MembershipFields isBn={isBn} />
        </ZRFForm>
      </div>
    </div>
  );
};

export default MembershipForm;
