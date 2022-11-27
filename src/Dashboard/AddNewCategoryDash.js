import React, { useState } from "react";

const AddNewCategoryDash = () => {
  const [categorySlug, setCategorySlug] = useState("");

  const makingCategorySlug = categorySlug
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

  return (
    <div>
      <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px]">
          <form>
            <div class="mb-5">
              <label
                for="email"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Category Name
              </label>
              <input
                type="text"
                name="categoryName"
                id="categoryName"
                placeholder="Write your category"
                onChange={(e) => setCategorySlug(e.target.value)}
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="subject"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Category Slug
              </label>
              <input
                type="text"
                name="categorySlug"
                id="categorySlug"
                readOnly
                placeholder="You don't need to write"
                defaultValue={categorySlug ? makingCategorySlug : ""}
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="message"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Category Description
              </label>
              <textarea
                rows="4"
                name="categoryDescription"
                id="categoryDescription"
                placeholder="Type your description"
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
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
