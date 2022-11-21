import { useContext } from "react";
import { Link } from "react-router-dom";
import { pageContent } from "./../../ContextApi/PagesContext";

const ServiceItem = () => {
  const { servicesContent } = useContext(pageContent);

  return (
    <>
      {servicesContent?.map((service, i) => {
        return (
          <Link to={`${service.id}`} key={i}>
            <div className="py-4 ">
              <div id="card py-10 ">
                <div className="container w-100 lg:w-4/5 mx-auto flex flex-col hover:shadow-2xl">
                  <div
                    v-for="card in cards"
                    className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl mt-4 w-100 mx-2"
                  >
                    <div className="h-full w-auto md:w-1/2">
                      <img
                        className="inset-0 object-cover object-center lg:h-80 lg:w-96 hover:opacity-90"
                        src={service.serviceImg}
                        alt="img"
                      />
                    </div>
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h3 className="font-semibold text-2xl leading-tight truncate">
                        {service.Servicetitle}
                      </h3>
                      <p className="mt-2">{service.description}</p>
                      <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                        {service.iconDescription.map((item) => (
                          <li className="my-1 lg:my-1 lg:text-sm">
                            <span className="inline-flex items-center justify-center w-3 h-3 mr-2 text-white bg-yellow-300 rounded-full">
                              <span className="text-xs">✓</span>
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ServiceItem;
