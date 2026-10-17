import React from "react";
import { Metadata } from "next";
import FetchZiaurRahmanData from "./_components/FetchZiaurRahmanData";

export const metadata: Metadata = {
  title: "Ziaur Rahman | Biography of Shaheed President Ziaur Rahman",
  description:
    "The life and legacy of Lieutenant General Ziaur Rahman, Bir Uttam (1936–1981) — declarer of Bangladesh's independence, Chief of Army Staff and elected President of Bangladesh.",
};

const ZiaurRahmanPage = () => {
  return <FetchZiaurRahmanData />;
};

export default ZiaurRahmanPage;
