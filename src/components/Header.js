import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top py-0">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center w-100">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="logo" className="w-75" />
          </NavLink>
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item me-4">
                <NavLink
                  className="nav-link text-uppercase"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-4">
                <NavLink className="nav-link text-uppercase" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item me-4">
                <NavLink className="nav-link text-uppercase" to="/news">
                  News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase" to="/signin">
                  Sign In/Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
