import React from "react";

const SingleServiceSecondSection = () => {
  return (
    <>
      <section className="text-center py-12">
        <h2 className="text-3xl text-[#0F8BBC] font-semibold">
          Dental Implants in San Jose to Replace Missing Teeth
        </h2>
        <h3 className="text-xl text-black my-2">
          We Offer Both Titanium and Ceramic Metal-Free Dental Implants Here in
          San Jose.
        </h3>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-900">
              SPECIAL OFFER
            </h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              30% Off Dental Implant Denture
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Schedule Today
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://www.serenitydentalsanjose.com/wp-content/uploads/2019/09/dental-implants-san-jose-5.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleServiceSecondSection;
