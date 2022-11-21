import React from "react";

const ScheduleToday = () => {
  return (
    <>
      <section className="bg-blue-300 py-12">
        <div className="w-9/12 mx-auto">
          <div className="flex items-center text-black text-bold gap-12">
            <p className="text-2xl">
              SCHEDULE AN APPOINTMENT FOR A COMPLIMENTARY CONSULTATION
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Schedule Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScheduleToday;
