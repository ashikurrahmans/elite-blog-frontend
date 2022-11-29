import React from "react";
import facebookCover from "../../assets/images/facebookCover.jpg";
import { AiOutlineLike } from "react-icons/ai";

const FacebookPageLike = () => {
  return (
    <div>
      <div className="flex flex-col shadow-md cursor-pointer w-80 hover:-translate-y-1 duration-300">
        <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2 pt-2 ml-2">
          Like Our Page
        </h5>
        <div className="inline relative group h-48">
          <img
            className="absolute rounded-t object-cover h-full w-full"
            src={facebookCover}
            alt="Product Preview"
          />

          <div
            className="flex flex-row absolute justify-end
                    h-16 w-full bottom-0 px-3 space-x-2
                    bg-none opacity-0 group-hover:opacity-100
                    group-hover:bg-gradient-to-t from-black/20 via-gray-800/20 to-transparent 
                    transition-all ease-in-out duration-200 delay-100"
          >
            <button
              className="bg-gray-50/10 rounded-full 
                        px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                        transition-colors duration-200"
            >
              <i
                className="mdi mdi-playlist-plus text-xl text-gray-200
                            hover:text-white transition-all duration-200"
                title="Add to Bookmarks"
              ></i>
            </button>

            <button
              className="bg-gray-50/10 rounded-full 
                        px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                        transition-colors duration-200"
            >
              <i
                className="mdi mdi-heart text-xl text-gray-200 p-1
                            hover:text-white transition-all duration-200"
                title="Add to Favorites"
              ></i>
            </button>
          </div>
        </div>

        <div className="flex flex-col bg-white rounded-b p-3">
          <div className="text-xl font-semibold text-gray-900 hover:underline truncate">
            Elite Dental Studio USA
          </div>
          <p className="text-sm text-gray-400">Elite Dental Studio is the lab of choice for exquisite Superior dental artistry and Smile Makers.</p>

          <div className="text-xxs text-gray-400 truncate mt-1">
            <div className="flex flex-row mt-2">
              <div className="flex flex-col flex-auto">
                <div className="flex flex-row group">
                  <i
                    className="mdi mdi-star text-xs text-amber-400 
                            hover:text-amber-500 transition-all duration-200"
                    title="Worst"
                  ></i>

                  <i
                    className="mdi mdi-star text-xs text-amber-400 
                            hover:text-amber-500 transition-all duration-200"
                    title="Bad"
                  ></i>

                  <i
                    className="mdi mdi-star text-xs text-amber-400 
                            hover:text-amber-500 transition-all duration-200"
                    title="Not Bad"
                  ></i>

                  <i
                    className="mdi mdi-star text-xs text-amber-400 
                            hover:text-amber-500 transition-all duration-200"
                    title="Good"
                  ></i>

                  <i
                    className="mdi mdi-star text-xs text-amber-400 
                            hover:text-amber-500 transition-all duration-200"
                    title="Awesome"
                  ></i>
                </div>

                <div
                  className="text-xxs text-gray-400 mt-1"
                  title="34k Downlaods in this year"
                >
                  234 Likes
                </div>
              </div>

              <div className="flex flex-row flex-auto justify-end">
                <span class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#1877F2] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <AiOutlineLike className="text-lg mr-2" />
                  Like Our Page
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookPageLike;
