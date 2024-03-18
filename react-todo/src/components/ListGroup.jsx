import React, { useState } from "react";
import EmptyList from "./EmptyList";
import List from "./List";

const ListGroup = ({
  tasks,
  deleteTask,
  doneTask,
  updateTask,
  doneAllTasks,
}) => {
  const handleDoneAllTasks = () => {
    doneAllTasks();
  };
  return (
    <div id="listGroup">
      {tasks.length === 0 && EmptyList}
      {tasks.map(({ id, job, isDone }) => (
        <List
          doneAllTasks={doneAllTasks}
          updateTask={updateTask}
          doneTask={doneTask}
          deleteTask={deleteTask}
          key={id}
          id={id}
          job={job}
          isDone={isDone}
        />
      ))}
      <div className="flex justify-end items-center">
        <button onClick={handleDoneAllTasks} className=" bg-neutral-100 border border-neutral-300 px-4  py-1">
          All Done
        </button>
      </div>
    </div>
  );
};

export default ListGroup;
