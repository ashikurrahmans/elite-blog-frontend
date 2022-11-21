import React from "react";
import { allContext } from "../../../ContextApi/ContentProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

const BlogCategory = () => {
  const { blogs } = useContext(allContext);
  const tags = blogs?.attributes?.tags.split(",");
  return (
    <>
      <div>
        {tags?.length > 0 &&
          tags.map((tag, i) => (
            <Link
              key={i}
              to="#"
              className="text-black text-xs bg-[#f0f0f0] hover:bg-[#E6E6E6] rounded-full p-1 mx-1"
            >
              {tag}
            </Link>
          ))}
      </div>
    </>
  );
};

export default BlogCategory;
