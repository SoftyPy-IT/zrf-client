"use client";

import React from "react";
import SectionHeading from "@/components/share/SectionHeading";
import { Quote } from "lucide-react";

interface TestimonialsSectionProps {
  language: string;
}

/**
 * Supporter voices shown under the donation form.
 *
 * Quote panels are plain `surface-card`s so they match every other card on the
 * site — no lift-on-hover, no coloured fills; the gold quote mark carries the
 * emphasis.
 */
const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  language,
}) => {
  const isBn = language === "BNG";

  const testimonials = [
    {
      name: isBn ? "রাশেদ করিম" : "Rashed Karim",
      donorType: isBn ? "নিয়মিত দাতা" : "Regular Donor",
      quote: isBn
        ? "জেডআরএফ-এ অনুদান দেওয়া আমার জন্য পরিতৃপ্তিদায়ক অভিজ্ঞতা। আমার অবদানের প্রকৃত প্রভাব আমি নিজেই দেখতে পাই।"
        : "Donating to ZRF has been a rewarding experience. I can see the real impact of my contributions.",
    },
    {
      name: isBn ? "ফাতেমা বেগম" : "Fatema Begum",
      donorType: isBn ? "এককালীন দাতা" : "One-time Donor",
      quote: isBn
        ? "এই প্রতিষ্ঠানের স্বচ্ছতা ও নিষ্ঠা আমাকে অনুদান দিতে অনুপ্রাণিত করেছে।"
        : "The transparency and dedication of this organization inspired me to contribute.",
    },
    {
      name: isBn ? "মো. হাসান আলী" : "Md. Hasan Ali",
      donorType: isBn ? "মাসিক দাতা" : "Monthly Donor",
      quote: isBn
        ? "আমার মাসিক অনুদান যে পরিবারের খাদ্য সহায়তায় কাজে লাগে — এই ভাবনাই আমাকে অব্যাহত রাখার প্রেরণা দেয়।"
        : "Knowing that my monthly donation helps feed families keeps me motivated to continue.",
    },
  ];

  return (
    <div className="mt-16 md:mt-24">
      <SectionHeading
        eyebrow={isBn ? "শুভানুধ্যায়ীদের মতামত" : "Voices of support"}
        title={isBn ? "আমাদের শুভানুধ্যায়ীরা যা বলেন" : "What Our Supporters Say"}
        subtitle={
          isBn
            ? "স্বচ্ছতা ও জবাবদিহিতা আমাদের কাজের ভিত্তি — অনুদানকারীদের অভিজ্ঞতাই তার প্রমাণ।"
            : "Transparency and accountability are the foundations of our work — our donors’ experience is the proof."
        }
      />

      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <li
            key={testimonial.name}
            className="surface-card flex h-full flex-col p-6"
          >
            <Quote className="h-6 w-6 text-gold-500" aria-hidden="true" />
            <blockquote className="mt-4 flex-1 text-[14.5px] leading-[1.85] text-slate-600">
              “{testimonial.quote}”
            </blockquote>
            <footer className="mt-5 border-t border-slate-100 pt-4">
              <p className="text-[13px] font-semibold text-slate-900">
                {testimonial.name}
              </p>
              <p className="mt-0.5 text-[12px] text-slate-500">
                {testimonial.donorType}
              </p>
            </footer>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestimonialsSection;
