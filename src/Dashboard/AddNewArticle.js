import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddNewArticle = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <div className="py-12">
        <div className="max-w-full mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <form>
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
                  <div className="mb-4">
                    <label className="text-xl text-gray-600">
                      Post Title <span className="text-red-500">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      className="border-2 border-gray-300 p-2 w-full"
                      name="description"
                      id="description"
                      placeholder="Write your title here"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-xl text-gray-600">
                      Post Slug <span className="text-red-500">*</span>
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      className="border-2 border-gray-300 p-2 w-full"
                      name="description"
                      id="description"
                      placeholder="sample-demo-title"
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
                      name="description"
                      id="description"
                      placeholder="Write the name of author"
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
                      name="description"
                      id="description"
                      placeholder="Choose Your Author Image"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-xl text-gray-600">
                      Post Categories <span className="text-red-500">*</span>
                    </label>

                    <select
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose a category</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="text-xl text-gray-600">
                      Choose publish date
                      <span className="text-red-500">*</span>
                    </label>
                    <br />
                    <div>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      isClearable
                      placeholderText="I have been cleared!"
                      className="border-2 border-gray-300 p-2 w-full"
                
                    />
                 
                    </div>
                    
                  </div>
                </div>

                <div className="mb-8">
                  <label className="text-xl text-gray-600">
                    Content <span className="text-red-500">*</span>
                  </label>
                  <br />
                  <textarea
                    name="content"
                    className="border-2 border-gray-500"
                  ></textarea>
                </div>

                <div className="flex p-1">
                  <select
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
