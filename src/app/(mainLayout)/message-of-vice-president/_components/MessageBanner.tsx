import React from "react";
import "./PresidentBanner.css";
import Container from "@/components/share/Container";

type TProps = {
  title: string,
  text:string,
}
const MessageBanner = ({title, text}:TProps) => {
  return (
    <div className="president-banner">
      <Container>
        <div className="content">
          <div className="text-center">
            <h1 className="lg:text-5xl text-3xl font-bold uppercase">
             {title}
            </h1>
            {/* <p>{text}</p> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MessageBanner;

