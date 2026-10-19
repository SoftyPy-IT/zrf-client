"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/share/Container";
import SectionHeading from "@/components/share/SectionHeading";
import { TBanner } from "@/types/type";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface welcomeProps {
  welcomeData: TBanner[];
  language: string;
}

/**
 * "Welcome to the Foundation" block.
 *
 * Two-column editorial layout: copy and commitments on the left, a layered photo
 * composition on the right with an anniversary badge anchoring the corner.
 */
const WelcomeData: React.FC<welcomeProps> = ({ welcomeData, language }) => {
  const isBn = language === "BNG";
  const welcomeFilterData = welcomeData.filter(
    (welcome) => welcome.category === "Welcome",
  );

  const commitments = [
    isBn ? "স্বচ্ছতা ও জবাবদিহিতা" : "Transparency and accountability",
    isBn ? "টেকসই উন্নয়ন প্রকল্প" : "Sustainable development projects",
    isBn ? "সারাদেশে মানবিক সহায়তা" : "Nationwide humanitarian response",
  ];

  return (
    <section className="section-y-tight bg-white">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Copy ------------------------------------------------------- */}
          <div className="order-2 lg:order-1">
            {welcomeFilterData.length > 0 ? (
              welcomeFilterData.map((data) => (
                <div key={data._id}>
                  <SectionHeading
                    align="left"
                    eyebrow={isBn ? "স্বাগতম" : "Welcome"}
                    title={
                      isBn
                        ? "জিয়াউর রহমান ফাউন্ডেশন"
                        : "Ziaur Rahman Foundation"
                    }
                    subtitle={
                      isBn
                        ? undefined
                        : "An institution built on service, dignity and opportunity for every citizen."
                    }
                  />

                  <p className="mt-5 text-[14.5px] leading-[1.85] text-slate-600">
                    {isBn
                      ? data.bangla_short_description
                      : data.english_short_description}
                  </p>
                </div>
              ))
            ) : (
              <SectionHeading
                align="left"
                eyebrow={isBn ? "স্বাগতম" : "Welcome"}
                title={
                  isBn ? "জিয়াউর রহমান ফাউন্ডেশন" : "Ziaur Rahman Foundation"
                }
                subtitle={
                  isBn
                    ? "মানবতার সেবায় নিবেদিত একটি প্রতিষ্ঠান।"
                    : "An institution devoted to the service of humanity."
                }
              />
            )}

            <ul className="mt-6 space-y-2.5">
              {commitments.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[14px] font-medium text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-[17px] w-[17px] shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-md"
              >
                {isBn ? "আমাদের সম্পর্কে" : "About the Foundation"}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/message-of-president"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
              >
                {isBn ? "প্রেসিডেন্টের বাণী" : "President's Message"}
              </Link>
            </div>
          </div>

          {/* Imagery ---------------------------------------------------- */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-[480px]">
              {/* Commemorative artwork card with rounded squircle shape */}
              <div className="relative aspect-square w-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-[1.01]">
                <Image
                  src="/images/anniversary/shoronika-about-card.png"
                  alt={
                    isBn
                      ? "শহীদ রাষ্ট্রপতি জিয়াউর রহমান — জিয়াউর রহমান ফাউন্ডেশন ২৭তম প্রতিষ্ঠাবার্ষিকী"
                      : "Shaheed President Ziaur Rahman — Ziaur Rahman Foundation 27th Anniversary"
                  }
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-contain select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WelcomeData;
