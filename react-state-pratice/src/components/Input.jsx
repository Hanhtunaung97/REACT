import React, { useState } from "react";

const Input = () => {
    const [text,setText]=useState('');
    const inputHandler=(event) => {
        setText(event.target.value);
    }
  return <div className="border border-green-100 rounded m-10 p-10">
    <div className="flex flex-col gap-2 mb-5 group" >
    <label htmlFor="textInput" className=" font-mono font-semibold text-green-500 select-none">Enter Input</label>
        <input type="text" name="text_input" id="textInput" onChange={inputHandler} value={text} className="border border-green-200 rounded px-2 py-1 group-focus: outline-green-300 " />
    </div>
    <p className="border border-green-400 rounded p-4">
        {text}
    </p>
  </div>;
};

export default Input;
