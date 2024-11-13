import Image from "next/image";
import React from "react";
import image1 from "../../../../src/assets/images/vice.jpg";
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
                  Dr. Zubaida Rahman
                </h2>
                <p className="text-lg font-light text-white">
                  Vice President, Ziaur Rahman Foundation
                </p>
              </div>
            </div>
          </div>

          {/* President's Message */}
          <div className="text-gray-700 text-lg leading-relaxed">
            <p className="mb-5 text-justify">
              Since its inception, the Ziaur Rahman Foundation has been
              dedicated to initiating and implementing innovative, integrated,
              and people-centric activities. These initiatives are designed to
              foster sustainable development from an independent, non-political,
              and socially driven platform. The Shaheed President Ziaur Rahman
              was a man of action, known for his commitment to progress rather
              than mere words. The Foundation is a true reflection of his
              enduring spirit, embodying his vision for a prosperous and
              self-reliant Bangladesh.
            </p>
            <p className="mb-5 text-justify">
              Bangladesh, a nation blessed with vast natural beauty, abundant
              resources, and a large, vibrant population, holds immense
              potential. However, this potential can only be realized through
              the nurturing of its beauty and the responsible utilization of its
              resources. To achieve this, the country needs skilled and
              dedicated human resources. The Ziaur Rahman Foundation brings
              together a responsible, intelligent, and socially conscious
              segment of society, working to transform this populous nation into
              a powerhouse of possibilities. By empowering people and extending
              a helping hand, we enable individuals to rise, stand tall, and
              eventually walk on their own towards self-sufficiency.
            </p>
            <p className="mb-5 text-justify">
              In today’s highly competitive and complex global landscape,
              Bangladesh stands alongside other developing nations, striving to
              accelerate its development to keep pace with the open market
              economy. The concept of development now transcends mere GDP
              growth. It encompasses poverty reduction, increased access to
              education, advancements in health and nutrition, agricultural
              innovation, and job creation. The Ziaur Rahman Foundation aligns
              with this global approach, expanding its initiatives across these
              critical sectors. Programs such as our Health Camps, Asthma Care &
              Prevention Center, Komol Seed Project, Social Plantation Program,
              and initiatives in dairy, poultry, and fishery are just a few
              examples of our shared vision for sustainable development. These
              efforts are laying down a path for others to follow, contributing
              to the unified and integrated progress of our nation.
            </p>
            <p className="mb-5 text-justify">
              The success of our previous projects has inspired us to pursue
              even more innovative and effective solutions. We are committed to
              addressing the pressing challenges of our time with impactful
              projects and programs that bring about real change.
            </p>
            <p className="mb-5 text-justify">
              Let us continue this selfless and noble mission. Together, we can
              extend our efforts and activities to even greater heights,
              spreading the message of holistic development.
            </p>
            <p className="mb-5 text-justify">
              Every small initiative, every effort we make today, will shape
              the legacy of success and self-reliance for tomorrow.
            </p>
            <p className="font-semibold italic text-gray-900 mt-10">
              “ We are grateful for your continued support and dedication to
              this journey of progress and prosperity for Bangladesh.”
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default page;
