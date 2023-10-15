import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Subscribe = () => {
  return (
    <div id="subscribe">
      <div className="container">
        <form>
          <div className="d-flex flex-wrap px-md-5 px-4">
            <div className="col-lg-6 col-12 pe-lg-5">
              <label htmlFor="email" className="form-label">
                <span>Subscribe</span> to the our newsletter for cricket TV
                listings and news
              </label>
            </div>
            <div className="col-lg-6 col-12 d-flex ps-lg-5 my-lg-auto mt-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email Address"
                aria-describedby="emailHelp"
              />
              <button type="submit" className="btn btn-primary my-auto">
                <i><FiArrowRight /></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
