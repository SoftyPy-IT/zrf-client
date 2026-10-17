import React from "react";
import { Metadata } from "next";
import TariqueRahmanBio from "./_components/TariqueRahmanBio";

export const metadata: Metadata = {
  title: "Tarique Rahman | Ziaur Rahman Foundation",
  description:
    "A short profile and political journey of Tarique Rahman, President of the Ziaur Rahman Foundation — from his early life and education to his leadership of the Bangladesh Nationalist Party.",
};

const TariqueRahmanPage = () => {
  return <TariqueRahmanBio />;
};

export default TariqueRahmanPage;
