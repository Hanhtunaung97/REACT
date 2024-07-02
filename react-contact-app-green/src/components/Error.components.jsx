import React from "react";
import { IoWarning } from "react-icons/io5";

const ErrorComponents = ({ children }) => {
  return (
    <div className="flex justify-center items-center gap-x-5 py-3 shadow text-red-600  font-heading mb-3">
      <IoWarning />
      <h1>{children}</h1>
    </div>
  );
};

export default ErrorComponents;
