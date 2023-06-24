"use client";
import "@styles/components/dynamicText.scss";
import { useState, useEffect } from "react";

const DynamicText = () => {
  const strings = [
    "Exploring Competitive Programming",
    "Learning Java DSA",
    "Aspiring Software Dev",
  ];
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((index + 1) % strings.length);
        setIsVisible(true);
      }, 1000);
    }, 2400);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <p className={`fade-in ${isVisible ? "visible" : ""}`}>{strings[index]}</p>
  );
};

export default DynamicText;
// inline styles for transition
// .fade-in {
//   opacity: 0;
//   transition: opacity 0.5s ease-in-out;
// font-size: 10rem;
// }
