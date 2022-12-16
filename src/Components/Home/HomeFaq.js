import React from "react";

const HomeFaq = ({ faqTitle, faqDescription, faq }) => {
  return (
    <>
      <section className="bg-gray-100 ">
        <div className="w-9/12 mx-auto py-10 text-white flex flex-col justify-center p-4 md:p-8">

          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            {faqTitle}
          </h2>
          <p>{faqDescription}</p>
          {/* <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            {faq?.map((item, i) => {
              return (
                <div key={i}>
                  <h3 className="font-semibold text-2xl my-4">{item.title}</h3>
                  <p className="mt-1 dark:text-gray-400">{item.description}</p>
                </div>
              );
            })}
          </div> */}
          <div className="dark:bg-gray-800 dark:text-gray-100 text-black">
          
              <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
                Frequently Asked Questions
              </h2>
              <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 ">
                <details>
                  <summary className="py-2 outline-none cursor-pointer">
                    Optio maiores eligendi molestiae totam dolores similique?
                  </summary>
                  <div className="px-4 pb-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde neque in fugiat magni, quas animi enim veritatis
                      deleniti ex. Impedit.
                    </p>
                  </div>
                </details>
                <details>
                  <summary className="py-2 outline-none cursor-pointer ">
                    Modi dolorem veritatis culpa quos consequuntur beatae itaque
                    excepturi perspiciatis?
                  </summary>
                  <div className="px-4 pb-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est aspernatur quae, eos explicabo odit minima libero
                      veniam similique quibusdam doloribus facilis ipsa
                      accusantium vel maiores corrupti! Libero voluptate a
                      doloribus?
                    </p>
                  </div>
                </details>
                <details>
                  <summary className="py-2 outline-none cursor-pointer">
                    Magni reprehenderit possimus debitis?
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut voluptates aspernatur dolores in consequatur doloremque
                      inventore reprehenderit, consequuntur perspiciatis
                      architecto.
                    </p>
                    <p>
                      Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                      veritatis velit quasi cupiditate unde eaque! Iure,
                      voluptatibus autem eaque unde possimus quae.
                    </p>
                  </div>
                </details>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default HomeFaq;
