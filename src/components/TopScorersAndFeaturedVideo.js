import React from "react";
import PlayerImg from "../assets/img/top-player-1.png";
import VideoThumbnail from "../assets/img/video-thumb.png";

const TopScorersAndFeaturedVideo = () => {
  return (
    <div id="top-scorers-and-featured-video">
      <div className="container-fluid flex-column align-items-center py-5 text-white">
        <div>
          <h4 className="heading text-center text-white">
            Top Scorers and Featured Video
          </h4>
          <div className="container d-flex flex-wrap justify-content-lg-between justify-content-center">
            <div className="col-lg-5 col-md-8 col-12 my-5 py-lg-4">
              <ul className="top-scorers" style={{ listStyle: "none" }}>
                <li className="d-flex align-items-center border-bottom pb-2 mb-5">
                  <div>
                    <img
                      src={PlayerImg}
                      alt=""
                      className="player-img"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "30px",
                      }}
                    />
                  </div>

                  <div className="ms-2">
                    <h5 className="player-name mb-0">Player Name 1</h5>
                    <p className="player-score mb-0">Score 1</p>
                  </div>
                </li>
                <li className="d-flex align-items-center border-bottom pb-2 mb-5">
                  <div>
                    <img
                      src={PlayerImg}
                      alt=""
                      className="player-img"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "30px",
                      }}
                    />
                  </div>

                  <div className="ms-2">
                    <h5 className="player-name mb-0">Player Name 1</h5>
                    <p className="player-score mb-0">Score 1</p>
                  </div>
                </li>
                <li className="d-flex align-items-center border-bottom pb-2 mb-5">
                  <div>
                    <img
                      src={PlayerImg}
                      alt=""
                      className="player-img"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "30px",
                      }}
                    />
                  </div>

                  <div className="ms-2">
                    <h5 className="player-name mb-0">Player Name 1</h5>
                    <p className="player-score mb-0">Score 1</p>
                  </div>
                </li>
                <li className="d-flex align-items-center border-bottom pb-2">
                  <div>
                    <img
                      src={PlayerImg}
                      alt=""
                      className="player-img"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "30px",
                      }}
                    />
                  </div>

                  <div className="ms-2">
                    <h5 className="player-name mb-0">Player Name 1</h5>
                    <p className="player-score mb-0">Score 1</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-7 col-md-8 col-12 d-flex justify-content-lg-end justify-content-center align-items-center my-lg-5 py-lg-4">
              <div className="featured-video d-flex justify-content-center">
                <img
                  src={VideoThumbnail}
                  alt=""
                  className="video-thumb"
                />
                  <button className="btn play-btn" style={{ width: "100px", height: "100px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 100 100"
                      fill="none"
                    >
                      <circle cx="50" cy="50" r="50" fill="white" fillOpacity="0.43" />
                      <ellipse cx="50" cy="49.9961" rx="42" ry="42" fill="white" />
                      <path d="M64 50.5L43.75 61.3253V39.6747L64 50.5Z" fill="#FA0000" />
                    </svg>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopScorersAndFeaturedVideo;
