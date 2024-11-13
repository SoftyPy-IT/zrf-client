import Image from "next/image";
import React from "react";
import image1 from "../../../../src/assets/images/director/director.jpg";
import Container from "@/components/share/Container";
import DirectorBanner from "./_components/DirectorBanner";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const page = () => {
  return (
    <div>
      <DirectorBanner />
      <Container>
        <section className="my-16">
          {/* Director's Image */}
          <div className="sticky lg:top-[75px] top-20 bg-gradient-to-r from-yellow-600 to-green-600">
            <div className="flex flex-col md:flex-row items-center justify-center mb-8 py-3">
              <div className="relative w-40 h-40 mb-6 md:mb-0">
                <Image
                  src={image1}
                  alt="President"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-2 border-green-600 p-1"
                />
              </div>
              <div className="md:ml-8 text-center md:text-left">
                <h2 className="text-3xl font-bold text-white">
                  Dr. Farhad Haleem Donar
                </h2>
                <p className="text-lg font-light text-white">
                  Executive Director, Ziaur Rahman Foundation
                </p>
              </div>
            </div>
          </div>

          {/* Director's Message */}
          <div className="text-gray-700 text-lg leading-relaxed">
            <p className="mb-5 text-justify">
              Ziaur Rahman Foundation is sapling that has been planted which the
              spirit of late President Ziaur Rahman and nurtured by the able &
              visionary reflection of his competent successor, the president of
              the Foundation Mr. Tarique Rahman. Apart from being common
              platform of Doctors, Engineers, Agriculturists and similar
              practitioners, Ziaur Rahman Foundation is in unified soul of
              intelligent & progressive minds of our society.
            </p>
            <p className="mb-5 text-justify">
              The well cherished foundation has been able to project and perform
              in multiple arenas to become an example by itself that undertakes
              social & notional responsibilities with a shared vision “Poverty
              and illiteracy free prosperous Bangladesh”. From a team of 22
              board of directors under the leadership of its president Mr
              Tarique Rahman and Seconded by its Executive Director Dr. Farhad
              Haleem Donar, the foundation is now a more elaborated and expanded
              forum of 597 members constituted by Doctors, Engineers,
              Agriculturist and Lawyers of the country We are proud to be a part
              of this extended family Ziaur Rahman Foundation has undertaken
              various programs to promote development activities and spread the
              spirit of good deeds. The under mentioned are some of the
              highlighted programs which have brought the foundation both pride
              & achievement of completion.
            </p>
            <ul>
              <li>
                <CheckCircleOutlineIcon className="text-green-600" /> Health
                camp in Digholia – Rupsha thana in Khulna & health fair in Bogra
                in 2000.
              </li>
              <li>
                <CheckCircleOutlineIcon className="text-green-600" />{" "}
                Establishmeni of Asthma care & prevention center in Bogra &
                Chittagong Successively in 2003-2004.
              </li>
              <li>
                <CheckCircleOutlineIcon className="text-green-600" /> Komel seed
                program to distribute good seeds for the poor farmers in the
                country in 2003.
              </li>
              <li>
                <CheckCircleOutlineIcon className="text-green-600" /> Social
                plantation program in 2004.
              </li>
              <li>
                <CheckCircleOutlineIcon className="text-green-600" /> Poverty
                alleviation program through distribution of dairy, poultry and
                fisheries and live stocks free of cost to promote economic
                activities & generate self-employment in 2003.Till date 3862
                family have been benefited by this program.
              </li>
              <li>
                <CheckCircleOutlineIcon className="text-green-600" /> Surgery
                camp; a free health care service camp held in Bogra and Khulna
                in the year 2004. About 122 patients received reconstructive
                surgery treatment absolutely free in these camps.
              </li>
            </ul>
            <p className="mt-5 text-justify">
              Apart from these, Kamol water project and Scholarship project are
              two most recent and diversed social program undertaken by our
              esteem foundation. With such long list of efforts in such short
              span of time we only look forward to do more in the coming days so
              that we can interpret our language of work into the language of
              development to truly and perpetually implement the unfinished
              deeds of late President Ziaur Rahman. I look forward to more
              activities in future that will bring this Foundation illustrious,
              glory and success.
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default page;
