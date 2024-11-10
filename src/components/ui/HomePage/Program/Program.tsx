import Container from "@/components/share/Container";
import {
  School,
  HealthAndSafety,
  VolunteerActivism,
  LocalLibrary,
} from "@mui/icons-material";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";

const OurProgramSection = () => {
  const programs = [
    {
      title: "সবার জন্য শিক্ষা",
      description: "অসচ্ছল শিশুদের জন্য শিক্ষার সুযোগ প্রদান।",
      icon: <School fontSize="large" className="text-blue-500" />,
    },
    {
      title: "স্বাস্থ্যসেবা উদ্যোগ",
      description: "চিকিৎসা সহায়তা এবং স্বাস্থ্যসেবা সুবিধা প্রদান।",
      icon: <HealthAndSafety fontSize="large" className="text-green-500" />,
    },
    {
      title: "স্বেচ্ছাসেবী কর্মসূচি",
      description: "বিভিন্ন সামাজিক কাজে স্বেচ্ছাসেবীদের অন্তর্ভুক্ত করা।",
      icon: <VolunteerActivism fontSize="large" className="text-red-500" />,
    },
    {
      title: "লাইব্রেরি পরিষেবা",
      description: "গ্রামীণ এলাকায় লাইব্রেরি ও শিক্ষা সম্পদ তৈরি করা।",
      icon: <LocalLibrary fontSize="large" className="text-yellow-500" />,
    },
  ];

  return (
    <div className="my-20">
      <Container>
        <h2 className="text-3xl font-bold uppercase text-center">
          Our Program
        </h2>
        <div className="w-28 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-5 mx-auto"></div>
        <p className="text-center lg:w-[500px] mx-auto mb-10">
          Our program provides expert guidance, innovative strategies, and
          personalized solutions to help businesses grow and succeed. We focus
          on delivering measurable results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-7">
          <Link href="/program">
            <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 text-white rounded-full uppercase text-sm">
              সব দেখুন <EastIcon />
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default OurProgramSection;
