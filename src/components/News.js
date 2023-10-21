import React from "react";
import { Link } from "react-router-dom";
import Banner from "../assets/img/banner.jpg";
import Article1 from "../assets/img/latest-article-1.jpg";
import Article2 from "../assets/img/latest-article-2.jpg";
import Article3 from "../assets/img/latest-article-3.jpg";
import Article4 from "../assets/img/latest-article-4.jpg";

const News = () => {
  return (
    <div id="news">
      <div className="banner">
        <img src={Banner} alt="banner" className="overlay-image" />
        <div className="overlay-text">News</div>
      </div>

      <div className="latest-articles">
        <h4 className="my-5 text-center">Latest Articles</h4>
        <div className="container d-flex flex-wrap">
          <div className="col-12">
            <div className="articles" id="article-1">
              <img src={Article1} alt="article-1" className="overlay-image" />
              <div className="overlay-text">
                <h6 className="date text-uppercase mb-1">June 6, 2023</h6>
                <h4 className="mb-2 mb-md-3 mb-xl-4">
                  The Latest Cricket Developments A Thrilling Journey On The
                  Pitch
                </h4>
                <p>
                  Cricket, the beloved sport that captivates millions across the
                  globe, has witnessed a plethora of exciting events and
                  noteworthy achievements in recent times. From thrilling
                  matches to stunning individual performances, the cricketing
                  world has been buzzing with excitement and anticipation. In
                  this article, we delve into some of the latest cricket
                  developments that have left fans in awe and elevated the game
                  to new heights.
                </p>

                <Link to="/news/article-1" className="btn btn-primary mt-2 mt-md-3 mt-xl-4">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 mt-4 mt-md-5 d-flex flex-wrap">
            <div className="col-12 col-xl-6 d-flex flex-wrap pe-xl-3">
              <div className="col-12">
                <div className="articles" id="article-2">
                  <img
                    src={Article2}
                    alt="article-2"
                    className="overlay-image d-none d-xl-block"
                  />
                  <img
                    src={Article1}
                    alt="article-2"
                    className="overlay-image d-xl-none"
                  />
                  <div className="overlay-text">
                    <h6 className="date text-uppercase mb-1">June 6, 2023</h6>
                    <h4 className="mb-2 mb-md-3 mb-xl-4">
                      Cricket WorldCup 2023
                    </h4>
                    <p>
                      India boasts a plethora of world-class cricket stadiums
                      that are renowned for their electrifying atmosphere and
                      grandeur. The ICC Cricket World Cup 2023 will be played
                      across several iconic venues in different parts of the
                      country, offering unique experiences to players and
                      spectators alike
                    </p>
                    <Link
                      to="/news/article-2"
                      className="btn btn-primary mt-2 mt-md-3 mt-xl-4"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-4 mt-md-5 mt-xl-4">
                <div className="articles" id="article-3">
                  <img
                    src={Article3}
                    alt="article-3"
                    className="overlay-image d-none d-xl-block"
                  />
                  <img
                    src={Article1}
                    alt="article-3"
                    className="overlay-image d-xl-none"
                  />
                  <div className="overlay-text">
                    <h6 className="date text-uppercase mb-1">June 6, 2023</h6>
                    <h4 className="mb-2 mb-md-3 mb-xl-4">
                      Cricket WorldCup 2023
                    </h4>
                    <p>
                      India boasts a plethora of world-class cricket stadiums
                      that are renowned for their electrifying atmosphere and
                      grandeur. The ICC Cricket World Cup 2023 will be played
                      across several iconic venues in different parts of the
                      country, offering unique experiences to players and
                      spectators alike
                    </p>
                    <Link
                      to="/news/article-3"
                      className="btn btn-primary mt-2 mt-md-3 mt-xl-4"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-4 mt-md-5 mt-xl-0 col-xl-6 ps-xl-3">
              <div className="articles" id="article-4">
                <img
                  src={Article4}
                  alt="article-4"
                  className="overlay-image d-none d-xl-block"
                />
                <img
                  src={Article1}
                  alt="article-4"
                  className="overlay-image d-xl-none"
                />
                <div className="overlay-text">
                  <h6 className="date text-uppercase mb-1">June 6, 2023</h6>
                  <h4 className="mb-2 mb-md-3 mb-xl-4">
                    Cricket WorldCup 2023
                  </h4>
                  <p>
                    India boasts a plethora of world-class cricket stadiums that
                    are renowned for their electrifying atmosphere and grandeur.
                    The ICC Cricket World Cup 2023 will be played across several
                    iconic venues in different parts of the country, offering
                    unique experiences to players and spectators alike
                  </p>
                  <Link to="/news/article-4" className="btn btn-primary mt-2 mt-md-3 mt-xl-4">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mt-4 mt-md-5">
            <div className="articles" id="article-5">
              <img src={Article1} alt="article-5" className="overlay-image" />
              <div className="overlay-text">
                <h6 className="date text-uppercase mb-1">June 6, 2023</h6>
                <h4 className="mb-2 mb-md-3 mb-xl-4">
                  The Latest Cricket Developments A Thrilling Journey On The
                  Pitch
                </h4>
                <p>
                  Cricket, the beloved sport that captivates millions across the
                  globe, has witnessed a plethora of exciting events and
                  noteworthy achievements in recent times. From thrilling
                  matches to stunning individual performances, the cricketing
                  world has been buzzing with excitement and anticipation. In
                  this article, we delve into some of the latest cricket
                  developments that have left fans in awe and elevated the game
                  to new heights.
                </p>

                <Link to="/news/article-5" className="btn btn-primary mt-2 mt-md-3 mt-xl-4">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
