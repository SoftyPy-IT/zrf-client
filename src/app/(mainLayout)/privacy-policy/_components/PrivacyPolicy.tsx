"use client";

import LegalLayout, { LegalSection } from "@/components/LegalLayout";
import { contact } from "@/lib/site";
import {
  Check,
  Fingerprint,
  Lock,
  Mail,
  Phone,
  Server,
  Shield,
  ShieldCheck,
} from "lucide-react";

const COMPLIANCE_BADGES = [
  { label: "GDPR Compliant", icon: Shield },
  { label: "CCPA Compliant", icon: Fingerprint },
  { label: "PCI DSS Certified", icon: Lock },
];

const COLLECTED_INFORMATION = [
  "Full name and contact information (email, phone, address)",
  "Donation history and transaction details",
  "Communication preferences and feedback",
  "Volunteer application information",
  "Website usage data (analytics, cookies)",
];

const USES_OF_INFORMATION = [
  "Process donations and issue tax receipts",
  "Send impact reports and program updates",
  "Improve our services and donor experience",
  "Comply with legal and regulatory requirements",
  "Protect against fraud and unauthorized transactions",
];

const PRIVACY_RIGHTS = [
  "Right to access your data",
  "Right to correct inaccuracies",
  "Right to request deletion",
  "Right to data portability",
  "Right to opt-out of marketing",
  "Right to withdraw consent",
];

const chipClass =
  "inline-flex items-center gap-1.5 rounded-md bg-brand-50 px-2.5 py-1 text-[11.5px] font-bold uppercase tracking-wide text-brand-700";

const linkClass =
  "font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800";

/**
 * Privacy policy document body.
 *
 * A single English legal document (unchanged in wording) re-skinned onto the
 * shared institutional palette — compliance badges, then numbered clauses.
 */
const PrivacyPolicy = () => {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="At Ziaur Rahman Foundation, your privacy is sacred. We protect your data with the same dedication we serve our communities."
      lastUpdated="April 15, 2026"
    >
      {/* Compliance badges + opening summary */}
      <div className="space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          {COMPLIANCE_BADGES.map(({ label, icon: Icon }) => (
            <span key={label} className={chipClass}>
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>

        <p className="text-[14.5px] leading-[1.85] text-slate-600">
          The{" "}
          <strong className="font-semibold text-slate-900">
            Ziaur Rahman Foundation
          </strong>{" "}
          (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) is committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our
          website, donate to our cause, or interact with our programs. We honor
          the legacy of{" "}
          <strong className="font-semibold text-slate-900">Ziaur Rahman</strong>{" "}
          by operating with transparency, integrity, and respect for every
          individual&apos;s privacy rights.
        </p>
      </div>

      <LegalSection title="1. Information We Collect">
        <p>
          To fulfill our mission effectively, we may collect the following types
          of information:
        </p>
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {COLLECTED_INFORMATION.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title="2. How We Use Your Information">
        <p>
          Your data helps us create meaningful impact. We use your information
          to:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          {USES_OF_INFORMATION.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="flex items-start gap-3 rounded-card border border-gold-200 bg-gold-50/60 p-5">
          <ShieldCheck
            className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
            aria-hidden="true"
          />
          <p className="text-[14px] font-semibold leading-relaxed text-slate-700">
            We NEVER sell, rent, or trade your personal information to third
            parties.
          </p>
        </div>
      </LegalSection>

      <LegalSection title="3. Data Protection &amp; Security">
        <p>
          We implement bank-grade security measures to protect your
          information:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-card border border-slate-200 p-5">
            <Server className="h-4 w-4 text-brand-600" aria-hidden="true" />
            <h3 className="mt-3 text-[15px] font-bold text-slate-900">
              AES-256 Encryption
            </h3>
            <p className="mt-1 text-[13.5px] leading-relaxed text-slate-500">
              Military-grade data encryption
            </p>
          </div>
          <div className="rounded-card border border-slate-200 p-5">
            <Lock className="h-4 w-4 text-brand-600" aria-hidden="true" />
            <h3 className="mt-3 text-[15px] font-bold text-slate-900">
              SSL/TLS Protocols
            </h3>
            <p className="mt-1 text-[13.5px] leading-relaxed text-slate-500">
              Secure data transmission
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="4. Your Privacy Rights">
        <ul className="list-disc space-y-2 pl-5">
          {PRIVACY_RIGHTS.map((right) => (
            <li key={right}>{right}</li>
          ))}
        </ul>
        <div className="rounded-card border border-slate-200 bg-slate-50 p-5">
          <p className="text-[13.5px] leading-relaxed text-slate-600">
            To exercise these rights, contact us:
          </p>
          <ul className="mt-3 space-y-2 text-[13.5px]">
            <li className="flex items-center gap-2">
              <Mail
                className="h-4 w-4 shrink-0 text-brand-600"
                aria-hidden="true"
              />
              <a href={`mailto:${contact.email}`} className={linkClass}>
                {contact.email}
              </a>
            </li>
            {contact.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-2">
                <Phone
                  className="h-4 w-4 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                  className={linkClass}
                >
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </LegalSection>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
