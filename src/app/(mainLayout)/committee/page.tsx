import React from "react";
import Image, { StaticImageData } from "next/image";
import Container from "@/components/share/Container";
import CommitteeBanner from "./_components/CommitteeBanner";
import img1 from "../../../../src/assets/images/committee/profile.jpg";
import tarique from "../../../../src/assets/images/committee/tarique.jpeg";
import zaima from "../../../../src/assets/images/committee/zaima.jpeg";
import jobaida from "../../../../src/assets/images/committee/jobaida.jpeg";
import donar from "../../../../src/assets/images/committee/donar.jpeg";

// Define the profiles data
const profiles = [
  // Board of Directors Committee
  {
    name: "Mr. Tarique Rahman- President",
    imageSrc: tarique,
    committee: "Board of Directors Committee",
  },
  {
    name: "Dr. Zubaida Rahman - Vice President",
    imageSrc: jobaida,
    committee: "Board of Directors Committee",
  },
  {
    name: "Prof. Dr. Farhad Halim Donar- Executive Director",
    imageSrc: img1,
    committee: "Board of Directors Committee",
  },
  {
    name: "Prof. Dr. Morshed Hasan Khan - Director (Admin)",
    imageSrc: img1,
    committee: "Board of Directors Committee",
  },

  {
    name: "Dr. Syeda Tajneen Waris Simki - Director (Planning)",
    imageSrc: img1,
    committee: "Board of Directors Committee",
  },
  {
    name: "Dr. Shah Muhammad Aman Ullah - Director (Program)",
    imageSrc: img1,
    committee: "Board of Directors Committee",
  },
  {
    name: "Dr. Mustafa Aziz Sumon - Director (Program)",
    imageSrc: img1,
    committee: "Board of Directors Committee",
  },
  {
    name: "Agriculturist Dr. Khandaker Mahfuzul Haque Bacchu - Director (Program)",
    imageSrc: img1,
    committee: "Board of Directors Committee",
  },
  {
    name: "Engineer Md. Mahbub Alam - Director (Program)",
    imageSrc: img1,
    committee: "Board of Directors Committee",
  },
  {
    name: "Prof. Dr. Md. Lutfor Rahman - Director (Program)",
    imageSrc: img1,
    committee: "Board of Directors Committee",
  },
  {
    name: "Advocate Mohammad Ali - Director (Program)",
    imageSrc: img1,
    committee: "Board of Directors Committee",
  },
  {
    name: "Amirul Islam Kagoj - Director (Program)",
    imageSrc: img1,
    committee: "Board of Directors Committee",
  },
  {
    name: "Barrister Zaima Rahman - Director",
    imageSrc: zaima,
    committee: "Board of Directors Committee",
  },
  {
    name: " Prof. Dr. ABM Obaidul Islam- Director ",
    imageSrc: img1,
    committee: "Board of Directors Committee",
  },
  {
    name: "Agriculturist Anwarun Nabi Mojumdar Babla- Director ",
    imageSrc: img1,
    committee: "Board of Directors Committee",
  },
  {
    name: "Agriculturist Shamimur Rahman Shamim- Director",
    imageSrc: img1,
    committee: "Board of Directors Committee",
  },
  {
    name: "Barrister Mir Helal - Director",
    imageSrc: img1,
    committee: "Board of Directors Committee",
  },
  {
    name: "Prof. Dr. Sheikh Monir Uddin - Director",
    imageSrc: img1,
    committee: "Board of Directors Committee",
  },
  {
    name: "Engineer AKM Zahirul Islam - Director",
    imageSrc: img1,
    committee: "Board of Directors Committee",
  },
  {
    name: "Agriculturist Shafiul Alam Didar- Director",
    imageSrc: img1,
    committee: "Board of Directors Committee",
  },
  {
    name: "Engineer Umasha Umain Moni Chowdhury - Director",
    imageSrc: img1,
    committee: "Board of Directors Committee",
  },
  {
    name: "Journalist Hafiz Al Asad Saiyed Khan - Director",
    imageSrc: img1,
    committee: "Board of Directors Committee",
  },

  //advisor counsilor 

  {
    name: "Dr. A.S. Haider Parvez- Advisor",
    imageSrc: img1,
    committee: "Advisory Council",
  },
  {
    name: "Prof. Dr. Harun Al Rashid- Advisor",
    imageSrc: img1,
    committee: "Advisory Council",
  },
  {
    name: "Agriculturist Prof. Dr. Abdul Karim- Advisor",
    imageSrc: img1,
    committee: "Advisory Council",
  },
  {
    name: "Prof. Dr. Md. Abdur Rashid- Advisor",
    imageSrc: img1,
    committee: "Advisory Council",
  },
  {
    name: "Barrister Nasir Uddin Asim - Advisor",
    imageSrc: img1,
    committee: "Advisory Council",
  },
  {
    name: "Prof. Dr. Mohammad Almojadded Al-Fesani - Advisor",
    imageSrc: img1,
    committee: "Advisory Council",
  },
  {
    name: "Engineer Alamgir Hasin Ahmed- Advisor",
    imageSrc: img1,
    committee: "Advisory Council",
  },
  // Working Body Committee
  {
    name: "Prof Dr. Forhad Haleem Donar",
    imageSrc: donar,
    committee: "Working Body Committee",
  },
  {
    name: "Dr. A S Haider Parveze",
    imageSrc: img1,
    committee: "Working Body Committee",
  },
  {
    name: "Prof. Dr. Harun Al Rashid",
    imageSrc: img1,
    committee: "Working Body Committee",
  },
  {
    name: "Dr. Warse Simky",
    imageSrc: img1,
    committee: "Working Body Committee",
  },
  {
    name: "Dr. Shah Mohammad Amanullah",
    imageSrc: img1,
    committee: "Working Body Committee",
  },
  {
    name: "Prof Dr. Morshed Hasan Khan",
    imageSrc: img1,
    committee: "Working Body Committee",
  },
  {
    name: "Prof. Dr. Al Mozaddedi Al Fasani",
    imageSrc: img1,
    committee: "Working Body Committee",
  },
  {
    name: "Prof Dr. Abdur Rashid",
    imageSrc: img1,
    committee: "Working Body Committee",
  },
  {
    name: "Prof. Dr. Motiur Rahman Gazzali",
    imageSrc: img1,
    committee: "Working Body Committee",
  },
  {
    name: "Prof. Dr. Abul Hasnat Mohammad Shamim",
    imageSrc: img1,
    committee: "Working Body Committee",
  },
  {
    name: "Engr. Md. Mahbub Alam",
    imageSrc: img1,
    committee: "Working Body Committee",
  },
  {
    name: "Engr. Alamgir Hasin Ahmed",
    imageSrc: img1,
    committee: "Working Body Committee",
  },
  {
    name: "Engr. Ashraf Reza Faridy Zelany",
    imageSrc: img1,
    committee: "Working Body Committee",
  },
  {
    name: "Engr. Mahmudur Rahman Manna",
    imageSrc: img1,
    committee: "Working Body Committee",
  },
  {
    name: "Engr. Umasha Umayon Moni Chowdhury",
    imageSrc: img1,
    committee: "Working Body Committee",
  },
  // Rehabilitation Committee
  {
    name: "Dr. Shah Mohammad Amanullah - (Convenor)",
    imageSrc: img1,
    committee: "Rehabilitation Committee",
  },
  // Overseas Committee
  {
    name: "Dr. Zobaida Rahman - (Chief Advisor)",
    imageSrc: img1,
    committee: "Overseas Committee",
  },
  {
    name: "Prof. Dr. Abdul Karim - (Convenor)",
    imageSrc: img1,
    committee: "Overseas Committee",
  },
  // Research Committee
  {
    name: "Prof. Dr. Abdul Karim - (Convenor)",
    imageSrc: img1,
    committee: "Research Committee",
  },
];

