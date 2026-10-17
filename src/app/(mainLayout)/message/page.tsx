import type { Metadata } from "next";
import News from "./_components/News";

export const metadata: Metadata = {
  title: "Messages | Ziaur Rahman Foundation",
  description:
    "Official messages and statements from the leadership of the Ziaur Rahman Foundation.",
  keywords: [
    "Ziaur Rahman Foundation messages",
    "ZRF statements",
    "official message",
    "announcements",
  ],
  authors: [{ name: "Ziaur Rahman Foundation" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://zrf.info/message",
  },
  openGraph: {
    title: "Messages | Ziaur Rahman Foundation",
    description:
      "Official messages and statements from the leadership of the Ziaur Rahman Foundation.",
    url: "https://zrf.info/message",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Messages | Ziaur Rahman Foundation",
    description:
      "Official messages and statements from the leadership of the Ziaur Rahman Foundation.",
  },
};

/**
 * Messages index page.
 *
 * Metadata is declared here (server side); the listing itself is a client
 * component because it is backed by the public activity API and the
 * ENG / BNG language switch.
 */
const MessagePage = () => <News />;

export default MessagePage;
