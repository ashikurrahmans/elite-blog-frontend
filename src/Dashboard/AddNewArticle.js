import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import JoditEditor from "jodit-react";
import { allContext } from "../ContextApi/ContentProvider";
import { useForm } from "react-hook-form";

const AddNewArticle = () => {
  const { allCategories } = useContext(allContext);
  const [startDate, setStartDate] = useState(new Date());
  const [featureImage, setfeatureImage] = useState(null); // Image Current url after upload

  const [postSlug, setPostSlug] = useState(""); // Slug


  const titleSlug = postSlug
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");



  const uploadImage = async (e) => {
    var file = e.target.files[0];
    var formdata = new FormData();

    formdata.append("file", file);
    formdata.append("cloud_name", "dbpiftrij");
    formdata.append("upload_preset", "mpght7ap");

    let res = await fetch(
      "https://api.cloudinary.com/v1_1/dbpiftrij/auto/upload",
      {
        method: "post",
        mode: "cors",
        body: formdata,
      }
    );
    let json = await res.json();
    setfeatureImage(json.secure_url);
  };

  const [config ] = useState({
    readonly: false,
    minHeight: 500,
  });

  // form handeling
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => fullData(data);
  const [mainConent, setMainContent] = useState("");

  const publishTime = startDate.toLocaleDateString();

  const fullData = (data) => {
    const addPost = { ...data, mainConent, publishTime, featureImage ,titleSlug};
    console.log(addPost);
  };

  // Capitalization the categories

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



  // ===============================================================================

  return (
    <div className="py-12">
      <div className="max-w-full mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
                <div className="mb-4">
                  <label className="text-xl text-gray-600">
                    Post Title <span className="text-red-500">*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border-2 border-gray-300 p-2 w-full"
                    name="title"
                    id="title"
                    placeholder="Write your title here"
                    onChange={(e) => setPostSlug(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="text-xl text-gray-600">
                    Post Slug <span className="text-red-500">*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border-2 border-gray-300 p-2 w-full"
                    name="titleSlug"
                    id="titleSlug"
                    placeholder="sample-demo-title"
                    {...register("titleSlug")}
                    value={postSlug ? titleSlug : ""}
                  />
                </div>
                <div className="mb-4">
                  <label className="text-xl text-gray-600">
                    Author Name <span className="text-red-500">*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border-2 border-gray-300 p-2 w-full"
                    name="authorName"
                    id="authorName"
                    placeholder="Write the name of author"
                    {...register("authorName")}
                  />
                </div>

                <div className="mb-4">
                  <label className="text-xl text-gray-600">
                    Post Categories <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="category"
                    name="category"
                    {...register("category")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option defaultValue="Choose a category">
                      Choose a category
                    </option>
                    {allCategories?.map((category, index) => (
                      <option key={index} value={category?.categoryName}>
                        {capitalizeFirstLetter(category?.categoryName)}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="text-xl text-gray-600">
                    Choose publish date
                    <span className="text-red-500">*</span>
                  </label>
                  <br />

                  <DatePicker
                    selected={startDate}
                    minDate={new Date()}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => setStartDate(date)}
                    isClearable
                    placeholderText="I have been cleared!"
                    className="border-2 border-gray-300 p-2 w-full"
                    name="publishTime"
                  />
                </div>
              </div>

              <div className="mb-8">
                <JoditEditor
                  tabIndex={1}
                  config={config}
                  onChange={(data) => setMainContent(data)}
                />
              </div>
              <div className="grid lg:grid-cols-2 sm:grid-cols-1">
                <div className="flex justify-center items-center w-full my-6">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-22 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
                  >
                    <div className="mb-8 relative">
                      <div>
                        <input
                          type="file"
                          name="featureImage"
                          id="featureImage"
                          className="sr-only"
                          onChange={uploadImage}
                          
                        />
                      </div>
              
                      <label
                        htmlFor="file"
                        className=" flex min-h-[300px] items-center justify-center  p-12 text-center"
                      >
                        <div>
                          <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                            Drop files here
                          </span>
                          <span className="mb-2 block text-base font-medium text-[#6B7280]">
                            Or
                          </span>
                          <button className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                            Browse
                          </button>
                        </div>
                      </label>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      name="featureImage"
                    />
                  </label>
                </div>
                <div>
                   {
                    featureImage && (
                      <img
                      src={featureImage && featureImage}
                      alt="feature"
                      className="w-[700px] h-[500px] relative "
                    ></img>
                    )
                   }
                </div>
              </div>

              <div className="flex p-1 my-16">
                <button
                  type="submit"
                  className="p-3 bg-blue-500 text-white hover:bg-blue-400"
                  required
                >
                  Published Article
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewArticle;
