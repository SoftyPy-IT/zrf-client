import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/share/Container";
import EastIcon from "@mui/icons-material/East";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import { TProject } from "@/types/type";
import { Button } from "@mui/material";
import truncateText from "@/utils/truncate";

interface projectProps {
  projectData: TProject[];
  language: string;
}

const ProjectData: React.FC<projectProps> = ({ projectData, language }) => {
  const title = language === "ENG" ? "Our Projects" : "আমাদের প্রকল্প";

  const sortedProjectData = projectData?.sort((a: TProject, b: TProject) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  const [visibleCount, setVisibleCount] = useState(6);
  const loadMore = () => setVisibleCount((prev) => prev + 6);

  // ✅ Function to format date based on language
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
    <div>
      <CommonBanner title={title} />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16">
          {sortedProjectData?.slice(0, visibleCount)?.map((data, index) => (
            <div key={index}>
              <div className="shadow-md rounded-md">
                {language === "ENG"
                  ? data.bng_Images?.slice(0, 1).map((img) => (
                      <Image
                        key={img}
                        src={img}
                        alt=""
                        className="w-full h-full rounded-t-md"
                        width={500}
                        height={500}
                      />
                    ))
                  : data.eng_images?.slice(0, 1).map((img) => (
                      <Image
                        key={img}
                        src={img}
                        alt=""
                        className="w-full h-full rounded-t-md"
                        width={500}
                        height={500}
                      />
                    ))}
                <div className="p-5 flex flex-col h-[calc(100%-250px)]">
                  <h3 className="text-lg md:text-xl font-semibold mb-3">
                    {language === "ENG"
                      ? data.english_title
                      : data.bangla_title}
                  </h3>
                  <p className="text-sm md:text-base text-justify flex-grow">
                    {language === "ENG"
                      ? truncateText(data.english_short_description, 150)
                      : truncateText(data.bangla_short_description, 150)}
                  </p>
                  <div className="flex justify-between mt-3 items-center">
                    <b>{formatDate(data.date)}</b>
                    <Link href={`/our-projects/${data._id}`}>
                      <button className="text-white bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-1 hover:text-white rounded-full uppercase text-sm border">
                        {language === "ENG" ? "Read More" : "আরও পড়ুন"}{" "}
                        <EastIcon />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < sortedProjectData?.length && (
          <div className="flex items-center justify-center">
            <Button
              onClick={loadMore}
              className="bg-gradient-to-r from-yellow-600 to-green-600 p-1 text-[9px] md:text-sm md:px-3 md:py-1 rounded text-white"
            >
              {language === "ENG" ? "Load More" : "আরো লোড"}
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProjectData;
