"use client";

import React from "react";
import { useLanguage } from "@/provider/LanguageProvider";
import { useCommitteeData } from "@/hooks/useCommitteeData";
import Volunteer from "./Volunteer";

/**
 * Data layer for the volunteer page.
 *
 * Fetches the committee feed (the page shows everyone registered under the
 * "Volunteer" category) and hands it to `Volunteer`, which owns the layout and
 * the registration form.
 */
const VolunteerHomePage = () => {
  const { language } = useLanguage();
  const { committeeData, loading } = useCommitteeData();

  return (
    <Volunteer
      committeeData={committeeData}
      language={language}
      loading={loading}
    />
  );
};

export default VolunteerHomePage;
