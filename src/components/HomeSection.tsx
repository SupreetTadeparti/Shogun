import React from "react";
import boxingImg from "../assets/img/boxing-home.jpg";
import HomeBtn from "./HomeBtn";
import "../assets/css/HomeSection.css";

const HomeSection = (): React.ReactElement => {
  return (
    <section className="home-section">
      <div className="home-section__content">
        <div className="home-section__heading">
          Master your mind, <br />
          conquer the body,
          <br /> and spirit will follow.
        </div>
        <div className="home-section__caption">
          Embark on a transformative journey as you discover the profound unity
          of mind, body, and spirit. Unleash the warrior within.
        </div>
        <div className="action-btns">
          <HomeBtn href="/shop" content="Enroll" />
          <HomeBtn href="/auth" content="Sign Up" color="white" />
        </div>
      </div>
      <div className="home-section__img-container">
        <img className="home-section__img" src={boxingImg} alt="Boxing" />
      </div>
    </section>
  );
};

export default HomeSection;
