import Container from "@/components/share/Container";
import React from "react";
import "./Featured.css";

const News = () => {
  return (
    <div className="featured-banner">
      <Container>
        <div className="content">
          <h1 className="text-5xl font-bold uppercase">All Featured</h1>
        </div>
      </Container>
    </div>
  );
};

export default News;
