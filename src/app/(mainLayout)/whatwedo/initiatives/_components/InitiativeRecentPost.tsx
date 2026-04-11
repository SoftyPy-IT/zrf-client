import React from "react";
import Image from "next/image";
import { TActivity, TWhatWeDo } from "@/types/type";
import Link from "next/link";
import truncateText from "@/utils/truncate";

interface healthServicesProps {
  initiativeData: TWhatWeDo[];
  language: string;
}

const InitiativeRecentPost: React.FC<healthServicesProps> = ({
  initiativeData,
  language,
}) => {
  const title = language === "ENG" ? "Recent Post" : "সাম্প্রতিক পোস্ট";

  const sortedNewsData = initiativeData?.sort((a: TActivity, b: TActivity) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    if (language === "ENG") {
      return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    } else {
      const banglaFormatted = date
        .toLocaleDateString("bn-BD", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
        .replace(/[০-৯]/g, (d) => "০১২৩৪৫৬৭৮৯"["০১২৩৪৫৬৭৮৯".indexOf(d)] ?? d);
      return banglaFormatted;
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />

      <div className="flex flex-col gap-3 mt-5">
        {sortedNewsData?.slice(1, 5).map((data) => (
          <div key={data._id}>
            <Link href={`/whatwedo/initiatives/${data._id}`}>
              <div className="flex items-center border rounded-md hover:shadow transition">
                {/* ✅ Fixed-size image */}
                <div className="relative w-[100px] h-[80px] flex-shrink-0 overflow-hidden rounded-l-md">
                  {language === "ENG"
                    ? data.eng_images?.slice(0, 1).map((img) => (
                        <Image
                          key={img}
                          src={img}
                          alt="Initiative"
                          fill
                          className=""
                        />
                      ))
                    : data.bng_Images?.slice(0, 1).map((img) => (
                        <Image
                          key={img}
                          src={img}
                          alt="উদ্যোগ"
                          fill
                          className=""
                        />
                      ))}
                </div>

                {/* ✅ Text content */}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default InitiativeRecentPost;
