import React from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { useLanguage } from "@/provider/LanguageProvider";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import axios from "axios";

const Subscribe = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<{ email: string }>();

  const onSubmit = async (data: { email: string }) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/subscribe`, data);
      toast.success(
        isBn ? "সফলভাবে সাবস্ক্রাইব হয়েছে!" : "Subscribed successfully!",
        { id: "subscribe-success", duration: 1800 },
      );
      reset();
    } catch (error) {
      console.error(error);
      toast.error(
        isBn ? "কিছু ভুল হয়েছে!" : "Something went wrong. Please try again.",
        { id: "subscribe-error" },
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full shrink-0 md:w-auto"
      noValidate
    >
      <div className="flex w-full flex-col gap-2 sm:flex-row md:w-auto">
        <div className="relative flex-1 sm:w-[320px] lg:w-[360px]">
          <label htmlFor="footer-subscribe-email" className="sr-only">
            {isBn ? "ইমেইল ঠিকানা" : "Email address"}
          </label>
          <input
            id="footer-subscribe-email"
            type="email"
            autoComplete="email"
            placeholder={isBn ? "আপনার ইমেইল লিখুন" : "Enter your email address"}
            aria-invalid={Boolean(errors.email)}
            {...register("email", {
              required: isBn ? "ইমেইল আবশ্যক" : "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: isBn ? "সঠিক ইমেইল দিন" : "Enter a valid email address",
              },
            })}
            className={`h-12 w-full rounded-lg border bg-white pl-4 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-brand-800 ${
              errors.email ? "border-red-400" : "border-white/50"
            }`}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-gold-500 px-6 text-sm font-bold text-brand-950 transition-all duration-200 hover:bg-gold-400 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting
            ? isBn
              ? "পাঠানো হচ্ছে..."
              : "Sending..."
            : isBn
              ? "সাবস্ক্রাইব"
              : "Subscribe"}
          <NorthEastIcon sx={{ fontSize: 17 }} />
        </button>
      </div>

      {errors.email && (
        <p role="alert" className="mt-2 pl-1 text-[12.5px] font-medium text-red-200">
          {errors.email.message}
        </p>
      )}
    </form>
  );
};

export default Subscribe;
