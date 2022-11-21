import React from "react";

const Faq = ({ faqTitle, faqDescription, faq }) => {
  return (
    <>
      <section className="dark:bg-gray-800 dark:text-gray-100 bg-[#6db416] text-white">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8 my-24">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            {faqTitle}
          </h2>
          <p>{faqDescription}</p>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            {faq?.map((item, i) => {
              return (
                <div key={i}>
                  <h3 className="font-semibold text-2xl my-4">{item.title}</h3>
                  <p className="mt-1 dark:text-gray-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
