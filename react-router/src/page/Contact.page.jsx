import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ContactPage = () => {
  const nav = useNavigate();
  const { state, pathname, search } = useLocation();
  console.log(pathname, search);
  const handleToBack = () => {
    nav("/");
  };
  return (
    <div>
      <p>ContactPage</p>

      <button
        onClick={handleToBack}
        className="border border-red-200 rounded-lg p-3 hover:bg-red-200 hover:text-white mt-3 active:scale-90 duration-200"
      >
        To Back
      </button>
      <p>Contact name is {state.name}</p>
    </div>
  );
};

export default ContactPage;
