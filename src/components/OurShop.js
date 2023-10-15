import React from "react";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item1 from "../assets/img/shop-item-1.png";
import Item2 from "../assets/img/shop-item-2.png";
import Item3 from "../assets/img/shop-item-3.png";

const OurShop = () => {
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <div id="our-shop">
      <div className="container d-flex flex-column align-items-center">
        <div className="heading">Our Shop</div>
        <div className="w-100 my-5">
          <Carousel {...settings}>
            <div className="col-md-4 px-2">
              <div className="card rounded-0 border-0">
                <img src={Item1} className="card-img-top rounded-0" alt="..." />
                <div className="card-body">
                  <h6 className="item-price mb-1">Rs. 2000</h6>
                  <h4 className="item-title">Yellow Football Set</h4>
                  <a href="/" className="btn btn-primary text-uppercase mt-3">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 px-2">
              <div className="card rounded-0 border-0">
                <img src={Item2} className="card-img-top rounded-0" alt="..." />
                <div className="card-body">
                  <h6 className="item-price mb-1">Rs. 2000</h6>
                  <h4 className="item-title">Yellow Football Set</h4>
                  <a href="/" className="btn btn-primary text-uppercase mt-3">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 px-2">
              <div className="card rounded-0 border-0">
                <img src={Item3} className="card-img-top rounded-0" alt="..." />
                <div className="card-body">
                  <h6 className="item-price mb-1">Rs. 2000</h6>
                  <h4 className="item-title">Yellow Football Set</h4>
                  <a href="/" className="btn btn-primary text-uppercase mt-3">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 px-2">
              <div className="card rounded-0 border-0">
                <img src={Item1} className="card-img-top rounded-0" alt="..." />
                <div className="card-body">
                  <h6 className="item-price mb-1">Rs. 2000</h6>
                  <h4 className="item-title">Yellow Football Set</h4>
                  <a href="/" className="btn btn-primary text-uppercase mt-3">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 px-2">
              <div className="card rounded-0 border-0">
                <img src={Item2} className="card-img-top rounded-0" alt="..." />
                <div className="card-body">
                  <h6 className="item-price mb-1">Rs. 2000</h6>
                  <h4 className="item-title">Yellow Football Set</h4>
                  <a href="/" className="btn btn-primary text-uppercase mt-3">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 px-2">
              <div className="card rounded-0 border-0">
                <img src={Item3} className="card-img-top rounded-0" alt="..." />
                <div className="card-body">
                  <h6 className="item-price mb-1">Rs. 2000</h6>
                  <h4 className="item-title">Yellow Football Set</h4>
                  <a href="/" className="btn btn-primary text-uppercase mt-3">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default OurShop;
