import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { allContext } from "../ContextApi/ContentProvider";
import AddNewCategoryDash from "./AddNewCategoryDash";

const AllCategoriesDash = () => {
  const { allCategories } = useContext(allContext);

  const AfindCategory = (data, property) => {
    let newValue = data?.map((currentElm) => {
      const category = currentElm[property];
   return category
    });
    newValue = [...new Set(newValue)];
    return newValue;
  };
  const ourCategories = AfindCategory(allCategories, "categoryName");
  console.log(ourCategories);

  return (
    <>
      <div className="grid lg:grid-cols-8 ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

      <Link to={"/hello/dashboards/addnewcategory"}>
      <button className="bg-[#0EF059] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center text-black">
          Add New Category
        </button>
      </Link>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-12 my-12">
        {allCategories?.map((category) => (
          <div className="bg-white shadow-lg p-4 w-full">
            <h3 className="font-semibold mt-px my-4 text-2xl">
              {category?.categoryName}
            </h3>
            <p className="my-4 text-xl">{category?.categoryDescription}</p>
            <Link to="">
              <button className="bg-purple-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center">
                Edit Category
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllCategoriesDash;
