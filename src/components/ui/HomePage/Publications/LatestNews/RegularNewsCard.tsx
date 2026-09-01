import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/formateDate";
import truncateText from "@/utils/truncate";

const RegularNewsCard = ({ news, idx, language, activeTab }: any) => {
  const images =
    (language === "BNG" ? news?.bng_Images : news?.eng_images) ||
    news?.eng_images ||
    news?.bng_Images ||
    [];
  const [isExpanded, setIsExpanded] = useState(false);

  const categoryLabel =
    activeTab === "upcoming"
      ? language === "ENG"
        ? "Program"
        : "প্রোগ্রাম"
      : language === "ENG"
        ? "Message"
        : "বার্তা";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#216740] to-[#FEC909] rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

      <div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#216740] via-[#FEC909] to-[#216740] z-10" />

        <div className="flex flex-col sm:flex-row h-full">
          {/* Image Section */}
          <div className="sm:w-2/5 relative h-52 sm:h-auto overflow-hidden">
            <Image
              src={images?.[0] || "/placeholder.jpg"}
              alt={news.english_title}
              width={300}
              height={250}
              quality={85}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-2.5 left-2.5">
              <span className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-md border border-white/20 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FEC909]" />
                <span className="text-white text-[10px] font-semibold uppercase tracking-wider">
                  {categoryLabel}
                </span>
              </span>
            </div>

            {/* Date Badge */}
            <div className="absolute bottom-2.5 left-2.5 bg-white/95 backdrop-blur-sm shadow-lg px-2.5 py-1.5 rounded-lg flex items-center gap-2">
              <Calendar className="w-3 h-3 text-[#FEC909]" />
              <span className="text-gray-700 text-[11px] sm:text-xs font-semibold">
                {formatDate(news.date)}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="sm:w-3/5 p-5 md:p-6 flex flex-col">
            <h3
              className="font-bold text-base sm:text-lg md:text-xl mb-2 line-clamp-2 transition-colors group-hover:text-[#216740] cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {language === "ENG"
                ? truncateText(news.english_title, 50)
                : truncateText(news.bangla_title, 50)}
            </h3>

            <AnimatePresence>
              {isExpanded && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-gray-600 text-xs sm:text-sm mb-3 leading-relaxed"
                >
                  {language === "ENG"
                    ? news.english_short_description
                    : news.bangla_short_description}
                </motion.p>
              )}
            </AnimatePresence>

            {!isExpanded && (
              <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2">
                {language === "ENG"
                  ? truncateText(news.english_short_description, 70)
                  : truncateText(news.bangla_short_description, 70)}
              </p>
            )}

            <div className="mt-auto pt-3">
              <Link
                href={
                  activeTab === "upcoming"
                    ? `/upcoming-programs/${news._id}`
                    : `/message/${news._id}`
                }
                className="inline-flex items-center gap-2 text-[#216740] font-semibold text-xs sm:text-sm group/btn"
              >
                <span className="relative transition-all duration-300">
                  {language === "ENG" ? "Read More" : "আরো পড়ুন"}
                </span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-[#216740] to-[#FEC909] text-white transition-transform duration-300 group-hover/btn:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RegularNewsCard;