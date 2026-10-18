import localFont from "next/font/local";

/**
 * Latin / English typeface for the whole site.
 * Self-hosted official Inter Variable font covering full Latin and extended glyphs
 * across all continuous weights (100–900) in normal and italic styles.
 * Being 100% self-hosted eliminates external Google Fonts network latency and blocking.
 */
export const inter = localFont({
  src: [
    {
      path: "../../public/fonts/inter/InterVariable.woff2",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "../../public/fonts/inter/InterVariable-Italic.woff2",
      style: "italic",
      weight: "100 900",
    },
  ],
  variable: "--font-inter",
  display: "swap",
  preload: true,
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

export const gelasio = localFont({
  src: "../../public/fonts/gelasio/Gelasio-Variable.woff2",
  variable: "--font-gelasio",
  weight: "400 700",
  style: "normal",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const fontVariables = `${inter.variable} ${shurjo.variable} ${gelasio.variable}`;
