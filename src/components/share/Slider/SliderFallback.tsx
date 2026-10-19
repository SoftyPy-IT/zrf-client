import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";

/**
 * Hero fallback.
 *
 * Rendered on the server (and shown while the banner feed resolves). It mirrors
 * the live hero — statement on the institutional green, artwork leading on
 * mobile and framed as a captioned plaque from `sm` upward — so the most
 * important element of the page paints instantly, stays crawlable, and nothing
 * shifts when the banners arrive.
 */
const SliderFallback = ({ isBn = false }: { isBn?: boolean }) => {
  return (
    <section
      aria-label={isBn ? "প্রধান ব্যানার" : "Featured banners"}
      className="relative isolate overflow-hidden bg-brand-900"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(120% 150% at 14% 0%, #0F5C3A 0%, #0A3D28 44%, #072A1C 100%)",
        }}
      />

      <Container>
        <div className="grid items-center gap-8 pb-8 sm:gap-10 sm:py-11 xl:grid-cols-12 xl:gap-14 xl:py-16">
          <div className="xl:col-span-6">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-300">
              <span
                className="h-[2px] w-7 rounded-full bg-gradient-to-r from-gold-500 to-gold-300"
                aria-hidden="true"
              />
              {isBn ? "রাষ্ট্র গঠনে নিবেদিত" : "Dedicated to nation building"}
            </p>

            {/* Skeleton title placeholder so no conflicting text flashes on load */}
            <div className="mt-4 space-y-3" aria-hidden="true">
              <div className="h-8 sm:h-10 md:h-11 xl:h-12 w-11/12 rounded-lg bg-white/10 animate-pulse" />
              <div className="h-8 sm:h-10 md:h-11 xl:h-12 w-3/4 rounded-lg bg-white/10 animate-pulse" />
            </div>

            {/* Skeleton description placeholder */}
            <div className="mt-5 space-y-2.5 max-w-xl" aria-hidden="true">
              <div className="h-4 w-full rounded-md bg-white/10 animate-pulse" />
              <div className="h-4 w-5/6 rounded-md bg-white/10 animate-pulse" />
            </div>

            <div className="mt-7 flex gap-3">
              <Link
                href="/about"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:border-white/45 hover:bg-white/10 focus-visible:outline-offset-4 sm:flex-none sm:px-6"
              >
                {isBn ? "আরও জানুন" : "Learn More"}
                <ChevronRightIcon sx={{ fontSize: 18 }} />
              </Link>

              <Link
                href="/donations"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gold-500 px-5 py-3 text-sm font-bold text-brand-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-md focus-visible:outline-offset-4 sm:flex-none sm:px-6"
              >
                <VolunteerActivismOutlinedIcon sx={{ fontSize: 18 }} />
                {isBn ? "অনুদান দিন" : "Donate Now"}
              </Link>
            </div>
          </div>

          <div className="relative order-first flex items-center justify-center xl:order-none xl:col-span-6">
            <div className="relative aspect-square w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] xl:max-w-[480px]">
              {/* Ambient backlight glow */}
              <div
                className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gold-500/15 blur-2xl filter"
                aria-hidden="true"
              />
              <div className="relative h-full w-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]">
                <Image
                  src="/images/anniversary/shoronika-hero-circle.png"
                  alt={
                    isBn
                      ? "জিয়াউর রহমান ফাউন্ডেশন ২৭তম প্রতিষ্ঠাবার্ষিকী"
                      : "Ziaur Rahman Foundation 27th Anniversary"
                  }
                  fill
                  priority
                  sizes="(max-width: 639px) 340px, (max-width: 1279px) 460px, 480px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div
        className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-brand-700 via-gold-500 to-brand-700"
        aria-hidden="true"
      />
    </section>
  );
};

export default SliderFallback;
