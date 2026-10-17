import { Inter } from "next/font/google";
import localFont from "next/font/local";

/**
 * Latin / English typeface for the whole site.
 * Inter is a variable font, so a single request covers every weight we use.
 */
export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
});

/**
 * Bangla typeface — Shurjo.
 *
 * Important characteristics of this file:
 *  - It ships as a single Bold (700) cut, so every Bangla weight resolves to it.
 *    `font-synthesis-weight: none` (see globals.css) stops the browser from
 *    faux-bolding it into mush on headings.
 *  - It contains Bengali glyphs only and has no Latin coverage. Latin letters and
 *    digits therefore fall through to Inter automatically, which is exactly the
 *    bilingual behaviour we want from a single font stack.
 */
export const shurjo = localFont({
  src: "../../public/Shurjo.woff2",
  variable: "--font-shurjo",
  weight: "700",
  style: "normal",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
  fallback: ["var(--font-inter)", "sans-serif"],
});

export const fontVariables = `${inter.variable} ${shurjo.variable}`;
