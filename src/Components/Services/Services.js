import React from "react";
import BredCumbs from "./../Shared/BredCumbs";
import PageTitle from "./../PageTitle/PageTitle";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <div>
      <PageTitle title="Our Services"></PageTitle>
      <BredCumbs home="Home" page="Services" url="/services"></BredCumbs>
      <section className="lg:w-12/12 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center mt-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Business Services To Help Grow Your Dental Practice
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Whatever cardigan tote bag
            tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke
            farm-to-table.
          </p>
        </div>
        <ServiceItem></ServiceItem>
      </section>
    </div>
  );
};

export default Services;
