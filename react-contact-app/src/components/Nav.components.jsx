import React from "react";
import ButtonComponents from "./Button.components";
import { useNavigate } from "react-router-dom";

const NavComponents = () => {
  const nav = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("auth");
    nav("/");
  };
  const handleContactAdd = () => {
    nav("/home/add");
  };
  return (
    <div>
      <nav className=" rounded-lg p-3 border shadow mb-10">
        <div className=" container mx-auto flex justify-between items-center">
          <h1 className=" font-heading text-xl text-green-600 font-semibold select-none">
            Contact App
          </h1>
          <div className="space-x-5 flex">
            <ButtonComponents
              style={"! bg-green-500"}
              onClick={handleContactAdd}
            >
              Add New
            </ButtonComponents>
            <ButtonComponents
              style={
                "! text-red-500 bg-white border-red-300 w-auto active:bg-red-500 active:text-white"
              }
              onClick={handleClick}
            >
              Logout
            </ButtonComponents>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavComponents;
