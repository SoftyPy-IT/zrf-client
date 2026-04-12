// components/share/ShareLink/ShareLink.tsx
"use client";

import { useState, useEffect } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";
import { Tooltip } from "@mui/material";
import Image from "next/image";
import { FaLink } from "react-icons/fa";

import facebook from "../../../../src/assets/icon/facebook.png";
import linkedIn from "../../../../src/assets/icon/linkedin.png";
import whatsapp from "../../../../src/assets/icon/chat3.png";
import twitter from "../../../../src/assets/icon/twitter.png";
import email from "../../../../src/assets/icon/email.png";

type ShareProps = {
  shareUrl: string;
  title: string;
  hashtag: string;
  description: string;
  imageUrl?: string;
};

// ✅ Helper: meta tag set/create করার utility
const setMetaTag = (
  selector: string,
  attribute: string,
  value: string,
  content: string,
) => {
  let meta = document.querySelector(selector);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, value);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
};

const ShareLink = ({
  shareUrl,
  title,
  hashtag,
  description,
  imageUrl,
}: ShareProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ✅ title, description, imageUrl যেকোনো একটা বদলালেই সব meta tag update হবে
  useEffect(() => {
    if (!title || !description) return;

    // Open Graph
    setMetaTag('meta[property="og:title"]', "property", "og:title", title);
    setMetaTag(
      'meta[property="og:description"]',
      "property",
      "og:description",
      description,
    );
    setMetaTag('meta[property="og:url"]', "property", "og:url", shareUrl);
    if (imageUrl) {
      setMetaTag('meta[property="og:image"]', "property", "og:image", imageUrl);
    }

    // Twitter
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMetaTag(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      description,
    );
    if (imageUrl) {
      setMetaTag(
        'meta[name="twitter:image"]',
        "name",
        "twitter:image",
        imageUrl,
      );
    }

    // Page title
    document.title = title;
  }, [title, description, imageUrl, shareUrl]); // ✅ সব dependency সঠিকভাবে আছে

  return (
    <div className="w-full flex flex-col items-center md:flex-row md:items-center md:justify-between gap-4 py-6 border-t border-gray-200 mt-6">
      <h4 className="text-sm md:text-base font-semibold text-gray-700">
        Share this article:
      </h4>

      <div className="flex flex-wrap justify-center gap-4">
        <Tooltip title="Share on WhatsApp" arrow>
          <WhatsappShareButton url={shareUrl} title={title}>
            <Image
              src={whatsapp}
              alt="WhatsApp"
              width={40}
              height={40}
              className="rounded-full transition-transform duration-200 hover:scale-110"
            />
          </WhatsappShareButton>
        </Tooltip>

        <Tooltip title="Share on Facebook" arrow>
          <FacebookShareButton url={shareUrl} hashtag={hashtag}>
            <Image
              src={facebook}
              alt="Facebook"
              width={40}
              height={40}
              className="rounded-full transition-transform duration-200 hover:scale-110"
            />
          </FacebookShareButton>
        </Tooltip>

        <Tooltip title="Share on LinkedIn" arrow>
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            summary={description}
            source={shareUrl}
          >
            <Image
              src={linkedIn}
              alt="LinkedIn"
              width={40}
              height={40}
              className="rounded-full transition-transform duration-200 hover:scale-110"
            />
          </LinkedinShareButton>
        </Tooltip>

        <Tooltip title="Share on Twitter" arrow>
          <TwitterShareButton url={shareUrl} title={title} hashtags={[hashtag]}>
            <Image
              src={twitter}
              alt="Twitter"
              width={40}
              height={40}
              className="rounded-full transition-transform duration-200 hover:scale-110"
            />
          </TwitterShareButton>
        </Tooltip>

        <Tooltip title="Share via Email" arrow>
          <EmailShareButton
            url={shareUrl}
            subject={title}
            body={`${description}\n\nCheck this out: ${shareUrl}`}
          >
            <Image
              src={email}
              alt="Email"
              width={40}
              height={40}
              className="rounded-full transition-transform duration-200 hover:scale-110"
            />
          </EmailShareButton>
        </Tooltip>
      </div>

      <div
        onClick={handleCopy}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer transition-all duration-300 ${
          copied
            ? "bg-green-100 border-green-400 text-green-700"
            : "bg-gray-50 hover:bg-gray-100 border-gray-300 text-gray-700"
        }`}
      >
        <FaLink className="text-gray-600" />
        <span className="text-xs md:text-sm font-medium truncate max-w-[140px] md:max-w-[180px]">
          {copied ? "Link copied!" : shareUrl}
        </span>
      </div>
    </div>
  );
};

export default ShareLink;
