import React from "react";
import Puma from "../assets/img/puma.png";
import Evian from "../assets/img/evian.png";
import Nick from "../assets/img/nick.png";
import Cocacola from "../assets/img/cocacola.png";

const OurSponsors = () => {
  return (
    <div id="our-sponsors">
      <div className="container d-flex flex-column align-items-center">
        <h4 className="heading">Our Sponsors</h4>
        <div className="sponsors d-flex flex-wrap justify-content-evenly align-items-between w-100 mt-5">
          <div className="col-md-3 p-md-0 px-3 pb-5">
            <img src={Puma} alt="Puma" />
          </div>
          <div className="col-md-3 p-md-0 px-3 pb-5">
            <img src={Evian} alt="Evian" />
          </div>
          <div className="col-md-3 p-md-0 px-3 pb-5">
            <img src={Nick} alt="Nick" />
          </div>
          <div className="col-md-3 p-md-0">
            <img src={Cocacola} alt="Cocacola" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSponsors;
