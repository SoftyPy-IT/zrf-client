import type { Metadata } from "next";
import VolunteerHomePage from "./_components/VolunteerHomePage";

export const metadata: Metadata = {
  title: "Volunteer with Us | Ziaur Rahman Foundation",
  description:
    "Join the Ziaur Rahman Foundation as a volunteer and take part in relief, health and education programmes across Bangladesh.",
  keywords: [
    "ZRF volunteers",
    "volunteer Bangladesh",
    "Ziaur Rahman Foundation volunteering",
    "community service",
  ],
  authors: [{ name: "Ziaur Rahman Foundation" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://zrf.info/volunteer",
  },
  openGraph: {
    title: "Volunteer with Us | Ziaur Rahman Foundation",
    description:
      "Contribute to the foundation's community initiatives and bring positive change.",
    url: "https://zrf.info/volunteer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Volunteer with Us | Ziaur Rahman Foundation",
    description:
      "Contribute to the foundation's community initiatives and bring positive change.",
  },
};

/**
 * Volunteer page.
 *
 * The page body (intro, registration and the volunteer roll) is a client
 * component because it follows the active language and fetches the committee
 * feed; this server wrapper contributes the SEO metadata.
 */
const VolunteerPage = () => <VolunteerHomePage />;

export default VolunteerPage;
