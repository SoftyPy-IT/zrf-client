import React from "react";
import Container from "@/components/share/Container";
import FoundationIcon from "@mui/icons-material/EmojiEvents";
import DonationIcon from "@mui/icons-material/VolunteerActivism";
import PartnersIcon from "@mui/icons-material/Public";
import ProjectsIcon from "@mui/icons-material/AssignmentTurnedIn";

const stats = [
  {
    value: "35+",
    label: "Years of Foundation",
    icon: <FoundationIcon sx={{ fontSize: 60 }} />,
  },
  {
    value: "68+",
    label: "Monthly Donate",
    icon: <DonationIcon sx={{ fontSize: 60 }} />,
  },
  {
    value: "8k+",
    label: "Global Partners",
    icon: <PartnersIcon sx={{ fontSize: 60 }} />,
  },
  {
    value: "93+",
    label: "Project Complete",
    icon: <ProjectsIcon sx={{ fontSize: 60 }} />,
  },
];

const Statistics = () => {

   const impactData = [
    {
      title: "Years of Foundation",
      value: "25+",
      icon: <FoundationIcon sx={{ fontSize: 60 }} />,
    },
    {
      title: "Volunteers",
      value: "1000+",
      icon: <DonationIcon sx={{ fontSize: 60 }} />,
    },
    {
      title: "Completed Project",
      value: "200+",
      icon: <PartnersIcon sx={{ fontSize: 60 }} />,
    },
    {
      title: "Amount of Donation ",
      value: "$1M+",
      icon: <ProjectsIcon sx={{ fontSize: 60 }} />,
    },
  ];
  return (
    <Container>
      <div className="-mb-[100px] z-[99] relative">
       
        <div className="bg-white p-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {impactData.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white px-5 py-12 text-center border-b-4 border hover:border-green-600 transition duration-300 rounded-sm"
              >
                <div className="text-green-600 text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-semibold text-lg mb-4">
                  {stat.title}
                </div>
                <div className="text-green-600">{stat.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Statistics;
