import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/formateDate";
import truncateText from "@/utils/truncate";

const FeaturedNewsCard = ({ news, idx, language, activeTab, onHover }: any) => {
  const img =
    (language === "BNG" ? news?.bng_Images?.[0] : news?.eng_images?.[0]) ||
    news?.eng_images?.[0] ||
    news?.bng_Images?.[0] ||
    "/placeholder.jpg";

  const categoryLabel =
    activeTab === "upcoming"
      ? language === "ENG"
        ? "Upcoming Program"
        : "আসন্ন প্রোগ্রাম"
      : language === "ENG"
        ? "Message"
        : "বার্তা";

  return (
    <motion.div
      initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
      onMouseEnter={() => onHover(idx)}
      onMouseLeave={() => onHover(null)}
      className="group relative w-full"
    >
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[340px] lg:h-[420px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl cursor-pointer">
        {/* Top accent bar */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#216740] via-[#FEC909] to-[#216740] z-20" />

        {/* Image */}
        <Image
          src={img || "/placeholder.jpg"}
          alt={language === "ENG" ? news?.english_title : news?.bangla_title}
          fill
          quality={85}
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          priority={idx === 0}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

        {/* Category Badge - Top Left */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
          <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/25 px-2.5 sm:px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FEC909]" />
            <span className="text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
              {categoryLabel}
            </span>
          </span>
        </div>

        {/* Date Badge - Top Right */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
          <div className="bg-black/60 backdrop-blur-md rounded-lg px-2 py-1 sm:px-2.5 sm:py-1.5 border border-white/10 flex items-center gap-1.5 sm:gap-2">
            <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FEC909]" />
            <span className="text-white text-[10px] sm:text-xs font-medium whitespace-nowrap">
              {formatDate(news.date)}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 lg:p-7 z-10">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white leading-snug mb-1.5 sm:mb-2 line-clamp-2 transition-colors duration-300 group-hover:text-[#FEC909]">
            {language === "ENG"
              ? truncateText(news.english_title, 55)
              : truncateText(news.bangla_title, 50)}
          </h3>

          <p className="text-gray-200 text-xs sm:text-sm md:text-[15px] mb-2.5 sm:mb-3.5 line-clamp-2 hidden sm:block">
            {language === "ENG"
              ? truncateText(news.english_short_description, 60)
              : truncateText(news.bangla_short_description, 55)}
          </p>

          <Link
            href={
              activeTab === "upcoming"
                ? `/upcoming-programs/${news._id}`
                : `/message/${news._id}`
            }
            className="inline-flex"
          >
            <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[#FEC909] font-semibold text-xs sm:text-sm md:text-base group/btn !p-0 bg-transparent"
            >
              <span>{language === "ENG" ? "See more" : "আরো দেখুন"}</span>
              <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#216740]/25 to-[#FEC909]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default FeaturedNewsCard;