import React from "react";
import { Metadata } from "next";
import ActivityFetchData from "./_components/ActivityFetchData";

export const metadata: Metadata = {
  title: "Recent Activities | Ziaur Rahman Foundation",
  description:
    "Stay updated with the latest activities of Ziaur Rahman Foundation (ZRF), a leading nonprofit organisation dedicated to humanitarian efforts and community service.",
};

/**
 * Recent Activities index.
 *
 * The listing itself (banner, card grid, load-more) lives in the client
 * component so it can follow the active language; this server wrapper
 * contributes the SEO metadata.
 */
const Activity = () => {
  return <ActivityFetchData />;
};

export default Activity;
