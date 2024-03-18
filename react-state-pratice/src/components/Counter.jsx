import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="border border-sky-100 m-10 p-10">
      <div>
        <h1 className=" select-none text-3xl font-bold font-mono text-sky-500 mb-5">
          Counter : {count}
        </h1>
        <div className="flex gap-3">
          <button
            onClick={decrement}
            className=" bg-sky-50 w-10 h-10 px-2 py-1 border border-sky-100 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 stroke-1 stroke-sky-600"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>
          <button
            onClick={increment}
            className="group   bg-sky-50 px-2 py-1 border border-sky-100 rounded w-10 h-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" w-5 h-5 stroke-1 stroke-sky-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
