import PageTitle from "../PageTitle/PageTitle";
import HeroSection from "./HeroSection";
import HeroBottom from "./HeroBottom";
import ServicesFatch from "../Services/ServicesFatch";
import { useContext } from "react";
import { pageContent } from "./../../ContextApi/PagesContext";
import CustomHome from "./CustomHome";
import HomeDetail from "./HomeDetail";
import HomeFaq from "./HomeFaq";
import CustomerReviews from "./CustomerReviews";

const Home = () => {
  const { homeContent } = useContext(pageContent);

  const {
    homeTitle,
    homeDescription,

    serviceTitle,
    serviceDescription,
  } = homeContent;

  return (
    <>
      <PageTitle title="Best Dental Services"></PageTitle>
      <HeroSection
        homeTitle={homeTitle}
        homeDescription={homeDescription}
      ></HeroSection>
      <HeroBottom></HeroBottom>
      <ServicesFatch
        serviceTitle={serviceTitle}
        serviceDescription={serviceDescription}
      ></ServicesFatch>
      <CustomHome></CustomHome>
      <HomeDetail></HomeDetail>
      <HomeFaq></HomeFaq>
      <CustomerReviews></CustomerReviews>
    </>
  );
};

export default Home;
