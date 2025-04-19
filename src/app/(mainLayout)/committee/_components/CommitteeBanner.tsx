import React from "react";
import "./CommitteeBanner.css";
import Container from "@/components/share/Container";

type CommitteeProps = {
  language: string;
};
const CommitteeBanner = ({ language }: CommitteeProps) => {
  return (
    <div className="committee-banner md:h-[300px] h-[170px]">
      <Container>
        <div className="content">
          <div className="text-center">
            <h1 className="md:text-4xl text-2xl font-bold uppercase">
              {language == "ENG" ? " Committee " : "কমিটি"}
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CommitteeBanner;
