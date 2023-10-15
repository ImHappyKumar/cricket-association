import React from "react";
import TopPlayer1 from "../assets/img/top-player-1.png";
import TopPlayer2 from "../assets/img/top-player-2.png";
import TopPlayer3 from "../assets/img/top-player-3.png";
import { FiArrowRight } from "react-icons/fi";

const Players = () => {
  return (
    <div id="players">
      <div className="container-fluid flex-column align-items-center py-5 text-white">
        <div className="py-4">
          <h4 className="heading text-center text-white">Players</h4>
          <div className="container d-flex my-5 pt-4">
            <div className="col-lg-4 col-md-6 p-3">
              <div className="card rounded-0">
                <img
                  src={TopPlayer1}
                  className="card-img-top rounded-0"
                  alt="top-player-1"
                />
                <div className="card-body d-flex align-items-center">
                  <div className="player-rank col-3">11</div>
                  <div className="col-9">
                    <h5 className="player-name card-title my-0">
                      Mohamed Salah
                    </h5>
                    <p className="player-desc card-text">Batsman</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-md-block d-none p-3">
              <div className="card rounded-0">
                <img
                  src={TopPlayer2}
                  className="card-img-top rounded-0"
                  alt="top-player-2"
                />
                <div className="card-body d-flex align-items-center">
                  <div className="player-rank col-3">11</div>
                  <div className="col-9">
                    <h5 className="player-name card-title my-0">
                      Mohamed Salah
                    </h5>
                    <p className="player-desc card-text">Batsman</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-lg-block d-none p-3">
              <div className="card rounded-0">
                <img
                  src={TopPlayer3}
                  className="card-img-top rounded-0"
                  alt="top-player-3"
                />
                <div className="card-body d-flex align-items-center">
                  <div className="player-rank col-3">11</div>
                  <div className="col-9">
                    <h5 className="player-name card-title my-0">
                      Mohamed Salah
                    </h5>
                    <p className="player-desc card-text">Batsman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="d-flex justify-content-center">
              <a href="/" style={{zIndex: '2'}}>
                View All Players
                <i className="ms-2">
                  <FiArrowRight />
                </i>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
