import React from "react";
import Btn from "./Btn";
import "../assets/css/GallerySection.css";

const GallerySection = (): React.ReactElement => {
  return (
    <section className="gallery-section">
      <div className="section-heading">Gallery</div>
      <div className="section-subheading">Unveiling moments in elegance</div>
      <div className="gallery">
        {Array(10)
          .fill(0)
          .map((_, idx) => (
            <div className="gallery__img" key={idx}>
              <img
                loading="lazy"
                src="//unsplash.it/1024/1024"
                width="512"
                height="512"
                alt=""
              />
            </div>
          ))}
      </div>
      <Btn content="Explore All" href="/gallery" />
    </section>
  );
};

export default GallerySection;
