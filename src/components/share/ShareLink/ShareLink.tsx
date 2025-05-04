"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  RedditShareButton,
  EmailShareButton,
} from "react-share";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
  FaRedditAlien,
  FaEnvelope,
} from "react-icons/fa";

type Props = {
  id?: string;
};

const ShareLink = ({ id }: Props) => {
  const pathName = usePathname();
  const [fullUrl, setFullUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const origin = window.location.origin;
      setFullUrl(`${origin}${pathName}/${id}`);
    }
  }, [pathName, id]);

  const buttonStyle =
    "flex items-center gap-2 px-4 py-2 rounded text-white hover:opacity-90 transition text-sm";

  return (
    <div className="mt-10">
      <h3 className="text-lg font-bold text-gray-600 mb-4">Share Now:</h3>
      {fullUrl && (
        <div className="flex flex-wrap gap-3">
          <FacebookShareButton url={fullUrl}>
            <div className={`${buttonStyle} bg-blue-600`}>
              <FaFacebookF />
              Facebook
            </div>
          </FacebookShareButton>

          <TwitterShareButton url={fullUrl}>
            <div className={`${buttonStyle} bg-blue-400`}>
              <FaTwitter />
              Twitter
            </div>
          </TwitterShareButton>

          <LinkedinShareButton url={fullUrl}>
            <div className={`${buttonStyle} bg-blue-700`}>
              <FaLinkedinIn />
              LinkedIn
            </div>
          </LinkedinShareButton>

          <WhatsappShareButton url={fullUrl}>
            <div className={`${buttonStyle} bg-green-500`}>
              <FaWhatsapp />
              WhatsApp
            </div>
          </WhatsappShareButton>

          <TelegramShareButton url={fullUrl}>
            <div className={`${buttonStyle} bg-sky-500`}>
              <FaTelegramPlane />
              Telegram
            </div>
          </TelegramShareButton>

          <RedditShareButton url={fullUrl}>
            <div className={`${buttonStyle} bg-orange-500`}>
              <FaRedditAlien />
              Reddit
            </div>
          </RedditShareButton>

          <EmailShareButton url={fullUrl}>
            <div className={`${buttonStyle} bg-gray-600`}>
              <FaEnvelope />
              Email
            </div>
          </EmailShareButton>
        </div>
      )}
    </div>
  );
};

export default ShareLink;
