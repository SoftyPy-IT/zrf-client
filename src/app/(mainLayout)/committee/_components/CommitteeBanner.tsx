import React from "react";
import "./CommitteeBanner.css";
import Container from "@/components/share/Container";

type CommitteeProps = {
  language: string,
}
const CommitteeBanner = ({ language }: CommitteeProps) => {
  return (
    <div className="committee-banner">
      <Container>
        <div className="content">
          <div className="text-center">
            <h1 className="lg:text-5xl text-3xl font-bold uppercase">
              {language == 'ENG' ? ' Committee Members ' : 'কমিটির সদস্যরা'}
            </h1>
            <p>  {language == 'ENG' ? 'Ziaur Rahman Foundation' : 'জিয়াউর রহমান ফাউন্ডেশন'} </p>
          </div>
        </div>
      </Container>
    </div>

  );
};

export default CommitteeBanner;
