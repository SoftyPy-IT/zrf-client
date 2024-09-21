import Container from "@/components/share/Container";
import {
  School,
  HealthAndSafety,
  VolunteerActivism,
  LocalLibrary,
  Agriculture,
  Handshake,
  Water,
  Forest,
} from "@mui/icons-material";
import ProgramBanner from "./_components/ProgramBanner";

const page = () => {
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
    {
      title: "কৃষি উন্নয়ন প্রকল্প",
      description: "কৃষকদের সহায়তা এবং আধুনিক কৃষি প্রযুক্তি সরবরাহ।",
      icon: <Agriculture fontSize="large" className="text-green-700" />,
    },
    {
      title: "পানি সংরক্ষণ উদ্যোগ",
      description: "নিরাপদ পানি সরবরাহ এবং জল সংরক্ষণে উৎসাহ প্রদান।",
      icon: <Water fontSize="large" className="text-blue-400" />,
    },
    {
      title: "বন সংরক্ষণ কর্মসূচি",
      description: "বন সংরক্ষণ এবং পরিবেশবান্ধব প্রকল্পে অংশগ্রহণ।",
      icon: <Forest fontSize="large" className="text-green-900" />,
    },
    {
      title: "সহযোগিতা কর্মসূচি",
      description:
        "সামাজিক উন্নয়নে বিভিন্ন প্রতিষ্ঠান ও সংগঠনের সাথে সহযোগিতা।",
      icon: <Handshake fontSize="large" className="text-purple-500" />,
    },
  ];

  return (
    <div>
      <ProgramBanner />
      <Container className="my-20">
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
      </Container>
    </div>
  );
};

export default page;
