"use client";
import DynamicText from "@components/DynamicText";
import ModelViewer from "@components/ModelViewer";
import SocialLinks from "@components/SocialLinks";
import Arrow from "@components/logos/Arrow";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Character from "@components/Character";

const Home = () => {
  const router = useRouter();

  const handleScrollToBottom = (event) => {
    event.preventDefault();
    const targetElement = document.getElementById("bottom");
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const link = document.querySelector(".scroll-to-bottom");
    if (link) {
      link.addEventListener("click", handleScrollToBottom);
    }

    return () => {
      if (link) {
        link.removeEventListener("click", handleScrollToBottom);
      }
    };
  }, []);

  return (
    <div className="main">
      <div className="hero">
        <ModelViewer />
        <DynamicText />
        <SocialLinks />
        <a href="#" className="scroll-to-bottom">
          <Arrow className="arrow" />
        </a>
      </div>
      <div className="about" id="bottom">
        {/* <Character /> */}
        <div className="contain">
          <div className="about-pic">
            <Character />
          </div>
          <div className="about-desc">
            <div className="about-title">About Me</div>
            <div className="about-text">
              <p>
                I am a passionate Java Developer pursuing BTech in Artificial
                Intelligence & Data Science at DYPU, Navi Mumbai. I have worked
                with technologies like Java, Python and ReactJS. Currently I am
                exploring Java DSA, Competitive programming, and Web
                Development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
