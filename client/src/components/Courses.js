import React, { useEffect, useState } from "react";
import axios from "axios";
import { CourseItem } from "./CourseItem";

export const Courses = () => {
  const [courses, setCourses] = useState();
  let courseItems;

  const getData = async function getCourseData() {
    try {
      const response = await axios("http://localhost:5000/api/courses");
      setCourses(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (courses) {
    console.log(courses);
    courseItems = courses.map((course) => (
      <CourseItem title={course.title} id={course.id} key={course.id} />
    ));
  }

  return (
    <main>
      <div className="wrap main--grid">{courseItems}</div>
    </main>
  );
};
