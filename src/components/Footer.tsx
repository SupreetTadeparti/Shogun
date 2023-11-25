import React from "react";
import "../assets/css/Footer.css";
import facebookLogo from "../assets/img/facebooklogo.svg";
import xLogo from "../assets/img/xlogo.svg";
import youtubeLogo from "../assets/img/youtubelogo.svg";
import instagramLogo from "../assets/img/instagramlogo.svg";

const Footer = (): React.ReactElement => {
  return (
    <footer>
      <div className="heading">Shogun Martial Arts</div>
      <div className="desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
        molestiae!
      </div>
      <div className="social">
        <a href="#" className="social__link">
          <img src={facebookLogo} alt="facebook" width="50" />
        </a>
        <a href="#" className="social__link">
          <img src={xLogo} alt="x" width="35" />
        </a>
        <a href="#" className="social__link">
          <img src={youtubeLogo} alt="youtube" width="55" />
        </a>
        <a href="#" className="social__link">
          <img src={instagramLogo} alt="instagram" width="40" />
        </a>
      </div>
      <div className="copyright">Copyright &copy; Shogun Martial Arts</div>
    </footer>
  );
};

export default Footer;
