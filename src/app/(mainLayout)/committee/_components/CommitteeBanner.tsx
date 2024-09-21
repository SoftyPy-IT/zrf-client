import React from "react";
import "./CommitteeBanner.css";
import Container from "@/components/share/Container";

const NewsBanner = () => {
  return (
    <div className="committee-banner">
      <Container>
        <div className="content">
          <div className="text-center">
            <h1 className="lg:text-5xl text-3xl font-bold uppercase">
              Committee Members
            </h1>
            <p>Ziaur Rahman Foundation</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsBanner;
