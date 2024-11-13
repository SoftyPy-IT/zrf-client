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
    name: "Mr. Tarique Rahman ",
    imageSrc: tarique,
    committee: "Board of Directors Committee",
    designation: 'President'
  },
  {
    name: "Dr. Zubaida Rahman",
    imageSrc: jobaida,
    committee: "Board of Directors Committee",
    designation: 'Vice President'
  },
  {
    name: "Prof. Dr. Farhad Halim Donar",
    imageSrc: donar,
    committee: "",
    designation: 'Executive Director'
  },
  {
    name: "Prof. Dr. Morshed Hasan Khan ",
    imageSrc: img1,
    committee: "",
    designation: 'Director (Admin)'
  },

  {
    name: "Dr. Syeda Tajneen Waris Simki",
    imageSrc: img1,
    committee: "",
    designation: 'Director (Planning)'
  },
  {
    name: "Dr. Shah Muhammad Aman Ullah",
    imageSrc: img1,
    committee: "",
    designation: 'Director (Program)'
  },
  {
    name: "Dr. Mustafa Aziz Sumon",
    imageSrc: img1,
    committee: "",
    designation: 'Director (Program)'
  },
  {
    name: "Agriculturist Dr. Khandaker Mahfuzul Haque Bacchu",
    imageSrc: img1,
    committee: "",
    designation: 'Director (Program)'
  },
  {
    name: "Engineer Md. Mahbub Alam",
    imageSrc: img1,
    committee: "",
    designation: 'Director (Program)'
  },
  {
    name: "Prof. Dr. Md. Lutfor Rahman",
    imageSrc: img1,
    committee: "",
    designation: 'Director (Program)'
  },
  {
    name: "Advocate Mohammad Ali",
    imageSrc: img1,
    committee: "",
    designation: 'Director (Program)'
  },
  {
    name: "Amirul Islam Kagoj",
    imageSrc: img1,
    committee: "",
    designation: 'Director (Program)'
  },
  {
    name: "Barrister Zaima Rahman",
    imageSrc: zaima,
    committee: "",
    designation: 'Director'
  },
  {
    name: " Prof. Dr. ABM Obaidul Islam",
    imageSrc: img1,
    committee: "",
    designation: 'Director '
  },
  {
    name: "Agriculturist Anwarun Nabi Mojumdar Babla ",
    imageSrc: img1,
    committee: "",
    designation: 'Director'
  },
  {
    name: "Agriculturist Shamimur Rahman Shamim",
    imageSrc: img1,
    committee: "",
    designation: 'Director'
  },
  {
    name: "Barrister Mir Helal",
    imageSrc: img1,
    committee: "",
    designation: 'Director'
  },
  {
    name: "Prof. Dr. Sheikh Monir Uddin",
    imageSrc: img1,
    committee: "",
    designation: 'Director'
  },
  {
    name: "Engineer AKM Zahirul Islam",
    imageSrc: img1,
    committee: "",
    designation: 'Director'
  },
  {
    name: "Agriculturist Shafiul Alam Didar",
    imageSrc: img1,
    committee: "",
    designation: 'Director'
  },
  {
    name: "Engineer Umasha Umain Moni Chowdhury",
    imageSrc: img1,
    committee: "",
    designation: 'Director'
  },
  {
    name: "Journalist Hafiz Al Asad Saiyed Khan",
    imageSrc: img1,
    committee: "",
    designation: 'Director'
  },

  //advisor counsilor 

  {
    name: "Dr. A.S. Haider Parvez",
    imageSrc: img1,
    committee: "Advisory Council",
    designation: 'Advisor'
  },
  {
    name: "Prof. Dr. Harun Al Rashid",
    imageSrc: img1,
    committee: "Advisory Council",
    designation: 'Advisor'
  },
  {
    name: "Agriculturist Prof. Dr. Abdul Karim",
    imageSrc: img1,
    committee: "Advisory Council",
    designation: 'Advisor'
  },
  {
    name: "Prof. Dr. Md. Abdur Rashid",
    imageSrc: img1,
    committee: "Advisory Council",
    designation: 'Advisor'
  },
  {
    name: "Barrister Nasir Uddin Asim",
    imageSrc: img1,
    committee: "Advisory Council",
    designation: 'Advisor'
  },
  {
    name: "Prof. Dr. Mohammad Almojadded Al-Fesani",
    imageSrc: img1,
    committee: "Advisory Council",
    designation: 'Advisor'
  },
  {
    name: "Engineer Alamgir Hasin Ahmed",
    imageSrc: img1,
    committee: "Advisory Council",
    designation: 'Advisor'
  },
  // Working Body Committee
  // {
  //   name: "Prof Dr. Forhad Haleem Donar",
  //   imageSrc: donar,
  //   committee: "Working Body Committee",
  // },
  // {
  //   name: "Dr. A S Haider Parveze",
  //   imageSrc: img1,
  //   committee: "Working Body Committee",
  // },
  // {
  //   name: "Prof. Dr. Harun Al Rashid",
  //   imageSrc: img1,
  //   committee: "Working Body Committee",
  // },
  // {
  //   name: "Dr. Warse Simky",
  //   imageSrc: img1,
  //   committee: "Working Body Committee",
  // },
  // {
  //   name: "Dr. Shah Mohammad Amanullah",
  //   imageSrc: img1,
  //   committee: "Working Body Committee",
  // },
  // {
  //   name: "Prof Dr. Morshed Hasan Khan",
  //   imageSrc: img1,
  //   committee: "Working Body Committee",
  // },
  // {
  //   name: "Prof. Dr. Al Mozaddedi Al Fasani",
  //   imageSrc: img1,
  //   committee: "Working Body Committee",
  // },
  // {
  //   name: "Prof Dr. Abdur Rashid",
  //   imageSrc: img1,
  //   committee: "Working Body Committee",
  // },
  // {
  //   name: "Prof. Dr. Motiur Rahman Gazzali",
  //   imageSrc: img1,
  //   committee: "Working Body Committee",
  // },
  // {
  //   name: "Prof. Dr. Abul Hasnat Mohammad Shamim",
  //   imageSrc: img1,
  //   committee: "Working Body Committee",
  // },
  // {
  //   name: "Engr. Md. Mahbub Alam",
  //   imageSrc: img1,
  //   committee: "Working Body Committee",
  // },
  // {
  //   name: "Engr. Alamgir Hasin Ahmed",
  //   imageSrc: img1,
  //   committee: "Working Body Committee",
  // },
  // {
  //   name: "Engr. Ashraf Reza Faridy Zelany",
  //   imageSrc: img1,
  //   committee: "Working Body Committee",
  // },
  // {
  //   name: "Engr. Mahmudur Rahman Manna",
  //   imageSrc: img1,
  //   committee: "Working Body Committee",
  // },
  // {
  //   name: "Engr. Umasha Umayon Moni Chowdhury",
  //   imageSrc: img1,
  //   committee: "Working Body Committee",
  // },
  // // Rehabilitation Committee
  // {
  //   name: "Dr. Shah Mohammad Amanullah - (Convenor)",
  //   imageSrc: img1,
  //   committee: "Rehabilitation Committee",
  // },
  // // Overseas Committee
  // {
  //   name: "Dr. Zobaida Rahman - (Chief Advisor)",
  //   imageSrc: img1,
  //   committee: "Overseas Committee",
  // },
  // {
  //   name: "Prof. Dr. Abdul Karim - (Convenor)",
  //   imageSrc: img1,
  //   committee: "Overseas Committee",
  // },
  // // Research Committee
  // {
  //   name: "Prof. Dr. Abdul Karim - (Convenor)",
  //   imageSrc: img1,
  //   committee: "Research Committee",
  // },
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
  designation,
}: {
  name: string;
  imageSrc: string | StaticImageData;
  committee: string;
  designation:string
}) => {
  return (
    <div className="bg-white shadow-lg rounded overflow-hidden hover:shadow-xl transform transition-transform duration-300 hover:scale-105 lg:w-72 md:w-60 w-full h-72">
      <div className="relative w-48 h-40 mx-auto mt-5">
        <Image
          src={imageSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="p-3 text-center">
        <h3 className="text-[16px] font-semibold">{name}</h3>
        <h3 className="text-[16px] font-semibold">{designation}</h3>
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
                    designation={profile.designation}

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
