/**
 * Single source of truth for organisation-wide details so the header, footer,
 * contact page and structured data can never drift apart.
 */

export const site = {
  nameEn: "Ziaur Rahman Foundation",
  nameBn: "জিয়াউর রহমান ফাউন্ডেশন",
  shortName: "ZRF",
  taglineEn: "Dedicated to nation building",
  taglineBn: "রাষ্ট্র গঠনে নিবেদিত",
  url: "https://zrf.info",
  founded: 1999,
} as const;

export const contact = {
  addressEn:
    "2nd Floor, House 02, Road 23/A, Gulshan-1, Dhaka-1212, Bangladesh",
  addressBn:
    "২য় তলা, বাড়ি ০২, রোড ২৩/এ, গুলশান-১, ঢাকা-১২১২, বাংলাদেশ",
  phones: ["01817-226644", "01830-973973"],
  phonesBn: ["০১৮১৭-২২৬৬৪৪", "০১৮৩০-৯৭৩৯৭৩"],
  email: "zrfziaurrahmanfoundation@gmail.com",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1380.440609721915!2d90.41482048380377!3d23.797132799278497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a617958589%3A0xe623614dfdafa8ae!2sBNP%20Chairperson&#39;s%20Office%2C%20Rd%2088%2C%20Dhaka%201212!5e1!3m2!1sen!2sbd!4v1725702340218!5m2!1sen!2sbd",
} as const;

export const socials = [
  { name: "Facebook", href: "https://www.facebook.com/zrf.org/" },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@ZiaurRahmanFoundationZRF",
  },
  { name: "X", href: "https://x.com" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
] as const;

export type NavSubItem = {
  nameEn: string;
  nameBn: string;
  href: string;
  descriptionEn?: string;
  descriptionBn?: string;
};

export type NavItem = {
  nameEn: string;
  nameBn: string;
  href: string;
  subItems?: NavSubItem[];
};

export const navItems: NavItem[] = [
  {
    nameEn: "Home",
    nameBn: "প্রচ্ছদ",
    href: "/",
  },
  {
    nameEn: "About Us",
    nameBn: "আমাদের সম্পর্কে",
    href: "/about",
    subItems: [
      {
        nameEn: "About ZRF",
        nameBn: "জেডআরএফ সম্পর্কে",
        href: "/about",
        descriptionEn: "Our mandate, vision and values",
        descriptionBn: "আমাদের লক্ষ্য, ভিশন ও মূল্যবোধ",
      },
      {
        nameEn: "Message of the President",
        nameBn: "প্রেসিডেন্টের বাণী",
        href: "/message-of-president",
        descriptionEn: "A word from our President",
        descriptionBn: "প্রেসিডেন্টের পক্ষ থেকে বার্তা",
      },
      {
        nameEn: "Message of the Vice President",
        nameBn: "ভাইস প্রেসিডেন্টের বাণী",
        href: "/message-of-vice-president",
        descriptionEn: "A word from our Vice President",
        descriptionBn: "ভাইস প্রেসিডেন্টের পক্ষ থেকে বার্তা",
      },
      {
        nameEn: "Message of the Executive Director",
        nameBn: "নির্বাহী পরিচালকের বাণী",
        href: "/message-of-director",
        descriptionEn: "A word from our Executive Director",
        descriptionBn: "নির্বাহী পরিচালকের পক্ষ থেকে বার্তা",
      },
      {
        nameEn: "Committee",
        nameBn: "কমিটি",
        href: "/committee",
        descriptionEn: "Our governing body and members",
        descriptionBn: "পরিচালনা পর্ষদ ও সদস্যবৃন্দ",
      },
      {
        nameEn: "Our Volunteers",
        nameBn: "আমাদের স্বেচ্ছাসেবক",
        href: "/volunteer",
        descriptionEn: "The people behind our work",
        descriptionBn: "আমাদের কাজের পেছনের মানুষ",
      },
    ],
  },
  {
    nameEn: "Our Work",
    nameBn: "আমাদের কার্যক্রম",
    href: "/our-projects",
    subItems: [
      {
        nameEn: "Our Projects",
        nameBn: "আমাদের প্রকল্প",
        href: "/our-projects",
        descriptionEn: "Ongoing and completed initiatives",
        descriptionBn: "চলমান ও সম্পন্ন প্রকল্পসমূহ",
      },
      {
        nameEn: "Education Programmes",
        nameBn: "শিক্ষা কার্যক্রম",
        href: "/education",
        descriptionEn: "Scholarships and learning support",
        descriptionBn: "বৃত্তি ও শিক্ষা সহায়তা",
      },
      {
        nameEn: "Health Services",
        nameBn: "স্বাস্থ্য সেবা",
        href: "/health-services",
        descriptionEn: "Free medical camps and treatment",
        descriptionBn: "বিনামূল্যে চিকিৎসা ও ক্যাম্প",
      },
      {
        nameEn: "Rehabilitation",
        nameBn: "পুনর্বাসন কার্যক্রম",
        href: "/whatwedo/rehabilitation",
        descriptionEn: "Support for people in need",
        descriptionBn: "অসহায় মানুষের পাশে থাকা",
      },
      {
        nameEn: "Climate Change",
        nameBn: "জলবায়ু পরিবর্তন",
        href: "/climate-change",
        descriptionEn: "Resilience and tree plantation",
        descriptionBn: "পরিবেশ রক্ষা ও বৃক্ষরোপণ",
      },
      {
        nameEn: "COVID-19 Response",
        nameBn: "কোভিড-১৯ কার্যক্রম",
        href: "/whatwedo/covid",
        descriptionEn: "Emergency pandemic relief",
        descriptionBn: "মহামারিকালীন জরুরি সহায়তা",
      },
      {
        nameEn: "Our Initiatives",
        nameBn: "আমাদের উদ্যোগ",
        href: "/whatwedo/initiatives",
        descriptionEn: "Special social programmes",
        descriptionBn: "বিশেষ সামাজিক উদ্যোগ",
      },
      {
        nameEn: "Our Programmes",
        nameBn: "আমাদের কর্মসূচি",
        href: "/program",
        descriptionEn: "Annual welfare calendar",
        descriptionBn: "বার্ষিক কল্যাণ কর্মসূচি",
      },
    ],
  },
  {
    nameEn: "Media",
    nameBn: "মিডিয়া",
    href: "/news",
    subItems: [
      {
        nameEn: "News & Publications",
        nameBn: "সংবাদ ও প্রকাশনা",
        href: "/news",
        descriptionEn: "Press releases and notices",
        descriptionBn: "প্রেস বিজ্ঞপ্তি ও নোটিশ",
      },
      {
        nameEn: "Recent Activities",
        nameBn: "সাম্প্রতিক কার্যক্রম",
        href: "/recent-activities-of-zrf",
        descriptionEn: "Field reports from our teams",
        descriptionBn: "মাঠপর্যায়ের প্রতিবেদন",
      },
      {
        nameEn: "Upcoming Programmes",
        nameBn: "আসন্ন কার্যক্রম",
        href: "/upcoming-programs",
        descriptionEn: "What is happening next",
        descriptionBn: "আগামী দিনের আয়োজন",
      },
      {
        nameEn: "Photo Gallery",
        nameBn: "ফটো গ্যালারি",
        href: "/gallery",
        descriptionEn: "Moments from the field",
        descriptionBn: "মাঠের ছবি",
      },
      {
        nameEn: "Video Gallery",
        nameBn: "ভিডিও গ্যালারি",
        href: "/videos",
        descriptionEn: "Documentaries and coverage",
        descriptionBn: "প্রামাণ্যচিত্র ও কভারেজ",
      },
    ],
  },
  {
    nameEn: "Biography",
    nameBn: "জীবনী",
    href: "/ziaur-rahman",
  },
  {
    nameEn: "E-Books",
    nameBn: "ই-বুক",
    href: "/ebooks",
  },
  {
    nameEn: "Contact",
    nameBn: "যোগাযোগ",
    href: "/contact",
  },
];

