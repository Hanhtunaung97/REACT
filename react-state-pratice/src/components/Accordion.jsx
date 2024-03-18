import React, { useState } from "react";

const Accordion = ({ id, question, answer, isOpen, openAccordion }) => {
  // const [notOpen, setOpen] = useState(false);
  // const accordionHandler = () => {
  //   setOpen(!notOpen);
  // };
  const accordionHandler = () => {
    openAccordion(id);
  };
  return (
    <div>
      <div
        onClick={() => {
         accordionHandler()
        }}
        className=" flex justify-between items-center bg-violet-50 p-2 rounded border-2 border-violet-300 select-none cursor-pointer"
      >
        <h1 className=" text-xl font-mono font-semibold text-violet-600">
          {question}
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-4 h-4 stroke-2 stroke-violet-800 duration-200 ${
            isOpen && "rotate-180"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      {isOpen && (
        <div
          className={` bg-violet-100 border border-violet-300 p-3 text-violet-900 animate__animated animate__fadeIn`}
        >
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
