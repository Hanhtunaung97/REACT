import React, { useContext, useEffect, useState } from "react";
import Row from "./Row";
import LoaderRow from "./LoaderRow";
import { dataContext } from "../contexts/DataContext";
import EmptyRow from "./EmptyRow";
import { baseUrl } from "../config/config";
import axios from "axios";
import { courseApi } from "../api/course";

const RowGroup = () => {
  const { courses, setCourses } = useContext(dataContext);
  const [ready, setReady] = useState(false);
  console.log(courses);
  const loaderArray = Array.from({ length: 5 }, (_, index) => index);
  console.log(loaderArray);
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await courseApi.get(`/courses`);
      // const json = await res.json();
      setCourses(res.data);
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
