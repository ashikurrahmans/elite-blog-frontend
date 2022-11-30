import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { allContext } from "../ContextApi/ContentProvider";

const AllCategoriesDash = () => {
  const { allCategories } = useContext(allContext);


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
      <button className="bg-[#0EF059] font-medium px-4 py-2 rounded-md flex gap-1 items-center text-black">
          Add New Category
        </button>
      </Link>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-12 my-12">
        {allCategories?.map((category,index) => (
          <div className="bg-white shadow-lg p-4 w-full" key={index}>
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
