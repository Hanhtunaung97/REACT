import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const nav = useNavigate();
  useEffect(() => {
    const finder = localStorage.getItem("auth");
    if (!finder) {
      nav("/admin");
    }
  }, []);
  const {
    state
  } = useLocation();
 
  return (
    <div>
      <div className="grid grid-cols-10">
        <div className=" col-span-2">
          <ul>
            <li>
              <h1 className=" font-bold text-green-500"> {state?.data?.name}</h1>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link to={"/dashboard/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/dashboard/user"}>User</Link>
            </li>
          </ul>
        </div>
        <div className=" col-span-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
