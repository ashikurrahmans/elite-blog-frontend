import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleServiceHero from "./singleServices/SingleServiceHero";
import SingleServiceSecondSection from "./singleServices/SingleServiceSecondSection";
import SingleServiceThirdSection from "./singleServices/SingleServiceThirdSection";
import SingleServiceBulletsSection from "./singleServices/SingleServiceBulletsSection";
import ScheduleToday from "./singleServices/ScheduleToday";
import SingleServiceCustomersFeedBack from "./singleServices/SingleServiceCustomersFeedBack";

const ServiceSingle = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://elitedentals.github.io/elite-data/servicepage.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });

  const service = services.find((item) => item.id === parseInt(id));

  return (
    <>
      <SingleServiceHero></SingleServiceHero>
      <SingleServiceSecondSection></SingleServiceSecondSection>
      <SingleServiceThirdSection></SingleServiceThirdSection>
      <SingleServiceBulletsSection></SingleServiceBulletsSection>
      <SingleServiceSecondSection></SingleServiceSecondSection>
      <SingleServiceThirdSection></SingleServiceThirdSection>
      <ScheduleToday></ScheduleToday>
      <SingleServiceCustomersFeedBack></SingleServiceCustomersFeedBack>
    </>
  );
};

export default ServiceSingle;
