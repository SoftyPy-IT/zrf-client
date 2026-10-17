import React from "react";

type Tone = "light" | "dark";

const toneClass: Record<Tone, string> = {
  light: "bg-slate-200/75",
  dark: "bg-white/10",
};

/**
 * Loading placeholder used while an API-backed section resolves.
 *
 * Every section keeps its `SectionHeading` rendered during loading so the page
 * structure (and its server-rendered HTML) is complete on first paint; only the
 * content area swaps to these blocks. They mirror the real layout's geometry so
 * there is no reflow when the data lands.
 */
export const Skeleton: React.FC<{
  className?: string;
  tone?: Tone;
}> = ({ className = "", tone = "light" }) => (
  <div
    aria-hidden="true"
    className={`animate-pulse rounded-md ${toneClass[tone]} ${className}`}
  />
);

/** A stack of text lines — last line shortened, like real prose. */
export const SkeletonText: React.FC<{
  lines?: number;
  className?: string;
  lineClassName?: string;
  tone?: Tone;
}> = ({ lines = 3, className = "", lineClassName = "h-3.5", tone = "light" }) => (
  <div aria-hidden="true" className={`space-y-2.5 ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <Skeleton
        key={index}
        tone={tone}
        className={`${lineClassName} ${
          index === lines - 1 ? "w-2/3" : "w-full"
        }`}
      />
    ))}
  </div>
);

/** Visually hidden status text so assistive tech announces the loading state. */
export const LoadingStatus: React.FC<{ label?: string }> = ({
  label = "Loading content",
}) => <span className="sr-only">{label}</span>;

export default Skeleton;
