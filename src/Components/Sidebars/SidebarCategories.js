import { useContext, useState } from "react";
import { allContext } from "../../ContextApi/ContentProvider";

const SidebarCategories = () => {
  const {blogs, allCategories,showCategory } = useContext(allContext);

  // Capitalize the categories  (first & after space)
  function capitalizeFirstLetter(string) {
    const arr = string.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
   return str2
  }

  const AfindCategory = (data, property) => {
    let newValue = data?.map((currentElm) => {
      const category = currentElm[property];
      const afterCapitalize = capitalizeFirstLetter(category)
      if (afterCapitalize) {
        return afterCapitalize;
      }
    });
    newValue = [...new Set(newValue)];
    return newValue;
  };
  const ourCategories = AfindCategory(allCategories, "categoryName");




  return (
    <>
      <div className="mb-6 bg-white shadow-md p-4 mt-7 w-80">
        <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
          Popular Topics
        </h5>

        {
          <ul>
            {ourCategories.length <= 0 ? (
              <div Style={{ color: "red" }}>
                <h4>Categories not available </h4>
              </div>
            ) : (
              ourCategories?.map((category,index) => (
                <li
                key={index}
                  onClick={() => showCategory(category)}
                  className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300"
                >
                  <span className="flex items-center text-gray-600 cursor-pointer">
                    <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                    {category}
                    <span className="text-gray-500 ml-auto">1 articles</span>
                    <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                  </span>
                </li>
              ))
            )}
          </ul>
        }
      </div>
    </>
  );
};

export default SidebarCategories;

// "title":"How to Pull Off a Personal Annual Review",
// "authorImage":"https://miro.medium.com/fit/c/48/48/1*i0M0YxpXoPQ_T-a2vcXxyA@2x.jpeg",
// "publishTime" : "10/11/22",
// "lastUpdate": "",
// "authorName" : "David Goal",
// "mainContent":"If you’ve ever driven a car, you know how important it is for your tires to grip the road. As long as your tires aren’t slipping along the road, you remain in control of your vehicle; when you turn your steering wheel, the angle at which your tires grip the road changes, propelling you forward with an accompanying change in direction. If your tires do slip, however, you’ll start to skid, losing your ability to control which direction your car travels in. It’s why rainy, snowy, and icy conditions are so dangerous, and why traveling at a speed too fast for the road you’re on so frequently leads to car crashes.",
// "featureImage":"https://miro.medium.com/max/720/0*EVZQyQcj64D8rYcc",
// "authorImage":"https://randomuser.me/api/portraits/women/94.jpg",
// "comments":21,
// "category":"fast and furious"
