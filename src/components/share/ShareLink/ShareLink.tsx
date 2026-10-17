"use client";

import { useEffect, useState } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";
import { Check, Link2 } from "lucide-react";
import { useLanguage } from "@/provider/LanguageProvider";

type ShareProps = {
  shareUrl: string;
  title: string;
  hashtag: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
};

/** Sets or updates a document meta tag. */
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

const channels = [
  { key: "whatsapp", labelEn: "WhatsApp", labelBn: "হোয়াটসঅ্যাপ" },
  { key: "facebook", labelEn: "Facebook", labelBn: "ফেসবুক" },
  { key: "linkedin", labelEn: "LinkedIn", labelBn: "লিংকডইন" },
  { key: "twitter", labelEn: "X", labelBn: "এক্স" },
  { key: "email", labelEn: "Email", labelBn: "ইমেইল" },
] as const;

type ChannelKey = (typeof channels)[number]["key"];

/**
 * Article share row.
 *
 * Institution-style: a labelled rule across the top, then plain text share
 * actions per channel plus a copy-link control. No third-party icon images.
 */
const ShareLink = ({
  shareUrl,
  title,
  hashtag,
  description,
  imageUrl,
  imageAlt,
}: ShareProps) => {
  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();
  const isBn = language === "BNG";

  const handleCopy = () => {
    navigator.clipboard?.writeText(shareUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  /* Keep Open Graph / Twitter cards in sync with the active language. */
  useEffect(() => {
    if (!title || !description) return;

    setMetaTag('meta[property="og:title"]', "property", "og:title", title);
    setMetaTag(
      'meta[property="og:description"]',
      "property",
      "og:description",
      description,
    );
    setMetaTag('meta[property="og:url"]', "property", "og:url", shareUrl);
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMetaTag(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      description,
    );
    setMetaTag(
      'meta[name="twitter:card"]',
      "name",
      "twitter:card",
      "summary_large_image",
    );

    if (imageUrl) {
      setMetaTag('meta[property="og:image"]', "property", "og:image", imageUrl);
      setMetaTag(
        'meta[name="twitter:image"]',
        "name",
        "twitter:image",
        imageUrl,
      );
      if (imageAlt) {
        setMetaTag(
          'meta[property="og:image:alt"]',
          "property",
          "og:image:alt",
          imageAlt,
        );
        setMetaTag(
          'meta[name="twitter:image:alt"]',
          "name",
          "twitter:image:alt",
          imageAlt,
        );
      }
    }
  }, [title, description, imageUrl, imageAlt, shareUrl]);

  const renderButton = (key: ChannelKey, children: React.ReactNode) => (
    <span className="inline-flex [&>button]:inline-flex [&>button]:items-center [&>button]:gap-1.5 [&>button]:rounded-lg [&>button]:border [&>button]:border-slate-200 [&>button]:bg-white [&>button]:px-3 [&>button]:py-2 [&>button]:text-[12.5px] [&>button]:font-semibold [&>button]:text-slate-700 [&>button]:transition-colors [&>button:hover]:border-brand-300 [&>button:hover]:text-brand-700">
      {children}
    </span>
  );

  const label = (key: ChannelKey) => {
    const channel = channels.find((item) => item.key === key);
    return channel ? (isBn ? channel.labelBn : channel.labelEn) : "";
  };

  return (
    <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 lg:flex-row lg:items-center lg:justify-between">
      <h4 className="text-[12px] font-bold uppercase tracking-[0.12em] text-slate-500">
        {isBn ? "শেয়ার করুন" : "Share this"}
      </h4>

      <div className="flex flex-wrap items-center gap-2">
        {renderButton(
          "whatsapp",
          <WhatsappShareButton url={shareUrl} title={title}>
            <span>{label("whatsapp")}</span>
          </WhatsappShareButton>,
        )}
        {renderButton(
          "facebook",
          <FacebookShareButton url={shareUrl} hashtag={hashtag}>
            <span>{label("facebook")}</span>
          </FacebookShareButton>,
        )}
        {renderButton(
          "linkedin",
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            summary={description}
            source={shareUrl}
          >
            <span>{label("linkedin")}</span>
          </LinkedinShareButton>,
        )}
        {renderButton(
          "twitter",
          <TwitterShareButton url={shareUrl} title={title} hashtags={[hashtag]}>
            <span>{label("twitter")}</span>
          </TwitterShareButton>,
        )}
        {renderButton(
          "email",
          <EmailShareButton
            url={shareUrl}
            subject={title}
            body={`${description}\n\n${shareUrl}`}
          >
            <span>{label("email")}</span>
          </EmailShareButton>,
        )}

        <button
          type="button"
          onClick={handleCopy}
          aria-label={isBn ? "লিংক কপি করুন" : "Copy link"}
          className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-[12.5px] font-semibold transition-colors ${
            copied
              ? "border-brand-300 bg-brand-50 text-brand-700"
              : "border-slate-200 bg-white text-slate-700 hover:border-brand-300 hover:text-brand-700"
          }`}
        >
          {copied ? (
            <Check className="h-3.5 w-3.5" />
          ) : (
            <Link2 className="h-3.5 w-3.5" />
          )}
          {copied ? (isBn ? "কপি হয়েছে" : "Copied") : isBn ? "লিংক" : "Copy link"}
        </button>
      </div>
    </div>
  );
};

export default ShareLink;
