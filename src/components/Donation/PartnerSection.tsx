"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/share/Container";
import SectionHeading from "@/components/share/SectionHeading";
import { socials } from "@/lib/site";
import { ArrowRight, Facebook, Mail, Youtube } from "lucide-react";

interface PartnerSectionProps {
  language: string;
}

const iconTileClass =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 ring-1 ring-brand-100";

/**
 * Partnership band that closes the donation page.
 *
 * A calm grid of outreach routes (the organisation’s real channels from
 * `@/lib/site`, plus the contact page) instead of the previous solid-gold
 * panel — the gold accent is left to the section rule.
 */
const PartnerSection: React.FC<PartnerSectionProps> = ({ language }) => {
  const isBn = language === "BNG";

  const facebook = socials.find((social) => social.name === "Facebook");
  const youtube = socials.find((social) => social.name === "YouTube");

  const partners = [
    facebook && {
      key: "facebook",
      icon: <Facebook className="h-5 w-5 text-brand-700" aria-hidden="true" />,
      title: isBn ? "ফেসবুকে আমাদের সঙ্গে থাকুন" : "Follow us on Facebook",
      description: isBn
        ? "আমাদের কার্যক্রমের সর্বশেষ খবর ও আয়োজনের তথ্য পেতে আমাদের অফিসিয়াল পেজ অনুসরণ করুন।"
        : "Follow our official page for the latest news about our programmes and events.",
      href: facebook.href,
      external: true,
    },
    youtube && {
      key: "youtube",
      icon: <Youtube className="h-5 w-5 text-brand-700" aria-hidden="true" />,
      title: isBn ? "ইউটিউবে মাঠের গল্প" : "Watch our work on YouTube",
      description: isBn
        ? "মাঠপর্যায়ের কার্যক্রম, প্রামাণ্যচিত্র ও কভারেজ দেখুন আমাদের চ্যানেলে।"
        : "Field reports, documentaries and coverage from our programmes on our channel.",
      href: youtube.href,
      external: true,
    },
    {
      key: "contact",
      icon: <Mail className="h-5 w-5 text-brand-700" aria-hidden="true" />,
      title: isBn ? "অংশীদারিত্বের আলোচনা" : "Discuss a partnership",
      description: isBn
        ? "কর্পোরেট, প্রাতিষ্ঠানিক ও সামাজিক উদ্যোগে অংশীদারিত্বের জন্য আমাদের সঙ্গে যোগাযোগ করুন।"
        : "Corporate, institutional and community partnerships — get in touch with our team.",
      href: "/contact",
      external: false,
    },
  ].filter(Boolean) as {
    key: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
    external: boolean;
  }[];

  return (
    <section className="section-y border-t border-slate-200 bg-slate-50">
      <Container>
        <SectionHeading
          eyebrow={isBn ? "অংশীদারিত্ব" : "Partnerships"}
          title={isBn ? "আমাদের সঙ্গে অংশীদার হোন" : "Partner with Us"}
          subtitle={
            isBn
              ? "সমাজে দীর্ঘস্থায়ী পরিবর্তন আনতে আমাদের সঙ্গে হাত মেলান।"
              : "Join hands with us to create lasting change in communities."
          }
        />

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {partners.map((partner) => (
            <li key={partner.key}>
              <Link
                href={partner.href}
                {...(partner.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group surface-card surface-card-hover flex h-full flex-col p-6"
              >
                <span className={iconTileClass}>{partner.icon}</span>
                <h3 className="mt-4 text-[15.5px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
                  {partner.title}
                </h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-slate-600">
                  {partner.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-700">
                  {isBn ? "বিস্তারিত" : "Learn more"}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default PartnerSection;
