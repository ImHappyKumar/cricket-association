import React from "react";

const SliderTab = () => {
  return (
    <div id="slider-tab">
      <div className="container">
        <div className="row">
          <ul>
            <li className="col-md-4">
              <div className="slidertab-box mx-3">
                <span>01</span>
                <h6>
                  <a href="/">
                    Success is not Accident it's a Result of Hard Work
                  </a>
                </h6>
                <strong>NFL League</strong>
              </div>
            </li>
            <li className="col-md-4">
              <div className="slidertab-box mx-3">
                <span>02</span>
                <h6>
                  <a href="/">
                  Marit Lion: Player of the Month in December 2018
                  </a>
                </h6>
                <strong>MBL Premiere League</strong>
              </div>
            </li>
            <li className="col-md-4">
              <div className="slidertab-box mx-3">
                <span>03</span>
                <h6>
                  <a href="/">
                  The will to prepare to win that makes the difference
                  </a>
                </h6>
                <strong>Carolina Baltimore</strong>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SliderTab;