// Group profiles by committee
const committees = profiles.reduce((acc, profile) => {
  if (!acc[profile.committee]) {
    acc[profile.committee] = [];
  }
  acc[profile.committee].push(profile);
  return acc;
}, {} as Record<string, typeof profiles>);

// Single Profile Card Component
const ProfileCard = ({
  name,
  imageSrc,
  committee,
}: {
  name: string;
  imageSrc: string | StaticImageData;
  committee: string;
}) => {
  return (
    <div className="bg-white shadow-lg rounded overflow-hidden hover:shadow-xl transform transition-transform duration-300 hover:scale-105 lg:w-64 md:w-60 w-full h-72">
      <div className="relative w-40 h-40 mx-auto mt-5">
        <Image
          src={imageSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-[16px] font-semibold">{name}</h3>
        {/* <p className="text-gray-600">{committee}</p> */}
      </div>
    </div>
  );
};

// Main Profiles Page Component
const Page = () => {
  return (
    <div>
      <CommitteeBanner />
      <div className="bg-gray-100">
        <Container className="py-16">
          {/* Loop through each committee */}
          {Object.keys(committees).map((committeeName) => (
            <div key={committeeName} className="mb-16">
              <h2 className="text-3xl font-semibold text-center uppercase">
                {committeeName}
              </h2>
              <div className="w-44 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-7 mx-auto"></div>
              <div className="flex flex-wrap justify-center gap-10">
                {committees[committeeName].map((profile, index) => (
                  <ProfileCard
                    key={index}
                    name={profile.name}
                    imageSrc={profile.imageSrc}
                    committee={profile.committee}
                  />
                ))}
              </div>
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Page;
