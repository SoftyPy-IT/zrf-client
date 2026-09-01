import React from "react";
import "./CommitteeBanner.css";
import Container from "@/components/share/Container";

type CommitteeProps = {
  language: string;
};
const CommitteeBanner = ({ language }: CommitteeProps) => {
  return (
    <div className="committee-banner md:h-[260px] h-[170px]">
      <Container>
        <div className="content">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-10 h-[3px] bg-gradient-to-r from-yellow-500 to-green-500 rounded-full"></div>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-yellow-400">
                {language == "ENG" ? "Our Leadership" : "আমাদের নেতৃত্ব"}
              </span>
              <div className="w-10 h-[3px] bg-gradient-to-r from-green-500 to-yellow-500 rounded-full"></div>
            </div>
            <h1 className="md:text-4xl text-2xl font-extrabold uppercase tracking-wide">
              {language == "ENG" ? "Committee" : "কমিটি"}
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CommitteeBanner;