import Container from "@/components/share/Container";
import "./Impact.css";
import programm from "../../../../../src/assets/images/program/project4.png";

import Image from "next/image";
import { Button } from "@mui/material";
import {
  VolunteerActivism,
  HealthAndSafety,
  AccountBalance,
} from "@mui/icons-material";
import React from "react";

const ImpactSection = () => {
  const impactData = [
    {
      id: 1,
      title: "Give Right Place",
      description:
        "The opportunities around you to shape you, sharpen your gifts, and prepare you to do.",
      icon: VolunteerActivism,
    },
    {
      id: 2,
      title: "Save Money & Health",
      description:
        "Giving up unhealthy habits such as smoking, drinking sugary soft drinks, or drinking alcohol.",
      icon: HealthAndSafety,
    },
    {
      id: 3,
      title: "Organisation & Programs",
      description:
        "A collection of organizational resources that are geared to accomplish a goals.",
      icon: AccountBalance,
    },
  ];

  return (
    <div className="impact-bg py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-16 items-center lg:mt-10 mt-20">
          <div className="space-y-5 text-white">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">
              We’re So Much Trusted Ziaur Rahman Foundations.
            </h1>

            <div className="space-y-5">
              {impactData.map((data) => (
                <div key={data.id} className="flex items-center gap-x-3">
                  {React.createElement(data.icon, { sx: { fontSize: "50px" } })}
                  <div className="space-y-2">
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                  </div>
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
