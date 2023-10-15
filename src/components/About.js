import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "../assets/img/banner.jpg";
import AboutImg1 from "../assets/img/about1.png";
import Team from "../assets/img/team.png";

const About = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div id="about">
      <div className="banner">
        <img src={Banner} alt="banner" className="overlay-image" />
        <div className="overlay-text">About Us</div>
      </div>

      <div className="about-company container d-flex flex-lg-row flex-column py-5">
        <div className="col-lg-6 col-12 pe-lg-5 mt-3">
          <label className="d-flex justify-content-between">
            <h6>Label 1</h6>
            <h6>90%</h6>
          </label>
          <div
            className="progress mb-sm-5 mb-4"
            role="progressbar"
            aria-label="Graphic"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: "90%" }}></div>
          </div>
          <label className="d-flex justify-content-between">
            <h6>Label 2</h6>
            <h6>70%</h6>
          </label>
          <div
            className="progress mb-sm-5 mb-4"
            role="progressbar"
            aria-label="Graphic"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: "70%" }}></div>
          </div>
          <label className="d-flex justify-content-between">
            <h6>Label 3</h6>
            <h6>68%</h6>
          </label>
          <div
            className="progress mb-sm-5 mb-4"
            role="progressbar"
            aria-label="Graphic"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: "68%" }}></div>
          </div>
          <label className="d-flex justify-content-between">
            <h6>Label 4</h6>
            <h6>40%</h6>
          </label>
          <div
            className="progress mb-sm-5 mb-4"
            role="progressbar"
            aria-label="Graphic"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: "40%" }}></div>
          </div>
        </div>

        <div className="col-lg-6 col-12 ps-lg-5 mt-3">
          <h2 className="text-capitalize">About Banda</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            delectus recusandae ipsa ratione, enim magnam quaerat? Dolore porro,
            distinctio eum fugit eligendi voluptatem consectetur ipsam velit,
            quas rem, expedita dolor eveniet. Illum quis amet doloribus
            blanditiis, cto sed eum est minima tempora cumque. Placeat, officia.
            Illum maxime ad sunt aut, consequatur sequi saepe dignissimos. Velit
            consectetur molestiae dicta expedita sit provident reiciendis
            dolorem quam recusandae qui eos magnam asperiores enim ducimus animi
            exercitationem sequi ipsum, illo quidem unde? Dignissimos inventore
            dolor odit rem.
          </p>
        </div>
      </div>

      <div className="company-info container p-0">
        <div className="company-history container d-flex flex-lg-row flex-column-reverse justify-content-lg-between p-0">
          <div className="col-lg-6 col-12 pe-xxl-0 pe-xl-3 p-lg-5 mt-lg-0 mt-4">
            <h6 className="text-uppercase">A bit about company history</h6>
            <h1 className="text-capitalize">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              mollitia molestiae voluptas deserunt rem, dignissimos magni, sit
              magnam, deleniti harum expedita numquam sequi natus! Sunt, odio!
              Laudantium itaque incidunt minima tempora animi, voluptatum omnis
              similique voluptatem porro reiciendis? Minima fugiat illum est
              distinctio quaerat quas rem quis doloremque, nostrum quos
              consequatur totam odio optio assumenda amet veritatis ipsam
              reprehenderit dolore!
            </p>
          </div>
          <div className="col-lg-2 col-sm-4 col-3" style={{ background: "#FA0000" }}>
            <img
              src={AboutImg1}
              alt="about"
              className="my-sm-5 my-4"
              style={{
                borderRadius: "20px"
              }}
            />
          </div>
        </div>

        <div className="company-work ontainer d-flex flex-lg-row flex-column justify-content-lg-between p-0 mt-lg-0 mt-5">
          <div className="col-lg-2 col-sm-4 col-3" style={{ background: "#FA0000" }}>
              <img
                src={AboutImg1}
                alt="about"
                className="my-sm-5 my-4"
                style={{
                  borderRadius: "20px"
                }}
              />
          </div>

          <div className="col-lg-6 col-12 ps-xxl-0 ps-xl-3 p-lg-5 mt-lg-0 mt-4">
            <h6 className="text-uppercase">How do we work</h6>
            <h1 className="text-capitalize">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              mollitia molestiae voluptas deserunt rem, dignissimos magni, sit
              magnam, deleniti harum expedita numquam sequi natus! Sunt, odio!
              Laudantium itaque incidunt minima tempora animi, voluptatum omnis
              similique voluptatem porro reiciendis? Minima fugiat illum est
              distinctio quaerat quas rem quis doloremque, nostrum quos
              consequatur totam odio optio assumenda amet veritatis ipsam
              reprehenderit dolore!
            </p>
          </div>
        </div>

        <div className="our-team container p-0 my-5 pt-sm-5 pt-0">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h6 className="text-uppercase">Our team</h6>
              <h2 className="text-capitalize">Meet with expert</h2>
            </div>
            <div className="col-lg-6 col-12">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                perspiciatis aliquam aliquid veniam odio consequuntur voluptatum
                fuga omnis aperiam inventore? Cum officia ducimus exercitationem
                excepturi.'
              </p>
            </div>
          </div>

          <div className="col-md-12 pt-3 pb-5">
            <Slider {...settings}>
              <div className="team-member">
                <img src={Team} alt="team" className="team-member-img w-100" />
                <h4 className="team-member-name">Eric West</h4>
                <p className="team-member-desc">Lorem, ipsum.</p>
              </div>
              <div className="team-member">
                <img src={Team} alt="team" className="team-member-img w-100" />
                <h4 className="team-member-name">Eric West</h4>
                <p className="team-member-desc">Lorem, ipsum.</p>
              </div>
              <div className="team-member">
                <img src={Team} alt="team" className="team-member-img w-100" />
                <h4 className="team-member-name">Eric West</h4>
                <p className="team-member-desc">Lorem, ipsum.</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
