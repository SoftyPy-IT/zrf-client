/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { getDocument } from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.entry";
import { Download, ZoomIn, ZoomOut, X } from "lucide-react";
import { Skeleton } from "@/components/share/Skeleton";
import { useLanguage } from "@/provider/LanguageProvider";

interface PdfFlipBookProps {
  pdfUrl: string;
  onClose: () => void;
}

const toolbarButtonClass =
  "flex h-9 w-9 items-center justify-center rounded-md text-slate-600 transition-colors hover:bg-slate-100 hover:text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40";

/**
 * Page-flip PDF reader.
 *
 * pdfjs renders every page to a data URL up front, then `react-pageflip`
 * presents them as a two-page spread. Kept client-only because canvas is
 * required; the surrounding modal supplies the dialog semantics.
 */
const PdfFlipBook: React.FC<PdfFlipBookProps> = ({ pdfUrl, onClose }) => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  const [pages, setPages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [zoom, setZoom] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      const container = document.querySelector(".pdf-container");
      if (container) {
        const { clientWidth, clientHeight } = container;
        // Calculate dimensions to maintain aspect ratio and fit within container
        const aspectRatio = 1.3; // Adjusted for better book-like appearance
        const maxWidth = clientWidth * 0.95; // Use more width
        const maxHeight = clientHeight * 0.9; // Use more height

        let width = maxWidth;
        let height = width / aspectRatio;

        if (height > maxHeight) {
          height = maxHeight;
          width = height * aspectRatio;
        }

        setDimensions({
          width: width / 2, // Divide by 2 since we show two pages
          height: height,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        setLoading(true);
        const loadingTask = getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        setTotalPages(pdf.numPages);
        const loadedPages: string[] = [];

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 2 });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({ canvasContext: context!, viewport }).promise;
          loadedPages.push(canvas.toDataURL());
        }

        setPages(loadedPages);
      } catch (e) {
        console.error("Error loading PDF:", e);
        setError("Failed to load PDF");
      } finally {
        setLoading(false);
      }
    };

    loadPdf();
  }, [pdfUrl]);

  const handleDownload = () => {
    window.open(pdfUrl, "_blank");
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 2));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5));
  };

  return (
    <div className="pdf-container relative flex h-full w-full flex-col items-center justify-center bg-white p-2">
      {/* Controls */}
      <div className="absolute right-4 top-4 z-20 flex items-center gap-1 rounded-lg border border-slate-200 bg-white/95 p-1 shadow-card">
        <button
          type="button"
          onClick={handleDownload}
          aria-label={isBn ? "ডাউনলোড করুন" : "Download"}
          title={isBn ? "ডাউনলোড করুন" : "Download"}
          className={toolbarButtonClass}
        >
          <Download className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={handleZoomOut}
          aria-label={isBn ? "ছোট করুন" : "Zoom out"}
          title={isBn ? "ছোট করুন" : "Zoom out"}
          className={toolbarButtonClass}
        >
          <ZoomOut className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={handleZoomIn}
          aria-label={isBn ? "বড় করুন" : "Zoom in"}
          title={isBn ? "বড় করুন" : "Zoom in"}
          className={toolbarButtonClass}
        >
          <ZoomIn className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div className="absolute left-4 top-4 z-20 rounded-lg border border-slate-200 bg-white/95 p-1 shadow-card">
        <button
          type="button"
          onClick={onClose}
          aria-label={isBn ? "বন্ধ করুন" : "Close"}
          title={isBn ? "বন্ধ করুন" : "Close"}
          className={toolbarButtonClass}
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      {/* Book Container */}
      <div
        className="flex w-full flex-1 items-center justify-center transition-transform duration-300 ease-editorial"
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: "center center",
        }}
      >
        {loading ? (
          <div
            aria-busy="true"
            className="flex w-full max-w-[880px] flex-col items-center gap-4 px-4"
          >
            <span className="sr-only">
              {isBn ? "বই লোড হচ্ছে" : "Loading book"}
            </span>
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-[300px] w-full rounded-card sm:h-[420px]" />
          </div>
        ) : error ? (
          <p className="max-w-sm px-6 text-center text-sm text-slate-500">
            {isBn
              ? "বইটি লোড করা যায়নি।"
              : "The book could not be loaded."}
          </p>
        ) : (
          pages.length > 0 &&
          dimensions.width > 0 && (
            <div className="relative rounded-md bg-white p-5 shadow-[0_10px_50px_-12px_rgba(4,23,15,0.25)] ring-1 ring-slate-200">
              <span
                className="pointer-events-none absolute inset-y-0 left-1/2 z-10 w-[2px] -translate-x-1/2 bg-slate-900/10"
                aria-hidden="true"
              />
              <HTMLFlipBook
                width={dimensions.width}
                height={dimensions.height}
                size="stretch"
                minWidth={dimensions.width * 0.6}
                maxWidth={dimensions.width * 1.4}
                minHeight={dimensions.height * 0.6}
                maxHeight={dimensions.height * 1.4}
                drawShadow={true}
                flippingTime={800}
                className="book-render"
                showCover={true}
                mobileScrollSupport={true}
                onFlip={(e) => setCurrentPage(e.data + 1)}
                maxShadowOpacity={0.2}
                showPageCorners={true}
                usePortrait={false}
                startPage={0}
                style={{}}
                startZIndex={1}
                autoSize={true}
                clickEventForward={true}
                useMouseEvents={true}
                swipeDistance={50}
                disableFlipByClick={false}
              >
                {pages.map((pageSrc, index) => (
                  <div key={index} className="page">
                    <img
                      src={pageSrc}
                      alt={`${isBn ? "পৃষ্ঠা" : "Page"} ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        padding: "2px",
                      }}
                    />
                  </div>
                ))}
              </HTMLFlipBook>
            </div>
          )
        )}
      </div>

      {!loading && !error && totalPages > 0 && (
        <p className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-brand-950/80 px-3 py-1 text-[12px] font-medium tabular-nums text-white">
          {isBn
            ? `পৃষ্ঠা ${currentPage} / ${totalPages}`
            : `Page ${currentPage} / ${totalPages}`}
        </p>
      )}
    </div>
  );
};

export default PdfFlipBook;
