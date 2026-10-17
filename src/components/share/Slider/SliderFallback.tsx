import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import bannerArt from "@/assets/images/banner/ziaBanner.jpeg";

/**
 * Hero fallback.
 *
 * Rendered on the server (and shown while the banner feed resolves). It mirrors the
 * live hero — mission statement on the institutional green, artwork framed beside it —
 * so the most important element of the page paints instantly, stays crawlable, and
 * nothing shifts when the banners arrive.
 */
const SliderFallback = ({ isBn = false }: { isBn?: boolean }) => {
  const facts = [
    isBn ? "প্রতিষ্ঠিত ১৯৯৯" : "Established 1999",
    isBn ? "ঢাকা, বাংলাদেশ" : "Dhaka, Bangladesh",
    isBn ? "মানবিক ও কল্যাণমূলক" : "Humanitarian & welfare",
  ];

  return (
    <section
      aria-label={isBn ? "প্রধান ব্যানার" : "Featured banners"}
      className="relative isolate overflow-hidden bg-brand-950"
    >
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-900 via-brand-950 to-brand-950"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-10 py-11 lg:grid-cols-12 lg:gap-14 lg:py-16">
          <div className="lg:col-span-6">
            <h1 className="text-[27px] font-bold leading-[1.16] tracking-tight text-white sm:text-4xl md:text-[40px] lg:text-[42px] lg:leading-[1.1] xl:text-[46px]">
              {isBn
                ? "মানবতার সেবায় জিয়াউর রহমান ফাউন্ডেশন"
                : "Ziaur Rahman Foundation"}
            </h1>

            <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-brand-100 sm:text-[15px] lg:text-base">
              {isBn
                ? "শিক্ষা, স্বাস্থ্য ও আর্থিক ক্ষমতায়নের মাধ্যমে বাংলাদেশের অবহেলিত জনগোষ্ঠীর জীবনমান উন্নয়নে আমরা কাজ করছি।"
                : "Working across Bangladesh to lift neglected communities through education, healthcare and financial empowerment."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-brand-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-md focus-visible:outline-offset-4"
              >
                {isBn ? "আরও জানুন" : "Learn More"}
                <ChevronRightIcon sx={{ fontSize: 18 }} />
              </Link>

              <Link
                href="/donations"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gold-500/70 bg-transparent px-6 py-3 text-sm font-bold text-gold-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-400 hover:bg-gold-500 hover:text-brand-950 focus-visible:outline-offset-4"
              >
                <VolunteerActivismOutlinedIcon sx={{ fontSize: 18 }} />
                {isBn ? "অনুদান দিন" : "Donate Now"}
              </Link>
            </div>

            <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2.5 border-t border-white/10 pt-5 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-brand-300">
              {facts.map((fact) => (
                <li key={fact} className="flex items-center gap-2">
                  <span
                    className="h-1 w-1 rounded-full bg-gold-500"
                    aria-hidden="true"
                  />
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <figure className="lg:col-span-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-panel bg-brand-900 ring-1 ring-white/10 sm:aspect-[2/1] lg:aspect-[4/3] xl:aspect-[16/11]">
              <Image
                src={bannerArt}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover object-[93%_50%]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/45 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </figure>
        </div>
      </Container>
    </section>
  );
};

export default SliderFallback;
