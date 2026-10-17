import React from "react";
import { Metadata } from "next";
import MourningNotice from "./_components/MourningNotice";

export const metadata: Metadata = {
  title: "Condolence Message | Ziaur Rahman Foundation",
  description:
    "In memoriam — a condolence message from the Ziaur Rahman Foundation on the passing of Begum Khaleda Zia, Chairperson of the Bangladesh Nationalist Party and former Prime Minister of Bangladesh.",
};

const MourningPage = () => {
  return <MourningNotice />;
};

export default MourningPage;
