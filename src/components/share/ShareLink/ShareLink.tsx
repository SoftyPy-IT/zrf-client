"use client";

import { useState } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";
import { Tooltip } from "@mui/material";
import Image from "next/image";

import facebook from "../../../../src/assets/icon/facebook.png";
import linkedIn from "../../../../src/assets/icon/linkedin.png";
import whatsapp from "../../../../src/assets/icon/chat3.png";
import twitter from "../../../../src/assets/icon/twitter.png";
import email from "../../../../src/assets/icon/email.png";

type ShareProps = {
  shareUrl: string;
  title: string | undefined;
  hashtag: string;
  description?: string;
};

const ShareLink = ({ shareUrl, title, hashtag, description }: ShareProps) => {
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopySuccess("Copied!");
    setTimeout(() => setCopySuccess(""), 2000);
  };

  return (
    <div className="w-full flex flex-col items-center md:flex-row md:items-center md:justify-between gap-4 py-4 border-t border-gray-200 mt-6">
      {/* Left Title */}
      <h4 className="text-sm md:text-base font-semibold text-gray-700">
        Share this article:
      </h4>

      {/* Share Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <Tooltip title="Share on WhatsApp" arrow>
          <WhatsappShareButton url={shareUrl} title={title}>
            <div className="group transition-all duration-200 transform hover:scale-110">
              <Image
                src={whatsapp}
                alt="WhatsApp"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </WhatsappShareButton>
        </Tooltip>

        <Tooltip title="Share on Facebook" arrow>
          <FacebookShareButton url={shareUrl} hashtag={hashtag}>
            <div className="group transition-all duration-200 transform hover:scale-110">
              <Image
                src={facebook}
                alt="Facebook"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </FacebookShareButton>
        </Tooltip>

        <Tooltip title="Share on LinkedIn" arrow>
          <LinkedinShareButton url={shareUrl} title={title}>
            <div className="group transition-all duration-200 transform hover:scale-110">
              <Image
                src={linkedIn}
                alt="LinkedIn"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </LinkedinShareButton>
        </Tooltip>

        <Tooltip title="Share on Twitter" arrow>
          <TwitterShareButton url={shareUrl} title={title} hashtags={[hashtag]}>
            <div className="group transition-all duration-200 transform hover:scale-110">
              <Image
                src={twitter}
                alt="Twitter"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </TwitterShareButton>
        </Tooltip>

        <Tooltip title="Share via Email" arrow>
          <EmailShareButton
            url={shareUrl}
            subject={title}
            body={`Check this out: ${shareUrl}`}
          >
            <div className="group transition-all duration-200 transform hover:scale-110">
              <Image
                src={email}
                alt="Email"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </EmailShareButton>
        </Tooltip>
      </div>

      {/* Copy Link Section */}
      <div className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1">
        <input
          value={shareUrl}
          type="text"
          readOnly
          className="w-[150px] md:w-[200px] text-xs md:text-sm bg-transparent outline-none"
        />
        <button
          onClick={handleCopy}
          className="text-xs md:text-sm text-blue-600 font-medium hover:text-blue-800 transition-all"
        >
          {copySuccess ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default ShareLink;
