import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import JoditEditor from "jodit-react";
import { allContext } from "../ContextApi/ContentProvider";

const AddNewArticle = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [contentDescription, setContent] = useState("");
  const { blogs } = useContext(allContext);

  const [inputs, setInputs] = useState({});

  const postData = { ...inputs, startDate };

  const handleSubmit = (e) => {
    e.prevenetDefault();
    alert(postData);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const findCategory = (data, property) => {
    let newValue = data?.map((currentElm) => {
      return currentElm[property];
    });
    newValue = [...new Set(newValue)];
    return newValue;
  };

  const categories = findCategory(blogs, "category");

  // Capitalization the categories 

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


  return (
    <div>
      <div className="py-12">
        <div className="max-w-full mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <form onSubmit={handleSubmit} method="post">
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
                      onChange={handleChange}
                      defaultValue={inputs.title || ""}
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
                      name="slug"
                      id="slug"
                      placeholder="sample-demo-title"
                      onChange={handleChange}
                      defaultValue={inputs.slug || ""}
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
                      onChange={handleChange}
                      defaultValue={inputs.authorName || ""}
                    />
                  </div>
                  {/* // Author Image Choose  */}
                  <div className="mb-4">
                    <label className="text-xl text-gray-600">
                      Author Image <span className="text-red-500">*</span>
                    </label>
                    <br />
                    <input
                      type="file"
                      className="border-2 border-gray-300 p-2 w-full"
                      name="authorImage"
                      id="authorImage"
                      placeholder="Choose Your Author Image"
                      onChange={handleChange}
                      defaultValue={inputs.authorImage || ""}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-xl text-gray-600">
                      Post Categories <span className="text-red-500">*</span>
                    </label>

                    <select
                      id="category"
                      name="category"
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      defaultValue={inputs.category || ""}
                    >
                      <option selected>Choose a category</option>
                      {
                        categories.map(category=> <option defaultValue="US">{capitalizeFirstLetter(category)}</option> )
                      }
                      
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
                      dateFormat="dd/MM/yyyy"
                      onChange={(date) => setStartDate(date)}
                      isClearable
                      placeholderText="I have been cleared!"
                      className="border-2 border-gray-300 p-2 w-full"
                      name="date"
                      defaultValue={startDate || ""}
                    />
                  </div>


                  <div>
                <label className=" text-gray-600">
                      Add new Category <span className="text-red-500 ml-1 text-sm">(Optional)</span>
                    </label>
                  <input
                      type="text"
                      className="border-2 border-gray-300 p-2 w-full my-4"
                      name="newcategory"
                      id="newcategory"
                      placeholder="Write your new category"
                      onChange={handleChange}
                      defaultValue={inputs.newcategory || ""}
                    />
                </div>
                  <div className="flex justify-center items-center w-full my-6 ">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-10 h-10 mb-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          ></path>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        onChange={handleChange}
                        type="file"
                        className="hidden"
                        name="featureImage"
                        defaultValue={inputs.featureImage || ""}
                      />
                    </label>
                  </div>
                </div>

                <div className="mb-8">
    
                  <JoditEditor defaultValue={contentDescription || ""} tabIndex={1} />
                </div>

                <div className="flex p-1">
                  <select
                    defaultValue={inputs.action || ""}
                    className="border-2 border-gray-300 border-r p-2"
                    name="action"
                  >
                    <option>Save and Publish</option>
                    <option>Save Draft</option>
                  </select>
                  <button
                    type="submit"
                    className="p-3 bg-blue-500 text-white hover:bg-blue-400"
                    required
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewArticle;
