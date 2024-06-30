import React from "react";
import ButtonComponents from "./Button.components";
import { useNavigate } from "react-router-dom";

const NavComponents = ({ children }) => {
  return (
    <div>
      <nav className=" rounded-lg p-3 border  shadow mb-10">
        <div className=" container mx-auto flex justify-between items-center">
          <h1 className=" font-heading text-xl text-green-600 font-semibold select-none">
            Contact App
          </h1>
          {children}
        </div>
      </nav>
    </div>
  );
};

export default NavComponents;
