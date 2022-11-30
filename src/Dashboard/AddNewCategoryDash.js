import React, {  useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';



const AddNewCategoryDash = () => {
  const [titleToCategorySlug, setTitleToCategorySlug] = useState("");
 
  const categorySlug = titleToCategorySlug
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

    const { register, handleSubmit,reset} = useForm();
    const onSubmit = (data) => {
      const category = {...data,categorySlug,categoryName:titleToCategorySlug}
      postToDatabase(category)
     reset(category)
    }
    const postToDatabase =  (category) => {
       fetch('http://localhost:5000/categories', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(category),
          
        })
        .then(data=>data.json())
        .then(()=> {
          toast.success("New Category Added")

        })       
      }


  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Category Name
              </label>
              <input
                type="text"
                name="categoryName"
                id="categoryName"
                placeholder="Write your category"
                onChange={(e) => setTitleToCategorySlug(e.target.value)}



                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Category Slug
              </label>
              <input
                type="text"
                name="categorySlug"
                id="categorySlug"
                readOnly
                placeholder="You don't need to write"
                defaultValue={titleToCategorySlug ? categorySlug : ""}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Category Description
              </label>
              <textarea
                rows="4"
                name="categoryDescription"
                id="categoryDescription"
                placeholder="Type your description"
                {...register("categoryDescription")}
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewCategoryDash;
