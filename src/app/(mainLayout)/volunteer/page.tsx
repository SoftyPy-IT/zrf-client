import React from 'react';
import VolunteerHomePage from './_components/VolunteerHomePage';
import Head from 'next/head';

const page = () => {
    return (
        <div>
            <Head>
                {/* Essential Meta Tags */}
                <title>Volunteer with Us - Ziaur Rahman Foundation | Make a Difference</title>
                <meta
                    name="description"
                    content="Join Ziaur Rahman Foundation as a volunteer and make a meaningful impact. Explore opportunities to contribute to our initiatives and bring positive change."
                />
                <meta
                    name="keywords"
                    content="volunteer, community service, Ziaur Rahman Foundation, volunteer opportunities, make a difference, social impact, helping others, humanitarian work"
                />
                <meta name="author" content="Ziaur Rahman Foundation" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph / Facebook */}
                <meta
                    property="og:title"
                    content="Volunteer with Us - Ziaur Rahman Foundation | Make a Difference"
                />
                <meta
                    property="og:description"
                    content="Explore volunteer opportunities with Ziaur Rahman Foundation. Contribute to community initiatives and bring hope to those in need."
                />
                <meta property="og:image" content="/images/og-volunteer.jpg" />
                <meta property="og:url" content="https://www.zrf.org/volunteer" />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Volunteer with Us - Ziaur Rahman Foundation | Make a Difference"
                />
                <meta
                    name="twitter:description"
                    content="Join hands with Ziaur Rahman Foundation as a volunteer and create a lasting impact through humanitarian initiatives."
                />
                <meta name="twitter:image" content="/images/twitter-volunteer.jpg" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.zrf.org/volunteer" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />

                {/* Structured Data (JSON-LD for Volunteering Page) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "NGO",
                            "name": "Ziaur Rahman Foundation",
                            "url": "https://www.zrf.org/volunteer",
                            "logo": "https://www.zrf.org/images/logo.png",
                            "description":
                                "Ziaur Rahman Foundation provides opportunities for individuals to volunteer and make a difference through impactful community programs.",
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
                                "contactType": "Volunteer Inquiries",
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

            <VolunteerHomePage />
        </div>
    );
};

export default page;
