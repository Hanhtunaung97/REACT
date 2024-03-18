import React from "react";
import List from "./List";

const ListGroup = () => {
  const subjects = [
    {
      id: 1,
      title: "JavaScript",
      rating: 9,
    },
    {
      id: 2,
      title: "HTML",
      rating: 7.5,
    },
    {
      id: 3,
      title: "JQuery",
      rating: 4.5,
    },
    {
      id: 4,
      title: "CSS",
      rating: 8,
    },
    {
      id: 5,
      title: "BootStrap",
      rating: 4.8,
    },
  ];
  return (
    <ul>
      {subjects.map(({ id, title, rating }) => (
        <List key={id} id={id} title={title} rating={rating} />
      ))}
    </ul>
  );
};

export default ListGroup;
