import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import axios from "axios";

// Creating Content
export const allContext = createContext();

// Component
const ContentProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [blogSingle, setSingleBlog] = useState([]);

  // Fetching for Blog
  const fetchBlog = async () => {
    const response = await axios.get(
      `http://localhost:5000/blogs`
    );

    setBlogs(response?.data);
  };
  // Fetching for Blog
  const fetchBlogSingle = async (id) => {
    const response = await axios.get(
      `http://localhost:5000/blogs/${id}`
    );
    console.log(response)
    setSingleBlog(response?.data);
    console.log(response)
  };

  // Fetching for categories
  

  useEffect(() => {
    fetchBlog();
    fetchBlogSingle();
  }, []);

  const value = { blogs, loading, fetchBlogSingle, blogSingle };

  return <allContext.Provider value={value}>{children}</allContext.Provider>;
};

export default ContentProvider;
