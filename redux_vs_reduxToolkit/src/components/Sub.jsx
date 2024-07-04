import React from "react";
import { useDispatch } from "react-redux";
import { decreaseWithPayload, decreasing } from "../store/slice/counter.slice";
// import { decrease } from "../store/action/counter.action";

const Sub = () => {
  const dispatch = useDispatch();
  const handleDecrease = () => {
    // decrease(dispatch);
    dispatch(decreasing());
  };
  const handleDecreasePayload = () => {
    dispatch(decreaseWithPayload(3));
  };
  return (
    <div>
      <button
        onClick={handleDecrease}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Sub
      </button>
      <button
        onClick={handleDecreasePayload}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Sub Payload
      </button>
    </div>
  );
};

export default Sub;
