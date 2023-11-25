import React from "react";
import "../assets/css/AboutSection.css";
import sectionDiv from "../assets/img/peaks-section-div.svg";
import Btn from "./Btn";

const AboutSection = (): React.ReactElement => {
  return (
    <section className="about-section">
      <img className="section-div" src={sectionDiv} alt="" />
      {/* <div className="section-heading">About Us</div> */}
      <div className="section-main">
        <div className="section-img">
          <img src="//unsplash.it/1080/1280" width="500" alt="" />
        </div>
        <div className="section-content">
          <div className="heading">About Us</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            tempore cupiditate recusandae ex doloremque culpa nobis eveniet
            labore a dicta id libero, eum dolor et commodi nemo minus, ab unde
            rerum. Rem, ducimus facilis earum nulla necessitatibus facere quasi
            sint et dolores excepturi blanditiis, eligendi molestiae ipsum
            aliquid obcaecati totam.
          </div>
          <Btn content="Learn More" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
