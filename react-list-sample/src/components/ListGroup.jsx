import React from "react";
import List from "./List";

const ListGroup = () => {
  const games = [
    { id: 1, name: "GTA", rating: 9 },
    { id: 2, name: "SmackDown", rating: 4.5 },
    { id: 3, name: "DJ Fighter", rating: 7.5 },
    { id: 4, name: "Sniper", rating: 4.8 },
    { id: 5, name: "PES Football", rating: 8 },
    { id: 6, name: "Resident Evil", rating: 8.5 },
  ];
  return (
    <div>
      {games.map(({ id, name, rating }) => (
        <List  key={id} id={id} name={name} rate={rating} />
      ))}
    </div>
  );
};

export default ListGroup;
