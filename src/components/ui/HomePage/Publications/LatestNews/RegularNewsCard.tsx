import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/formateDate";
import truncateText from "@/utils/truncate";

const RegularNewsCard = ({ news, idx, language, activeTab }: any) => {
  const images =
    news.bng_Images?.length > 0 ? news.bng_Images : news.english_Images;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#216740] to-[#FEC909] rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

      <div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100">
        <div className="flex flex-col sm:flex-row">
          {/* Image Section - Responsive */}
          <div className="sm:w-2/5 relative h-48 sm:h-auto overflow-hidden">
            <Image
              src={images?.[0] || "/placeholder.jpg"}
              alt={news.english_title}
              width={300}
              height={250}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Date Badge - Responsive */}
            <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-white/95 backdrop-blur-sm shadow-lg px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg">
              <div className="flex items-center gap-1 sm:gap-2">
                <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FEC909]" />
                <span className="text-gray-700 text-[10px] sm:text-xs font-semibold">
                  {formatDate(news.date)}
                </span>
              </div>
            </div>
          </div>

          {/* Content Section - Responsive */}
          <div className="sm:w-3/5 p-4 sm:p-5 md:p-6">
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
              <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                {language === "ENG"
                  ? truncateText(news.english_short_description, 70)
                  : truncateText(news.bangla_short_description, 70)}
              </p>
            )}

            <Link
              href={
                activeTab === "upcoming"
                  ? `/upcoming-programs/${news._id}`
                  : `/message/${news._id}`
              }
            >
              <motion.button
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold group/btn"
                style={{ color: "#216740" }}
              >
                {language === "ENG" ? "Read More" : "আরো পড়ুন"}
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RegularNewsCard;