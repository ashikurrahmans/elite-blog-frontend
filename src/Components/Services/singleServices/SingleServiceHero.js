import React from "react";

const singleServiceHero = () => {
  return (
    <>
      <div className="relative">
        <img
          src="https://www.dentalgetaways.com.au/wp-content/uploads/2015/11/old-smiling-couple.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-opacity">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className=" flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12"></div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="p-7 sm:p-10">
                  <button className="btn no-animation bg-[#2382B3] text-white font-bold">
                    Schedule a Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default singleServiceHero;
