import React from "react";
import HomeSection from "../components/HomeSection";
import CourseSection from "../components/CourseSection";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";
import GallerySection from "../components/GallerySection";

const HomeRoute = (): React.ReactElement => {
  return (
    <>
      <HomeSection />
      <CourseSection />
      <AboutSection />
      <TestimonialsSection />
      <GallerySection />
    </>
  );
};

export default HomeRoute;
