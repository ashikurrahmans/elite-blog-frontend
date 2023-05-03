import React from "react";

const HomeTitles = (props) => {
  return (
    <>
      <div className="text-center w-full my-10 text-black">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
          {props.description}
        </p>
      </div>
    </>
  );
};

export default HomeTitles;
