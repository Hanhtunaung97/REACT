import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [text, setText] = useState("");
  const nav = useNavigate();
  // console.log(nav());
  const handleToContact = () => {
    nav("/contact", { state:{name:text}});
  };
  const handleForm=(event) => {
    event.preventDefault();
    console.log(text);
  }
  return (
    <div>
      <p>HomePage</p>
      <button
        onClick={handleToContact}
        className="border border-red-200 rounded-lg p-3 hover:bg-red-200 hover:text-white mt-3 active:scale-90 duration-200"
      >
        To contact
      </button>
      <form className="mt-3 border border-red-100 p-3 max-w-fit">
        <div className=" mb-3 flex gap-2 items-center">
          <label htmlFor="name">Name</label>
          <input
          onChange={(e) =>setText(e.target.value) }
            className="border focus:outline-red-300 border-red-200 rounded-lg p-1"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <button onClick={handleForm} className="border border-red-200 rounded-lg p-3 hover:bg-red-200 hover:text-white mt-3 active:scale-90 duration-200">
          Submit
        </button>
      </form>
    </div>
  );
};

export default HomePage;
