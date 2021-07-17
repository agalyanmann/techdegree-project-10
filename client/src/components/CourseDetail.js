import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { DisplayCourseDetail } from "./DisplayCourseDetail";

export const CourseDetail = () => {
  const [course, setCourse] = useState();
  const courseID = window.location.pathname.split("/courses/")[1];
  const endpoint = `http://localhost:5000/api/courses/${courseID}`;
  let courseDetail;

  const getData = async function getCourseData() {
    try {
      const response = await axios(endpoint);
      setCourse(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const clickHandler = async function handlerToDeleteCourse() {
    try {
      let history = useHistory();
      const response = await axios.delete(endpoint);
      const { data, status } = response;
      if (status !== 204) throw new Error(data);
      history.push("/courses");
    } catch (err) {
      console.error(err);
    }
  };

  if (course) {
    courseDetail = <DisplayCourseDetail course={course} />;
  }

  return (
    <main>
      <div className="actions--bar">
        <div className="wrap">
          <a className="button" href="update-course.html">
            Update Course
          </a>
          <a className="button" onClick={clickHandler}>
            Delete Course
          </a>
          <a className="button button-secondary" href="index.html">
            Return to List
          </a>
        </div>
      </div>

      <div className="wrap">
        <h2>Course Detail</h2>
        <form>{courseDetail}</form>
      </div>
    </main>
  );
};
