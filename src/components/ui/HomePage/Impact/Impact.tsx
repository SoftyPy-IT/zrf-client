import Container from "@/components/share/Container";
import "./Impact.css";
import programm from "../../../../../src/assets/images/program/project4.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Image from "next/image";
import { Button } from "@mui/material";
import React from "react";

const ImpactSection = () => {
  const impactData = [
    {
      id: 1,
      title: "Integrated and Pro-People Development Initiatives",
      icon: CheckCircleIcon,
    },
    {
      id: 2,
      title: "Harnessing Natural and Human Resources",
      icon: CheckCircleIcon,
    },
    {
      id: 3,
      title: "Empowering Human Resources for Self-Reliance",
      icon: CheckCircleIcon,
    },
  ];

  return (
    <div className="impact-bg py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-16 items-center lg:mt-10 mt-20">
          <div className="space-y-5 text-white">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">
              We’re So Much Trusted Ziaur Rahman Foundation.
            </h1>

            <div className="space-y-5">
              {impactData.map((data) => (
                <div key={data.id} className="flex items-center gap-x-3">
                  {React.createElement(data.icon, { sx: { fontSize: "30px" } })}
                  <h3>{data.title}</h3>
                </div>
              ))}
            </div>
            <Button sx={{ background: "#E3C80D" }}>Donate Now</Button>
          </div>
          <Image src={programm} alt="Programm" width={1000} height={300} />
        </div>
      </Container>
    </div>
  );
};

export default ImpactSection;
