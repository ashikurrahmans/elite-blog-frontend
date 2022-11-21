import { React, useContext, useRef } from "react";
import PageTitle from "../PageTitle/PageTitle";
import BredCumbs from "./../Shared/BredCumbs";
// import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useEffect } from "react";
import IconBox from "./IconBox";
import GoogleMap from "./GoogleMap";
import { pageContent } from "../../ContextApi/PagesContext";

const Contact = () => {
  let form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_pi7hzkr",
  //       "template_c6y6nys",
  //       form.current,
  //       "UWPT-zbO6jI5U64NU"
  //     )
  //     .then(
  //       (result) => {
  //         toast.success("Sending Email");
  //       },
  //       (error) => {
  //         toast.error("Sending Failed");
  //       }
  //     );
  // };


  const {contactContent} = useContext(pageContent)

  console.log(contactContent)
  const {
    contactTitle,
    contactDescription,
    contactBox,
    feedBackTitle,
    feedBackDescription,
    mapLink,
  } = contactContent;
  return (
    <div>
      <PageTitle title="Contact US"></PageTitle>
      <BredCumbs home="Home" page="Contact" url="/contact"></BredCumbs>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {contactTitle}
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              {contactDescription}
            </p>
          </div>
          <IconBox contactBox={contactBox} />
        </div>
      </section>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 pb-20 mx-auto flex sm:flex-nowrap flex-wrap">
          <GoogleMap mapLink={mapLink} />
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              {feedBackTitle}
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              {feedBackDescription}
            </p>
            {/* onSubmit={sendEmail} */}
            <form ref={form} > 
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <input
                // onClick={handleForm}
                type="submit"
                value="Submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer"
              />
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Contact;
