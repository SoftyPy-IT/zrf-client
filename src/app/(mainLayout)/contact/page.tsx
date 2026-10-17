import type { Metadata } from "next";
import Contact from "./_components/Contact";

export const metadata: Metadata = {
  title: "Contact Us | Ziaur Rahman Foundation",
  description:
    "Get in touch with the Ziaur Rahman Foundation for enquiries, feedback or support. Find our Gulshan-1 office address, phone numbers and email.",
  keywords: [
    "contact Ziaur Rahman Foundation",
    "ZRF contact",
    "Gulshan-1 office",
    "foundation enquiries",
  ],
  authors: [{ name: "Ziaur Rahman Foundation" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://zrf.info/contact",
  },
  openGraph: {
    title: "Contact Us | Ziaur Rahman Foundation",
    description:
      "Get in touch with the Ziaur Rahman Foundation for enquiries, feedback or support.",
    url: "https://zrf.info/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Ziaur Rahman Foundation",
    description:
      "Get in touch with the Ziaur Rahman Foundation for enquiries, feedback or support.",
  },
};

/**
 * Contact page.
 *
 * Contact details and the enquiry form live in the client component so they can
 * follow the active language; this server wrapper contributes the SEO metadata.
 */
const ContactPage = () => <Contact />;

export default ContactPage;
