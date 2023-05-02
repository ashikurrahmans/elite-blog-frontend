import React from "react";
import BredCumbs from "./../Shared/BredCumbs";
import SinglePdfForm from "./SinglePdfForm";

const pdfData = [
  {
    id: 1,
    title: "Crown & Bridge",
    buttonTitle: "Download Rx Form",
    bttonLink: "/printable-forms",
    pdfImage:
      "https://www.ddslab.com/wp-content/uploads/2022/05/DDSLab_RX_Crown_and_Bridge-229x300.jpg.webp",
    pdfLink:
      "https://go.ddslab.com/hubfs/Offers/Rx_Forms/Rx%20Forms%20Oct%202017/DDSLAB_RX_CNB.pdf",
  },
  {
    id: 2,
    title: "Crown & Bridge",
    buttonTitle: "Download Rx Form",
    bttonLink: "/printable-forms",
    pdfImage:
      "https://www.ddslab.com/wp-content/uploads/2022/05/DDSLab_RX_Crown_and_Bridge-229x300.jpg.webp",
    pdfLink:
      "https://go.ddslab.com/hubfs/Offers/Rx_Forms/Rx%20Forms%20Oct%202017/DDSLAB_RX_CNB.pdf",
  },
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