/** Maps a pathname to the breadcrumb trail shown in page banners. */
export const breadcrumbLabels: Record<string, { en: string; bn: string }> = {
  about: { en: "About Us", bn: "আমাদের সম্পর্কে" },
  news: { en: "News & Publications", bn: "সংবাদ ও প্রকাশনা" },
  gallery: { en: "Photo Gallery", bn: "ফটো গ্যালারি" },
  videos: { en: "Video Gallery", bn: "ভিডিও গ্যালারি" },
  committee: { en: "Committee", bn: "কমিটি" },
  contact: { en: "Contact", bn: "যোগাযোগ" },
  donations: { en: "Donations", bn: "অনুদান" },
  education: { en: "Education Programmes", bn: "শিক্ষা কার্যক্রম" },
  ebooks: { en: "E-Books", bn: "ই-বুক" },
  "health-services": { en: "Health Services", bn: "স্বাস্থ্য সেবা" },
  "climate-change": { en: "Climate Change", bn: "জলবায়ু পরিবর্তন" },
  message: { en: "Message", bn: "বার্তা" },
  "message-of-director": {
    en: "Message of the Executive Director",
    bn: "নির্বাহী পরিচালকের বাণী",
  },
  "message-of-president": {
    en: "Message of the President",
    bn: "প্রেসিডেন্টের বাণী",
  },
  "message-of-vice-president": {
    en: "Message of the Vice President",
    bn: "ভাইস প্রেসিডেন্টের বাণী",
  },
  mourning: { en: "Condolence", bn: "শোকবার্তা" },
  "our-projects": { en: "Our Projects", bn: "আমাদের প্রকল্প" },
  program: { en: "Our Programmes", bn: "আমাদের কর্মসূচি" },
  "recent-activities-of-zrf": {
    en: "Recent Activities",
    bn: "সাম্প্রতিক কার্যক্রম",
  },
  registration: { en: "Registration", bn: "নিবন্ধন" },
  "upcoming-programs": { en: "Upcoming Programmes", bn: "আসন্ন কার্যক্রম" },
  volunteer: { en: "Volunteers", bn: "স্বেচ্ছাসেবক" },
  "tarique-rahman": { en: "Tarique Rahman", bn: "তারেক রহমান" },
  "privacy-policy": { en: "Privacy Policy", bn: "প্রাইভেসি পলিসি" },
  "refund-policy": { en: "Refund Policy", bn: "রিফান্ড পলিসি" },
  "terms-&-conditions": { en: "Terms & Conditions", bn: "শর্তাবলি" },
  whatwedo: { en: "What We Do", bn: "আমাদের কার্যক্রম" },
  "ziaur-rahman": { en: "Biography of Ziaur Rahman", bn: "জিয়াউর রহমানের জীবনী" },
};
