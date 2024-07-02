import React, { useEffect } from "react";
import {
  ButtonComponents,
  ContainerComponents,
  NavComponents,
  PreventComponents,
} from "../components";
import { Outlet, useNavigate } from "react-router-dom";
import { getProfileData } from "../service/auth.service";

const HomePages = () => {
  const nav = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("auth");
    nav("/");
  };
  const handleContactAdd = () => {
    nav("/home/add");
  };
  useEffect(() => {
    (async () => {
      const res = await getProfileData();
      // console.log(res);
    })();
  }, []);
  return (
    <PreventComponents check={!localStorage.getItem("auth")} go={"/"}>
      <div>
        <NavComponents>
          <div className="space-x-5 flex">
            <ButtonComponents
              style={"!bg-green-500 w-auto"}
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
        </NavComponents>
        <ContainerComponents>
          <div >
            <Outlet />
          </div>
        </ContainerComponents>
      </div>
    </PreventComponents>
  );
};

export default HomePages;
