import React from "react";

const Search = () => {
  return (
      <div className="mb-6 bg-white shadow-md p-2 mt-7 w-80">
           <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2 ">
          Search By keywords
        </h5>
        <input
          className=" border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none my-4 ml-2"
          type="search"
          name="search"
          placeholder="Search"
        />

      </div>
  );
};

export default Search;
