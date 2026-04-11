import React from "react";
import Image from "next/image";
import { TActivity, TWhatWeDo, } from "@/types/type";
import Link from "next/link";
import truncateText from "@/utils/truncate";

interface educatoinProps {
    activityData: TActivity[];
    language: string,
}


const RecentActivityPost: React.FC<educatoinProps> = ({ activityData, language }) => {

  const title = language === "ENG" ? 'Recent Post' : 'সাম্প্রতিক পোস্ট'

   const sortedNewsData = activityData?.sort(
        (a: TWhatWeDo, b: TWhatWeDo) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return dateB - dateA;
        },
    );



  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    if (language === "ENG") {
      return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    } else {
      // Convert to Bangla numerals
      const banglaFormatted = date
        .toLocaleDateString("bn-BD", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
        .replace(/[০-৯]/g, (d) =>
          "০১২৩৪৫৬৭৮৯"["০১২৩৪৫৬৭৮৯".indexOf(d)] ?? d
        );
      return banglaFormatted;
    }
  };

    return (
        <div className=" p-5 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold">{title}</h3>
            <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
            <div className="flex flex-col  gap-y-3 gap-x-3 mt-5">
                {sortedNewsData?.slice(1, 5).map((data) => (
                    <div key={data._id}>
                        <Link href={`/recent-activities-of-zrf/${data._id}`}>
                            <div className="flex flex-col md:flex-row border rounded-md gap-2">
                                {data.bng_Images?.slice(0, 1).map((img) => (
                                    <div className="relative w-full aspect-[56/16] rounded-sm h-[120px] md:h-auto " key={img}>
                                        {
                                            language === 'ENG' ? (
                                                data.eng_images?.slice(0, 1).map((img) => (
                                                    <Image
                                                        key={img}
                                                        src={img}
                                                        alt=""
                                                        fill
                                                        className="object-cover rounded-sm"
                                                    />
                                                ))
                                            ) : (
                                                data.bng_Images?.slice(0, 1).map((img) => (
                                                    <Image
                                                        key={img}
                                                        src={img}
                                                        alt=""
                                                        fill
                                                        className="object-cover rounded-sm"
                                                    />
                                                ))
                                            )
                                        }
                                    </div>
                                ))
                                }

                                <div className="p-3">
                                    <b className="text-xs">{formatDate(data.date)}</b>
                                    <p className="text-sm">{language === 'ENG' ? truncateText(data.english_short_description, 80) : truncateText(data.bangla_short_description, 100)}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default RecentActivityPost;
