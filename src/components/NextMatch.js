import React from "react";
import Team1 from "../assets/img/team-1.png";
import Team2 from "../assets/img/team-2.png";
import { FiCalendar, FiMapPin } from "react-icons/fi";

const NextMatch = () => {
  return (
    <div id="next-match">
      <div className="container d-flex flex-column align-items-center justify-content-center p-md-5 p-sm-3 p-0">
        <div className="d-flex mt-sm-5 mt-4 mb-sm-3">
          <div className="d-flex flex-column-reverse flex-md-row justify-content-center align-items-center">
            <h4 className="team-name text-center d-inline-block me-md-3 me-0">Team A</h4>
            <img
              src={Team1}
              alt="Team 1"
              style={{ width: "40px", marginBottom: "5px" }}
            />
          </div>
          <h3 className="vs mx-sm-5 mt-sm-0 mt-2 mx-4">VS</h3>
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <img
              src={Team2}
              alt="Team 2"
              style={{ width: "40px", marginBottom: "5px" }}
            />
            <h4 className="team-name text-center d-inline-block ms-md-3 ms-0">Team B</h4>
          </div>
        </div>
        <div className="d-flex align-items-center mb-sm-4 mb-3">
          <div className="me-3">
            <i>
              <FiCalendar />
            </i>
            <span className="ms-2">August 13, 2030</span>
          </div>
          <div className="ms-3">
            <i>
              <FiMapPin />
            </i>
            <span className="ms-2">Dehradun Stadium</span>
          </div>
        </div>
        <button className="btn btn-primary text-uppercase mb-4">Game Info</button>
      </div>
    </div>
  );
};

export default NextMatch;
