import React from "react";
import "../assets/css/Footer.css";
import facebookLogo from "../assets/img/facebooklogo.svg";
import xLogo from "../assets/img/xlogo.svg";
import youtubeLogo from "../assets/img/youtubelogo.svg";
import instagramLogo from "../assets/img/instagramlogo.svg";

const Footer = (): React.ReactElement => {
  return (
    <footer>
      <div className="footer__main">
        <div className="left">
          <div className="heading">Shogun Martial Arts</div>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            unde, suscipit tenetur cupiditate voluptate veniam vitae voluptatum
            laboriosam tempore soluta!
          </div>
        </div>
        <div className="right">
          <div className="contact-details">
            <div className="contact__detail">
              <div className="contact__field">Email: </div>
              <div className="contact__value">
                info@shogunmartialartsacademy.com
              </div>
            </div>
            <div className="contact__detail">
              <div className="contact__field">Phone Number:</div>
              <div className="contact__value">9912003334</div>
            </div>
            <div className="contact__detail">
              <div className="contact__field">Address: </div>
              <div className="contact__value">
                5th Floor, High-Tension Line Rd, beside Barfi Ghar, opp. G9
                Drive In, Raja Rajeshwara Nagar, Kondapur, Hyderabad, Telangana
                500084
              </div>
            </div>
          </div>
        </div>
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
