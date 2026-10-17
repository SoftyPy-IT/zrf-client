"use client";

import LegalLayout, { LegalSection } from "@/components/LegalLayout";
import { useLanguage } from "@/provider/LanguageProvider";
import { CheckCircle, FileText, Gavel, HeartHandshake } from "lucide-react";

const OVERVIEW_CLAUSES = [
  {
    title: "1. Acceptance of Terms",
    body: "By using our website, you confirm that you have read, understood, and agree to be bound by these Terms & Conditions and our Privacy Policy.",
  },
  {
    title: "2. Donations & Contributions",
    body: "All donations are processed securely. We provide tax-deductible receipts for eligible contributions. Donations are generally non-refundable except for processing errors.",
  },
  {
    title: "3. User Conduct",
    body: "You agree to use our website respectfully and lawfully. Harassment, fraud, or misuse of our services will result in immediate termination of access.",
  },
  {
    title: "4. Community Guidelines",
    body: "We foster a respectful community. Hate speech, discrimination, or harmful behavior violates our core values and will not be tolerated.",
  },
];

const GOVERNING_TERMS = [
  { label: "Governing Law: Laws of Bangladesh", icon: FileText },
  { label: "Dispute Resolution: Mediation First", icon: Gavel },
  { label: "Effective Date: April 15, 2026", icon: CheckCircle },
];

const chipClass =
  "inline-flex items-center gap-1.5 rounded-md bg-brand-50 px-2.5 py-1 text-[11.5px] font-bold uppercase tracking-wide text-brand-700";

/**
 * Terms & conditions document body.
 *
 * The old icon cards became numbered clauses so the page reads as one
 * document; the governing-law chips close the document.
 */
const TermsConditions = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="Together, we honor the legacy of Ziaur Rahman by building a just, compassionate, and empowered society. These terms guide our shared journey."
      lastUpdated="April 15, 2026"
    >
      <p className="text-[14.5px] leading-[1.85] text-slate-600">
        {isBn
          ? "এই শর্তাবলি জিয়াউর রহমান ফাউন্ডেশনের ওয়েবসাইট, এর কনটেন্ট ও সেবাসমূহ ব্যবহারের নিয়মাবলী নির্ধারণ করে। এগুলো আমাদের গোপনীয়তা নীতিমালা ও রিটার্ন এবং রিফান্ড নীতিমালার সঙ্গে সমন্বয় করে পড়া উচিত।"
          : "These Terms & Conditions govern your use of the Ziaur Rahman Foundation website, its content and its services. They complement our Privacy Policy and Return & Refund Policy."}
      </p>

      {/* Agreement notice */}
      <div className="flex items-start gap-3 rounded-card border border-slate-200 bg-slate-50 p-5">
        <HeartHandshake
          className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
          aria-hidden="true"
        />
        <p className="text-[14.5px] leading-relaxed text-slate-700">
          By accessing the Ziaur Rahman Foundation website, you agree to these
          Terms &amp; Conditions. We encourage you to read them carefully.
        </p>
      </div>

      {OVERVIEW_CLAUSES.map((clause) => (
        <LegalSection key={clause.title} title={clause.title}>
          <p>{clause.body}</p>
        </LegalSection>
      ))}

      <LegalSection title="5. Intellectual Property">
        <p>
          All content on this website — including but not limited to text,
          graphics, logos, images, videos, and the name &quot;Ziaur Rahman
          Foundation&quot; — is the exclusive property of the foundation and is
          protected by Bangladesh and international copyright laws.
        </p>
        <p className="text-[13.5px] leading-relaxed text-slate-500">
          You may not reproduce, distribute, modify, or create derivative works
          without explicit written permission.
        </p>
      </LegalSection>

      <LegalSection title="6. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, the Ziaur Rahman Foundation
          shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages resulting from your use of our
          services, including but not limited to donation processing delays,
          technical errors, or third-party payment processor issues.
        </p>
      </LegalSection>

      {/* Governing terms */}
      <div className="flex flex-wrap items-center gap-3">
        {GOVERNING_TERMS.map(({ label, icon: Icon }) => (
          <span key={label} className={chipClass}>
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            {label}
          </span>
        ))}
      </div>
    </LegalLayout>
  );
};

export default TermsConditions;
