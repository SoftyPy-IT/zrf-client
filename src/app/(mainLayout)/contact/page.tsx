/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import Contact from './_components/Contact';
import Head from 'next/head';

const Page = () => {
  return (
    <div>
      <Head>
        <title>Contact Us | Ziaur Rahman Foundation</title>
        <meta
          name="description"
          content="Get in touch with the Ziaur Rahman Foundation for any inquiries, feedback, or support. Learn more about our initiatives and how you can contribute."
        />
        <meta
          name="keywords"
          content="contact us, Ziaur Rahman Foundation, nonprofit contact, charity inquiries, foundation support, volunteer opportunities"
        />
        <meta name="author" content="Ziaur Rahman Foundation" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Contact Us | Ziaur Rahman Foundation" />
        <meta
          property="og:description"
          content="Get in touch with the Ziaur Rahman Foundation for any inquiries, feedback, or support. Learn more about our initiatives and how you can contribute."
        />
        <meta property="og:image" content="/contact-us-og-image.png" />
        <meta property="og:url" content="https://www.ziaurrahmanfoundation.com/contact-us" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Ziaur Rahman Foundation" />
        <meta
          name="twitter:description"
          content="Get in touch with the Ziaur Rahman Foundation for any inquiries, feedback, or support. Learn more about our initiatives and how you can contribute."
        />
        <meta name="twitter:image" content="/contact-us-twitter-image.png" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.ziaurrahmanfoundation.com/contact-us"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Contact Us",
              description:
                "Get in touch with the Ziaur Rahman Foundation for any inquiries, feedback, or support. Learn more about our initiatives and how you can contribute.",
              url: "https://www.ziaurrahmanfoundation.com/contact-us",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.ziaurrahmanfoundation.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Contact Us",
                    item: "https://www.ziaurrahmanfoundation.com/contact-us",
                  },
                ],
              },
              author: {
                "@type": "Organization",
                name: "Ziaur Rahman Foundation",
              },
              publisher: {
                "@type": "Organization",
                name: "Ziaur Rahman Foundation",
                logo: {
                  "@type": "ImageObject",
                  url: "/logo.png",
                },
              },
              image: "/contact-us-og-image.png",
            }),
          }}
        />
      </Head>
      <Contact />
    </div>
  );
};

export default Page;
