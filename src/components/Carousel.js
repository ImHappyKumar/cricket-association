import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = (props) => {
  const { images } = props;

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div id="carousel">
      <Slider {...settings}>
        {images.map((image, index) => {
          return (
            <div className="rounded px-4" key={index}>
              <img
                src={image}
                alt={`${index + 1}`}
                className="rounded w-100"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
