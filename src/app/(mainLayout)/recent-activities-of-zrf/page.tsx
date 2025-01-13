import React from 'react';
import Head from 'next/head';
import ActivityFetchData from './_components/ActivityFetchData';

const Activity = () => {
  return (
    <>
      {/* SEO Optimization */}
      <Head>
        <title>Recent Activities | Ziaur Rahman Foundation</title>
        <meta
          name="description"
          content="Stay updated with the latest activities of Ziaur Rahman Foundation (ZRF), a leading nonprofit organization dedicated to humanitarian efforts and global community service."
        />
        <meta
          name="keywords"
          content="Ziaur Rahman Foundation, nonprofit activities, humanitarian efforts, community services, global charity, ZRF activities"
        />
        <meta name="author" content="Ziaur Rahman Foundation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://zrf.info/recent-activities" />
        <meta property="og:title" content="Recent Activities | Ziaur Rahman Foundation" />
        <meta
          property="og:description"
          content="Discover the impactful initiatives and activities by Ziaur Rahman Foundation. Join us in our journey to make the world a better place."
        />
        <meta property="og:url" content="https://zrf.info/recent-activities" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://zrf.info/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Recent Activities | Ziaur Rahman Foundation" />
        <meta
          name="twitter:description"
          content="Stay updated with the latest activities of Ziaur Rahman Foundation (ZRF), a leading nonprofit organization."
        />
        <meta name="twitter:image" content="https://zrf.info/twitter-image.jpg" />
      </Head>

      {/* Main Content */}
      <ActivityFetchData />
    </>
  );
};

export default Activity;
