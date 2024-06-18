import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./store/action/counterAction";

const App = () => {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(increase());
  };
  const handleSub = () => {
    dispatch(decrease());
  };
  return (
    <div>
      <div className=" p-20 text-center mt-10">
        <h1 className=" font-bold text-xl mb-3">{state}</h1>
        <button
          onClick={handleAdd}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add
        </button>
        <button
          onClick={handleSub}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Sub
        </button>
      </div>
    </div>
  );
};

export default App;
