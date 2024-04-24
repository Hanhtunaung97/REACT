import React from "react";
import List from "./List";

const ListGroup = ({courses}) => {
  return (
    <div>
      <h1 className=" text-center text-xl font-bold mb-3">Our Course List</h1>
      {courses.map((course) => (
        <List key={course.id} course={course} />
      ))}
    </div>
  );
};

export default ListGroup;
