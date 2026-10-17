"use client";

import { FC, ReactNode, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/provider/LanguageProvider";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

/**
 * Chapter reader.
 *
 * A small Tailwind overlay rather than a component-library dialog: Escape and a
 * backdrop click close it, focus lands on the close button, and the page behind
 * is locked while it is open.
 */
const Modal: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const { language } = useLanguage();
  const isBn = language === "BNG";
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title ?? (isBn ? "বিস্তারিত" : "Details")}
      className="fixed inset-0 z-[100000] flex items-end justify-center bg-brand-950/90 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-panel bg-white sm:rounded-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="h-1 w-full bg-gradient-to-r from-gold-600 via-gold-400 to-transparent"
          aria-hidden="true"
        />

        <header className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-6">
          {title && (
            <h2 className="text-[17px] font-bold leading-snug text-slate-900 sm:text-[19px]">
              {title}
            </h2>
          )}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={isBn ? "বন্ধ করুন" : "Close"}
            className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </header>

        <div className="overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
          {children}
        </div>

        <footer className="flex justify-end border-t border-slate-200 px-5 py-4 sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            {isBn ? "বন্ধ করুন" : "Close"}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
