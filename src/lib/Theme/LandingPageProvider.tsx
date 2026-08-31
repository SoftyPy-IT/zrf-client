"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function LandingPageProvider({ children }: { children: any }) {
  useEffect(() => {
    const lenis = new Lenis({
      prevent: (node: HTMLElement) => {
        return (
          Boolean(node) &&
          node.nodeType === 1 &&
          (node.hasAttribute("data-lenis-prevent") ||
            Boolean(
              node.closest(
                '[data-lenis-prevent], .MuiDialog-root, .MuiDialog-container, .MuiDialog-paper, .MuiDialogContent-root, .MuiModal-root, [role="dialog"]'
              )
            ))
        );
      },
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Watch for modal/dialog openings in the DOM and pause Lenis while open
    const checkModalState = () => {
      const isModalOpen =
        document.querySelector(".MuiDialog-root, .MuiModal-root, [role=\"dialog\"]") !== null ||
        document.body.style.overflow === "hidden" ||
        document.body.classList.contains("modal-open");

      if (isModalOpen) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    // Run initial check
    checkModalState();

    const observer = new MutationObserver(() => {
      checkModalState();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class", "aria-hidden"],
    });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default LandingPageProvider;
