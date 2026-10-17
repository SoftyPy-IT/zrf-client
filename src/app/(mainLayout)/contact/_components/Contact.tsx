"use client";

import React from "react";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import PageBody from "@/components/share/PageBody";
import SectionHeading from "@/components/share/SectionHeading";
import { useLanguage } from "@/provider/LanguageProvider";
import { contact } from "@/lib/site";
import ContactForm from "./ContactForm";
import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const iconTileClass =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 ring-1 ring-brand-100";

/**
 * Contact page body.
 *
 * Two-column band: contact details as linked `surface-card`s on the left, the
 * enquiry form in a plain panel on the right, followed by the office map.
 */
const Contact = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  const address = isBn ? contact.addressBn : contact.addressEn;
  const phones = isBn ? contact.phonesBn : contact.phones;

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    contact.addressEn,
  )}`;

  return (
    <>
      <CommonBanner
        title={isBn ? "যোগাযোগ" : "Contact Us"}
        subtitle={
          isBn
            ? "যেকোনো জিজ্ঞাসা, মতামত বা সহযোগিতার জন্য আমাদের সঙ্গে যোগাযোগ করুন।"
            : "For any enquiry, feedback or offer of support, please get in touch with our team."
        }
      />

      <PageBody tone="slate">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Contact details ------------------------------------------- */}
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow={isBn ? "যোগাযোগের তথ্য" : "Get in touch"}
              title={isBn ? "আমাদের সাথে যোগাযোগ করুন" : "Contact Information"}
              subtitle={
                isBn
                  ? "আমাদের অফিসে সরাসরি এসে অথবা ফোন ও ইমেলের মাধ্যমে যোগাযোগ করতে পারেন।"
                  : "Visit our office, or reach us by phone or email — we are happy to help."
              }
            />

            <ul className="mt-8 space-y-4">
              <li className="surface-card flex gap-4 p-5">
                <span className={iconTileClass}>
                  <MapPin className="h-5 w-5 text-brand-700" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[13px] font-semibold text-slate-700">
                    {isBn ? "ঠিকানা" : "Address"}
                  </h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-slate-600">
                    {address}
                  </p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-700 transition-colors hover:text-brand-800"
                  >
                    {isBn ? "পথনির্দেশ পান" : "Get directions"}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </li>

              <li className="surface-card flex gap-4 p-5">
                <span className={iconTileClass}>
                  <Phone className="h-5 w-5 text-brand-700" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[13px] font-semibold text-slate-700">
                    {isBn ? "ফোন" : "Phone"}
                  </h3>
                  <div className="mt-1 flex flex-col gap-1">
                    {phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                        className="text-[13.5px] font-medium text-slate-600 transition-colors hover:text-brand-700"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </li>

              <li className="surface-card flex gap-4 p-5">
                <span className={iconTileClass}>
                  <Mail className="h-5 w-5 text-brand-700" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[13px] font-semibold text-slate-700">
                    {isBn ? "ইমেল" : "Email"}
                  </h3>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 block break-all text-[13.5px] font-medium text-slate-600 transition-colors hover:text-brand-700"
                  >
                    {contact.email}
                  </a>
                </div>
              </li>

              <li className="surface-card flex gap-4 p-5">
                <span className={iconTileClass}>
                  <Clock className="h-5 w-5 text-brand-700" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[13px] font-semibold text-slate-700">
                    {isBn ? "সাড়া দেওয়ার সময়" : "Response time"}
                  </h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-slate-600">
                    {isBn
                      ? "আমরা সাধারণত ২ কার্যদিবসের মধ্যে উত্তর দিয়ে থাকি।"
                      : "We usually reply within two working days."}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Enquiry form --------------------------------------------- */}
          <div className="lg:col-span-7">
            <div className="rounded-panel border border-slate-200 bg-white p-6 shadow-card sm:p-8">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 ring-1 ring-brand-100">
                  <Send className="h-4 w-4 text-brand-700" aria-hidden="true" />
                </span>
                <h2 className="text-[20px] font-bold text-slate-900">
                  {isBn ? "আমাদের বার্তা পাঠান" : "Send us a message"}
                </h2>
              </div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">
                {isBn
                  ? "নিচের ফর্মটি পূরণ করুন, আমাদের দল যত দ্রুত সম্ভব আপনার সঙ্গে যোগাযোগ করবে।"
                  : "Complete the form below and our team will get back to you as soon as possible."}
              </p>

              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </PageBody>

      {/* Office map ------------------------------------------------- */}
      <PageBody tone="white">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow={isBn ? "আমাদের ঠিকানা" : "Visit us"}
            title={isBn ? "আমাদের অফিস" : "Find Our Office"}
            subtitle={
              isBn
                ? "গুলশান-১, ঢাকায় অবস্থিত আমাদের অফিসে আপনাকে স্বাগতম।"
                : "Our office is located in Gulshan-1, Dhaka. We look forward to welcoming you."
            }
          />

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700"
          >
            {isBn ? "গুগল ম্যাপে দেখুন" : "Open in Google Maps"}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-8 overflow-hidden rounded-panel border border-slate-200 shadow-card">
          <iframe
            src={contact.mapEmbed}
            title={
              isBn
                ? "জিয়াউর রহমান ফাউন্ডেশন অফিসের মানচিত্র"
                : "Map of the Ziaur Rahman Foundation office"
            }
            className="h-[360px] w-full sm:h-[440px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </PageBody>
    </>
  );
};

export default Contact;
