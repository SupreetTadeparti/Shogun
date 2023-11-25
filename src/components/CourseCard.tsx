import React from "react";
import "../assets/css/CourseCard.css";

type CourseCardProps = {
  name?: string;
  img?: string;
};

const CourseCard = (props: CourseCardProps): React.ReactElement => {
  return (
    <div className="course-container">
      <div className="course__img">
        <img src="//unsplash.it/320/240" alt="" loading="lazy" />
      </div>
      <div className="course__name">{props.name}</div>
      <div className="course__desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
        repellendus.
      </div>
      <div className="btn">Learn More</div>
    </div>
  );
};

export default CourseCard;
