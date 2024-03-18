import React from "react";

const App = () => {
  const subjects = [
    {
      id: 1,
      name: "HTML",
      rate: 7.5,
    },
    {
      id: 2,
      name: "CSS",
      rate: 8,
    },
    {
      id: 3,
      name: "JS",
      rate: 9,
    },
    {
      id: 4,
      name: "Bootstrap",
      rate: 0,
    },
    {
      id: 5,
      name: "TailWind CSS",
      rate: 8.5,
    },
    {
      id: 6,
      name: "JQuery",
      rate: 0,
    },
  ];
  const title = "Front-End Dev";
  return (
    <div className="p-5 m-5 border border-slate-400">
      <h1 className=" text-3xl text-green-800 font-mono font-bold mb-5">
        {title}
      </h1>
      <ul>
        {subjects. map(({ id, name, rate }) => (
          <li
            key={id}
            className={` font-mono font-semibold text-green-900 border-s-4 border-rose-500 p-2 mb-3 ${
              rate <= 5 ? "bg-rose-200" : "bg-green-200 "
            } `}
          >{` ${name}  ${rate}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
