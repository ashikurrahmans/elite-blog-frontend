import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const pageContent = createContext();

const PagesContent = ({ children }) => {
  // Contents
  const [homeContent, setHomeContent] = useState([]);
  const [aboutContent, setAboutContent] = useState([]);
  const [servicesContent, setServicesContent] = useState([]);
  const [contactContent, setContactContent] = useState([]);

  // Loadings
  const [dataLoaded, setDataLoaded] = useState(false);

  // Home Page Content

  const fetchHome = async () => {
    const response = await axios.get(
      `https://elitedentals.github.io/elite-data/homepage.json`
    );

    setHomeContent(response.data[0]);
    setDataLoaded(true);
  };

  // About Page Content

  const fetchAbout = async () => {
    const response = await axios.get(
      `https://elitedentals.github.io/elite-data/aboutpage.json`
    );
    setAboutContent(response?.data[0]);
    setDataLoaded(true);
  };

  // Services Page Content
  const fetchServices = async () => {
    const response = await axios.get(
      `https://elitedentals.github.io/elite-data/servicepage.json`
      );
      setServicesContent(response?.data);
      setDataLoaded(true);
    };
    
    // Contact Page Content
    
    const fetchContact = async () => {
      const response = await axios.get(`https://elitedentals.github.io/elite-data/contactpage.json`
      );
      setContactContent(response?.data[0]);
      setDataLoaded(true);
    };
    


  useEffect(() => {
    fetchHome();
    fetchAbout();
    fetchServices();
    fetchContact()
  }, []);

  const value = {
    dataLoaded,
    homeContent,
    aboutContent,
    servicesContent,
    contactContent
  };
  return <pageContent.Provider value={value}>{children}</pageContent.Provider>;
};

export default PagesContent;
