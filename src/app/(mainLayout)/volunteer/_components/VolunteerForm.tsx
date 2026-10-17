"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useFormContext } from "react-hook-form";
import ZRFForm from "@/components/Forms/Form";
import { useLanguage } from "@/provider/LanguageProvider";
import { CheckCircle2, Send } from "lucide-react";

const fieldClass =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";
const labelClass = "mb-1.5 block text-[13px] font-semibold text-slate-700";
const errorClass = "mt-1.5 text-[12px] font-medium text-red-600";

type TFieldProps = { isBn: boolean };

/** The registered fields live inside `ZRFForm`'s provider, hence the split. */
const VolunteerFields = ({ isBn }: TFieldProps) => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  return (
    <div className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="volunteer-name" className={labelClass}>
            {isBn ? "নাম" : "Name"}{" "}
            <span className="text-red-600" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="volunteer-name"
            type="text"
            autoComplete="name"
            placeholder={isBn ? "আপনার পূর্ণ নাম" : "Your full name"}
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "volunteer-name-error" : undefined}
            {...register("name", {
              required: isBn
                ? "অনুগ্রহ করে আপনার নাম লিখুন।"
                : "Please enter your name.",
            })}
          />
          {errors.name?.message && (
            <p id="volunteer-name-error" role="alert" className={errorClass}>
              {String(errors.name.message)}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="volunteer-email" className={labelClass}>
            {isBn ? "ইমেইল" : "Email"}{" "}
            <span className="text-red-600" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="volunteer-email"
            type="email"
            autoComplete="email"
            placeholder={isBn ? "আপনার ইমেইল ঠিকানা" : "you@example.com"}
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email ? "volunteer-email-error" : undefined
            }
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
            <p id="volunteer-email-error" role="alert" className={errorClass}>
              {String(errors.email.message)}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="volunteer-phone" className={labelClass}>
          {isBn ? "ফোন" : "Phone"}{" "}
          <span className="text-red-600" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="volunteer-phone"
          type="tel"
          autoComplete="tel"
          placeholder={isBn ? "০১৮১৭-২২৬৬৪৪" : "01817-226644"}
          className={fieldClass}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "volunteer-phone-error" : undefined}
          {...register("phone", {
            required: isBn
              ? "অনুগ্রহ করে আপনার ফোন নম্বর লিখুন।"
              : "Please enter your phone number.",
          })}
        />
        {errors.phone?.message && (
          <p id="volunteer-phone-error" role="alert" className={errorClass}>
            {String(errors.phone.message)}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="volunteer-message" className={labelClass}>
          {isBn ? "আপনি কীভাবে সাহায্য করতে চান?" : "How would you like to help?"}
        </label>
        <textarea
          id="volunteer-message"
          rows={5}
          placeholder={
            isBn
              ? "আপনার আগ্রহ, দক্ষতা বা অবদানের কথা সংক্ষেপে লিখুন…"
              : "Tell us briefly about your interests, skills or availability…"
          }
          className={`${fieldClass} resize-y`}
          {...register("message")}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isBn ? "নিবন্ধন জমা দিন" : "Submit registration"}
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
};

/**
 * Volunteer registration.
 *
 * No dedicated volunteer endpoint exists on the public API, so registrations
 * are delivered through the foundation's existing enquiry endpoint
 * (`POST /contact`) with a fixed subject — the same channel the contact page
 * uses. Swap the endpoint here if a volunteer route is added server-side.
 */
const VolunteerForm = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";
  const [submitted, setSubmitted] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const handleSubmit = async (data: any) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/contact`, {
        ...data,
        subject:
          data.subject || "Volunteer registration — Ziaur Rahman Foundation",
      });
      toast.success(
        isBn
          ? "নিবন্ধন সফলভাবে জমা দেওয়া হয়েছে!"
          : "Registration submitted successfully!",
        { duration: 3000 },
      );
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      toast.error(
        isBn
          ? "কিছু ভুল হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।"
          : "Something went wrong. Please try again.",
      );
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 ring-1 ring-brand-100">
          <CheckCircle2 className="h-7 w-7 text-brand-600" aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-[17px] font-bold text-slate-900">
          {isBn ? "ধন্যবাদ!" : "Thank you!"}
        </h3>
        <p className="mt-2 max-w-sm text-[13.5px] leading-relaxed text-slate-600">
          {isBn
            ? "আপনার স্বেচ্ছাসেবক নিবন্ধন গ্রহণ করা হয়েছে। আমাদের দল শীঘ্রই আপনার সঙ্গে যোগাযোগ করবে।"
            : "Your volunteer registration has been received. Our team will contact you soon."}
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormKey((key) => key + 1);
          }}
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-[13px] font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700"
        >
          {isBn ? "আরেকটি নিবন্ধন জমা দিন" : "Submit another registration"}
        </button>
      </div>
    );
  }

  return (
    <ZRFForm key={formKey} onSubmit={handleSubmit}>
      <VolunteerFields isBn={isBn} />
    </ZRFForm>
  );
};

export default VolunteerForm;
