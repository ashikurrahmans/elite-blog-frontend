import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';


const ReviewCard = ({ review }) => {
  const { author, reviewDescription, authorImage, datesOfReview } = review;

const iconStyle = {
    fontSize:"22px",
    color:"yellow",
    marginLeft:"2px"
}


  return (
    <>
      <section>
        <div className="bg-gray-50 shadow-xl flex flex-col w-full p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
          <div className="p-2 space-y-2 text-sm dark:text-gray-400">
            <div className="flex items-center space-x-2 dark:text-yellow-500">
           <AiFillStar style={iconStyle}/>
           <AiFillStar style={iconStyle}/>
           <AiFillStar style={iconStyle}/>
           <AiFillStar style={iconStyle}/>
           <AiFillStar style={iconStyle}/>

              <span className="text-xl font-bold">4.5</span>
            </div>
            <p>
              {reviewDescription?.length >= 100
                ? reviewDescription?.slice(0, 80)
                : reviewDescription}
            </p>

            {reviewDescription?.length >= 100 ? (
              <Link to="" className="text-red-500 text-xs">
                <span> Read More</span>
              </Link>
            ) : (
              ""
            )}
          </div>
    
        </div>

        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src={authorImage}
                alt={author}
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">{author}</h4>
              <span className="text-xs dark:text-gray-400">
                {datesOfReview}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewCard;
