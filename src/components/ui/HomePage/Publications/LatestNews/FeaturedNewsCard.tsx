import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/formateDate";
import truncateText from "@/utils/truncate";

const FeaturedNewsCard = ({
  news,
  idx,
  language,
  activeTab,
  onHover,
}: any) => {
  const images =
    news.bng_Images?.length > 0 ? news.bng_Images : news.english_Images;

  return (
    <motion.div
      initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
      onMouseEnter={() => onHover(idx)}
      onMouseLeave={() => onHover(null)}
      className="group relative w-full"
    >
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl cursor-pointer">
        {/* Image */}
        <Image
          src={images?.[0] || "/placeholder.jpg"}
          alt={language === "ENG" ? news.english_title : news.bangla_title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          priority={idx === 0}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Date Badge - Fully Responsive */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 lg:top-5 lg:right-5 z-10">
          <div className="bg-black/60 backdrop-blur-md rounded-lg px-1.5 py-1 sm:px-2 sm:py-1.5 md:px-2.5 md:py-2 border border-white/10">
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
              <Calendar className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-[#FEC909]" />
              <span className="text-white text-[8px] sm:text-[10px] md:text-xs font-medium whitespace-nowrap">
                {formatDate(news.date)}
              </span>
            </div>
          </div>
        </div>

        {/* Content Section - Fully Responsive */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-6 z-10">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-1 sm:mb-1.5 md:mb-2 line-clamp-2 group-hover:text-[#FEC909] transition-colors">
            {language === "ENG"
              ? truncateText(news.english_title, 40)
              : truncateText(news.bangla_title, 35)}
          </h3>

          {/* Short Description - Responsive */}
          <p className="text-gray-200 text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-2.5 md:mb-3 line-clamp-2">
            {language === "ENG"
              ? truncateText(news.english_short_description, 50)
              : truncateText(news.bangla_short_description, 45)}
          </p>

          <Link
            href={
              activeTab === "upcoming"
                ? `/upcoming-programs/${news._id}`
                : `/message/${news._id}`
            }
          >
            <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 text-[#FEC909] font-semibold text-[10px] sm:text-xs md:text-sm group/btn"
            >
              <span>{language === "ENG" ? "See more" : "আরো দেখুন"}</span>
              <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#216740]/20 to-[#FEC909]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default FeaturedNewsCard;