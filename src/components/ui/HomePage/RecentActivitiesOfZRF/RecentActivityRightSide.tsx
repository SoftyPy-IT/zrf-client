"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { motion } from "framer-motion";
import { TActivity } from "@/types/type";
import truncateText from "@/utils/truncate";
import BNPButton from "@/components/Button";

interface welcomeProps {
  activityFilterData: TActivity[];
  language: string;
}

const RecentActivityRightSide = ({
  activityFilterData,
  language,
}: welcomeProps) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedData = isLargeScreen
    ? activityFilterData?.slice(1, 6)
    : activityFilterData?.slice(1, 3);

  const containerVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="lg:w-[480px] w-full mt-8 lg:mt-0 hidden md:block"
    >

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {displayedData?.slice(0, 3)?.map((data, idx) => (
          <motion.div
            key={data._id}
            variants={itemVariants}
            onHoverStart={() => setHoveredIndex(idx)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
          >
            <Link href={`/recent-activities-of-zrf/${data._id}`}>
              <div className="flex gap-4 p-4 cursor-pointer">
                <div className="relative flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  {(language === "ENG" ? data.bng_Images : data.eng_images)
                    ?.slice(0, 1)
                    .map((img) => (
                      <Image
                        key={img}
                        src={img}
                        alt="activity"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        width={120}
                        height={120}
                      />
                    ))}

                </div>

                {/* Content Section */}
                <div className="flex-1">
                  <h3 className="text-sm md:text-base font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-green-700 transition-colors">
                    {language === "ENG"
                      ? truncateText(data.english_title, 55)
                      : truncateText(data.bangla_title, 55)}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                    {language === "ENG"
                      ? truncateText(data.english_short_description, 70)
                      : truncateText(data.bangla_short_description, 70)}
                  </p>

                  {/* Read More Indicator */}
                  <motion.div
                    animate={{ x: hoveredIndex === idx ? 5 : 0 }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-green-600"
                  >
                    {language === "ENG" ? "Read More" : "বিস্তারিত"}
                    <ChevronRightIcon className="w-3 h-3" />
                  </motion.div>
                </div>
              </div>

              {/* Animated Border on Hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-500/30 transition-all duration-500 pointer-events-none"></div>
            </Link>
          </motion.div>
        ))}
      </motion.div>


      <div

        className="mt-3 md:mt-5 flex justify-end "
      >
        <BNPButton
          href="/recent-activities-of-zrf"
          language={language}
          variant="primary"
          size="md"
          fullWidth={false}
          showIcon={true}
          iconPosition="right"
        >
          {language === "ENG" ? "View All Activities" : "সব কার্যক্রম দেখুন"}
        </BNPButton>
      </div>
    </motion.div>
  );
};

export default RecentActivityRightSide;
