import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { allContext } from "../ContextApi/ContentProvider";
import DeletePopup from "./DeletePopup";

const AllCategoriesDash = () => {
  const { allCategories } = useContext(allContext);
  const [showModal, setShowModal] = useState(false);



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
        {allCategories?.map((category, index) => (
          <div className="bg-white shadow-lg p-4 w-full" key={index}>
            <h3 className="font-semibold mt-px my-4 text-2xl">
              {category?.categoryName}
            </h3>
            <p className="my-4 text-xl">{category?.categoryDescription}</p>
            <div className="grid lg:grid-cols-9">
              <Link to="/hello/dashboards/addnewcategory">
                <button className="bg-purple-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center">
                  EDIT
                </button>
              </Link>
              <button
                className="bg-red-700 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center"
                // onClick={openModal}
                onClick={() => setShowModal(true)}

              >
                DELETE
              </button>
            </div>
          </div>
        ))}

      </div>

      <DeletePopup showModal={showModal} setShowModal ={setShowModal} title="Want to delete this category?"></DeletePopup>    
  
    </>
  );
};

export default AllCategoriesDash;
