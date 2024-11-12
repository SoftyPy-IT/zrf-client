import Image from "next/image";
import React from "react";
import image1 from "../../../../src/assets/images/tarek-rahman/tarek.jpg";
import Container from "@/components/share/Container";
import PresidentBanner from "./_components/PresidentBanner";

const page = () => {
  return (
    <div>
      <PresidentBanner />
      <Container>
        <section className="my-16">
          {/* President's Image */}
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
                  Tarique Rahman
                </h2>
                <p className="text-lg font-light text-white">
                  President, Ziaur Rahman Foundation
                </p>
              </div>
            </div>
          </div>

          {/* President's Message */}
          <div className="text-gray-700 text-lg leading-relaxed">
            <p className="mb-5 text-justify">
              Since its inception “Ziaur Rahman Foundation” have initiated and
              implemented Nobel, integrated and pro-people activities to foster
              development activities from an independent, non-political,
              socially & morally motivated platform. Belated president Ziaur
              Rahman was a man of deed and not of mere words; Ziaur Rahman
              Foundation is just a true reflection of the solemn and sublime
              spirit of this legendary man.
            </p>
            <p className="mb-5 text-justify">
              Bangladesh is a country endowed with vast natural beauty &
              resources and blessed with huge population. Every beauty must be
              nurtured & ornated to make it look elegant and all resources must
              be explored from rotting underground. And all these can be done by
              efficient human resources. “Ziaur Rahman Foundation” is a
              responsible conglomerate of intelligent and responsible crust of
              the society who have the ability to make this immensely populated
              country into an inevitably potential one by sharing the good deeds
              and caring for the people who just need a hand to stand up and
              then can walk all by themselves.
            </p>
            <p className="mb-5 text-justify">
              In an increasingly competitive & progressively complex world,
              Bangladesh is standing at par with the developing countries to
              foster its development activities at much faster rate to sustain
              the rat-race of the open market economy. And so, the concept of
              development is no longer determined by lone G.D.P growth but by
              scaling other aspects of development like poverty reduction,
              growth in the rate of education, success in Health and nutrition,
              agriculture and creating job opportunities for its population.
              “Ziaur Rahman Foundation” under scored this global approach of
              development and expanded its activitie in the aforesaid sectors.
              The Health camp, Asthma care & prevention centre, Komol seed
              project, Social plantation program Dairy, Poultry, Fishery
              oriented programs are just glimpses of the shared vision of
              development activities that would leave foot prints for others to
              follow the same path & join the march towards unifocal and
              integrated development of the country.
            </p>
            <p className="mb-5 text-justify">
              The continuing achievements of our earlier projects have
              encouraged us to envisage more innovative and acute
              problem-solving projects and programs.
            </p>
            <p className="mb-5 text-justify">
              So let us carry forward this selfless, noble and integrated effort
              to a great extent by continuing our efforts and activities and
              spread the message of wholesome development:
            </p>
            <p className="font-semibold italic text-gray-900 mt-10">
              “Every small initiative, small effort would write the legacy of
              success and self-dependence.”
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default page;
