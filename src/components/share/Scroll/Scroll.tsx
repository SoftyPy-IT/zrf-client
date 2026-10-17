"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Scroll-to-top affordance. Appears once the reader is past the first screen and
 * stays clear of the mobile safe area.
 */
const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 600);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-brand-700 text-white shadow-lg transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl sm:bottom-8 sm:right-8 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};

export default Scroll;
