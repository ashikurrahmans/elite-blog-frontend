import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { allContext } from "../ContextApi/ContentProvider";
import Loader from "../Components/Shared/Loader";
import DashboardBlogItem from "./DashboardBlogItem";

const AllArticles = () => {
  const { blogs, loading } = useContext(allContext);
  return (
    <>
      <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
        <div className="sm:flex items-center justify-between">
          <div className="flex items-center">
            <Link
              className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800"
              to=" "
            >
              <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                <p>All</p>
              </div>
            </Link>
            <Link
              className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
              to=" "
            >
              <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                <p>Done</p>
              </div>
            </Link>
            <Link
              className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
              to=" "
            >
              <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                <p>Pending</p>
              </div>
            </Link>
          </div>
          <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
            <p>Sort By:</p>
            <select
              aria-label="select"
              className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1"
            >
              <option className="text-sm text-indigo-800">Oldest</option>
              <option className="text-sm text-indigo-800">Latest</option>
            </select>
          </div>
        </div>
        <div className="mt-7 overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr>
                <th>Author</th>
                <th>Article Title</th>
                <th>Author Name</th>
                <th>Published Date</th>
                <th>Comments</th>
                <th>Post Updated</th>
              </tr>
            </thead>

            {loading ? (
              <Loader />
            ) : blogs.length <= 0 ? (
              '<h1 className="text-2xl font-bold text-red-700">No Articles Available</h1>'
            ) : (
                blogs.map(blog=>  ( <DashboardBlogItem key={blog._id} blog={blog}/>))
            
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default AllArticles;
