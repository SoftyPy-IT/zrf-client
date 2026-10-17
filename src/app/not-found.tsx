import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";

/**
 * Global 404 page.
 *
 * Renders outside the main layout, so there is no language context and no
 * header/footer around it — the notice is therefore written in both languages
 * and the page supplies its own centred container.
 */
export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6 py-20">
      <div className="w-full max-w-lg rounded-panel border border-slate-200 bg-white p-8 text-center shadow-card sm:p-10">
        <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-slate-500">
          Ziaur Rahman Foundation
        </p>

        <p className="mt-4 text-[72px] font-bold leading-none text-brand-700 sm:text-[88px]">
          404
        </p>

        <h1 className="mt-5 text-[22px] font-bold text-slate-900">
          Page not found
        </h1>
        <p lang="bn" className="mt-1 text-[15.5px] font-semibold leading-bangla text-slate-700">
          পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
        </p>

        <p className="mt-4 text-[14.5px] leading-[1.85] text-slate-600">
          The page you are looking for may have been moved, or no longer exists.
        </p>
        <p lang="bn" className="mt-1 text-[14.5px] leading-[1.85] text-slate-600">
          আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি সরিয়ে ফেলা হয়েছে অথবা আর নেই।
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-[14px] font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
