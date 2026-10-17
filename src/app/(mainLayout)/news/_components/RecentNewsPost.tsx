import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/share/Skeleton";
import { TWhatWeDo } from "@/types/type";
import { formatDate } from "@/utils/formateDate";
import truncateText from "@/utils/truncate";

interface newsProps {
  newsData: TWhatWeDo[];
  language: string;
  /** Shows skeleton rows while the sidebar feed is being fetched. */
  loading?: boolean;
}

/**
 * Sidebar panel for the single-article view — a text-first index of further
 * posts rather than a second card grid. Gold rule under the panel title ties
 * it to the site's section headings.
 */
const RecentNewsPost: React.FC<newsProps> = ({
  newsData,
  language,
  loading,
}) => {
  const isBn = language === "BNG";

  const sortedNewsData = [...(newsData || [])].sort(
    (a: TWhatWeDo, b: TWhatWeDo) =>
      new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const items = sortedNewsData.slice(1, 5);

  return (
    <div className="flex h-full flex-col rounded-panel border border-slate-200 bg-white p-5 shadow-card sm:p-6">
      <h3 className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-slate-500">
        {isBn ? "সাম্প্রতিক পোস্ট" : "Recent posts"}
      </h3>
      <span
        className="mt-3 block h-[2px] w-10 rounded-full bg-gold-500"
        aria-hidden="true"
      />

      {loading ? (
        <ul
          aria-hidden="true"
          className="mt-4 flex flex-1 flex-col divide-y divide-slate-100"
        >
          {[0, 1, 2, 3].map((index) => (
            <li key={index} className="flex items-start gap-3.5 py-4 first:pt-2">
              <Skeleton className="h-[62px] w-[62px] shrink-0 rounded-lg" />
              <div className="min-w-0 flex-1 space-y-2">
                <Skeleton className="h-3.5 w-full" />
                <Skeleton className="h-3.5 w-3/4" />
                <Skeleton className="h-3 w-20" />
              </div>
            </li>
          ))}
        </ul>
      ) : items.length === 0 ? (
        <p className="mt-6 text-[13.5px] text-slate-500">
          {isBn
            ? "এই মুহূর্তে আর কোনো পোস্ট নেই।"
            : "No further posts at the moment."}
        </p>
      ) : (
        <nav aria-label={isBn ? "সাম্প্রতিক পোস্ট" : "Recent posts"}>
          <ul className="mt-4 flex flex-1 flex-col divide-y divide-slate-100">
            {items.map((data) => {
              const image =
                (isBn ? data.bng_Images?.[0] : data.eng_images?.[0]) ||
                data.eng_images?.[0] ||
                data.bng_Images?.[0];

              const title = isBn ? data.bangla_title : data.english_title;
              const description = isBn
                ? data.bangla_short_description
                : data.english_short_description;

              return (
                <li key={data._id} className="py-4 first:pt-2">
                  <Link
                    href={`/news/${data._id}`}
                    className="group flex items-start gap-3.5"
                  >
                    <span className="relative h-[62px] w-[62px] shrink-0 overflow-hidden rounded-lg bg-slate-100">
                      {image ? (
                        <Image
                          src={image}
                          alt=""
                          fill
                          sizes="62px"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : null}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-[13.5px] font-semibold leading-snug text-slate-800 transition-colors group-hover:text-brand-700">
                        {truncateText(title || description, 62)}
                      </span>
                      {data.date && (
                        <span className="mt-1 block text-[11.5px] font-medium text-slate-400">
                          {formatDate(data.date)}
                        </span>
                      )}
                    </span>

                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand-600" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      <Link
        href="/news"
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-md"
      >
        {isBn ? "সব সংবাদ দেখুন" : "View all news"}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
};

export default RecentNewsPost;
