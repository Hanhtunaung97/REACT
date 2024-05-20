import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavComponents = () => {
  return (
    <div>
      <ul className=" flex justify-around gap-5 py-3 items-center text-blue-500">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"} state={{phNo:12344555}}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/book"}>Book</NavLink>
        </li>
        <li>
          <NavLink to={`/book/${Math.ceil(Math.random() * 10)}`}>
            DetailBook
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavComponents;
