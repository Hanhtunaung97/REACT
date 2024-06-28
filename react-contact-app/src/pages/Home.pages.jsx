import React from "react";
import {
  ButtonComponents,
  ContainerComponents,
  NavComponents,
  PreventComponents,
} from "../components";
import { Outlet, useNavigate } from "react-router-dom";

const HomePages = () => {
  // const nav = useNavigate();
  // const handleClick = () => {
  //   localStorage.removeItem("auth");
  //   nav("/");
  // };
  return (
    // <PreventComponents check={!localStorage.getItem("auth")} go={"/"}>
    <div>
      <NavComponents />
      <ContainerComponents>
        <div>
          <Outlet />
        </div>
      </ContainerComponents>
    </div>
    //  </PreventComponents>
  );
};

export default HomePages;
