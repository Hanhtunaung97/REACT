import React from "react";
import { IoWarning } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ErrorComponents = () => {
  const nav = useNavigate();
  return (
    <div className=" text-danger flex justify-center items-center py-3 gap-y-10 flex-col shadow my-5">
      {/* <IoWarning /> */}
      <img src="./src/assets/error.svg" alt="" width={"400px"} />
      <Button onClick={() => nav("/")} className="bg-basic active:scale-90 duration-200">
        Go Back
      </Button>
    </div>
  );
};

export default ErrorComponents;
