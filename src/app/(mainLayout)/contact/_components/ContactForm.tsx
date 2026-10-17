"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import ZRFForm from "@/components/Forms/Form";
import { useLanguage } from "@/provider/LanguageProvider";
import { Send } from "lucide-react";

const fieldClass =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-[14px] text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";
const labelClass = "mb-1.5 block text-[13px] font-semibold text-slate-700";
const errorClass = "mt-1.5 text-[12px] font-medium text-red-600";

type TFieldProps = {
  isChecked: boolean;
  setIsChecked: (checked: boolean) => void;
  isBn: boolean;
};

/** The registered fields live inside `ZRFForm`'s provider, hence the split. */
const ContactFields = ({ isChecked, setIsChecked, isBn }: TFieldProps) => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  return (
    <div className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            {isBn ? "নাম" : "Name"}{" "}
            <span className="text-red-600" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder={isBn ? "আপনার পূর্ণ নাম" : "Your full name"}
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            {...register("name", {
              required: isBn
                ? "অনুগ্রহ করে আপনার নাম লিখুন।"
                : "Please enter your name.",
            })}
          />
          {errors.name?.message && (
            <p id="contact-name-error" role="alert" className={errorClass}>
              {String(errors.name.message)}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            {isBn ? "ইমেইল" : "Email"}{" "}
            <span className="text-red-600" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder={isBn ? "আপনার ইমেইল ঠিকানা" : "you@example.com"}
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
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
            <p id="contact-email-error" role="alert" className={errorClass}>
              {String(errors.email.message)}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            {isBn ? "ফোন" : "Phone"}
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            placeholder={isBn ? "০১৮১৭-২২৬৬৪৪" : "01817-226644"}
            className={fieldClass}
            {...register("phone")}
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className={labelClass}>
            {isBn ? "বিষয়" : "Subject"}
          </label>
          <input
            id="contact-subject"
            type="text"
            placeholder={isBn ? "বার্তার বিষয়" : "Message subject"}
            className={fieldClass}
            {...register("subject")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          {isBn ? "বার্তা" : "Message"}
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder={
            isBn
              ? "আপনার বার্তা এখানে লিখুন…"
              : "Write your message here…"
          }
          className={`${fieldClass} resize-y`}
          {...register("message")}
        />
      </div>

      <div className="flex items-start gap-2.5">
        <input
          id="contact-agree"
          type="checkbox"
          checked={isChecked}
          onChange={(event) => setIsChecked(event.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
        />
        <label
          htmlFor="contact-agree"
          className="text-[12.5px] leading-relaxed text-slate-600"
        >
          {isBn ? "আমি " : "I agree to the "}
          <Link
            href="/terms-&-conditions"
            className="font-medium text-brand-700 underline underline-offset-2 transition-colors hover:text-brand-800"
          >
            {isBn ? "শর্তাবলি" : "terms"}
          </Link>
          {isBn ? " এবং " : " and "}
          <Link
            href="/privacy-policy"
            className="font-medium text-brand-700 underline underline-offset-2 transition-colors hover:text-brand-800"
          >
            {isBn ? "গোপনীয়তা নীতি" : "privacy policy"}
          </Link>
          {isBn ? "তে সম্মত।" : "."}
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isBn ? "বার্তা পাঠান" : "Send message"}
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
};

/**
 * Contact form.
 *
 * Endpoint, payload and post-submit behaviour are unchanged (`POST /contact`,
 * success toast, return home); only the presentation moved from the dark MUI
 * panel to the light institutional form style.
 */
const ContactForm = () => {
  const { language } = useLanguage();
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(true);
  const isBn = language === "BNG";

  const handleSubmit = async (data: any) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/contact`,
        data,
      );
      toast.success(
        isBn ? "বার্তা সফলভাবে পাঠানো হয়েছে!" : "Form submitted successfully!",
        {
          id: "success-toast",
          duration: 1000,
        },
      );
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error(isBn ? "কিছু ভুল হয়েছে!" : "Something went wrong!");
    }
  };

  return (
    <ZRFForm onSubmit={handleSubmit}>
      <ContactFields
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        isBn={isBn}
      />
    </ZRFForm>
  );
};

export default ContactForm;
