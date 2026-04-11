/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import DOMPurify from "dompurify";
import ReactHtmlParser from "react-html-parser";

interface RenderContentProps {
  content: string;
}

const RenderContent: React.FC<RenderContentProps> = ({ content }) => {
  if (!content) return null;
  const cleanHTML = DOMPurify.sanitize(content);
  const parsedContent = ReactHtmlParser(cleanHTML);

  return (
    <>
      {parsedContent.map((element: any, index: number) => {
        if (typeof element === "string") {
          return (
            <p key={index} className="mb-3 leading-relaxed text-justify">
              {element}
            </p>
          );
        }

        const { type, props } = element;

        switch (type) {
          case "h1":
            return (
              <h1
                key={index}
                className="text-3xl font-extrabold mb-4 leading-snug"
              >
                {props.children}
              </h1>
            );
          case "h2":
            return (
              <h2 key={index} className="text-2xl font-bold mb-3 leading-snug">
                {props.children}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={index}
                className="text-xl font-semibold mb-2 leading-snug"
              >
                {props.children}
              </h3>
            );
          case "h4":
            return (
              <h4
                key={index}
                className="text-lg font-semibold mb-2 leading-snug"
              >
                {props.children}
              </h4>
            );
          case "p":
            return (
              <p key={index} className="mb-3 leading-relaxed text-justify">
                {props.children}
              </p>
            );
          case "b":
          case "strong":
            return (
              <strong key={index} className="font-semibold">
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
                className="text-blue-600 hover:underline break-words"
              >
                {props.children}
              </a>
            );
          case "img":
            return (
              <div key={index} className="my-4 flex justify-center">
                <img
                  src={props.src}
                  alt={props.alt || "content image"}
                  className="max-w-full rounded-lg shadow-md object-cover"
                  loading="lazy"
                />
              </div>
            );
          case "video":
            return (
              <video
                key={index}
                controls
                className="w-full max-h-[500px] my-4 rounded-lg"
              >
                <source src={props.src} />
                Your browser does not support the video tag.
              </video>
            );
          case "iframe":
            return (
              <div key={index} className="my-4 w-full flex justify-center">
                <iframe
                  src={props.src}
                  className="w-full h-[400px] rounded-lg"
                  title={`iframe-${index}`}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            );
          case "ul":
            return (
              <ul
                key={index}
                className="list-disc list-inside mb-3 pl-5 space-y-1"
              >
                {props.children}
              </ul>
            );
          case "ol":
            return (
              <ol
                key={index}
                className="list-decimal list-inside mb-3 pl-5 space-y-1"
              >
                {props.children}
              </ol>
            );
          case "li":
            return (
              <li key={index} className="ml-3">
                {props.children}
              </li>
            );
          case "blockquote":
            return (
              <blockquote
                key={index}
                className="border-l-4 border-gray-400 pl-4 italic my-3 text-gray-700"
              >
                {props.children}
              </blockquote>
            );
          case "code":
            return (
              <code
                key={index}
                className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono"
              >
                {props.children}
              </code>
            );
          case "pre":
            return (
              <pre
                key={index}
                className="bg-gray-900 text-white p-3 rounded-lg overflow-x-auto text-sm my-3"
              >
                {props.children}
              </pre>
            );
          case "div":
            // Handle Quill alignment classes and general divs
            if (props.className?.includes("ql-align-center"))
              return (
                <div key={index} className="text-center mb-2">
                  {props.children}
                </div>
              );
            if (props.className?.includes("ql-align-right"))
              return (
                <div key={index} className="text-right mb-2">
                  {props.children}
                </div>
              );
            if (props.className?.includes("ql-align-left"))
              return (
                <div key={index} className="text-left mb-2">
                  {props.children}
                </div>
              );
            return (
              <div key={index} className="mb-2">
                {props.children}
              </div>
            );
          case "span":
            return (
              <span key={index} style={props.style}>
                {props.children}
              </span>
            );
          case "hr":
            return <hr key={index} className="my-6 border-t border-gray-300" />;
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
    </>
  );
};

export default RenderContent;
