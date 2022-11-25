import React, { useContext, useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import Sidebar from "../Sidebars/Sidebar";
import Loader from "../Shared/Loader";
import { allContext } from "../../ContextApi/ContentProvider";

const Blogs = () => {
const {blogs,loading} = useContext(allContext)
const [filterData,setFilterData] = useState([])
const [showPerPage,setShowPerpage] = useState(5)
const [pagination,setPagination] = useState({
  start:0,
  end:showPerPage
})

useEffect(()=>{
setFilterData(blogs)
},[blogs])

const getUserInput = (value)=>{
if(value === ""){
 setFilterData(blogs)
}else{
  const filterResult = blogs.filter(blog => blog.title.toLowerCase().includes(value) || blog.mainContent.toLowerCase().includes(value)  )
  setFilterData(filterResult)
}
}

const changePagination = (start,end) =>{
  setPagination({start:start,end:end})
}


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="container mx-auto flex flex-wrap py-6">
          <div className="w-full lg:w-9/12 md:w-9/12 sm:12/12 flex flex-col items-center px-3">
            {filterData.length <= 0 ?  <h1 className="text-center text-red-800 text-5xl font-bold my-40 bg-white shadow-lg p-40">No Data Found!</h1>  : 
             filterData?.slice(pagination.start,pagination.end).map((blog) => {
              return <BlogCard blog={blog} key={blog?._id}></BlogCard>;
            })}
            <Pagination showPerPage={showPerPage} changePagination={changePagination} total={blogs?.length}></Pagination>
          </div>
          <div className="lg:block md:block sm:none lg:w-3/12 w-9/12 sm:12/12">
            <Sidebar getUserInput={getUserInput}></Sidebar>
          </div>
        </section>
      )}
    </>
  );
};

export default Blogs;
