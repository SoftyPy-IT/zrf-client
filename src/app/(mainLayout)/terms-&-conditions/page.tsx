import type { Metadata } from "next";
import TermsConditions from "./_components/TermsConditions";

export const metadata: Metadata = {
  title: "Terms & Conditions | Ziaur Rahman Foundation",
  description:
    "The terms and conditions governing use of the Ziaur Rahman Foundation website, donations, community guidelines, intellectual property and liability.",
  keywords: [
    "Ziaur Rahman Foundation terms",
    "terms and conditions",
    "website terms",
    "donation terms",
  ],
  authors: [{ name: "Ziaur Rahman Foundation" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://zrf.info/terms-&-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Ziaur Rahman Foundation",
    description:
      "The terms governing use of the Ziaur Rahman Foundation website, donations and community participation.",
    url: "https://zrf.info/terms-&-conditions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Ziaur Rahman Foundation",
    description:
      "The terms governing use of the Ziaur Rahman Foundation website, donations and community participation.",
  },
};

/**
 * Terms & conditions route.
 *
 * The document body is a client component (the shared legal shell reads the
 * language preference); this server wrapper contributes the SEO metadata.
 */
const TermsConditionsPage = () => <TermsConditions />;

export default TermsConditionsPage;
