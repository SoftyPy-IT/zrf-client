import Image from "next/image";
import React, { useState } from "react";
import Container from "@/components/share/Container";
import { Button } from "@mui/material";
import { TWhatWeDo } from "@/types/type";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import { formatDate } from "@/utils/formateDate";
import { buttonStyle } from "@/utils/btnStyle";
interface EducationProps {
  whatWedoData: TWhatWeDo[];
  language: string;
}

const Rehabilitation: React.FC<EducationProps> = ({
  whatWedoData,
  language,
}) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const sortedRehabilitationData = whatWedoData?.sort(
    (a: TWhatWeDo, b: TWhatWeDo) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    }
  );

  return (
    <>
      <Container className="my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {sortedRehabilitationData
            ?.slice(0, visibleCount)
            .map((data, index: number) => (
              <div
                key={index}
                className="relative group w-auto md:h-[450px] bg-white overflow-hidden transition-transform transform hover:scale-105 border"
              >
                {language === "BNG"
                  ? data.bng_Images
                      ?.slice(0, 1)
                      .map((img) => (
                        <Image
                          width={500}
                          height={500}
                          key={img}
                          src={img}
                          alt="Top Image"
                          className="rounded-lg w-full h-full object-cover"
                        />
                      ))
                  : data.eng_images
                      ?.slice(0, 1)
                      .map((img) => (
                        <Image
                          width={500}
                          height={500}
                          key={img}
                          src={img}
                          alt="Top Image"
                          className="rounded-lg w-full h-full object-cover"
                        />
                      ))}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-600 via-yellow-600 to-transparent transition-transform transform translate-y-full group-hover:translate-y-0 duration-1000 ease-in-out h-[300px] md:h-[300px] lg:h-[300px]">
                  <div className="absolute inset-0 mt-20 flex flex-col text-center  justify-center items-center transition-opacity duration-300 group-hover:opacity-100 text-white p-4">
                    <h2 className="md:text-xl font-bold mb-1">
                      {language == "ENG"
                        ? data.english_title
                        : data.bangla_title}
                    </h2>
                    <p className="text-[12px] md:text-sm mb-1  md:mb-2 text-center">
                      {language == "ENG"
                        ? data?.english_short_description?.slice(0, 120)
                        : data?.bangla_short_description?.slice(0, 120)}
                      ...
                    </p>

                    <div className="flex justify-between mt-3 w-full items-center ">
                      <b>{formatDate(data.date)}</b>
                      <Link href={`/whatwedo/rehabilitation/${data._id}`}>
                        <Button sx={buttonStyle}>
                          {language === "ENG" ? "Read More" : "আরও পড়ুন"}
                          <EastIcon
                            sx={{ fontSize: { md: "20px", xs: "20px" } }}
                          />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-full pointer-events-none" />
              </div>
            ))}
        </div>
        {visibleCount < sortedRehabilitationData?.length && (
          <div className="flex items-center justify-center">
            <Button
              onClick={loadMore}
              className="bg-gradient-to-r from-yellow-600 to-green-600 p-1 text-[9px] md:text-sm  md:px-3  md:py-1 rounded text-white"
            >
              {language === "ENG" ? "Load More" : "আরো লোড"}
            </Button>
          </div>
        )}
      </Container>
    </>
  );
};

export default Rehabilitation;
