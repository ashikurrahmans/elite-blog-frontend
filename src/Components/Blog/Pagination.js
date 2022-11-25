import React, { useContext, useEffect, useState } from "react";
import { allContext } from "../../ContextApi/ContentProvider";
import Loader from "../Shared/Loader";

const Pagination = ({ showPerPage, changePagination, total }) => {
  const { loading } = useContext(allContext);
  const [counter, setCounter] = useState(1);
  const [numberOfButtons, setNumberOfButtons] = useState(
    Math.ceil(total / showPerPage)
  );

  useEffect(() => {
    const value = showPerPage * counter;
    changePagination(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "Prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "Next") {
      if (numberOfButtons === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <nav aria-label="Page navigation">
          <ul className="inline-flex">
            <li>
              <button
                className="h-10 px-5 text-white transition-colors duration-150 bg-black rounded-l-lg focus:shadow-outline hover:bg-white hover:text-black"
                onClick={() => onButtonClick("Prev")}
              >
                Prev
              </button>
            </li>

            {new Array(numberOfButtons).fill("").map((el, index) => (
              <li key={index} className={`${index + 1 === counter ? "active" : null}`}>
                <button className="py-2 px-5 rounded text-white transition-colors duration-150 bg-gray-500 focus:shadow-outline mx-0.5" onClick={()=> setCounter(index+1)}>
                  {index + 1}
                </button>
              </li>
            ))}

            <li>
              <button
                className="h-10 px-5 text-white transition-colors duration-150 bg-black rounded-r-lg focus:shadow-outline hover:bg-white hover:text-black "
                onClick={() => onButtonClick("Next")}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Pagination;
