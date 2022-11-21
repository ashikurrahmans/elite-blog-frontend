import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SInleBlogServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://elitedentals.github.io/elite-data/servicepage.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      {services?.slice(0, 3).map((service) => (
        <div className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <Link to={`services/${service.id}`}>
            <img
              className="rounded-t-lg px-5 py-2"
              src={service?.serviceImg}
              alt="step3"
            />
          </Link>
          <div className="p-5">
            <Link to={`services/${service.id}`}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {service?.Servicetitle}
              </h5>
            </Link>
            <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">
              Big case study
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {service?.description.slice(0, 120)}
            </p>
            <Link
              to={`services/${service.id}`}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default SInleBlogServices;
