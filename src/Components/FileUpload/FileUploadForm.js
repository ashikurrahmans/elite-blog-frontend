import React, { useState } from "react";
import { useForm } from "react-hook-form";



const FileUploadForm = () => {
  const [imageSrc,setImageSrc] = useState("")

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => postData(data);


  const postData = (data) => {
    const contants = {...data,imageSrc}
    console.log(contants)
  }

  return (
    <>
      <div className="w-full flex items-center justify-center my-12">
        <form  onSubmit={handleSubmit(onSubmit)}>
        <div className=" bg-white dark:bg-gray-800  lg:px-28 px-8">
          <div className="md:flex items-center">
            <div className="md:w-72 flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
                Choose Your File
              </label>
              <input
                tabIndex="0"
                type="file"
                onClick={(e) => setImageSrc(e.target.files[0])}
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
                Email Address
              </label>
              <input
                tabIndex="0"
                arial-label="Please input email address"
                type="email"
                {...register("email")}
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input email address"
              />
            </div>
          </div>
          <div className="md:flex items-center mt-8">
            <div className="md:w-72 flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
                Doctors First Name
              </label>
              <input
                tabIndex="0"
                arial-label="Please input company name"
                type="firstName"
                {...register("firstName")}
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input company name"
              />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
                Doctors Last Name
              </label>
              <input
                tabIndex="0"
                arial-label="Please input country name"
                type="lastName"
                {...register("lastName")}
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input country name"
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col mt-8">
              <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
                Message
              </label>
              <textarea
                tabIndex="0"
                aria-label="leave a message"
                type="contents"
                {...register("contents")}
                className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
              ></textarea>
            </div>
          </div>

          <div className="flex items-center justify-center w-full">
            <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-[#83cf25] rounded hover:bg-[#62ae05] focus:ring-2 focus:ring-offset-2 focus:bg-[#6DB417] focus:outline-none">
              SUBMIT
            </button>
        </div>
          </div>
        </form>
       
      </div>
    </>
  );
};

export default FileUploadForm;
