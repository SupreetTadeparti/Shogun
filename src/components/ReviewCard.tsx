import React from "react";
import "../assets/css/ReviewCard.css";
import redStar from "../assets/img/redstar.png";

type ReviewCardProps = {
  rating: number;
  name: string;
  content: string;
};

const ReviewCard = (props: ReviewCardProps): React.ReactElement => {
  return (
    <div className="review-card">
      <div className="review__left">
        <div className="review__img">
          <img
            src="//unsplash.it/100/100"
            alt="profile photo"
            loading="lazy"
            width="100"
            height="100"
          />
        </div>
      </div>
      <div className="review__right">
        <div className="review__rating">
          {Array(props.rating)
            .fill(0)
            .map((_, idx) => (
              <img key={idx} src={redStar} alt="star" width="20" />
            ))}
        </div>
        <div className="review__name">{props.name}</div>
        <div className="review__content">{props.content}</div>
      </div>
    </div>
  );
};

export type { ReviewCardProps };
export default ReviewCard;
