import React from "react";

const InputFormComponents = ({ label, type, name, placeholder, ...rest }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <label
        className=" text-lg text-green-600 select-none cursor-pointer"
        htmlFor={name}
      >
        {label}
      </label>
      <input
      {...rest}
        className=" px-3 py-2 border-2 border-green-200 rounded-lg outline-green-300"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputFormComponents;
