"use client";

import React from "react";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";

type TProps = {
  title: string;
  text: string;
};

/**
 * Page header shared by the three message pages.
 *
 * Delegates to the site-wide `CommonBanner` so a message page matches every
 * other inner page; the bespoke `.president-banner` stylesheet is gone.
 */
const MessageBanner = ({ title, text }: TProps) => {
  return <CommonBanner title={title} subtitle={text} />;
};

export default MessageBanner;
