import React from "react";
import { Link } from "react-router-dom";

const SinglePdfForm = (props) => {
  const { title, buttonTitle, buttonLink, pdfImage, pdfLink } = props.item;

  return (
    <>
      <section>
        <div className="p-10 text-center rounded shadow-lg border border-[#6DB416] border-b-8">
          <h1 className="text-4xl font-bold mb-10">{title}</h1>
          <a
            href="https://go.ddslab.com/hubfs/Offers/Rx_Forms/Rx%20Forms%20Oct%202017/DDSLAB_RX_CNB.pdf"
            className="text-base font-semibold leading-none text-white py-4 px-10 bg-[#83cf25] rounded hover:bg-[#62ae05] focus:ring-2 focus:ring-offset-2 focus:bg-[#6DB417] focus:outline-none"
          >
            {buttonTitle}
          </a>
          <div className="flex justify-center items-center">
            <a href="https://go.ddslab.com/hubfs/Offers/Rx_Forms/Rx%20Forms%20Oct%202017/DDSLAB_RX_CNB.pdf">
              <img src={pdfImage} alt="crown" className="w-72 mt-10" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePdfForm;
