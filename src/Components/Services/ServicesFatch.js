import React, { useEffect, useState } from "react";
import HomeTitles from "../Home/HomeTitles";
import HomeServiceCard from "./HomeServiceCard";

const ServicesFatch = ({ serviceTitle, serviceDescription }) => {
  const [services, setServices] = useState([]);

  const queryUrl = "https://elitedentals.github.io/elite-data/servicepage.json";
  useEffect(() => {
    fetch(queryUrl)
      .then((res) => res.json())
      .then((data) => setServices(data));
  },[]);
  return (
    <section className="bg-white mt-[-20px]">
      <div className="w-9/12 mx-auto py-10">
        <HomeTitles
          title={serviceTitle}
          description={serviceDescription}
        ></HomeTitles>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-8 sm:gap-6 gap-4 gap-y-8">
          {services.map((service) => (
            <HomeServiceCard
              service={service}
              key={service.id}
            ></HomeServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesFatch;
