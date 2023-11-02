import React from "react";
import { Link, useNavigate } from "react-router-dom";

const WhoAreYou = (props) => {
  const { clubLink, playerLink, linkMessage, linkButton, link } = props;
  const navigate = useNavigate();

  return (
    <div id="who-are-you" className="d-flex flex-column align-items-center">
      <h6 className="mt-2">Who are you?</h6>
      <div className="d-flex mt-4 mb-lg-5 mb-4">
        <button className="btn btn-primary me-3" onClick={() => navigate(clubLink)}>Club</button>
        <button className="btn btn-primary ms-3" onClick={() => navigate(playerLink)}>Player</button>
      </div>
      <Link to={link} className="mt-lg-5 mt-4 text-center">
        {linkMessage} <span>{linkButton}</span>
      </Link>
    </div>
  );
};

export default WhoAreYou;
