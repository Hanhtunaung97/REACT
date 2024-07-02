import React from "react";

const LoadingComponents = () => {
  return (
    <div className=" h-screen">
      <div className="Center">
        <h1 className="text-3xl font-bold text-green-500 mb-0 lg:mb-3 flex justify-center items-center">
          Loading.....
          <span className=" inline-block p-2 w-3 h-3 border-4 border-red-500 border-s-4 border-s-green-500 border-e-4 border-e-green-500 rounded-full animate-spin"></span>
        </h1>
      </div>
    </div>
  );
};

export default LoadingComponents;
