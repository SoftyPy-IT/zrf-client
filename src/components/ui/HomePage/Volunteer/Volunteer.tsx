import Container from "@/components/share/Container";
import React from "react";
import FoundationIcon from "@mui/icons-material/EmojiEvents";
import DonationIcon from "@mui/icons-material/VolunteerActivism";
import PartnersIcon from "@mui/icons-material/Public";
import ProjectsIcon from "@mui/icons-material/AssignmentTurnedIn";
import InsertChartIcon from "@mui/icons-material/InsertChart";

const Volunteer = () => {
  const stats = [
    {
      value: "35+",
      label: "Years of Foundation",
      icon: <FoundationIcon sx={{ fontSize: 60 }} />,
    },
    {
      value: "68+",
      label: "Monthly Donation ",
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

  return (
    <div className="mt-20">
      <div className="bg-green-600 text-white py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center p-10">
          <div className="lg:mb-0 mb-10">
            <h2 className="text-lg italic font-medium mb-5">
              <InsertChartIcon fontSize="large" /> Company Statistics
            </h2>
            <h1 className="lg:text-4xl text-2xl font-bold mt-2">
              Highest Ambition is to Help People
            </h1>
            <button className="mt-8 px-6 py-2 border border-white text-white font-semibold hover:bg-white hover:text-green-600 transition">
              Contact Us &raquo;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-5">
                <div className="border p-2 rounded-full">{stat.icon}</div>
                <div>
                  <h1 className="text-6xl font-bold">{stat.value}</h1>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
