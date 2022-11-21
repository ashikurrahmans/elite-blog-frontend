import PageTitle from "../PageTitle/PageTitle";
import WhyChooseUs from "./WhyChooseUs";
import ImageGallery from "./ImageGallery";
import HeroSection from "./HeroSection";
import Faq from "./Faq";
import HeroBottom from "./HeroBottom";
import ServicesFatch from "../Services/ServicesFatch";
import { useContext } from "react";
import { pageContent } from "./../../ContextApi/PagesContext";

const Home = () => {
  const { homeContent } = useContext(pageContent);

  const {
    homeTitle,
    homeDescription,
    greenSectionLeft,
    greenBottom,
    greenSectionRight,
    serviceTitle,
    serviceDescription,
    iconSectionTitle,
    iconSectionDescription,
    icon,
    faqTitle,
    faqDescription,
    faq,
    galleryTitle,
    galleryDescription,
    imageBox,
  } = homeContent;

  return (
    <>
      <PageTitle title="Best Dental Services"></PageTitle>
      <HeroSection
        homeTitle={homeTitle}
        homeDescription={homeDescription}
      ></HeroSection>
      <HeroBottom
        greenSectionLeft={greenSectionLeft}
        greenSectionRight={greenSectionRight}
        greenBottom={greenBottom}
      ></HeroBottom>
      <ServicesFatch
        serviceTitle={serviceTitle}
        serviceDescription={serviceDescription}
      ></ServicesFatch>
      <WhyChooseUs
        iconSectionTitle={iconSectionTitle}
        iconSectionDescription={iconSectionDescription}
        icon={icon}
      ></WhyChooseUs>
      <Faq faqTitle={faqTitle} faqDescription={faqDescription} faq={faq}></Faq>
      <ImageGallery
        galleryTitle={galleryTitle}
        galleryDescription={galleryDescription}
        imageBox={imageBox}
      ></ImageGallery>
    </>
  );
};

export default Home;
