import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/share/Skeleton";
import { TWhatWeDo } from "@/types/type";
import truncateText from "@/utils/truncate";
import { formatDate } from "@/utils/formateDate";

interface EducationProps {
  educationData: TWhatWeDo[];
  language: string;
  loading?: boolean;
}

/**
 * Compact "more education programmes" panel that sits beside the article on a
 * detailed page. Deliberately text-first so it reads as a genuine index, not a
 * second card grid.
 */
const RecentEducation: React.FC<EducationProps> = ({
  educationData,
  language,
  loading,
}) => {
  const isBn = language === "BNG";

  const items = [...(educationData || [])]
    .sort(
      (a: TWhatWeDo, b: TWhatWeDo) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    )
    .slice(1, 5);

  return (
    <div className="flex h-full flex-col rounded-panel border border-slate-200 bg-white p-5 shadow-card sm:p-6">
      <h3 className="text-[13px] font-bold uppercase tracking-[0.1em] text-slate-500">
        {isBn ? "আরও শিক্ষা কার্যক্রম" : "More education programmes"}
      </h3>
      <span className="mt-3 block h-[2px] w-10 rounded-full bg-gold-500" />

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
            ? "এই মুহূর্তে আর কোনো কার্যক্রম নেই।"
            : "No further programmes at the moment."}
        </p>
      ) : (
        <ul className="mt-4 flex flex-1 flex-col divide-y divide-slate-100">
          {items.map((data) => {
            const title = isBn ? data.bangla_title : data.english_title;
            const image =
              (isBn ? data.bng_Images : data.eng_images)?.[0] ||
              (isBn ? data.eng_images : data.bng_Images)?.[0];

            return (
              <li key={data._id}>
                <Link
                  href={`/education/${data._id}`}
                  className="group flex items-start gap-3.5 py-4 first:pt-2"
                >
                  <span className="relative h-[62px] w-[62px] shrink-0 overflow-hidden rounded-lg bg-slate-100">
                    {image ? (
                      <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="62px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : null}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="clamp-2 block text-[13.5px] font-semibold leading-snug text-slate-800 transition-colors group-hover:text-brand-700">
                      {truncateText(title, 70)}
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
      )}

      <Link
        href="/education"
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-md"
      >
        {isBn ? "সব কার্যক্রম দেখুন" : "View all programmes"}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
};

export default RecentEducation;
