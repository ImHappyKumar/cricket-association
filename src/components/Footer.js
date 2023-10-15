import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-content col-lg-6 col-sm-8 col-12 d-flex flex-column align-items-center text-white pt-5 px-sm-0 px-4 mx-auto">
        <nav>
          <ul className="d-flex p-0" style={{ listStyle: "none" }}>
            <li className="me-sm-5 me-4">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </li>
            <li className="me-sm-5 me-4">
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                About Us
              </Link>
            </li>
            <li className="me-sm-5 me-4">
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                style={{ textDecoration: "none", color: "white" }}
              >
                News
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas optio
          magnam perspiciatis ab officia rem inventore fugit culpa, qui
          voluptatibus architecto, quod, fugiat possimus? Vitae!
        </p>
        <div className="social-icons mt-4">
          <nav>
            <ul className="d-flex" style={{ listStyle: "none" }}>
              <li className="me-5">
                <Link
                  to="https://facebook.com/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li className="me-5">
                <Link
                  to="https://instagram.com/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <FaInstagram />
                </Link>
              </li>
              <li className="me-5">
                <Link
                  to="https://twitter.com/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <FaTwitter />
                </Link>
              </li>
              <li className="me-5">
                <Link
                  to="https://linkedin.com/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link
                  to="https://youtube.com/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
