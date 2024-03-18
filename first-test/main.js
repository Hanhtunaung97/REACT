import React from "react";
import "./style.css";
import ReactDOM from "react-dom/client";
const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);

const app = () => {
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
      rate: 4.5,
    },
    {
      id: 5,
      name: "TailWind CSS",
      rate: 8.5,
    },
    {
      id: 6,
      name: "JQuery",
      rate: 3.2,
    },
  ];
  const title = "Front-End Dev";
  return React.createElement(
    "div",
    {
      className: `m-5 p-5 border border-gray-500`,
    },
    React.createElement(
      "h1",
      { className: `text-3xl font-mono font-bold mb-5` },
      title
    ),
    React.createElement(
      "ul",
      null,
      subjects.filter(({rate})=> rate>=5). map(({ id, name, rate }) =>
        React.createElement("li", { key: id, className:`p-2 mb-3 font-semibold font-mono ${rate <=5 ? 'bg-rose-200':'bg-gray-200'} border-s-4 border-rose-300` }, `${name} ${rate} `)
      )
    )
  );
};
root.render(app());
