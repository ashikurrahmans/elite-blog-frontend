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

        {/* <div className="video-overlay">
          <h1 className="text-white text-7xl tracking-normal mb-2 font-medium">
            Welcome 
          </h1>
          <span className="text-white text-5xl my-4 font-bold">to</span>
          <h1 className="text-black text-7xl tracking-wide bg-[#4cff6d] p-4 font-bold rounded">
            {homeTitle}
            <span className="bg-[#4cff6d] font-bold px-2 ml-2">PRACTICE</span>
          </h1>
        </div> */}
      </header>
    </>
  );
};

export default HeroSection;
