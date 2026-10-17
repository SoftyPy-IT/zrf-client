"use client";

import React from "react";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";

type CommitteeProps = {
  language: string;
};

/**
 * Page header for the Committee page.
 *
 * Wraps the shared `CommonBanner` so the header matches every other inner page;
 * the bespoke `.committee-banner` stylesheet is gone.
 */
const CommitteeBanner = ({ language }: CommitteeProps) => {
  const isBn = language === "BNG";

  return (
    <CommonBanner
      title={isBn ? "কমিটি" : "Committee"}
      subtitle={
        isBn
          ? "পরিচালনা পর্ষদ ও সদস্যবৃন্দ — যাঁরা ফাউন্ডেশনের প্রতিটি কার্যক্রম পরিচালনা করেন।"
          : "The governing body and members who guide every Ziaur Rahman Foundation programme."
      }
    />
  );
};

export default CommitteeBanner;
