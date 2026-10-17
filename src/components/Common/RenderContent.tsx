"use client";

import React from "react";
import DOMPurify from "dompurify";
import ReactHtmlParser from "react-html-parser";

interface RenderContentProps {
  content: string;
  /** Extra classes for the prose block. */
  className?: string;
}

/**
 * DOMPurify needs a DOM. On the server we hand the markup straight to
 * `ReactHtmlParser`, which builds React elements: React escapes their text, so
 * nothing can execute. In the browser the HTML is sanitised as normal.
 */
const sanitize = (html: string): string => {
  if (typeof window === "undefined") return html;
  const purify = DOMPurify as unknown as {
    sanitize?: (value: string) => string;
  };
  return typeof purify.sanitize === "function" ? purify.sanitize(html) : html;
};

/**
 * Renders CMS rich text (Quill HTML) with the site's editorial type scale.
 *
 * Used by every article, single-item page and editorial block so body copy has
 * identical measure, colour and rhythm whether it comes from the news feed or
 * the impact story. HTML is sanitised before parsing.
 */
const RenderContent: React.FC<RenderContentProps> = ({
  content,
  className = "",
}) => {
  if (!content) return null;

  const cleanHTML = sanitize(content);
  const parsedContent = ReactHtmlParser(cleanHTML);

  const contentClassName = `${className}`;

  /** Quill alignment wrappers arrive as divs with these utility classes. */
  const alignment = (name?: string) => {
    if (!name) return null;
    if (name.includes("ql-align-center")) return "text-center";
    if (name.includes("ql-align-right")) return "text-right";
    if (name.includes("ql-align-justify")) return "text-left";
    return null;
  };

  return (
    <div className={contentClassName}>
      {parsedContent.map((element: any, index: number) => {
        if (typeof element === "string") {
          return (
            <p key={index} className="mb-4 text-[14.5px] leading-[1.85] text-slate-600">
              {element}
            </p>
          );
        }

        const { type, props } = element;

        switch (type) {
          case "h1":
          case "h2":
            return (
              <h3
                key={index}
                className="mb-3 mt-7 text-[19px] font-bold leading-snug text-slate-900 first:mt-0"
              >
                {props.children}
              </h3>
            );
          case "h3":
          case "h4":
            return (
              <h4
                key={index}
                className="mb-2.5 mt-6 text-[16px] font-bold leading-snug text-slate-900 first:mt-0"
              >
                {props.children}
              </h4>
            );
          case "p":
            return (
              <p
                key={index}
                className="mb-4 text-[14.5px] leading-[1.85] text-slate-600"
              >
                {props.children}
              </p>
            );
          case "b":
          case "strong":
            return (
              <strong key={index} className="font-bold text-slate-800">
                {props.children}
              </strong>
            );
          case "i":
          case "em":
            return (
              <em key={index} className="italic">
                {props.children}
              </em>
            );
          case "u":
            return (
              <u key={index} className="underline underline-offset-2">
                {props.children}
              </u>
            );
          case "a":
            return (
              <a
                key={index}
                href={props.href}
                target="_blank"
                rel="noopener noreferrer"
                className="break-words font-medium text-brand-700 underline underline-offset-2 transition-colors hover:text-brand-800"
              >
                {props.children}
              </a>
            );
          case "img":
            return (
              <span key={index} className="my-5 block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={props.src}
                  alt={props.alt || ""}
                  className="mx-auto h-auto w-full rounded-card object-cover"
                  loading="lazy"
                />
              </span>
            );
          case "video":
            return (
              <video
                key={index}
                controls
                className="my-5 max-h-[500px] w-full rounded-card bg-slate-900"
              >
                <source src={props.src} />
                {props.children}
              </video>
            );
          case "iframe":
            return (
              <span
                key={index}
                className="relative my-5 block w-full overflow-hidden rounded-card pt-[56.25%]"
              >
                <iframe
                  src={props.src}
                  className="absolute inset-0 h-full w-full"
                  title={`embed-${index}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </span>
            );
          case "ul":
            return (
              <ul
                key={index}
                className="mb-4 list-disc space-y-2 pl-5 text-[14.5px] leading-relaxed text-slate-600"
              >
                {props.children}
              </ul>
            );
          case "ol":
            return (
              <ol
                key={index}
                className="mb-4 list-decimal space-y-2 pl-5 text-[14.5px] leading-relaxed text-slate-600"
              >
                {props.children}
              </ol>
            );
          case "li":
            return (
              <li key={index} className="pl-1">
                {props.children}
              </li>
            );
          case "blockquote":
            return (
              <blockquote
                key={index}
                className="my-5 border-l-4 border-gold-500 bg-slate-50 py-3 pl-5 pr-4 text-[15px] italic leading-relaxed text-slate-700"
              >
                {props.children}
              </blockquote>
            );
          case "code":
            return (
              <code
                key={index}
                className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[13px] text-slate-700"
              >
                {props.children}
              </code>
            );
          case "pre":
            return (
              <pre
                key={index}
                className="my-4 overflow-x-auto rounded-card bg-slate-900 p-4 font-mono text-[13px] text-slate-100"
              >
                {props.children}
              </pre>
            );
          case "div": {
            const align = alignment(props.className);
            return (
              <div
                key={index}
                className={align ? `${align} mb-2` : "mb-2"}
              >
                {props.children}
              </div>
            );
          }
          case "span":
            return (
              <span key={index} style={props.style}>
                {props.children}
              </span>
            );
          case "hr":
            return (
              <hr key={index} className="my-7 border-t border-slate-200" />
            );
          case "br":
            return <br key={index} />;
          default:
            return (
              <React.Fragment key={index}>
                {props?.children || element}
              </React.Fragment>
            );
        }
      })}
    </div>
  );
};

export default RenderContent;
