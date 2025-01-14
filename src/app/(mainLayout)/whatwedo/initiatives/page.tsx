import React from 'react';
import InitiativesHomePage from './_components/InitiativesHomePage';
import Head from 'next/head';

const page = () => {
    return (
        <div>
            <Head>
                {/* Essential Meta Tags */}
                <title>Initiatives - Ziaur Rahman Foundation | Empowering Communities</title>
                <meta
                    name="description"
                    content="Explore the impactful initiatives by Ziaur Rahman Foundation in education, health services, disaster relief, and more. Join us in making a positive difference."
                />
                <meta
                    name="keywords"
                    content="Ziaur Rahman Foundation, initiatives, community empowerment, education, health services, charity, disaster relief"
                />
                <meta name="author" content="Ziaur Rahman Foundation" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph / Facebook */}
                <meta
                    property="og:title"
                    content="Initiatives - Ziaur Rahman Foundation | Empowering Communities"
                />
                <meta
                    property="og:description"
                    content="Join Ziaur Rahman Foundation in its mission to improve lives through education, healthcare, and impactful initiatives."
                />
                <meta property="og:image" content="/images/og-initiatives.jpg" />
                <meta property="og:url" content="https://www.zrf.org/initiatives" />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Initiatives - Ziaur Rahman Foundation | Empowering Communities"
                />
                <meta
                    name="twitter:description"
                    content="Explore Ziaur Rahman Foundation's initiatives to provide education, healthcare, and disaster relief to communities in need."
                />
                <meta name="twitter:image" content="/images/twitter-initiatives.jpg" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.zrf.org/initiatives" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />

                {/* Structured Data (JSON-LD for Initiatives) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "NonProfitOrganization",
                            "name": "Ziaur Rahman Foundation",
                            "url": "https://www.zrf.org/initiatives",
                            "logo": "https://www.zrf.org/images/logo.png",
                            "description":
                                "Ziaur Rahman Foundation works on community empowerment initiatives focusing on education, healthcare, and disaster relief.",
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

            <InitiativesHomePage />
        </div>
    );
};

export default page;
