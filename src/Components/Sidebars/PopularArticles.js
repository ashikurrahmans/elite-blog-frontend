import React from "react";
import { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { allContext } from "./../../ContextApi/ContentProvider";

const PopularArticles = () => {
  // Blog Context
  const { id } = useParams();
  const location = useLocation();
  const { blogs } = useContext(allContext);

  const allBlog =
    location.pathname === "/blogs"
      ? blogs?.map((blog) => blog)
      : blogs?.filter((blog) => blog.id !== id);
  return (
    <>
      <div className="mb-6 bg-white shadow-md p-2 mt-7 lg:w-80 md:w-60 sm:w-48">
        <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
          Popular Articles
        </h5>
        <ul>
          {allBlog.length > 0 &&
            allBlog?.slice(0, 3).map((blog) => (
              <li
                key={blog?._id}
                className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300"
              >
                <span>
                  <Link
                    rel="noopener noreferrer"
                    to="#"
                    className="font-serif hover:underline"
                  >
                    {blog && blog?.title}
                  </Link>
                  <p className="text-xs dark:text-gray-400">
                    47 minutes ago by
                    <Link
                      rel="noopener noreferrer"
                      to="#"
                      className="hover:underline dark:text-violet-400 ml-1"
                    >
                      {blog && blog?.authorName}
                    </Link>
                  </p>
                </span>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default PopularArticles;
