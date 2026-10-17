"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Site-wide smooth scrolling.
 *
 * This used to be loaded with `ssr: false` and wrapped the whole layout in a
 * framer-motion container that started at `opacity: 0`. Two problems followed:
 * no page content was server-rendered at all (bad for SEO on a public-sector
 * site) and every visitor watched it fade in on load.
 *
 * Lenis only touches the DOM inside `useEffect`, so this component is safe to
 * render on the server and now returns children directly.
 */
function LandingPageProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      prevent: (node: HTMLElement) => {
        return (
          Boolean(node) &&
          node.nodeType === 1 &&
          (node.hasAttribute("data-lenis-prevent") ||
            Boolean(
              node.closest(
                '[data-lenis-prevent], .MuiDialog-root, .MuiDialog-container, .MuiDialog-paper, .MuiDialogContent-root, .MuiModal-root, [role="dialog"]',
              ),
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

    // Pause Lenis while any modal or dialog is open
    const checkModalState = () => {
      const isModalOpen =
        document.querySelector(
          '.MuiDialog-root, .MuiModal-root, [role="dialog"]',
        ) !== null ||
        document.body.style.overflow === "hidden" ||
        document.body.classList.contains("modal-open");

      if (isModalOpen) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    checkModalState();

    const observer = new MutationObserver(checkModalState);
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

  return <>{children}</>;
}

export default LandingPageProvider;
