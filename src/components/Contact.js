import React from "react";
import Banner from "../assets/img/banner.jpg";
import Map from "../assets/img/map.png";

const Contact = () => {
  return (
    <div id="contact">
      <div className="banner">
        <img src={Banner} alt="banner" className="overlay-image" />
        <div className="overlay-text">Contact Us</div>
      </div>

      <div className="form-section">
        <div className="contact-form container d-flex flex-column align-items-center shadow rounded">
          <h4 className="my-5">Contact Us</h4>
          <form className="w-100">

            <div className="d-flex flex-wrap justify-content-evenly">
              <div className="col-md-5 col-11">
                <label
                  htmlFor="fullName"
                  className="form-label text-capitalize"
                >
                  Full Name *
                </label>
                <input type="text" className="form-control" id="fullName" />
              </div>
              <div className="col-md-5 col-11 mt-md-0 mt-4">
                <label htmlFor="email" className="form-label text-capitalize">
                  Your Email *
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
            </div>

            <div className="d-flex flex-wrap justify-content-evenly my-4">
              <div className="col-md-5 col-11">
                <label htmlFor="company" className="form-label text-capitalize">
                  Company *
                </label>
                <input type="text" className="form-control" id="company" />
              </div>
              <div className="col-md-5 col-11 mt-md-0 mt-4">
                <label htmlFor="phone" className="form-label text-capitalize">
                  Mobile Number
                </label>
                <input type="phone" className="form-control" id="phone" />
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <div className="col-11 px-md-2">
                <label htmlFor="message" className="form-label text-capitalize">
                  Message *
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="message"
                  rows={5}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary d-block mx-auto my-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="contact-details container d-flex flex-lg-row flex-column align-items-center shadow">
        <div className="map col-lg-4 col-10">
          <img src={Map} alt="map" style={{ width: "100%" }} />
        </div>

        <div className="contact-details-content col-lg-8 col-10 px-lg-5 py-xxl-0 py-lg-4 pb-5">
          <h2>We'd Love to Hear From You.</h2>
          <p className="pe-5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <div className="row mt-4 mx-auto">
            <div className="col-md-4 py-2">
              <h5>Denpasar</h5>
              <p className="mb-0">Jl. Raya Puputan No. 142, Bali</p>
            </div>
            <div className="col-md-4 mt-lg-0 mt-4 ms-md-4 py-2">
              <h5>Denpasar</h5>
              <p className="mb-0">Jl. Raya Puputan No. 142, Bali</p>
            </div>
            <div className="col-md-4 mt-4 py-2">
              <h5>Denpasar</h5>
              <p className="mb-0">Jl. Raya Puputan No. 142, Bali</p>
            </div>
            <div className="col-md-4 mt-4 ms-md-4 py-2">
              <h5>Denpasar</h5>
              <p className="mb-0">Jl. Raya Puputan No. 142, Bali</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
