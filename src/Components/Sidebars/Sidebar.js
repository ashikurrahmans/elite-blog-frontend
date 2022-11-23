import React from "react";
import Categories from "./SidebarCategories";
import PopularArticles from "./PopularArticles";
import Search from "./Search";

const Sidebar = () => {
  return (
    <>
      <Search></Search>
      <Categories></Categories>
      <PopularArticles></PopularArticles>
    </>
  );
};

export default Sidebar;
