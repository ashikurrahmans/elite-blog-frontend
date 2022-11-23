import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { allContext } from "../../ContextApi/ContentProvider";

const SidebarCategories = () => {
  const { blogs } = useContext(allContext);

  const findCategory = (data, property) => {
    let newValue = data?.map((currentElm) => {
      return currentElm[property];
    });
    newValue = [...new Set(newValue)];
    return newValue;
  };

  const categories = findCategory(blogs, "category");


//   function getOccurrence(array, value) {
//     var count = 0;
//     array.forEach((v) => (v === value && count++));
//     return count;
// }

  // Capitalization the categories 

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


  return (
    <>
      <div className="mb-6 bg-white shadow-md p-4 mt-7 w-80">
        <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
          Popular Topics
        </h5>

        <ul>
          {categories.length <= 0 ? (
            <div style={{ color: "red", textAlign: "center" }}>
              <h4>Categories not available </h4>
            </div>
          ) : (
            categories?.map((category, index) => (
              <li
                key={category[index]}
                className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300"
              >
                <Link
                  to={`/categories/${""}`}
                  className="flex items-center text-gray-600 cursor-pointer"
                >
                  <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                  {capitalizeFirstLetter(category)}
                  <span className="text-gray-500 ml-auto">1 articles</span>
                  <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};

export default SidebarCategories;
