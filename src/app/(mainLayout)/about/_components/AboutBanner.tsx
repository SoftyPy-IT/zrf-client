import React from "react";
import "./AboutBanner.css";
import Container from "@/components/share/Container";

const AboutBanner = () => {
  return (
    <div className="about-banner">
      <Container>
        <div className="content">
          <h1 className="lg:text-5xl text-3xl font-bold uppercase text-center">
            About Us
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default AboutBanner;
