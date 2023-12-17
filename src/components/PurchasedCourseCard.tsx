import React from "react";
import redStar from "../assets/img/redstar.png";
import "../assets/css/PurchasedCourseCard.css";
import Btn from "./Btn";
import { useNavigate } from "react-router-dom";

type ShopItemProps = {
  id: string;
  name: string;
};

const ShopItem = (props: ShopItemProps): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <div className="purchased-course">
      <div className="purchased-course__left">
        <img
          src="//unsplash.it/640/320"
          alt="lorem"
          className="purchased-course__thumbnail"
        />
      </div>
      <div className="purchased-course__right">
        <div className="purchased-course__name">{props.name}</div>
        <div className="purchased-course__review">
          {Array(2 + Math.floor(Math.random() * 3))
            .fill(0)
            .map((_, idx) => (
              <img key={idx} src={redStar} alt="star" width="20" />
            ))}{" "}
          {Math.floor(Math.random() * 200)} Reviews
        </div>
        <Btn content="Watch" onClick={() => navigate(`/watch/${props.id}`)} style={{paddingLeft: "3em", paddingRight: "3em"}} />
      </div>
    </div>
  );
};

export type { ShopItemProps };
export default ShopItem;
