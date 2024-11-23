import React from 'react';
import Head from 'next/head';
import FetchZiaurRahmanData from './_components/FetchZiaurRahmanData';

const ZiaurRahmanPage = () => {
  return (
    <>
      <Head>
        <title>Ziaur Rahman | Foundation Overview</title>
        <meta
          name="description"
          content="Explore the Ziaur Rahman Foundation's mission, achievements, and ongoing initiatives aimed at empowering communities and fostering social welfare."
        />
        <meta
          name="keywords"
          content="Ziaur Rahman Foundation, social welfare, charity, humanitarian work, community empowerment"
        />
        <meta name="author" content="Ziaur Rahman Foundation" />
        <meta name="robots" content="index, follow" />


        <meta property="og:title" content="Ziaur Rahman | Foundation Overview" />
        <meta
          property="og:description"
          content="Learn about the Ziaur Rahman Foundation's impactful programs, achievements, and contributions to society."
        />
        <meta property="og:image" content="/ziaur-rahman-og-image.png" />
        <meta property="og:url" content="https://www.ziaurrahmanfoundation.com/ziaur-rahman" />
        <meta property="og:type" content="website" />

    
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ziaur Rahman | Foundation Overview" />
        <meta
          name="twitter:description"
          content="Discover the Ziaur Rahman Foundation's mission and its positive impact on communities worldwide."
        />
        <meta name="twitter:image" content="/ziaur-rahman-twitter-image.png" />


        <link rel="canonical" href="https://www.ziaurrahmanfoundation.com/ziaur-rahman" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Ziaur Rahman",
              description:
                "Explore the Ziaur Rahman Foundation's mission, achievements, and ongoing initiatives aimed at empowering communities and fostering social welfare.",
              url: "https://www.ziaurrahmanfoundation.com/ziaur-rahman",
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
                    name: "Ziaur Rahman",
                    item: "https://www.ziaurrahmanfoundation.com/ziaur-rahman",
                  },
                ],
              },
            }),
          }}
        />
      </Head>

      <FetchZiaurRahmanData />
    </>
  );
};


export default ZiaurRahmanPage;
