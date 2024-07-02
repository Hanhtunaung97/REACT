import React from "react";

const NavComponents = ({ children }) => {
  return (
    <nav className=" border shadow py-3 mb-10 fixed bg-white w-full ">
      <div className=" container mx-auto px-3 flex justify-between items-center ">{children}</div>
    </nav>
  );
};

export default NavComponents;
