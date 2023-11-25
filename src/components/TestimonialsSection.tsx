import React, { useState, useEffect, MouseEventHandler } from "react";
import { useMediaQuery } from "react-responsive";
import ReviewCard, { ReviewCardProps } from "./ReviewCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/TestimonialsSection.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

type CustomArrowProps = {
  dir: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const CustomArrow = (props: CustomArrowProps): React.ReactElement => {
  return <div className={`arrow ${props.dir}`} onClick={props.onClick}></div>;
};

const TestimonialsSection = (): React.ReactElement => {
  const [reviews, setReviews] = useState<Array<ReviewCardProps>>([]);

  const fetchTestimonials = async () => {
    const testimonialsCollection = collection(db, "testimonials");
    const querySnapshot = await getDocs(testimonialsCollection);

    // Extract data from each document and set it to the state
    const testimonialData = querySnapshot.docs.map((doc) =>
      doc.data()
    ) as Array<ReviewCardProps>;
    setReviews(testimonialData);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const largeScreen = useMediaQuery({ minWidth: 1300 });

  const mediumScreen = useMediaQuery({ minWidth: 600 });

  const slidesToShow = largeScreen ? 3 : mediumScreen ? 2 : 1;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoPlaySpeed: 1000,
    prevArrow: <CustomArrow dir="left" />,
    nextArrow: <CustomArrow dir="right" />,
  };

  return (
    <section className="testimonial-section">
      <div className="section-heading">Testimonials</div>
      <div className="section-subheading">
        See what some of our students have to say
      </div>
      <div className="testimonial-cards">
        <Slider {...settings}>
          {reviews.map((review, idx) => (
            <ReviewCard
              key={idx}
              rating={review.rating}
              name={review.name}
              content={review.content}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
