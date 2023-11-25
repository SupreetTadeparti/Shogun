import React from "react";
import CourseCard from "./CourseCard";
import "../assets/css/CourseSection.css";

const CourseSection = (): React.ReactElement => {
  return (
    <section className="courses-section">
      <div className="section-heading">Our Courses</div>
      <div className="courses-container">
        <CourseCard name="MMA" />
        <CourseCard name="Fitness" />
        <CourseCard name="Karate" />
        <CourseCard name="Kick Boxing" />
      </div>
    </section>
  );
};

export default CourseSection;
