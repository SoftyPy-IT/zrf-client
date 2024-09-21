import Container from "@/components/share/Container";
import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="news-banner">
      <Container>
        <div className="content">
          <h1 className="text-5xl font-bold uppercase">
            Recent Activities of ZRF
          </h1>
        </div>
      </Container>
    </div>
  );
};


export default Banner;
