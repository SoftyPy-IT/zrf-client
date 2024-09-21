"use client";

import { useEffect, useState } from "react";
import "./Scroll.css";
import { FaAnglesUp } from "react-icons/fa6";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scrolling to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to handle the scroll event and toggle button visibility
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button className="scroll-up-button" onClick={scrollToTop}>
          <FaAnglesUp className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default Scroll;
