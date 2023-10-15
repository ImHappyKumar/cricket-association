import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from "../assets/img/slider-banner.png";
import Player1 from "../assets/img/player-1.png";
import Player2 from "../assets/img/player-2.png";

const MainSlider = () => {
  return (
    <div id="main-slider">
      <Carousel
        showIndicators={false}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
      >
        <div>
          <img src={Banner} alt="Slide 1" className="w-100 slider-bg" />
          <div className="legend text-uppercase slide-animation">
            <div className="container w-md-75">
              <div className="slider-text">
                <h1>
                  <span>Elven Stort:</span>
                  <br />
                  Elective Player
                </h1>
                <button className="btn btn-primary text-uppercase">
                  Learn More
                </button>
              </div>
              <img src={Player1} alt="Player 1" className="w-50" />
            </div>
          </div>
        </div>

        <div>
          <img src={Banner} alt="Slide 2" className="w-100 slider-bg" />
          <div className="legend text-uppercase slide-animation">
            <div className="container w-md-75">
              <div className="slider-text">
                <h1>
                  <span>Power Kick To</span>
                  <br />
                  Get Your Goals...
                </h1>
                <button className="btn btn-primary text-uppercase">
                  Learn More
                </button>
              </div>
              <img src={Player2} alt="Player 2" className="w-50" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default MainSlider;
