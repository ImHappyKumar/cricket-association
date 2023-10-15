import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from "../assets/img/slider-bg.jpg";
import Player1 from "../assets/img/player-1.png";
import Player2 from "../assets/img/player-2.png";

const MainSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <div id="main-slider">
      <Carousel
        showIndicators={false}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        selectedItem={activeSlide}
        onChange={handleSlideChange}
      >
        <div>
          <img src={Banner} alt="Slide 1" className="w-100 slider-bg" />
          <div className="legend text-uppercase slide-animation">
            <div className="container w-md-75">
              <div className={`slider-text ${activeSlide === 0 ? "active" : ""}`}>
                <h1>
                  <span>Elven Stort:</span>
                  <br />
                  Elective Player
                </h1>
                <button className="btn btn-primary text-uppercase">
                  Learn More
                </button>
              </div>
              <img src={Player1} alt="Player 1" className={`w-50 ${activeSlide === 0 ? "active" : ""}`} />
            </div>
          </div>
        </div>

        <div>
          <img src={Banner} alt="Slide 2" className="w-100 slider-bg" />
          <div className="legend text-uppercase slide-animation">
            <div className="container w-md-75">
              <div className={`slider-text ${activeSlide === 1 ? "active" : ""}`}>
                <h1>
                  <span>Power Kick To</span>
                  <br />
                  Get Your Goals...
                </h1>
                <button className="btn btn-primary text-uppercase">
                  Learn More
                </button>
              </div>
              <img src={Player2} alt="Player 2" className={`w-50 ${activeSlide === 1 ? "active" : ""}`} />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default MainSlider;
