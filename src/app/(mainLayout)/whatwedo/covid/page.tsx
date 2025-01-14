import React from 'react';
import CovidHomePage from './_components/CovidHomePage';
import Head from 'next/head';

const Covid = () => {
    return (
        <div>
            <Head>
                {/* Essential Meta Tags */}
                <title>COVID-19 Relief & Support - Ziaur Rahman Foundation</title>
                <meta
                    name="description"
                    content="Ziaur Rahman Foundation provides COVID-19 relief support, including medical assistance, education, and community outreach programs to those affected."
                />
                <meta
                    name="keywords"
                    content="COVID-19 relief, COVID-19 support, community outreach, Ziaur Rahman Foundation, medical assistance, education programs, disaster relief"
                />
                <meta name="author" content="Ziaur Rahman Foundation" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph / Facebook */}
                <meta
                    property="og:title"
                    content="COVID-19 Relief & Support - Ziaur Rahman Foundation"
                />
                <meta
                    property="og:description"
                    content="Join Ziaur Rahman Foundation's COVID-19 relief efforts to provide medical care, education, and support to communities in need."
                />
                <meta property="og:image" content="/images/og-covid.jpg" />
                <meta property="og:url" content="https://www.zrf.org/covid" />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="COVID-19 Relief & Support - Ziaur Rahman Foundation"
                />
                <meta
                    name="twitter:description"
                    content="Join Ziaur Rahman Foundation's COVID-19 relief efforts to support vulnerable communities with medical care, educational resources, and essential services."
                />
                <meta name="twitter:image" content="/images/twitter-covid.jpg" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.zrf.org/covid" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />

                {/* Structured Data (JSON-LD for COVID Relief) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "NonProfitOrganization",
                            "name": "Ziaur Rahman Foundation",
                            "url": "https://www.zrf.org/covid",
                            "logo": "https://www.zrf.org/images/logo.png",
                            "description":
                                "Ziaur Rahman Foundation works on providing COVID-19 relief, including medical assistance, education programs, and community outreach.",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "123 Hope Street",
                                "addressLocality": "City Name",
                                "addressRegion": "Region Name",
                                "postalCode": "12345",
                                "addressCountry": "Country",
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+123-456-7890",
                                "contactType": "Customer Support",
                            },
                            "sameAs": [
                                "https://facebook.com/zrf",
                                "https://twitter.com/zrf",
                                "https://instagram.com/zrf",
                            ],
                        }),
                    }}
                />
            </Head>

            <CovidHomePage />
        </div>
    );
};

export default Covid;
