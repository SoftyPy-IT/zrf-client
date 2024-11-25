import Container from "@/components/share/Container";
import React, { useEffect, useState } from "react";
import "./Videos.css";

const Videos = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="videos">
      <Container>
        <div className="content">
          <h1 className="lg:text-5xl text-4xl font-bold uppercase">Video Gallery</h1>
        </div>
      </Container>
    </div>
  );
};

export default Videos;
