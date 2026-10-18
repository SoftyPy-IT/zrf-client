import type { Config } from "tailwindcss";

/**
 * Ziaur Rahman Foundation — design system tokens.
 *
 * The palette is an institutional green + antique gold pairing: green carries the
 * official / governmental weight, gold is reserved for accents and emphasis so it
 * never competes with the primary brand colour. Neutrals stay on Tailwind's slate
 * ramp, which keeps long-form bilingual copy comfortable to read.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Primary — institutional forest green */
        brand: {
          50: "#EFF7F3",
          100: "#D3EADF",
          200: "#A3D4B9",
          300: "#63B98D",
          400: "#2E9A68",
          500: "#16794D",
          600: "#0F5C3A", // primary
          700: "#0C4C32",
          800: "#0A3D28",
          900: "#072A1C",
          950: "#04170F",
        },
        /* Accent — restrained antique gold */
        gold: {
          50: "#FCF9EE",
          100: "#F8F0D2",
          200: "#F0DFA3",
          300: "#E5C86C",
          400: "#D9B243",
          500: "#C8A02E", // accent
          600: "#A67F21",
          700: "#83611D",
          800: "#6B4D1E",
          900: "#5B411D",
          950: "#372207",
        },
        /* Legacy aliases kept so existing markup keeps resolving to the new ramp */
        zrf: {
          green: "#0F5C3A",
          "green-dark": "#0C4C32",
          gold: "#C8A02E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        // Shurjo leads so Bengali punctuation and shaping stay consistent in BN mode
        bangla: ["var(--font-shurjo)", "var(--font-inter)", "sans-serif"],
        display: ["var(--font-gelasio)", "Gelasio", "Georgia", "serif"],
        gelasio: ["var(--font-gelasio)", "Gelasio", "Georgia", "serif"],
      },
      fontSize: {
        /* Editorial scale — tighter tracking + relaxed leading on large headings */
        "display-lg": ["3.5rem", { lineHeight: "1.08", letterSpacing: "-0.024em" }],
        display: ["3rem", { lineHeight: "1.1", letterSpacing: "-0.022em" }],
        "display-sm": ["2.5rem", { lineHeight: "1.14", letterSpacing: "-0.02em" }],
        title: ["2rem", { lineHeight: "1.2", letterSpacing: "-0.016em" }],
        "title-sm": ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.012em" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.14em" }],
      },
      borderRadius: {
        card: "0.875rem",
        panel: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(4, 23, 15, 0.04), 0 8px 24px -12px rgba(4, 23, 15, 0.12)",
        "card-hover":
          "0 2px 4px rgba(4, 23, 15, 0.05), 0 18px 40px -16px rgba(4, 23, 15, 0.2)",
        header: "0 1px 0 rgba(4, 23, 15, 0.06), 0 12px 32px -20px rgba(4, 23, 15, 0.28)",
        panel: "0 24px 60px -28px rgba(4, 23, 15, 0.25)",
        "inset-line": "inset 0 -1px 0 rgba(4, 23, 15, 0.07)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "brand-sheen":
          "linear-gradient(135deg, var(--tw-gradient-stops, #0F5C3A, #0A3D28))",
        "gold-rule":
          "linear-gradient(90deg, #C8A02E 0%, #E5C86C 40%, rgba(200,160,46,0) 100%)",
      },
      maxWidth: {
        shell: "1320px",
        prose: "68ch",
      },
      spacing: {
        section: "4.5rem",
        "section-lg": "6rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "rule-grow": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "rule-grow": "rule-grow 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
