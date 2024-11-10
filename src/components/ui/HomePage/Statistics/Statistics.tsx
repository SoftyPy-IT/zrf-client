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
  return (
    <Container>
      <div className="bg-gray-100 p-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white px-5 py-10 shadow-lg text-center border-b-4 border-transparent hover:border-green-600 transition duration-300"
            >
              <div className="text-green-600 text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-gray-700 font-semibold text-lg mb-4">
                {stat.label}
              </div>
              <div className="text-green-600">{stat.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Statistics;
