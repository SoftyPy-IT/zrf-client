import React from "react";
import Container from "./Container";

/**
 * Standard body wrapper for inner pages.
 *
 * Every page body sits inside this so vertical rhythm, container width and the
 * white / slate alternation are decided in one place instead of per page.
 */
const PageBody: React.FC<{
  children: React.ReactNode;
  /** "slate" for the tinted band, "white" for the plain one. */
  tone?: "white" | "slate";
  /** Tighter top padding when the page opens straight into content. */
  tight?: boolean;
  /** Full-bleed content (no max-width container). */
  bleed?: boolean;
  className?: string;
}> = ({ children, tone = "white", tight = false, bleed = false, className = "" }) => (
  <section
    className={`${tight ? "py-12 lg:py-16" : "section-y"} ${
      tone === "slate" ? "bg-slate-50" : "bg-white"
    } ${className}`}
  >
    {bleed ? children : <Container>{children}</Container>}
  </section>
);

export default PageBody;
