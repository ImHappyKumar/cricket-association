import React from "react";
import { Link } from "react-router-dom";
import SigninBg from "../assets/img/signin-bg.png";

const WhoAreYou = (props) => {
  const { title, linkMessage, linkButton, link } = props;
  return (
    <div id="who-are-you">
      <div className="container-fluid d-flex flex-wrap p-0 mb-md-0 mb-5">
        <div className="col-12 col-md-5">
          <img src={SigninBg} alt="Signin" className="w-100" />
        </div>
        <div className="col-12 col-md-7 d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-capitalize">Welcome To Banda</h2>
          <h4 className="mt-sm-5 mt-4">{title}</h4>
          <h6 className="mt-2">Who are you?</h6>
          <div className="d-flex mt-4 mb-lg-5 mb-4">
            <button className="btn btn-primary me-3">Club</button>
            <button className="btn btn-primary ms-3">Player</button>
          </div>
          <Link to={link} className="mt-lg-5 mt-4">
            {linkMessage} <span>{linkButton}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhoAreYou;
