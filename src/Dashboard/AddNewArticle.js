import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import JoditEditor from "jodit-react";
import { allContext } from "../ContextApi/ContentProvider";
import { useForm } from "react-hook-form";



const AddNewArticle = () => {

  const [startDate, setStartDate] = useState(new Date());
  const { blogs } = useContext(allContext);

  const [config,setConfig] = useState({
    readonly: false,
    minHeight: 500
  })


  // form handeling 
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => fullData(data)
const [mainConent,setMainContent] = useState("")    

const publishTime = startDate.toLocaleTimeString()

const fullData = (data) =>{
const addPost = {...data,mainConent,publishTime}
console.log(addPost)
}

  // slug
  const [categorySlug,setCategorySlug]= useState('')
  const [postSlug,setPostSlug]= useState('')


 

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


// category handler for making it like title slug


const makingCategorySlug = categorySlug.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

    const makingPostSlug = postSlug.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

  return (

      <div className="py-12">
        <div className="max-w-full mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <form  onSubmit={handleSubmit(onSubmit)}>
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
                      {...register("title")}
                      onChange={(e)=>setPostSlug(e.target.value)}

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
                      defaultValue={postSlug ? makingPostSlug : "" }



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
                      {...register("authorImage")}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-xl text-gray-600">
                      Post Categories <span className="text-red-500">*</span>
                    </label>

                    <select
                      id="category"
                      name="category"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register("category")}                    >
                      <option  defaultValue="Choose a category">Choose a category</option>
                      {
                        categories.map((category,index)=> <option key={index} value={category}>{capitalizeFirstLetter(category)}</option> )
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
                      minDate={new Date()}
                      dateFormat="dd/MM/yyyy"
                      onChange={(date) => setStartDate(date)}
                      isClearable
                      placeholderText="I have been cleared!"
                      className="border-2 border-gray-300 p-2 w-full"
                      name="publishTime"
                      {...register("publishTime")}
        
                    />
                  </div>


                  <div>
                <label className=" text-gray-600">
                      Add new Category <span className="text-red-500 ml-1 text-sm">(Optional)</span>
                    </label>
                  <input
                      type="text"
                      className="border-2 border-gray-300 p-2 w-full my-4"
                      name="newCategory"
                      id="newCategory"
                      placeholder="Write your new category"
                      {...register("newCategory")}
                      onChange={(e)=>setCategorySlug(e.target.value)}

                    />
                    <br/>
                    <span className="relative">

                      <input
                      type="text"
                      readOnly={true}
                      className="border-2 border-gray-300 p-2 w-full my-4"
                      name="newCategorySlug"
                      id="newCategorySlug"
                      placeholder="write-your-category-slug"
                      {...register("newCategorySlug")}
                      defaultValue={categorySlug ? makingCategorySlug : "" }
                      />
                    </span>
             
                </div>
                  <div className="flex justify-center items-center w-full my-6 ">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-22 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                        type="file"
                        className="hidden"
                        name="featureImage"
                        {...register("featureImage")}
                      />
                    </label>
                  </div>
                </div>

                <div className="mb-8">
    
                  <JoditEditor tabIndex={1}  config={config}  onChange={data=> setMainContent(data)}/>
                </div>

                <div className="flex p-1">
            
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
