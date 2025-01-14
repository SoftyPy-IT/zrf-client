import React from 'react';
import Program from './_components/Program';
import Head from 'next/head';

const Page = () => {
    return (
        <div>
            <Head>
                {/* Essential Meta Tags */}
                <title>Programs - Ziaur Rahman Foundation | Empowering Communities</title>
                <meta
                    name="description"
                    content="Explore the diverse programs by Ziaur Rahman Foundation, designed to uplift communities through education, healthcare, disaster relief, and social initiatives."
                />
                <meta
                    name="keywords"
                    content="Ziaur Rahman Foundation, programs, community empowerment, education, health services, disaster relief, social impact"
                />
                <meta name="author" content="Ziaur Rahman Foundation" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph / Facebook */}
                <meta
                    property="og:title"
                    content="Programs - Ziaur Rahman Foundation | Empowering Communities"
                />
                <meta
                    property="og:description"
                    content="Join Ziaur Rahman Foundation in its efforts to empower communities through impactful programs in education, healthcare, and disaster relief."
                />
                <meta property="og:image" content="/images/og-programs.jpg" />
                <meta property="og:url" content="https://www.zrf.org/programs" />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Programs - Ziaur Rahman Foundation | Empowering Communities"
                />
                <meta
                    name="twitter:description"
                    content="Explore the programs by Ziaur Rahman Foundation focused on improving lives through education, health services, and disaster relief."
                />
                <meta name="twitter:image" content="/images/twitter-programs.jpg" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.zrf.org/programs" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />

                {/* Structured Data (JSON-LD for Programs) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "NonProfitOrganization",
                            "name": "Ziaur Rahman Foundation",
                            "url": "https://www.zrf.org/programs",
                            "logo": "https://www.zrf.org/images/logo.png",
                            "description":
                                "Ziaur Rahman Foundation is dedicated to empowering communities through a variety of programs focused on education, healthcare, and social good.",
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

            <Program />
        </div>
    );
};

export default Page;
