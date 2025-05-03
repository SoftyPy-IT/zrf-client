"use client";

import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaFacebookMessenger,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";

const ShareLink = () => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
  const messengerShare = `fb-messenger://share?link=${currentUrl}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${currentUrl}&text=Check this out!`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${currentUrl}`;
  const linkedinShare = `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`;

  return (
    <div className="flex items-center gap-2 mt-10 flex-wrap">
      <h3 className="text-lg font-bold text-gray-600">Share Now:</h3>

      <a
        href={facebookShare}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1877F2] hover:bg-[#344e86] flex items-center justify-center h-6 lg:h-8 w-6 lg:w-8 rounded-full"
      >
        <FaFacebookF className="h-4 w-4 text-white" />
      </a>

      <a
        href={messengerShare}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0084ff] hover:bg-[#0074e0] flex items-center justify-center h-6 lg:h-8 w-6 lg:w-8 rounded-full"
      >
        <FaFacebookMessenger className="h-4 w-4 text-white" />
      </a>

      <a
        href={whatsappShare}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#21bd5a] flex items-center justify-center h-6 lg:h-8 w-6 lg:w-8 rounded-full"
      >
        <FaWhatsapp className="h-4 w-4 text-white" />
      </a>

      <a
        href={twitterShare}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black hover:bg-gray-800 flex items-center justify-center h-6 lg:h-8 w-6 lg:w-8 rounded-full"
      >
        <FaTwitter className="h-4 w-4 text-white" />
      </a>

      <a
        href={linkedinShare}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0077b5] hover:bg-[#006399] flex items-center justify-center h-6 lg:h-8 w-6 lg:w-8 rounded-full"
      >
        <SlSocialLinkedin className="h-4 w-4 text-white" />
      </a>
    </div>
  );
};

export default ShareLink;
