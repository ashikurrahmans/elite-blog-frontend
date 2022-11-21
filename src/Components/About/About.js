import React from "react";
import { Link } from "react-router-dom";
import BredCumbs from "../Shared/BredCumbs";
import PageTitle from "./../PageTitle/PageTitle";
// import { BsFillCloudHailFill } from 'react-icons/fa';

// import { BsArrowRightShort } from "react-icons/bs";
import { useContext } from "react";
import { pageContent } from "./../../ContextApi/PagesContext";

const About = () => {
  const { aboutContent } = useContext(pageContent);

  const {
    aboutTitle,
    aboutDescription,
    founderImage,
    meta,
    name,
    description,
    founderDescription,
    // promisiseTitle,
    // promiseDesciption,
    // videoUrl,
    advantageTitle,
    AdvantagesDescription,
    iconBox,
  } = aboutContent;

  return (
    <div>
      <PageTitle title="About"></PageTitle>
      <BredCumbs home="Home" page="About" url="/about"></BredCumbs>
      <div className="flex flex-col text-center  mb-20 mt-20 w-9/12 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          {aboutTitle}
        </h1>
        <p className="leading-relaxed text-base ml-6 mr-6 mx-auto">
          {aboutDescription}
        </p>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 md:flex-row flex-col ">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded-2xl ml-6 shadow-2xl"
              alt="hero"
              src={founderImage}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left text-center">
            <p className="text-red-700 font-bold">{meta}</p>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {name}
            </h1>
            <h2 className="text-red-700 font-semibold">{description}</h2>
            <p className="mb-8 leading-relaxed">{founderDescription}</p>
          </div>
        </div>
      </section>

      {/* <section className="text-gray-600 body-font my-20">
        <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {promisiseTitle}
            </h1>
            <p className="mb-8 leading-relaxed w-5/6">{promiseDesciption}</p>
            <div className="flex justify-center mb-6">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Know More
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 relative">
            <img
              className="object-cover object-center absolute w-full h-80 hover:cursor-pointer"
              alt="hero"
              src="https://fbutube.com/media/images/play_button/play_button_added.webp"
            />
            <div className="video-responsive">
              <iframe
                className="w-full h-80 "
                src={videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          </div>
        </div>
      </section> */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              {advantageTitle}
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              {AdvantagesDescription}
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {iconBox?.map((item, i) => {
              return (
                <div
                  className="p-4 md:w-1/3 flex flex-col text-center items-center"
                  key={i}
                >
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">

                    {/* <BsFillCloudHailFill/> */}
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      {item.iconTitle}
                    </h2>
                    <p className="leading-relaxed text-base">
                      {item.iconDescription}
                    </p>
                    <Link
                      to={item.iconUrl}
                      className="mt-3 text-indigo-500 inline-flex items-center ml-4"
                    >
                      Learn More
                      {/* <BsArrowRightShort /> */}
                    </Link>
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

export default About;
