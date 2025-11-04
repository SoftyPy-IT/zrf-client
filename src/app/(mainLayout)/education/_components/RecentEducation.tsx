import React from "react";
import Image from "next/image";
import { TWhatWeDo } from "@/types/type";
import Link from "next/link";
import truncateText from "@/utils/truncate";

interface EducationProps {
  educationData: TWhatWeDo[];
  language: string;
}

const RecentPostFetchData: React.FC<EducationProps> = ({
  educationData,
  language,
}) => {
  const title = language === "ENG" ? "Recent Post" : "সাম্প্রতিক পোস্ট";

  // ✅ Sort by latest date
  const sortedNewsData = educationData?.sort((a: TWhatWeDo, b: TWhatWeDo) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  // ✅ Proper Date Formatting
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    if (language === "ENG") {
      return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    } else {
      return date.toLocaleDateString("bn-BD", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    }
  };

  return (
    <div className="shadow-md rounded-md p-3">
      <h3 className="text-xl font-semibold">{title}</h3>
      <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />

      <div className="flex flex-col gap-y-3 mt-5">
        {sortedNewsData?.slice(1, 5).map((data) => (
          <Link key={data._id} href={`/education/${data._id}`}>
            <div className="flex items-center border rounded-md hover:shadow transition">
              {/* ✅ Fixed-size, responsive image container */}
              <div className="relative w-[100px] h-[80px] flex-shrink-0 overflow-hidden rounded-l-md">
                {language === "ENG"
                  ? data.eng_images?.slice(0, 1).map((img) => (
                      <Image
                        key={img}
                        src={img}
                        alt={data.english_title || "Education image"}
                        fill
                        className=""
                        sizes="100px"
                      />
                    ))
                  : data.bng_Images?.slice(0, 1).map((img) => (
                      <Image
                        key={img}
                        src={img}
                        alt={data.bangla_title || "Education image"}
                        fill
                        className=""
                        sizes="100px"
                      />
                    ))}
              </div>

              {/* ✅ Text area */}
              <div className="flex-1 p-2">
                <b className="text-xs block mb-1">{formatDate(data.date)}</b>
                <p className="text-xs md:text-sm leading-tight">
                  {language === "ENG"
                    ? truncateText(data.english_short_description, 80)
                    : truncateText(data.bangla_short_description, 80)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentPostFetchData;
