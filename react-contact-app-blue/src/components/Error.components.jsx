import React from "react";
import { IoIosWarning } from "react-icons/io";
const ErrorComponents = ({ children }) => {
  return (
    <div className="flex justify-center items-center gap-x-5 py-3 my-5 shadow border  font-heading text-red-500">
      <IoIosWarning />
      <h1>{children}</h1>
    </div>
  );
};

export default ErrorComponents;
