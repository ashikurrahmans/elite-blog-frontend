import React from "react";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p className="text-red-600">About</p>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Elite Dental Studio USA
            </h1>
            <p className="mb-8 leading-relaxed text-black">
              Elite Dental Studio is among the full-service dental laboratories
              in the USA, serving dental professionals since 2000. From gold to
              a ceramic, single tooth to complete mouth, our group of Dental
              Technicians continually exceeds the objectives of doctors. With
              this, we offer state-of-the-art aesthetic alternatives for every
              patient's dental restoration requirement. We belong to one of the
              most self-sufficient, reasonably-priced premium laboratories in
              the USA due to our high-quality products. Our mission is to
              construct consistently high-quality dentures and appliances. For
              this, we combine creative skills with cutting-edge technology to
              provide optimum function and lifelike appearances. Also, Elite
              Dental Studio aspires to be an extension of your dental office and
              its success, as shown by its reputation for customer service
              commitment. We thrive on being a leader in dental technology by
              developing cutting-edge materials and procedures and continually
              advancing the profession. We combine cutting-edge CAD/CAM
              technology with experienced workmanship to deliver products that
              precisely fit your requirements. Our restorations are entirely
              produced in our state-of-the-art dental office in the United
              States. Thus, we assure you that nothing will be outsourced and
              that only the finest quality materials are used.
            </p>
            <div className="flex justify-center mb-12">
              <Link
                to="/about"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Know More
              </Link>
            </div>
          </div>
          <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ml-4 shadow-xl">
            <img
              className="object-cover object-center rounded "
              alt="hero"
              src="https://www.pittmandental.com/hubfs/Pittman%20-%20May%202019%20Folder/Images/9X2B8093.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;
