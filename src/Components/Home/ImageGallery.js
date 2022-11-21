import React from "react";

const ImageGallery = ({ galleryTitle, galleryDescription, imageBox }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5  mx-auto">
          <div className="flex flex-col text-center w-full mb-20 my-24">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              {galleryTitle}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {galleryDescription}
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {imageBox?.map((item, i) => {
              return (
                <div className="lg:w-1/3 sm:w-1/2 p-4" key={i}>
                  <div className="flex relative" key={i}>
                    <img
                      alt="Implant Restoration"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src={item.ImageUrl}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                        {item.title}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {item.meta}
                      </h1>
                      <p className="leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default ImageGallery;
