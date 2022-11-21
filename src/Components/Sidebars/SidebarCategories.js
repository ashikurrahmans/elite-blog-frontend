import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { allContext } from "../../ContextApi/ContentProvider";

const SidebarCategories = () => {
  const { categories } = useContext(allContext);
  return (
    <>
      <div className="mb-6 bg-white shadow-md p-2 mt-7 w-72">
        <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
          Popular Topics
        </h5>
        {categories?.length ? (
          <ul>
            {categories.slice(0, 6).map((category) => (
              <li
                key={category?.id}
                className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300"
              >
                <Link
                  to={`/categories/${category?.attributes?.categorySlug}`}
                  className="flex items-center text-gray-600 cursor-pointer"
                >
                  <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                  {category?.attributes?.categoryName}
                  <span className="text-gray-500 ml-auto">
                    {category?.attributes?.blogs?.data.length} articles
                  </span>
                  <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ color: "red", textAlign: "center" }}>
            <h4>Categories not available </h4>
          </div>
        )}
      </div>
    </>
  );
};

export default SidebarCategories;
