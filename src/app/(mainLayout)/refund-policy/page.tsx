import type { Metadata } from "next";
import RefundPolicy from "./_components/RefundPolicy";

export const metadata: Metadata = {
  title: "Return & Refund Policy | Ziaur Rahman Foundation",
  description:
    "The Ziaur Rahman Foundation's return and refund policy — eligibility, non-refundable items, the four-step refund process and refund timelines for donors.",
  keywords: [
    "Ziaur Rahman Foundation refund policy",
    "donation refund",
    "return policy",
    "refund timeline",
  ],
  authors: [{ name: "Ziaur Rahman Foundation" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://zrf.info/refund-policy",
  },
  openGraph: {
    title: "Return & Refund Policy | Ziaur Rahman Foundation",
    description:
      "A fair, transparent refund process for every donor — eligibility, timelines and how to submit a request.",
    url: "https://zrf.info/refund-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Return & Refund Policy | Ziaur Rahman Foundation",
    description:
      "A fair, transparent refund process for every donor — eligibility, timelines and how to submit a request.",
  },
};

/**
 * Return & refund policy route.
 *
 * The document body is a client component (the shared legal shell reads the
 * language preference); this server wrapper contributes the SEO metadata.
 */
const RefundPolicyPage = () => <RefundPolicy />;

export default RefundPolicyPage;
