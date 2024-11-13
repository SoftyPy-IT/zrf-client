/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import img from "../../../../src/assets/images/tarek-rahman/tarek.jpg";
import Container from "@/components/share/Container";
import AboutBanner from "./_components/AboutBanner";
import {
  LocalHospital,
  VolunteerActivism,
  MedicalServices,
  Handyman,
  Forest,
  Agriculture,
  School,
  Campaign,
} from "@mui/icons-material";
import TrustedCharity from "@/components/ui/HomePage/TrustedCharity/TrustedCharity";
import HelpingVirtue from "@/components/ui/HomePage/HelpingVirtue/HelpingVirtue";
import Volunteer from "@/components/ui/HomePage/Volunteer/Volunteer";
import History from "@/components/ui/HomePage/History/History";
import ProgrammSection from "../program/_components/ProgrammSection";



const AboutUs = () => {
  const programs = [
    {
      title: "ফ্রি মেডিকেল ক্যাম্প আয়োজন",
      description: "অসচ্ছল জনগোষ্ঠীর মাঝে বিনামূল্যে চিকিৎসা সেবা প্রদান।",
      icon: <LocalHospital fontSize="large" className="text-blue-500" />,
    },
    {
      title: "বন্যার্তদের মাঝে ত্রাণ বিতরণ",
      description: "বন্যা কবলিত এলাকায় চিকিৎসা ও খাদ্য সরবরাহ।",
      icon: <VolunteerActivism fontSize="large" className="text-green-500" />,
    },
    {
      title: "অ্যাজমা কেয়ার সেন্টার স্থাপন",
      description: "বগুড়া ও চট্টগ্রামে অ্যাজমা রোগীদের জন্য সহায়তা প্রদান।",
      icon: <MedicalServices fontSize="large" className="text-red-500" />,
    },
    {
      title: "প্লাস্টিক সার্জারি ক্যাম্প আয়োজন",
      description:
        "ঠোঁটকাটা, তালুকাটা এবং পোড়া রোগীদের জন্য প্লাস্টিক সার্জারি ক্যাম্প।",
      icon: <Handyman fontSize="large" className="text-yellow-500" />,
    },
    {
      title: "সামাজিক বনায়ন প্রকল্প",
      description: "পরিবেশ রক্ষার্থে সামাজিক বনায়ন প্রকল্পের আয়োজন।",
      icon: <Forest fontSize="large" className="text-green-700" />,
    },
    {
      title: "বীজ উৎপাদন ও বিতরণ",
      description: "ন্নত মানের বীজ উৎপাদন ও প্রক্রিয়াজাতকরণ।",
      icon: <Agriculture fontSize="large" className="text-green-500" />,
    },
    {
      title: "বৃত্তি প্রদান",
      description: "অস্বচ্ছল মেধাবী ছাত্রছাত্রীদের জন্য বৃত্তি প্রদান।",
      icon: <School fontSize="large" className="text-blue-400" />,
    },
    {
      title: "গণতন্ত্র পুনরুদ্ধারে সহায়তা",
      description:
        "আন্দোলনে পঙ্গুত্ববরণকারী এবং নিহত নেতা কর্মীদের পরিবারের সহায়তা।",
      icon: <Campaign fontSize="large" className="text-purple-500" />,
    },
  ];


  return (
    <div>
      <AboutBanner />
      <Container>
        <HelpingVirtue />
        {/* <Volunteer/> */}
        <section className="sectionMargin">
          <h2 className="text-center text-3xl font-bold">Remarkable Work</h2>
          <div className="w-44 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-7 mx-auto"></div>
          <ProgrammSection />
        </section>
        <History />
        {/* Call to Action Section */}
        <section className="py-16 my-16 bg-green-600 text-white text-center">
          <h2 className="text-3xl font-bold uppercase">Join Us </h2>
          <p className="mt-4">
            Your support can bring positive change to the lives of many people. Be a part of our foundation's efforts in national development.
          </p>
          <button className="mt-5 px-6 py-2 bg-yellow-600 font-semibold rounded">
          Join Now
          </button>
        </section>
      </Container>
    </div>
  );
};

export default AboutUs;
