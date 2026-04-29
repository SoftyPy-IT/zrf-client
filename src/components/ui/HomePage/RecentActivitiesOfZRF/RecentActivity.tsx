"use client";

import React, { useEffect, useState } from "react";
import Container from "@/components/share/Container";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { TActivity } from "@/types/type";
import truncateText from "@/utils/truncate";
import { formatDate } from "@/utils/formateDate";
import RecentActivityRightSide from "./RecentActivityRightSide";
import { motion } from "framer-motion";
import BNPButton from "@/components/Button";

interface ActivityProps {
  activityData: TActivity[];
  language: string;
}

const RecentActivity: React.FC<ActivityProps> = ({
  activityData,
  language,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const activityFilterData = activityData?.filter(
    (welcome: any) => welcome.category === "Activity",
  );

  const sortedActivityData = activityFilterData?.sort(
    (a: TActivity, b: TActivity) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    },
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative pt-6 pb-10 md:pt-10 lg:pt-12 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-300/10 to-green-300/10 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10 px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 md:mb-10"
        >
          <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-yellow-600 via-green-600 to-yellow-600 bg-clip-text text-transparent px-2">
            {language === "ENG"
              ? "Recent Activities of ZRF"
              : "জেডআরএফ এর সাম্প্রতিক কার্যক্রম"}
          </h1>
          <div className="flex justify-center mt-2 md:mt-3">
            <div className="w-16 md:w-20 h-0.5 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full"></div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : {}}
            className="w-full lg:w-2/3"
          >
            {/* Grid shows 2 cards on mobile and tablet */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {sortedActivityData?.slice(0, 2).map((data, index) => (
                <motion.div
                  key={data._id}
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  className="group relative bg-white rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative h-44 xs:h-48 sm:h-52 md:h-56 lg:h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                    {(language === "ENG" ? data.bng_Images : data.eng_images)
                      ?.slice(0, 1)
                      .map((img) => (
                        <Image
                          key={img}
                          width={400}
                          height={250}
                          src={img}
                          alt="activity"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ))}



                  </div>

                  <div className="p-2.5 sm:p-3 md:p-4 lg:p-5">
                    <h3 className="text-xs xs:text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-1 sm:mb-2 line-clamp-2 group-hover:text-green-700 transition-colors min-h-[2.5rem] sm:min-h-[3rem]">
                      {language === "ENG"
                        ? truncateText(data.english_title, 40)
                        : truncateText(data.bangla_title, 40)}
                    </h3>
                    <p className="text-gray-600 text-[10px] xs:text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2 sm:line-clamp-3">
                      {language === "ENG"
                        ? truncateText(data.english_short_description, 60)
                        : truncateText(data.bangla_short_description, 60)}
                    </p>

                    <div className="scale-90 sm:scale-100 origin-left">
                      <BNPButton
                        href={`/recent-activities-of-zrf/${data._id}`}
                        language={language}
                        variant="primary"
                        size="sm"
                        showIcon={true}
                        iconPosition="right"
                        styles={{
                          padding: "py-1 px-2.5 sm:py-1.5 sm:px-3",
                          fontSize: "text-[10px] xs:text-xs sm:text-xs",
                          iconSize: "text-[8px] xs:text-[10px] sm:text-xs",
                          borderRadius: "9999px",
                        }}
                      >
                        {language === "ENG" ? "Learn More" : "আরও জানুন"}
                      </BNPButton>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="hidden md:block w-full lg:w-1/3 mt-4 lg:mt-0">
            <RecentActivityRightSide
              activityFilterData={sortedActivityData}
              language={language}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RecentActivity;