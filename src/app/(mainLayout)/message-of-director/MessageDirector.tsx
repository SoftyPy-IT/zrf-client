"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import PageBody from "@/components/share/PageBody";
import RenderContent from "@/components/Common/RenderContent";
import {
  LoadingStatus,
  Skeleton,
  SkeletonText,
} from "@/components/share/Skeleton";
import { TMessage } from "@/types/type";

type MessageProps = {
  messageData: TMessage[];
  language: string;
  /** Shows placeholders while the message feed is in flight. */
  loading?: boolean;
};

/**
 * Message of the Executive Director.
 *
 * An editorial portrait-and-prose spread: the portrait card sits in the left
 * column (sticky on large screens), the CMS message runs down a gold-ruled
 * column, and a signature block closes the piece.
 */
const MessageDirector = ({
  language,
  messageData,
  loading = false,
}: MessageProps) => {
  const isBn = language === "BNG";

  const messages = (messageData || []).filter(
    (item) => item.category === "exicutive",
  );

  if (loading && messages.length === 0) {
    return (
      <PageBody>
        <div
          className="grid gap-10 lg:grid-cols-12 lg:gap-14"
          aria-busy="true"
        >
          <LoadingStatus
            label={isBn ? "বাণী লোড হচ্ছে" : "Loading the message"}
          />
          <div className="lg:col-span-4">
            <Skeleton className="aspect-[4/5] rounded-panel" />
            <Skeleton className="mt-5 h-5 w-40" />
            <Skeleton className="mt-3 h-3 w-28" />
          </div>
          <div className="lg:col-span-8">
            <SkeletonText lines={5} />
            <SkeletonText lines={5} className="mt-5" />
          </div>
        </div>
      </PageBody>
    );
  }

  if (messages.length === 0) return null;

  return (
    <PageBody>
      <div className="space-y-16 lg:space-y-20">
        {messages.map((message) => {
          const name = isBn
            ? message.name_bangla || message.name_english
            : message.name_english || message.name_bangla;

          const designation = isBn
            ? message.designation_bangla || message.designation_english
            : message.designation_english || message.designation_bangla;

          const description = isBn
            ? message.bangla_description
            : message.english_description;

          const image = message.bng_Images?.[0];

          return (
            <article
              key={message._id}
              className="grid gap-10 lg:grid-cols-12 lg:gap-14"
            >
              {/* Portrait ------------------------------------------------- */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-24">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-panel bg-slate-100 ring-1 ring-slate-200">
                    {image ? (
                      <Image
                        src={image}
                        alt={name || (isBn ? "নির্বাহী পরিচালক" : "Executive Director")}
                        fill
                        sizes="(max-width: 1024px) 100vw, 380px"
                        className="object-cover object-top"
                      />
                    ) : (
                      <span className="flex h-full items-center justify-center bg-brand-50 text-3xl font-bold text-brand-600/70">
                        {name?.charAt(0) || "Z"}
                      </span>
                    )}
                  </div>

                  <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-700">
                    {isBn ? "বার্তা" : "Message"}
                  </p>
                  {name && (
                    <h2 className="mt-2 text-[20px] font-bold leading-snug text-slate-900">
                      {name}
                    </h2>
                  )}
                  {designation && (
                    <p className="mt-1 text-[12.5px] font-semibold uppercase tracking-wide text-brand-700">
                      {designation}
                    </p>
                  )}
                </div>
              </div>

              {/* Message -------------------------------------------------- */}
              <div className="lg:col-span-8">
                <div className="border-l-2 border-gold-500 pl-5 sm:pl-7">
                  <Quote
                    className="h-6 w-6 text-gold-500"
                    aria-hidden="true"
                  />
                  <div className="mt-4">
                    <RenderContent content={description} />
                  </div>
                </div>

                <div className="mt-10 border-t border-slate-200 pt-6">
                  {name && (
                    <p className="text-[15px] font-bold text-slate-900">
                      {name}
                    </p>
                  )}
                  {designation && (
                    <p className="mt-1 text-[12.5px] font-semibold uppercase tracking-wide text-brand-700">
                      {designation}
                    </p>
                  )}
                  <span
                    className="mt-4 block h-[2px] w-10 rounded-full bg-gold-500"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </PageBody>
  );
};

export default MessageDirector;
