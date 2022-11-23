import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";

// Creating Content
export const allContext = createContext();


// Component
const ContentProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [blogSingle, setSingleBlog] = useState([]);

  // Fetching for Blog
  const fetchBlog = () => {
    fetch(`http://localhost:5000/blogs`)
    .then(res => res.json())
    .then(data => setBlogs(data));

  };
  // Fetching for Blog
  const fetchBlogSingle = (id) => { 
    fetch(`http://localhost:5000/blogs/${id}`)
    .then(res => res.json())
    .then(data =>{
      setLoading(true)
      setSingleBlog(data)
      setLoading(false)

    });
  };

  // Fetching for categories
  

  useEffect(() => {
    fetchBlog();
  }, []);

  const value = { blogs, loading, fetchBlogSingle, blogSingle };

  return <allContext.Provider value={value}>{children}</allContext.Provider>;
};

export default ContentProvider;
