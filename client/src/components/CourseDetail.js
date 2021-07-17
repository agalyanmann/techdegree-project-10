import axios from "axios";
import React, { useEffect, useState } from "react";
import { DisplayCourseDetail } from "./DisplayCourseDetail";

export const CourseDetail = () => {
  const [course, setCourse] = useState();
  const courseID = window.location.pathname.slice(1);
  let courseDetail;

  const getData = async function getCourseData(id) {
    try {
      const response = await axios(`http://localhost:5000/api/courses/${id}`);
      setCourse(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData(courseID);
  }, []);

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
          <a className="button" href="#">
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
