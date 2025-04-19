import React from "react";
import Image from "next/image";
import { TActivity, TWhatWeDo } from "@/types/type";
import Link from "next/link";
import truncateText from "@/utils/truncate";

interface healthServicesProps {
  healthServicesData: TWhatWeDo[];
  language: string;
}

const formatDate = (dateString: string | number | Date) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const HealthServiceRecentpost: React.FC<healthServicesProps> = ({
  healthServicesData,
  language,
}) => {
  const sortedNewsData = healthServicesData?.sort(
    (a: TActivity, b: TActivity) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    }
  );
  return (
    <div>
      <h3 className="text-xl font-semibold">
        {language === "ENG" ? "Recent Post" : "সাম্প্রতিক পোস্ট"}
      </h3>
      <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
      <div className="flex flex-col  gap-y-3 gap-x-3 mt-5">
        {sortedNewsData?.slice(1, 5).map((data) => (
          <div key={data._id}>
            <Link href={`/health-services/${data._id}`}>
              <div className="grid grid-cols-12 items-center gap-3 border rounded-md p-2">
                {data.bng_Images?.slice(0, 1).map((img) => (
                  <div className="col-span-3" key={img}>
                    {language === "ENG"
                      ? data.eng_images
                          ?.slice(0, 1)
                          .map((img) => (
                            <Image
                              key={img}
                              src={img}
                              alt=""
                              height={100}
                              width={100}
                              className="h-12 rounded-md"
                            />
                          ))
                      : data.bng_Images
                          ?.slice(0, 1)
                          .map((img) => (
                            <Image
                              key={img}
                              src={img}
                              alt=""
                              height={100}
                              width={100}
                              className="h-12 rounded-md"
                            />
                          ))}
                  </div>
                ))}

                <div className="col-span-9">
                  <b className="text-xs">{formatDate(data.date)}</b>
                  <p className="text-sm">
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

export default HealthServiceRecentpost;
