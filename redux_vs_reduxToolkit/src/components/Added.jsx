import React from "react";
import { useDispatch } from "react-redux";
import { increase, increaseWithPayLoad } from "../store/slice/counter.slice";
// import { increase } from "../store/action/counter.action";

const Added = () => {
  const dispatch = useDispatch();
  const handleIncrease = () => {
    // increase(dispatch);
    dispatch(increase())
  };
  const handleIncreasePayload=() => {
    dispatch(increaseWithPayLoad(3))
  }
  return (
    <div>
      <button
        onClick={handleIncrease}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Add
      </button>
      <button
        onClick={handleIncreasePayload}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Add payload
      </button>
    </div>
  );
};

export default Added;
