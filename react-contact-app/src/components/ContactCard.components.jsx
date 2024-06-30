import React from "react";
import { useNavigate } from "react-router-dom";

const ContactCardComponents = ({ item }) => {
  const nav=useNavigate();
  const handleRedirect=() => {
    nav(`/home/contact/${item.id}`)
  }
  return (
    <button onClick={handleRedirect} className=" w-full block">
      <div className=" w-2/6 h-auto text-green-500 border shadow text-center rounded-lg p-3 hover:scale-95 duration-200 hover:bg-green-500 hover:text-white " >
      <h3 className=" font-heading  font-semibold">{item.name}</h3>
      <p>{item.phone}</p>
    </div>
    </button>
  );
};

export default ContactCardComponents;
