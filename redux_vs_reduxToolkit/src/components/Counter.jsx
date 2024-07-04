import React from "react";
import Sub from "./Sub";
import Added from "./Added";
import { useSelector } from "react-redux";

const Counter = () => {
  const { value } = useSelector((store) => store.counter);
  return (
    <div className=" w-[500px] mx-auto text-center my-10 flex justify-between ">
      <Added />
      <h1 className=" text-xl">{value}</h1>
      <Sub />
    </div>
  );
};

export default Counter;
