import React from "react";
import { Link } from "react-router-dom";

const NavComponents = () => {
  return (
    <nav className="text-xl py-5 flex justify-between font-mono text-green-700 font-semibold">
      <h1>LOGO</h1>
      <div>
        <ul className=" flex justify-between gap-x-5 items-center font-normal">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavComponents;
