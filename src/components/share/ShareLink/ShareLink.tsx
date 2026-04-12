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

  // Update meta tags dynamically when language changes
  useEffect(() => {
    // Update Open Graph meta tags dynamically
    let metaOgTitle = document.querySelector('meta[property="og:title"]');
    let metaOgDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    let metaOgImage = document.querySelector('meta[property="og:image"]');
    let metaTwitterTitle = document.querySelector('meta[name="twitter:title"]');
    let metaTwitterDescription = document.querySelector(
      'meta[name="twitter:description"]',
    );
    let metaTwitterImage = document.querySelector('meta[name="twitter:image"]');

    // Create meta tags if they don't exist
    if (!metaOgTitle) {
      metaOgTitle = document.createElement("meta");
      metaOgTitle.setAttribute("property", "og:title");
      document.head.appendChild(metaOgTitle);
    }

    if (!metaOgDescription) {
      metaOgDescription = document.createElement("meta");
      metaOgDescription.setAttribute("property", "og:description");
      document.head.appendChild(metaOgDescription);
    }

    if (!metaOgImage) {
      metaOgImage = document.createElement("meta");
      metaOgImage.setAttribute("property", "og:image");
      document.head.appendChild(metaOgImage);
    }

    if (!metaTwitterTitle) {
      metaTwitterTitle = document.createElement("meta");
      metaTwitterTitle.setAttribute("name", "twitter:title");
      document.head.appendChild(metaTwitterTitle);
    }

    if (!metaTwitterDescription) {
      metaTwitterDescription = document.createElement("meta");
      metaTwitterDescription.setAttribute("name", "twitter:description");
      document.head.appendChild(metaTwitterDescription);
    }

    if (!metaTwitterImage) {
      metaTwitterImage = document.createElement("meta");
      metaTwitterImage.setAttribute("name", "twitter:image");
      document.head.appendChild(metaTwitterImage);
    }

    // Update meta tags with current language content
    metaOgTitle.setAttribute("content", title);
    metaOgDescription.setAttribute("content", description);
    if (imageUrl) {
      metaOgImage.setAttribute("content", imageUrl);
    }
    metaTwitterTitle.setAttribute("content", title);
    metaTwitterDescription.setAttribute("content", description);
    if (imageUrl) {
      metaTwitterImage.setAttribute("content", imageUrl);
    }
  }, [title, description, imageUrl]);

  return (
    <div className="w-full flex flex-col items-center md:flex-row md:items-center md:justify-between gap-4 py-6 border-t border-gray-200 mt-6">
      {/* Left Section */}
      <h4 className="text-sm md:text-base font-semibold text-gray-700">
        Share this article:
      </h4>

      {/* Share Buttons */}
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

      {/* Copy Link Section */}
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
