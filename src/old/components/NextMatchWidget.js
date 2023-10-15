import React from "react";
import teamLogo1 from "../assets/img/mlogo1.png";
import teamLogo2 from "../assets/img/mlogo2.png";

const NextMatchWidget = () => {
  return (
    <div id="next-match-widget" className="me-5">
      <h5 className="title">Next Match</h5>

      <div className="body">
        <div className="match-teams-vs d-flex justify-content-center">
          <div className="team-logo text-center">
            <img src={teamLogo1} alt="team 1" />
            <strong className="text-center">FC Champs</strong>
          </div>
          <div className="mvs">
            <strong className="vs">VS</strong>
          </div>
          <div className="team-logo text-center">
            <img src={teamLogo2} alt="team 2" />
            <strong className="text-center">Tigers</strong>
          </div>
        </div>

        <ul className="nmw-txt">
          <li>
            <strong>Super Euro League</strong>
          </li>
          <li>20 December, 2020</li>
          <li>04:00 PM GMT+</li>
          <li>
            <span>New Expo Stadium, NYK</span>
          </li>
        </ul>

        <div class="countdown">
          <span class="d-flex">
            <span class="col-md-3 countdown-section">
              <span class="countdown-amount d-inline-block w-100 text-center">
                112
              </span>
              <span class="countdown-period d-inline-block w-100 text-center">
                Days
              </span>
            </span>
            <span class="col-md-3 countdown-section">
              <span class="countdown-amount d-inline-block w-100 text-center">
                15
              </span>
              <span class="countdown-period d-inline-block w-100 text-center">
                Hours
              </span>
            </span>
            <span class="col-md-3 countdown-section">
              <span class="countdown-amount d-inline-block w-100 text-center">
                59
              </span>
              <span class="countdown-period d-inline-block w-100 text-center">
                Minutes
              </span>
            </span>
            <span class="col-md-3 countdown-section">
              <span class="countdown-amount d-inline-block w-100 text-center">
                11
              </span>
              <span class="countdown-period d-inline-block w-100 text-center">
                Seconds
              </span>
            </span>
          </span>
        </div>

        <div className="buy-ticket">
          <a href="#">Buy Your Ticket</a>
        </div>
      </div>
    </div>
  );
};

export default NextMatchWidget;
