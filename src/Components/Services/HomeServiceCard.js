import React from "react";
import { Link } from "react-router-dom";

const HomeServiceCard = (props) => {
  const { id, Servicetitle, serviceImg } = props.service;
  return (
    <>
      <div className="card lg:w-90 md:w-50 sm:w-66 hover:shadow rounded-lg">
        <Link to={`services/${id}`}>
          <figure>
            <img
              src={serviceImg}
              alt={Servicetitle}
              className="lg:w-full md:w-full sm:w-full w-full h-44 hover:brightness-75"
            />
          </figure>
          <div>
            <h2 className="text-lg dark:text-white text-white py-8 bg-[#6db416] text-center">
              {Servicetitle}
            </h2>
          </div>
        </Link>
      </div>
    </>
  );
};

export default HomeServiceCard;
