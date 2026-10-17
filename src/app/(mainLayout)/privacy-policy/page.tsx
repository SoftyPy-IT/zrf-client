import type { Metadata } from "next";
import PrivacyPolicy from "./_components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | Ziaur Rahman Foundation",
  description:
    "How the Ziaur Rahman Foundation collects, uses, discloses and safeguards the personal information of donors, volunteers and website visitors.",
  keywords: [
    "Ziaur Rahman Foundation privacy policy",
    "donor privacy",
    "data protection",
    "GDPR compliance",
  ],
  authors: [{ name: "Ziaur Rahman Foundation" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://zrf.info/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Ziaur Rahman Foundation",
    description:
      "How the Ziaur Rahman Foundation collects, uses, discloses and safeguards your personal information.",
    url: "https://zrf.info/privacy-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Ziaur Rahman Foundation",
    description:
      "How the Ziaur Rahman Foundation collects, uses, discloses and safeguards your personal information.",
  },
};

/**
 * Privacy policy route.
 *
 * The document body is a client component (the shared legal shell reads the
 * language preference); this server wrapper contributes the SEO metadata.
 */
const PrivacyPolicyPage = () => <PrivacyPolicy />;

export default PrivacyPolicyPage;
