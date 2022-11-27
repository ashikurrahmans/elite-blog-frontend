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
  const [allCategories,setAllCategories] = useState([])
  const [showAllCategories,setShowAllCategories] = useState([])


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


    // Fetching for All Categories
    const findAllCategories = () => {
      setLoading(true);
      fetch(`http://localhost:5000/categories`)
        .then((res) => res.json())
        .then((data) => {
          setAllCategories(data);
        });
        setLoading(false);
    };


  // Category Slug

  const contentSlug = (data) => {
    const slug = data.toLowerCase().replace(/[^\w-]+/g, "-");
    return slug
  };



 // categoryClick show blogs 

 const showCategory = (data) =>{
  const categoryLower = data.toLowerCase()
  const catPD = blogs.filter(cat=> cat?.category === categoryLower) 
  setShowAllCategories(catPD)
 }

  useEffect(()=>{
    findAllCategories()
  },[])

  const value = {
    blogs,
    loading,
    fetchBlogSingle,
    blogSingle,
    filterValue,
    filterBlogs,
    contentSlug,
    allCategories,
    showAllCategories,
    showCategory

  };

  return <allContext.Provider value={value}>{children}</allContext.Provider>;
};

export default ContentProvider;
