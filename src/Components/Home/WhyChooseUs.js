import React from "react";
// import { AiOutlineCloudDownload } from "react-icons/ai";
// import { BiDonateBlood } from "react-icons/bi";
// import { BiCurrentLocation } from "react-icons/bi";

const WhyChooseUs = ({ iconSectionTitle, iconSectionDescription, icon }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 w-9/12 mx-auto">
          <div className="flex flex-col text-center w-full my-24">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">
              {iconSectionTitle}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {iconSectionDescription}
            </p>
          </div>

          <div className="flex flex-wrap -m-4 text-center">
            {icon?.map((SingleIcon, i) => {
              return (
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full" key={i}>
                  <div className="border-2  px-4 py-6 bg-black text-white rounded-2xl">
                    {
                      // <SingleIcon.IconName className="text-[#6DB416] w-12 h-12 mb-3 inline-block shadow-lg" />
                    }
                    <h2 className="title-font font-medium text-3xl text-white">
                      {SingleIcon.title}
                    </h2>
                    <p className="leading-relaxed">{SingleIcon.description} </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
