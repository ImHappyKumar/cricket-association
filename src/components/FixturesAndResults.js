import React from "react";
import Team1 from "../assets/img/team-1.png";
import Team2 from "../assets/img/team-2.png";
import { FiCalendar, FiMapPin, FiEye, FiArrowRight } from "react-icons/fi";

const FixturesAndResults = () => {
  return (
    <div id="fixtures-and-results">
      <div className="container-fluid py-5 text-white">
        <div>
          <h4 className="heading text-center text-white">
            Fixtures and Results
          </h4>
          <div className="container d-flex flex-wrap justify-content-xl-between justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-11 col-12">
              <div className="match-schedule">
                <div className="next-match">
                  <div className="container d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex mt-sm-5 mb-3 pt-sm-5">
                      <div className="d-flex flex-column-reverse flex-sm-row justify-content-center align-items-center">
                        <h4 className="team-name text-center d-inline-block me-sm-3">
                          Team A
                        </h4>
                        <img
                          src={Team1}
                          alt="Team 1"
                          style={{ width: "40px", marginBottom: "5px" }}
                        />
                      </div>
                      <h3 className="vs mx-sm-5 mt-sm-0 mt-2 mx-4">VS</h3>
                      <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
                        <img
                          src={Team2}
                          alt="Team 2"
                          style={{ width: "40px", marginBottom: "5px" }}
                        />
                        <h4 className="team-name text-center d-inline-block ms-sm-3">
                          Team B
                        </h4>
                      </div>
                    </div>
                    <div className="d-flex flex-sm-row flex-column align-items-center mb-sm-4 pb-sm-5">
                      <div className="me-sm-3">
                        <i>
                          <FiCalendar />
                        </i>
                        <span className="ms-2">August 13, 2030</span>
                      </div>
                      <div className="ms-sm-3">
                        <i>
                          <FiMapPin />
                        </i>
                        <span className="ms-2">Dehradun Stadium</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="next-match-list d-flex justify-content-between align-items-center bg-white text-black px-3 py-4 mb-1 mt-0">
                  <div className="team-info d-flex col-md-5 col-sm-7">
                    <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
                      <img src={Team1} alt="Team 1" className="mb-2 mb-sm-0" style={{ width: "30px" }} />
                      <h6 className="team-name text-center d-inline-block ms-2">Team A</h6>
                    </div>
                    <h5 className="vs d-inline-block mx-3">VS</h5>
                    <div className="d-flex flex-column-reverse flex-sm-row justify-content-center align-items-center"> 
                      <h6 className="team-name text-center d-inline-block me-2">Team B</h6>
                      <img src={Team2} alt="Team 2" className="mb-2 mb-sm-0" style={{ width: "30px" }} />
                    </div>
                  </div>
                  <div className="match-info col-md-5 col-sm-3 px-md-5 px-1">
                    <h6>Dehradun Stadium</h6>
                    <h6>August 13, 2030</h6>
                  </div>
                  <div className="match-info col-md-2 col-sm-2">
                    <a href="/">Preview</a>
                  </div>
                </div>
                
                <div className="next-match-list d-flex justify-content-between align-items-center bg-white text-black px-3 py-4 mb-1 mt-0">
                  <div className="team-info d-flex col-md-5 col-sm-7">
                    <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
                      <img src={Team1} alt="Team 1" className="mb-2 mb-sm-0" style={{ width: "30px" }} />
                      <h6 className="team-name text-center d-inline-block ms-2">Team A</h6>
                    </div>
                    <h5 className="vs d-inline-block mx-3">VS</h5>
                    <div className="d-flex flex-column-reverse flex-sm-row justify-content-center align-items-center"> 
                      <h6 className="team-name text-center d-inline-block me-2">Team B</h6>
                      <img src={Team2} alt="Team 2" className="mb-2 mb-sm-0" style={{ width: "30px" }} />
                    </div>
                  </div>
                  <div className="match-info col-md-5 col-sm-3 px-md-5 px-1">
                    <h6>Dehradun Stadium</h6>
                    <h6>August 13, 2030</h6>
                  </div>
                  <div className="match-info col-md-2 col-sm-2">
                    <a href="/">Preview</a>
                  </div>
                </div>

                <div className="next-match-list d-flex justify-content-between align-items-center bg-white text-black px-3 py-4 mb-1 mt-0">
                  <div className="team-info d-flex col-md-5 col-sm-7">
                    <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
                      <img src={Team1} alt="Team 1" className="mb-2 mb-sm-0" style={{ width: "30px" }} />
                      <h6 className="team-name text-center d-inline-block ms-2">Team A</h6>
                    </div>
                    <h5 className="vs d-inline-block mx-3">VS</h5>
                    <div className="d-flex flex-column-reverse flex-sm-row justify-content-center align-items-center"> 
                      <h6 className="team-name text-center d-inline-block me-2">Team B</h6>
                      <img src={Team2} alt="Team 2" className="mb-2 mb-sm-0" style={{ width: "30px" }} />
                    </div>
                  </div>
                  <div className="match-info col-md-5 col-sm-3 px-md-5 px-1">
                    <h6>Dehradun Stadium</h6>
                    <h6>August 13, 2030</h6>
                  </div>
                  <div className="match-info col-md-2 col-sm-2">
                    <a href="/">Preview</a>
                  </div>
                </div>

                <button className="btn btn-primary w-100">
                  <i className="me-2">
                    <FiEye />
                  </i>
                  View Schedule
                </button>
              </div>
            </div>

            <div className="col-xxl-5 col-xl-4 col-lg-8 col-md-11 col-12">
              <div className="latest-results rounded">
                <div className="title d-flex flex-column justify-content-center align-items-center rounded-top-2">
                  Latest Results
                </div>

                <div
                  className="result-list d-flex flex-column justify-content-center align-items-center bg-white text-black"
                  style={{ border: "1px solid #B4B4B4" }}
                >
                  <div className="result-info pt-4">
                    <h6 className="team-name d-inline-block me-2">Team A</h6>
                    <img src={Team1} alt="Team 1" style={{ width: "30px" }} />
                    <h6 className="score d-inline-block mx-3">0 - 3</h6>
                    <img src={Team2} alt="Team 2" style={{ width: "30px" }} />
                    <h6 className="team-name d-inline-block ms-2">Team B</h6>
                  </div>

                  <div className="match-info py-2">
                    <p className="match-date d-inline-block">August 30, 2030</p>{" "}
                    /{" "}
                    <p className="match-venue d-inline-block">
                      Dehradun Stadium
                    </p>
                  </div>
                </div>
                <div
                  className="result-list d-flex flex-column justify-content-center align-items-center bg-white text-black"
                  style={{ border: "1px solid #B4B4B4" }}
                >
                  <div className="result-info pt-4">
                    <h6 className="team-name d-inline-block me-2">Team A</h6>
                    <img src={Team1} alt="Team 1" style={{ width: "30px" }} />
                    <h6 className="score d-inline-block mx-3">0 - 3</h6>
                    <img src={Team2} alt="Team 2" style={{ width: "30px" }} />
                    <h6 className="team-name d-inline-block ms-2">Team B</h6>
                  </div>

                  <div className="match-info py-2">
                    <p className="match-date d-inline-block">August 30, 2030</p>{" "}
                    /{" "}
                    <p className="match-venue d-inline-block">
                      Dehradun Stadium
                    </p>
                  </div>
                </div>
                <div
                  className="result-list d-flex flex-column justify-content-center align-items-center bg-white text-black"
                  style={{ border: "1px solid #B4B4B4" }}
                >
                  <div className="result-info pt-4">
                    <h6 className="team-name d-inline-block me-2">Team A</h6>
                    <img src={Team1} alt="Team 1" style={{ width: "30px" }} />
                    <h6 className="score d-inline-block mx-3">0 - 3</h6>
                    <img src={Team2} alt="Team 2" style={{ width: "30px" }} />
                    <h6 className="team-name d-inline-block ms-2">Team B</h6>
                  </div>

                  <div className="match-info py-2">
                    <p className="match-date d-inline-block">August 30, 2030</p>{" "}
                    /{" "}
                    <p className="match-venue d-inline-block">
                      Dehradun Stadium
                    </p>
                  </div>
                </div>
                <div
                  className="result-list d-flex flex-column justify-content-center align-items-center bg-white text-black"
                  style={{ border: "1px solid #B4B4B4" }}
                >
                  <div className="result-info pt-4">
                    <h6 className="team-name d-inline-block me-2">Team A</h6>
                    <img src={Team1} alt="Team 1" style={{ width: "30px" }} />
                    <h6 className="score d-inline-block mx-3">0 - 3</h6>
                    <img src={Team2} alt="Team 2" style={{ width: "30px" }} />
                    <h6 className="team-name d-inline-block ms-2">Team B</h6>
                  </div>

                  <div className="match-info py-2">
                    <p className="match-date d-inline-block">August 30, 2030</p>{" "}
                    /{" "}
                    <p className="match-venue d-inline-block">
                      Dehradun Stadium
                    </p>
                  </div>
                </div>
                <div
                  className="result-list d-flex flex-column justify-content-center align-items-center bg-white text-black"
                  style={{ border: "1px solid #B4B4B4" }}
                >
                  <div className="result-info pt-4">
                    <h6 className="team-name d-inline-block me-2">Team A</h6>
                    <img src={Team1} alt="Team 1" style={{ width: "30px" }} />
                    <h6 className="score d-inline-block mx-3">0 - 3</h6>
                    <img src={Team2} alt="Team 2" style={{ width: "30px" }} />
                    <h6 className="team-name d-inline-block ms-2">Team B</h6>
                  </div>

                  <div className="match-info py-2">
                    <p className="match-date d-inline-block">August 30, 2030</p>{" "}
                    /{" "}
                    <p className="match-venue d-inline-block">
                      Dehradun Stadium
                    </p>
                  </div>
                </div>
                <button className="btn btn-primary rounded-0 rounded-bottom-2 w-100">
                  View All Results
                  <i className="ms-2">
                    <FiArrowRight />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixturesAndResults;
