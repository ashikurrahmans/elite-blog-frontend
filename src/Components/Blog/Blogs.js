import React, { useContext, useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import Sidebar from "../Sidebars/Sidebar";
import Loader from "../Shared/Loader";
import { allContext } from "../../ContextApi/ContentProvider";

const Blogs = () => {
const {blogs,loading} = useContext(allContext)


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="container mx-auto flex flex-wrap py-6">
          <div className="w-full lg:w-9/12 md:w-9/12 sm:12/12 flex flex-col items-center px-3">
            {blogs?.map((blog) => {
              return <BlogCard blog={blog} key={blog?._id}></BlogCard>;
            })}
            <Pagination></Pagination>
          </div>
          <div className="lg:block md:block sm:none lg:w-3/12 w-9/12 sm:12/12">
            <Sidebar></Sidebar>
          </div>
        </section>
      )}
    </>
  );
};

export default Blogs;
