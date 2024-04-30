import React, { useContext, useEffect, useState } from "react";
import Row from "./Row";
import LoaderRow from "./LoaderRow";
import { dataContext } from "../contexts/DataContext";
import EmptyRow from "./EmptyRow";

const RowGroup = () => {
  const { courses, setCourses } = useContext(dataContext);
  const [ready, setReady] = useState(false);
  console.log(courses);
  const loaderArray = Array.from({ length: 5 }, (_, index) => index);
  console.log(loaderArray);
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("http://localhost:5173/api/courses");
      const json = await res.json();
      setCourses(json);
      setReady(true);
    };
    fetchCourses();
  }, []);
  return (
    <>
      {!ready && loaderArray.map((el, index) => <LoaderRow key={index} />)}
      {ready &&
        (courses.length ? (
          courses.map((course) => <Row key={course.id} course={course} />)
        ) : (
          <EmptyRow />
        ))}
    </>
  );
};

export default RowGroup;
