import React from "react";

const GoogleMap = ({ mapLink }) => {
  return (
    <>
      <div className="lg:w-2/3 md:w-1/2 w-full h-96 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          frameBorder="0"
          title="map"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src={mapLink}
        ></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
