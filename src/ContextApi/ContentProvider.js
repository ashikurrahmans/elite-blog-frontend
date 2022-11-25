import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";

// Creating Content
export const allContext = createContext();

// Component
const ContentProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [blogSingle, setSingleBlog] = useState([null || ""]);
  const [filterBlogs, setFilterBlog] = useState([]);



  useEffect(() => {
    // fetch data
    setLoading(true)
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "http://localhost:5000/blogs"
        )
      ).json();

      // set state when the data received
      setBlogs(data);
      setLoading(false)
    };

    dataFetch();
  }, []);



  // Fetching for Blog

//     const fetchBlog = () => {
//       setLoading(true)
//       fetch(`http://localhost:5000/blogs`)
//         .then((res) => res.json())
//         .then((data) => {
//           setBlogs(data)
//         });
//         setLoading(false)
//     };
// fetchBlog()

  // Fetching for Blog
  const fetchBlogSingle = (id) => {
    setLoading(true);
    fetch(`http://localhost:5000/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleBlog(data);
      });
      setLoading(false);
  };

  // Fetching for categories

  const filterValue = (data) => {
    setLoading(true)
    const filterBlogs = blogs.filter((blog) => blog.category === data);
    setFilterBlog(filterBlogs);
    setLoading(false)

  };

  // Category Slug

  const contentSlug = (data) => {
    const slug = data.toLowerCase().replace(/[^\w-]+/g, "-");
    return slug
  };


  const value = {
    blogs,
    loading,
    fetchBlogSingle,
    blogSingle,
    filterValue,
    filterBlogs,
    contentSlug,
  };

  return <allContext.Provider value={value}>{children}</allContext.Provider>;
};

export default ContentProvider;
