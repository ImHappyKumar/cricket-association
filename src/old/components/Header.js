import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaSistrix,
} from "react-icons/fa6";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header className="main-header" id="main-header">
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ul className="social-icons">
                <li>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <i>
                      <FaFacebookF />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <i>
                      <FaTwitter />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <i>
                      <FaInstagram />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <i>
                      <FaLinkedinIn />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <i>
                      <FaYoutube />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="links">
                <li>
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ENG
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          ENG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          FR
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          GR
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          AR
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      USD
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          USD
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          EURO
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          POUND
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    My Account
                  </a>
                </li>
                <li className="nav-item search">
                  <a className="nav-link" aria-current="page" href="#">
                    <i>
                      <FaSistrix />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Matches
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Players
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Point Table
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Fixtures
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Buy Tickets
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
