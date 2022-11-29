import React from "react";
import Categories from "./SidebarCategories";
import PopularArticles from "./PopularArticles";
import Search from "./Search";
import FacebookPageLike from "./FacebookPageLike";

const Sidebar = ({getUserInput}) => {
  return (
    <>
      <Search getUserInput={getUserInput}></Search>
      <Categories></Categories>
      <PopularArticles></PopularArticles>
      <FacebookPageLike/>
    </>
  );
};

export default Sidebar;
