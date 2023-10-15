import React from "react";
import Carousel from "./Carousel";
import SliderImg from "../assets/img/slider-img.png";

const OurGallery = () => {
  return (
    <div
      className="container d-flex flex-column align-items-center"
      id="our-gallery"
    >
      <h4 className="heading text-center">Our Gallery</h4>
      <div className="w-100 my-5">
        <Carousel
          images={[
            SliderImg,
            SliderImg,
            SliderImg,
            SliderImg,
            SliderImg,
            SliderImg,
          ]}
        />
      </div>
    </div>
  );
};

export default OurGallery;
