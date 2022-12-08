import React from "react";
import { Link } from "react-router-dom";

const HeroBottom = ({ greenSectionLeft, greenBottom, greenSectionRight }) => {
  return (
    <div className="bg-gray-100 lg:py-14 md:py-10 sm:py-10 py-10">
      {/* <div className="w-8/12 mx-auto text-black text-xl font-semibold"> */}
      {/* <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 sm:py-6">
          <div className="">
            <h2>{greenSectionLeft}</h2>
            <h1>{greenBottom}</h1>
          </div>
          <div className="lg:ml-24 lg:mt-2 my-3">
            <h1>{greenSectionRight}</h1>
          </div>
        </div> */}

      {/* </div> */}
      <div className="text-center w-8/12 mx-auto py-10">
        <h2 className="text-4xl font-bold text-black ">The Elite Advantages</h2>
        <p className="my-2">
        Our aim is to dental professional clients with absolute certainty in the supply of high-quality dental restorations. To achieve this requires our wealth of experience, excellent communication skills, and a true dental professional approach. We believe that elite dental restorations benefit from a true team approach, and partnering with clients and dental professionals is our intention in order to benefit our dental patients.
        </p>
        <div className="flex justify-center items-center mt-4">
            <Link to="">
              <button className="bg-[#83cf25] py-2 px-12 rounded-lg text-white font-bold">Know More</button>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default HeroBottom;
