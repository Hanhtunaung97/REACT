import React, { useState } from "react";
import { useEffect } from "react";
import Counter from "./components/Counter";
import HideShowComponent from "./components/HideShow";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [courses, setCourses] = useState([]);
  const fetchCourses = async () => {
    const res = await fetch("http://localhost:5173/api/courses");
    const json = await res.json();
    setCourses(json);
  };
  useEffect(() => {
    // fetch("http://localhost:5173/api/courses")
    //   .then((res) => res.json())
    //   .then((json) => setCourses(json));
    fetchCourses();
  }, []);

  return (
    <div className=" m-10 p-10 border border-gray-200">
      {/* <Counter/> */}
      {/* <HideShowComponent/> */}
      <ListGroup courses={courses} />
    </div>
  );
};

export default App;
