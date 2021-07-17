import React from "react";

export const CourseItem = ({ title, id }) => {
  return (
    <a className="course--module course--link" href={`/courses/${id}`}>
      <h2 className="course--label">Course</h2>
      <h3 className="course--title">{title}</h3>
    </a>
  );
};
