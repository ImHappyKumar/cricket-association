import React from "react";
import Carousel from "./Carousel";
import SliderImg from "../assets/img/slider-img.png";

const LatestNews = () => {
  return (
    <div
      className="container d-flex flex-column align-items-center"
      id="latest-news"
    >
      <h4 className="heading text-center">Latest News</h4>
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

export default LatestNews;
