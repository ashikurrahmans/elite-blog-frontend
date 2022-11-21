import React from "react";

const HeroBottom = ({ greenSectionLeft, greenBottom, greenSectionRight }) => {
  return (
    <div className="bg-[#6DB416] lg:py-14 md:py-10 sm:py-10 py-10">
      <div className="w-8/12 mx-auto text-white text-xl font-semibold">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 sm:py-6">
          <div className="">
            <h2>{greenSectionLeft}</h2>
            <h1>{greenBottom}</h1>
          </div>
          <div className="lg:ml-24 lg:mt-2 my-3">
            <h1>{greenSectionRight}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
