"use client";

import React from "react";
import SectionHeading from "@/components/share/SectionHeading";

interface DonationHeaderProps {
  language: string;
}

/**
 * Compact introduction that sits between the page banner and the donation form.
 *
 * Copy only — band, spacing and panel treatment belong to the page so the
 * section rhythm stays consistent with every other inner page.
 */
const DonationHeader: React.FC<DonationHeaderProps> = ({ language }) => {
  const isBn = language === "BNG";

  return (
    <SectionHeading
      eyebrow={isBn ? "আমাদের কাজে সহযোগিতা" : "Support our work"}
      title={isBn ? "আজই পরিবর্তনের অংশীদার হোন" : "Make a Difference Today"}
      subtitle={
        isBn
          ? "আপনার উদার অনুদান আমাদের জীবন বদলে দিতে এবং অসহায় মানুষের জন্য একটি উন্নত ভবিষ্যৎ গড়ে তুলতে সহায়তা করে।"
          : "Your generous donation helps us transform lives and build a better future for those in need."
      }
    />
  );
};

export default DonationHeader;
