import React from "react";
import videobg from "../../assets/videos/HeroSectionVideo.mp4";
import "./videoBackground.css";

const HeroSection = ({ homeTitle, homeDescription }) => {
  return (
    <>
      <header>
        <video className="video-bg" autoPlay={true} muted loop>
          <source src={videobg} type="video/mp4" />
        </video>

        <div className="video-overlay">
          <h1 className="text-white text-7xl tracking-normal mb-2 font-medium">
            GRAB <span className="bg-[#0ef059] font-bold px-2">ATTENTION</span>
          </h1>
          <h1 className="text-white text-7xl tracking-wide mt-2 font-medium">
            GROW YOUR
            <span className="bg-[#4cff6d] font-bold px-2 ml-2">PRACTICE</span>
          </h1>
        </div>
      </header>
    </>
  );
};

export default HeroSection;
