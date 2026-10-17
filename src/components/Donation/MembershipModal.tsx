"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import MembershipForm from "./MembershipForm";
import { useLanguage } from "@/provider/LanguageProvider";

interface MembershipModalProps {
  onClose: () => void;
  open?: boolean;
}

/**
 * Membership request dialog. Opened from the footer's "Become a member" action.
 *
 * Behaviour is unchanged (close on backdrop click, Escape or the close button);
 * only the presentation moved off MUI `Modal` onto a plain, accessible dialog
 * scoped to the institutional design tokens.
 */
const MembershipModal: React.FC<MembershipModalProps> = ({ onClose, open = true }) => {
  const { language } = useLanguage();
  const isBn = language === "BNG";
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      /* Keep Tab inside the dialog, like the previous modal did. */
      if (event.key !== "Tab") return;
      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100000] overflow-y-auto"
      data-lenis-prevent
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 bg-brand-950/60 backdrop-blur-sm"
      />

      <div className="relative flex min-h-full items-center justify-center p-4 sm:p-6">
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={isBn ? "সদস্যপদের আবেদন" : "Membership application"}
          className="relative w-full max-w-[520px]"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={isBn ? "বন্ধ করুন" : "Close"}
            className="absolute -right-2 -top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-card transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 sm:-right-3 sm:-top-3"
          >
            <X className="h-[18px] w-[18px]" aria-hidden="true" />
          </button>

          <MembershipForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default MembershipModal;
