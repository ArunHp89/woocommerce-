import React from "react";
import banner1 from "../../images/slider.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Banner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
    slidesToScroll: 1,
  };
  return (
    <section className="hero-slider-wrapper">
      <script src="https:code.jquery.com/jquery-3.4.1min.js"></script>
      <div className="theme-main-slider">
        <div className="owl-carousel owl-theme">
          <Slider {...settings}>
            <div className="item">
              <div
                className="slider-bg d-flex align-items-center"
                style={{ backgroundImage: `url(${banner1})` }}
              >
                <div className="container">
                  <div className="intro-text">
                    <h1> Buy one and get one free </h1>
                    <h2>
                      <strong> Yoga Strip </strong>
                    </h2>
                    <Link to="/collection">
                      <a className="btn btn-primary">
                        {" "}
                        Shop Now! <i className="fa fa-angle-double-right" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="slider-bg d-flex align-items-center"
                style={{ backgroundImage: `url(${banner1})` }}
              >
                <div className="container">
                  <div className="intro-text">
                    <h1> Buy two and get 30% free </h1>
                    <h2>
                      <strong> Yoga Rubber </strong>
                    </h2>
                    <Link to="/collection">
                      <a className="btn btn-primary">
                        {" "}
                        Shop Now! <i className="fa fa-angle-double-right" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="slider-bg d-flex align-items-center"
                style={{ backgroundImage: `url(${banner1})` }}
              >
                <div className="container">
                  <div className="intro-text">
                    <h1> Buy one and get one discout coupne free </h1>
                    <h2>
                      <strong> Yoga Shoes </strong>
                    </h2>
                    <Link to="/collection">
                      <a className="btn btn-primary">
                        {" "}
                        Shop Now! <i className="fa fa-angle-double-right" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
export default Banner;
