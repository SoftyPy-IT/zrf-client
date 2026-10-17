"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import PageBody from "@/components/share/PageBody";
import SectionHeading from "@/components/share/SectionHeading";
import { useEbookData } from "@/hooks/useEbookData";
import { useLanguage } from "@/provider/LanguageProvider";
import { TEbook } from "@/types/type";
import { X } from "lucide-react";
import Ebook from "./Ebook";
import ErrorBoundary from "./ErrorBoundary";

const PdfFlipBook = dynamic(() => import("./PdfReader"), { ssr: false });

/**
 * E-book index body.
 *
 * The library is presented as a publications shelf (covers as book objects);
 * selecting a cover opens the page-flip PDF reader in a modal dialog. The
 * reader is client-only because pdfjs needs the browser canvas API.
 */
function EbookFetchData() {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  const { ebookData, loading, error } = useEbookData();
  const [selectedBook, setSelectedBook] = useState<TEbook | null>(null);

  const closeReader = () => setSelectedBook(null);

  /* Escape closes the reader, backdrop click is handled by the overlay. */
  useEffect(() => {
    if (!selectedBook) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedBook(null);
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selectedBook]);

  const selectedTitle = selectedBook
    ? selectedBook.title || selectedBook.name
    : "";

  return (
    <>
      <CommonBanner
        title={isBn ? "ই-বুক" : "E-Books"}
        subtitle={
          isBn
            ? "ফাউন্ডেশনের প্রকাশিত ই-বুক, প্রতিবেদন ও স্মারকগ্রন্থের সংগ্রহ।"
            : "Explore the foundation's e-books, reports and commemorative publications."
        }
      />

      <PageBody tone="slate">
        <SectionHeading
          eyebrow={isBn ? "প্রকাশনা" : "Publications"}
          title={isBn ? "জ্ঞানকেন্দ্র" : "Knowledge Hub"}
          subtitle={
            isBn
              ? "বইয়ের মলাটে ক্লিক করে অনলাইনে পড়ুন।"
              : "Select a cover to read the publication online."
          }
        />

        {error ? (
          <p className="py-16 text-center text-sm text-slate-500">
            {isBn
              ? "এই মুহূর্তে কোনো ই-বুক পাওয়া যায়নি।"
              : "No e-books found at the moment."}
          </p>
        ) : (
          <Ebook
            ebookData={ebookData}
            loading={loading}
            onRead={(book) => setSelectedBook(book)}
          />
        )}
      </PageBody>

      {/* PDF reader dialog --------------------------------------------- */}
      {selectedBook?.ebook && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="pdf-reader-modal"
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-brand-950/90 p-3 backdrop-blur-sm sm:p-6"
          onClick={closeReader}
        >
          <div
            className="relative flex h-[86vh] w-full max-w-[1100px] flex-col overflow-hidden rounded-panel border border-slate-200 bg-white shadow-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-4 py-3">
              <h2
                id="pdf-reader-modal"
                className="clamp-2 text-[13.5px] font-semibold text-slate-900"
              >
                {selectedTitle}
              </h2>
              <button
                type="button"
                onClick={closeReader}
                aria-label={isBn ? "বন্ধ করুন" : "Close"}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="relative flex-1 overflow-hidden bg-slate-100">
              <ErrorBoundary
                fallback={
                  <div className="flex h-full items-center justify-center p-6">
                    <p className="max-w-sm text-center text-sm text-slate-500">
                      {isBn
                        ? "বইটি খোলা যায়নি। অনুগ্রহ করে পরে আবার চেষ্টা করুন।"
                        : "This book could not be opened. Please try again later."}
                    </p>
                  </div>
                }
              >
                <PdfFlipBook
                  pdfUrl={selectedBook.ebook}
                  onClose={closeReader}
                />
              </ErrorBoundary>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EbookFetchData;
