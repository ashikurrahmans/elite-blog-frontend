import React from "react";
// import { BsFillChatRightDotsFill } from "react-icons/bs";

const IconBox = ({ contactBox }) => {
  return (
    <>
      <div className="flex flex-wrap -m-4">
        {contactBox?.map((item, i) => {
          return (
            <div className="xl:w-1/3 md:w-1/2 p-4" key={i}>
              <div className="border border-gray-200 p-6 rounded-lg bg-black text-white">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  {/* <BsFillChatRightDotsFill /> */}
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">
                  {item.iconTitle}
                </h2>
                <p className="leading-relaxed text-base">{item.contact}</p>
                <p className="leading-relaxed text-base">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default IconBox;
