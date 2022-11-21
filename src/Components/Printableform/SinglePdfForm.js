import React from "react";
import { Link } from "react-router-dom";

const SinglePdfForm = (props) => {
  const { title, buttonTitle, buttonLink, pdfImage, pdfLink } = props.item;

  return (
    <>
      <section>
        <div className="p-10 text-center rounded shadow-lg border border-green-500 border-b-8">
          <h1 className="text-4xl font-bold mb-10">{title}</h1>
          <Link
            to={`${buttonLink}`}
            className="text-base font-semibold leading-none text-white py-4 px-10 bg-[#83cf25] rounded hover:bg-[#62ae05] focus:ring-2 focus:ring-offset-2 focus:bg-[#6DB417] focus:outline-none"
          >
            {buttonTitle}
          </Link>
          <div className="flex justify-center items-center">
            <Link to={pdfLink}>
              <img src={pdfImage} alt="crown" className="w-72 mt-10" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePdfForm;
