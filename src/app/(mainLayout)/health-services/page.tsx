import React from "react";
import { Metadata } from "next";
import HealthServiceHome from "./_components/HealthServiceHome";

export const metadata: Metadata = {
  title: "Health Services | Ziaur Rahman Foundation",
  description:
    "Free medical camps, treatment support and health awareness programmes delivered by the Ziaur Rahman Foundation across Bangladesh.",
};

const HealthServicesPage = () => {
  return <HealthServiceHome />;
};

export default HealthServicesPage;
