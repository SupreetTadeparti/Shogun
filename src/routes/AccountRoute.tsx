import React from "react";
import defaultPhoto from "../assets/img/default.png";
import "../assets/css/AccountRoute.css";
import PurchasedCourseCard from "../components/PurchasedCourseCard";

const AccountRoute = (): React.ReactElement => {
  return (
    <div className="account-route-container">
      <div className="page-heading">My Account</div>
      <main>
        <div className="info">
          <div className="username">Welcome to the Dojo, Supreet!</div>
          {/* <div className="heading">Personal Details</div> */}

          <div className="personal-details">
            <div className="profile-photo">
              <img src={defaultPhoto} alt="profile photo" width="150" />
            </div>
            <div className="personal-details__other">
              <div className="personal-details__email">
                <div className="personal-detail__name">Email</div>
                <div className="personal-detail__value">
                  supreettadeparti@gmail.com
                </div>
              </div>
              <div className="personal-details__phone">
                <div className="personal-detail__name">Phone Number</div>
                <div className="personal-detail__value">+91 8247829096</div>
              </div>
            </div>
          </div>
        </div>
        <div className="purchased-courses-container">
          <div className="heading">Purchased Courses</div>
          <div className="purchased-courses">
            <PurchasedCourseCard id="2" name="Martial Arts Foo Course" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccountRoute;
