// components/PartnersSection.js

import Image from "next/image";
import React from "react";
import image1 from "../../../../assets/images/logo/bnp.png";
import image2 from "../../../../assets/images/logo/zfa.png";
import image3 from "../../../../assets/images/logo/webnp.png";
import image4 from "../../../../assets/images/logo/zfa.png";
import image5 from "../../../../assets/images/logo/sromikdol.png";
import image6 from "../../../../assets/images/logo/zfa.png";
import image7 from "../../../../assets/images/logo/jubodol.png";
import image8 from "../../../../assets/images/logo/zfa.png";
import Container from "@/components/share/Container";
import Marquee from "react-fast-marquee";
import EastIcon from "@mui/icons-material/East";

const partners = [
  { name: "Company A", logo: image1 },
  { name: "Company B", logo: image2 },
  { name: "Company C", logo: image3 },
  { name: "Company D", logo: image4 },
  { name: "Company E", logo: image5 },
  { name: "Company F", logo: image6 },
  { name: "Company G", logo: image7 },
  { name: "Company G", logo: image8 },
];

const Partners = () => {
  return (
    <>
      <div className="py-12 bg-gray-100 my-20">
        <Container>
          <div className="">
            <h2 className="text-3xl font-bold text-center mb-6">
              আমাদের সহযোগী প্রতিষ্ঠান সমূহ -
            </h2>
            <p className="text-center mb-12 text-gray-600">
              একাধিক জাতীয় প্রতিষ্ঠান আমাদের এ সামাজিক প্রতিষ্ঠানটির সাথে
              সংযুক্ত -
            </p>
            <Marquee>
              <div className="flex justify-center gap-6 lg:gap-[30px] mb-12 mx-4 md:mx-2 lg:mx-5">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center w-32 h-32"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      // width={100}
                      // height={180}
                    />
                  </div>
                ))}
              </div>
            </Marquee>
            {/* <div className="text-center">
              <a
                href="/partnerships"
                className="inline-block px-6 py-3 bg-green-600 text-white rounded-full text-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
               আরোও জানতে <EastIcon/>
              </a>
            </div> */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Partners;
