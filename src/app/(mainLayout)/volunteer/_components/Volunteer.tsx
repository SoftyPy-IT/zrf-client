"use client";

import React from "react";
import Image from "next/image";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import PageBody from "@/components/share/PageBody";
import SectionHeading from "@/components/share/SectionHeading";
import { LoadingStatus, Skeleton } from "@/components/share/Skeleton";
import { TCommitte } from "@/types/type";
import VolunteerForm from "./VolunteerForm";
import { GraduationCap, HeartHandshake, Users } from "lucide-react";

interface welcomeProps {
  committeeData: TCommitte[];
  language: string;
  /** Shows the skeleton roll while the committee feed resolves. */
  loading?: boolean;
}

/**
 * Volunteer page body.
 *
 * Intro + reasons to volunteer, the registration form in the same card style
 * as the contact page, and the roll of everyone serving under the "Volunteer"
 * committee category.
 */
const Volunteer: React.FC<welcomeProps> = ({
  committeeData,
  language,
  loading,
}) => {
  const isBn = language === "BNG";

  const volunteers = (committeeData || []).filter(
    (volunteer) => volunteer.category == "Volunteer",
  );

  const benefits = [
    {
      icon: HeartHandshake,
      titleEn: "Serve communities",
      titleBn: "সমাজের পাশে থাকা",
      textEn:
        "Take part in relief, health camps and education programmes across Bangladesh.",
      textBn:
        "সারা দেশে ত্রাণ, স্বাস্থ্য ক্যাম্প ও শিক্ষা কার্যক্রমে সরাসরি অংশ নিন।",
    },
    {
      icon: GraduationCap,
      titleEn: "Training & guidance",
      titleBn: "প্রশিক্ষণ ও দিকনির্দেশনা",
      textEn:
        "Every volunteer receives orientation and field guidance from our programme teams.",
      textBn:
        "প্রতিটি স্বেচ্ছাসেবক আমাদের কর্মসূচি দল থেকে প্রশিক্ষণ ও মাঠপর্যায়ের দিকনির্দেশনা পান।",
    },
    {
      icon: Users,
      titleEn: "A nationwide network",
      titleBn: "দেশব্যাপী নেটওয়ার্ক",
      textEn:
        "Join a countrywide circle of volunteers working together for the nation.",
      textBn:
        "জাতীয় কল্যাণে একসঙ্গে কাজ করা স্বেচ্ছাসেবকদের দেশব্যাপী নেটওয়ার্কের অংশ হোন।",
    },
  ];

  return (
    <>
      <CommonBanner
        title={isBn ? "আমাদের স্বেচ্ছাসেবক" : "Our Volunteers"}
        subtitle={
          isBn
            ? "ফাউন্ডেশনের কাজের পেছনের মানুষ — স্বেচ্ছাসেবক হিসেবে আপনিও আমাদের সঙ্গে যোগ দিতে পারেন।"
            : "The people behind our work — and how you can join them as a volunteer."
        }
      />

      {/* Intro + reasons ------------------------------------------- */}
      <PageBody tone="white">
        <div className="mx-auto max-w-prose text-center">
          <SectionHeading
            eyebrow={isBn ? "স্বেচ্ছাসেবক হোন" : "Volunteer with ZRF"}
            title={
              isBn
                ? "আমাদের সঙ্গে রাষ্ট্রগঠনে অংশ নিন"
                : "Serve the Nation Alongside Us"
            }
            subtitle={
              isBn
                ? "১৯৯৯ সাল থেকে জিয়াউর রহমান ফাউন্ডেশন শিক্ষা, স্বাস্থ্য, ত্রাণ ও পুনর্বাসনের মাধ্যমে অসহায় মানুষের পাশে দাঁড়িয়েছে। এই কাজের বড় অংশটুকু এগিয়ে নিয়ে যান আমাদের স্বেচ্ছাসেবকেরা।"
                : "Since 1999, the Ziaur Rahman Foundation has stood beside people in need through education, healthcare, relief and rehabilitation — work carried forward largely by our volunteers."
            }
          />
          <p className="mt-5 text-[14px] leading-[1.85] text-slate-600">
            {isBn
              ? "আপনার সময়, দক্ষতা ও আন্তরিকতা দিয়েই আপনি আমাদের কাজের অংশ হতে পারেন। নিচের ফর্মটি পূরণ করে স্বেচ্ছাসেবক হিসেবে নিবন্ধন করুন, আমাদের দল শীঘ্রই আপনার সঙ্গে যোগাযোগ করবে।"
              : "Your time, skills and sincerity are all it takes to become part of that work. Register as a volunteer using the form below and our team will get in touch with you."}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.titleEn}
                className="group flex flex-col rounded-card border border-slate-200 bg-white p-5 transition-all duration-300 ease-editorial hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-brand-50 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:ring-brand-600">
                  <Icon
                    className="h-6 w-6 text-brand-700 transition-colors group-hover:text-white"
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-4 text-[15px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
                  {isBn ? benefit.titleBn : benefit.titleEn}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                  {isBn ? benefit.textBn : benefit.textEn}
                </p>
              </article>
            );
          })}
        </div>
      </PageBody>

      {/* Registration ---------------------------------------------- */}
      <PageBody tone="slate">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow={isBn ? "নিবন্ধন" : "Registration"}
              title={
                isBn
                  ? "স্বেচ্ছাসেবক হিসেবে নিবন্ধন করুন"
                  : "Become a Volunteer"
              }
              subtitle={
                isBn
                  ? "ফর্মটি পূরণ করুন এবং আপনার আগ্রহ ও দক্ষতার কথা জানান। আমাদের স্বেচ্ছাসেবক সমন্বয় দল আপনার সঙ্গে যোগাযোগ করবে।"
                  : "Complete the form and tell us how you would like to help. Our volunteer coordination team will contact you."
              }
            />

            <ul className="mt-6 space-y-3">
              {[
                isBn
                  ? "নিবন্ধনের পর আমাদের দল আপনার সঙ্গে যোগাযোগ করবে।"
                  : "After you register, our team will contact you to discuss next steps.",
                isBn
                  ? "নিয়মিত কার্যক্রমের আগে সংক্ষিপ্ত পরিচিতি ও প্রশিক্ষণ দেওয়া হয়।"
                  : "A short orientation is given before every regular programme.",
                isBn
                  ? "আপনার তথ্য গোপন রাখা হবে এবং শুধু স্বেচ্ছাসেবক কার্যক্রমে ব্যবহৃত হবে।"
                  : "Your information is kept confidential and used only for volunteer coordination.",
              ].map((line) => (
                <li
                  key={line}
                  className="flex gap-2.5 text-[13.5px] leading-relaxed text-slate-600"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                    aria-hidden="true"
                  />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-panel border border-slate-200 bg-white p-6 shadow-card sm:p-8">
              <VolunteerForm />
            </div>
          </div>
        </div>
      </PageBody>

      {/* Volunteer roll -------------------------------------------- */}
      <PageBody tone="white">
        <SectionHeading
          eyebrow={isBn ? "আমাদের মানুষ" : "Our people"}
          title={isBn ? "আমাদের স্বেচ্ছাসেবক" : "Our Volunteers"}
          subtitle={
            isBn
              ? "ফাউন্ডেশনের কার্যক্রমে নিবেদিত স্বেচ্ছাসেবকদের তালিকা।"
              : "The volunteers who give their time to the foundation's programmes."
          }
        />

        {loading ? (
          <div
            aria-busy="true"
            className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-4"
          >
            <LoadingStatus
              label={isBn ? "স্বেচ্ছাসেবক লোড হচ্ছে" : "Loading volunteers"}
            />
            {[0, 1, 2, 3].map((index) => (
              <div key={index} aria-hidden="true" className="flex flex-col">
                <Skeleton className="aspect-[4/5] rounded-card" />
                <Skeleton className="mt-3 h-4 w-3/4" />
                <Skeleton className="mt-2 h-3 w-1/2" />
              </div>
            ))}
          </div>
        ) : volunteers.length === 0 ? (
          <p className="py-16 text-center text-sm text-slate-500">
            {isBn
              ? "এই মুহূর্তে কোনো স্বেচ্ছাসেবকের তথ্য পাওয়া যায়নি।"
              : "No volunteer profiles found at the moment."}
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
            {volunteers.map((volunteer) => {
              const image = volunteer.images?.[0];
              const name = isBn
                ? volunteer.bangla_name
                : volunteer.english_name;
              const designation = isBn
                ? volunteer.designation_bangla
                : volunteer.designation_english;

              return (
                <article key={volunteer._id} className="group flex flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-slate-100 ring-1 ring-slate-200">
                    {image ? (
                      <Image
                        src={image}
                        alt={
                          name
                            ? `${name}${
                                designation ? ` — ${designation}` : ""
                              }`
                            : isBn
                              ? "স্বেচ্ছাসেবক"
                              : "Volunteer"
                        }
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
                        className="object-cover transition-transform duration-500 ease-editorial group-hover:scale-[1.04]"
                      />
                    ) : (
                      <span className="flex h-full items-center justify-center text-slate-300">
                        <Users className="h-8 w-8" aria-hidden="true" />
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-[14.5px] font-bold leading-snug text-slate-900">
                    {name}
                  </h3>
                  {designation && (
                    <p className="mt-0.5 text-[12px] font-medium uppercase tracking-[0.06em] text-slate-500">
                      {designation}
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </PageBody>
    </>
  );
};

export default Volunteer;
