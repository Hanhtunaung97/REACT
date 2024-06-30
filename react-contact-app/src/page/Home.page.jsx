import React, { useEffect } from "react";
import {
  ButtonComponents,
  PreventComponents,
  NavComponents,
  ContainerComponents,
} from "../components";
import { Outlet, useNavigate } from "react-router-dom";
import { getProfile } from "../service/auth.service";

const HomePage = () => {
  const nav = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("auth");
    nav("/");
  };
  const handleAddPage = () => {
    nav("/home/add");
  };
  useEffect(() => {
    (async() => {
      const res=await getProfile();
      // console.log(res);
    })()
  },[])
  return (
    // <PreventComponents go={"/"} tokenCheck={!localStorage.getItem("auth")}>
    <div className=" h-screen">
      <NavComponents>
        <h1 className=" font-heading text-xl font-semibold text-blue-600">
          Contact App
        </h1>
        <div className=" space-x-5">
          <ButtonComponents onClick={handleAddPage} style={"!w-auto"}>
            Add New
          </ButtonComponents>
          <ButtonComponents
            onClick={handleClick}
            style={
              "!text-red-500 bg-white border-2 border-red-500 duration-200 active:bg-red-500 active:text-white active:scale-90 w-auto"
            }
          >
            Logout
          </ButtonComponents>
        </div>
      </NavComponents>
      <ContainerComponents>
        <div className="Center">
          <Outlet />
        </div>
      </ContainerComponents>
    </div>
    // </PreventComponents>
  );
};

export default HomePage;
