import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/share/Container";
import SectionHeading from "@/components/share/SectionHeading";
import { TBanner } from "@/types/type";
import { CheckCircle2, ArrowRight } from "lucide-react";

import imgMain from "../../../../assets/images/welcome/3.jpg";
import imgAccent from "../../../../assets/images/welcome/2.jpg";

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
            <div className="relative mx-auto max-w-[520px]">
              {/* Main frame */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-panel shadow-panel ring-1 ring-slate-200/70">
                <Image
                  src={imgMain}
                  alt={
                    isBn
                      ? "জিয়াউর রহমান ফাউন্ডেশনের কার্যক্রম"
                      : "Ziaur Rahman Foundation field programme"
                  }
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
              </div>

              {/* Overlapping accent photo */}
              <div className="absolute -bottom-8 -left-4 hidden w-[170px] overflow-hidden rounded-card border-[6px] border-white shadow-panel sm:block md:w-[200px]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={imgAccent}
                    alt=""
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Years-of-service badge */}
              <div className="absolute -right-2 top-6 rounded-card bg-brand-700 px-5 py-4 text-center shadow-panel ring-1 ring-white/15 sm:-right-4">
                <span className="block text-[28px] font-bold leading-none text-white">
                  27
                </span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.12em] text-gold-400">
                  {isBn ? "বছর" : "Years"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WelcomeData;
