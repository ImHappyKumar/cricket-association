import React from "react";
import Logo from "../assets/img/logo.png";
import { FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-content">
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="logo" style={{ width: "80px" }} />
          </div>
          <div className="container d-flex flex-wrap text-white py-5">
            <div className="col-md-3 col-12 me-xxl-5 pe-md-5 pe-xxl-0">
              <h6 className="text-uppercase mb-3">Heading</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur. Proin blandit a lacus
                mattis. Aliquam justo
              </p>
            </div>
            <div className="col-md-3 col-12 mt-5 mt-md-0">
              <ul className="ps-0 ps-md-4" style={{ listStyle: "none" }}>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none text-white">
                    Blogs
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none text-white">
                    About us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none text-white">
                    Resposible gaming
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none text-white">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none text-white">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-12">
              <ul className="ps-0 ps-md-3" style={{ listStyle: "none" }}>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none text-white">
                    Cancellation & Refund
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none text-white">
                    FAQ
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none text-white">
                    Terms & Condition
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none text-white">
                    News & Media
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none text-white">
                    Legalities
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xxl-2 col-md-3 col-12">
              <ul className="ps-0 ps-md-3" style={{ listStyle: "none" }}>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none text-white">
                    Contact Us or Follow Us:
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none text-white">
                    +123456789
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none text-white">
                    www.companyname.com
                  </a>
                </li>
                <li className="mb-2">
                  <ul className="d-flex px-0" style={{ listStyle: "none" }}>
                    <li className="me-3">
                      <a href="/" className="text-decoration-none text-white">
                        <i style={{ fontSize: "20px" }}>
                          <FiFacebook />
                        </i>
                      </a>
                    </li>
                    <li className="me-3">
                      <a href="/" className="text-decoration-none text-white">
                        <i style={{ fontSize: "20px" }}>
                          <FiInstagram />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-decoration-none text-white">
                        <i style={{ fontSize: "20px" }}>
                          <FiLinkedin />
                        </i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="container-fluid text-white text-center py-3"
          style={{ borderTop: "1px solid #fff" }}
        >
          © 2023 TFG All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
