import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide1Bg from "../assets/img/slide1-bg.jpg";
import Slide2Bg from "../assets/img/slide2-bg.jpg";
import Slide1Player from "../assets/img/slide1-player.png";
import Slide2Player from "../assets/img/slide2-player.png";

const MainSlider = () => {
  return (
    <div id="main-slider">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
      >
        <div>
          <img src={Slide1Bg} alt="Slide 1" />
          <div className="legend">
            <div className="container w-75">
              <img
                src={Slide1Player}
                alt="Player 1"
                style={{ width: "415.1px", height: "593px" }}
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-delay="0"
                data-aos-once="true"
              />
              <div className="slider-text">
                <h1>
                  <span>Elven Stort:</span>
                  <br />
                  Elective Player
                </h1>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src={Slide2Bg} alt="Slide 2" />
          <div className="legend">
            <div className="container w-75">
              <img
                src={Slide2Player}
                alt="Player 2"
                style={{ width: "48%" }}
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-delay="0"
                data-aos-once="true"
              />
              <div className="slider-text">
                <h1>
                  <span>Power Kick To</span>
                  <br />
                  Get Your Goals...
                </h1>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default MainSlider;
