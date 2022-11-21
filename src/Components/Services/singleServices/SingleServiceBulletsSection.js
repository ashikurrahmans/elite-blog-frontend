import React from "react";
// import { FiCheckCircle } from "react-icons/fi";

const SingleServiceBulletsSection = () => {
  let checkIcon = (
    <span>
      {/* <FiCheckCircle
        style={{
          display: "inline",
          marginRight: "6px",
          fontSize: "22px",
          color: "green",
        }}
      /> */}
    </span>
  );

  return (
    <>
      <section className="bg-blue-300">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-9/12 mx-auto py-14">
          <div className="text-xl text-black">
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Permanent Tooth Replacement
            </p>
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Improved Chewing Ability
            </p>
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Natural Look and Function
            </p>
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Natural Look and Function
            </p>
          </div>
          <div className="text-xl text-black">
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Permanent Tooth Replacement
            </p>
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Improved Chewing Ability
            </p>
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Natural Look and Function
            </p>
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Natural Look and Function
            </p>
          </div>
          <div className="text-xl text-black">
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Permanent Tooth Replacement
            </p>
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Improved Chewing Ability
            </p>
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Natural Look and Function
            </p>
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Natural Look and Function
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleServiceBulletsSection;
