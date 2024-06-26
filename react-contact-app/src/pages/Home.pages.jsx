import React from "react";
import { ButtonComponents, PreventComponents } from "../components";
import { useNavigate } from "react-router-dom";

const HomePages = () => {
  const nav = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("auth");
    nav("/");
  };
  return (
    <PreventComponents check={!localStorage.getItem("auth")} go={"/"}>
      <div>HomePages</div>
      <div>
        <ButtonComponents
          style={
            "! text-red-500 bg-white border-red-300 w-auto active:bg-red-500 active:text-white"
          }
          onClick={handleClick}
        >
          Logout
        </ButtonComponents>
      </div>
    </PreventComponents>
  );
};

export default HomePages;
