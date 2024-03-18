import React, { useState } from "react";
import InputForm from "./components/InputForm";
import Status from "./components/Status";
import ListGroup from "./components/ListGroup";
import Headers from "./components/Headers";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, job: "Complete homework", isDone: false },
    { id: 2, job: "Buy groceries", isDone: true },
    { id: 3, job: "Call mom", isDone: false },
    { id: 4, job: "Go for a run", isDone: false },
    { id: 5, job: "Read a book", isDone: true },
  ]);
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((el) => el.id !== id));
  };
  const doneTask = (id) => {
    setTasks(
      tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };
  const updateTask = (id, newJob) => {
    setTasks(tasks.map((el) => (el.id === id ? { ...el, job: newJob } : el)));
  };
  const doneAllTasks = () => {
    setTasks(tasks.map((task) => ({ ...task, isDone: "true" })));
  };
  return (
    <div className="w-[400px] mx-auto mt-20">
      <Headers />
      <InputForm addTask={addTask} />
      <Status tasks={tasks} />
      <ListGroup
      doneAllTasks={doneAllTasks}
        updateTask={updateTask}
        tasks={tasks}
        deleteTask={deleteTask}
        doneTask={doneTask}
      />
    </div>
  );
};

export default App;
