import React from "react";

const SingleServiceThirdSection = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://www.serenitydentalsanjose.com/wp-content/uploads/2019/09/san-jose-dental-implants-800x800-750x750.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-16">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-900">
              WHAT ARE DENTAL IMPLANTS?
            </h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              A Permanent Tooth Replacement Solution
            </h1>
            <p className="mb-8 leading-relaxed">
              A dental implant is a small ceramic or titanium screw secured into
              the jawbone which serves as the anchor or tooth root of the
              replacement tooth. Both the Ceramic Metal-Free and Titanium
              implants are a biocompatible material that fuses with the jaw bone
              which helps to stabilize the implant and prevent facial changes
              that can occur with bone loss.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Schedule Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleServiceThirdSection;
