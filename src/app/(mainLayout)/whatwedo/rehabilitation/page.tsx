import React from "react";
import RehabilitationHomePage from "./_components/RehabilitationHomePage";
import Head from "next/head";

const page = () => {
  return (
    <div>
      <Head>
        {/* Essential Meta Tags */}
        <title>
          Rehabilitation Programs - Ziaur Rahman Foundation | Restoring Lives
        </title>
        <meta
          name="description"
          content="Discover Ziaur Rahman Foundation's rehabilitation programs designed to restore lives and support recovery through innovative and compassionate initiatives."
        />
        <meta
          name="keywords"
          content="rehabilitation programs, recovery initiatives, Ziaur Rahman Foundation, community support, mental health recovery, disaster rehabilitation, social empowerment"
        />
        <meta name="author" content="Ziaur Rahman Foundation" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Rehabilitation Programs - Ziaur Rahman Foundation | Restoring Lives"
        />
        <meta
          property="og:description"
          content="Join the Ziaur Rahman Foundation in its mission to rehabilitate and empower communities affected by disasters, mental health challenges, and social crises."
        />
        <meta property="og:image" content="/images/og-rehabilitation.jpg" />
        <meta property="og:url" content="https://www.zrf.org/rehabilitation" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Rehabilitation Programs - Ziaur Rahman Foundation | Restoring Lives"
        />
        <meta
          name="twitter:description"
          content="Explore our comprehensive rehabilitation programs designed to restore dignity and support communities in need."
        />
        <meta
          name="twitter:image"
          content="/images/twitter-rehabilitation.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.zrf.org/rehabilitation" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data (JSON-LD for Rehabilitation Programs) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NonProfitOrganization",
              name: "Ziaur Rahman Foundation",
              url: "https://www.zrf.org/rehabilitation",
              logo: "https://www.zrf.org/images/logo.png",
              description:
                "Ziaur Rahman Foundation provides comprehensive rehabilitation programs to restore dignity and empower communities affected by challenges like disasters and mental health issues.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Hope Street",
                addressLocality: "City Name",
                addressRegion: "Region Name",
                postalCode: "12345",
                addressCountry: "Country",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+123-456-7890",
                contactType: "Customer Support",
              },
              sameAs: [
                "https://facebook.com/zrf",
                "https://twitter.com/zrf",
                "https://instagram.com/zrf",
              ],
            }),
          }}
        />
      </Head>

      <RehabilitationHomePage />
    </div>
  );
};

export default page;
