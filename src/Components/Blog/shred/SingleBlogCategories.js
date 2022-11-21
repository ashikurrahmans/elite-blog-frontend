import { useContext } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { allContext } from "./../../../ContextApi/ContentProvider";

const SingleBlogCategories = () => {
  const { id } = useParams();
  const { loading, blogSingle, fetchBlogSingle } = useContext(allContext);
  useEffect(() => {
    fetchBlogSingle(id);
  });
  const blogAttr = blogSingle?.attributes;

  const categories = blogAttr?.categories?.data.map((item) => (
    <li className="bg-gray-200 hover:bg-gray-300 text-gray-500 text-sm list-none rounded-full py-1 px-2">
      <Link to={""}>{item.attributes.categoryName}</Link>
    </li>
  ));

  return (
    <>
      <div className="w-full px-4 md:w-1/2">
        <div
          className="wow fadeInUp mb-8 flex flex-wrap items-center md:mb-0 gap-2"
          data-wow-delay=".1s"
        >
          Categories : {categories}
        </div>
      </div>
    </>
  );
};

export default SingleBlogCategories;
