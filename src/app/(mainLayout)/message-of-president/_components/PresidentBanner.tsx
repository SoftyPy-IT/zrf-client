import React from "react";
import "./PresidentBanner.css";
import Container from "@/components/share/Container";

const NewsBanner = () => {
  return (
    <div className="president-banner">
      <Container>
        <div className="content">
          <div className="text-center">
            <h1 className="lg:text-5xl text-3xl font-bold uppercase">
              Message from the President
            </h1>
            <p>Ziaur Rahman Foundation</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsBanner;
