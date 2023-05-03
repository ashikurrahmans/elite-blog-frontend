import React from "react";
import BredCumbs from "./../Shared/BredCumbs";
import SinglePdfForm from "./SinglePdfForm";

const pdfData = [
  {
    id: 1,
    title: "Crown & Bridge",
    buttonTitle: "Download Rx Form",
    bttonLink: "/printable-forms",
    pdfImage:"https://i.ibb.co/xhQgYVn/Elite-Dental-Studio.png",
    pdfLink:
      "https://drive.google.com/uc?id=1fqASi2y2oyWcm2DdyVFEXMcHrVy3f8qp&export=download",
  }
];

const PrintableForms = () => {
  return (
    <div>
      <BredCumbs
        home="Home"
        page="printable-forms"
        url="/printable-forms"
      ></BredCumbs>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols gap-10 mx-20 my-16 ">
        {pdfData.map((item, i) => (
          <SinglePdfForm item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default PrintableForms;
