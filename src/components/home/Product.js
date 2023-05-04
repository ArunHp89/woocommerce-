import React from "react";
import productimg from "../../images/product-thumb.jpg";
import p1 from "../../images/p1.jpg";
import p2 from "../../images/p2.jpg";
import ads from "../../images/ads.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Product({ data , setSroductID }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="product-list-wrapper home_pro">
      <div className="container">
        <div className="row product-list-category">
          {data?.slice(0, 6).map((item, index) => (
            <div key={index} className="col-sm-2 col-6">
              <Link onClick={()=>setSroductID(item.id)} to={`/collection/${item?.id}`}>
                <div className="product-list-items">
                  <a href className="product-list-link">
                    <div className="product-thumnail">
                      <img src={item?.image} />
                    </div>
                    <h2>
                      {" "}
                      <span>{item?.title}</span>{" "}
                    </h2>
                  </a>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="live-health-wrapper">
          <div className="section-title text-center">
            <h2> LIVE HEALTHY LIFE </h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusm god tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sight ammet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-8 col-12 no-right-padding">
              <div className="live-health-carousel-wrapper">
                <div className="live-health-carousel owl-carousel owl-theme">
                  <Slider {...settings}>
                    <div className="item">
                      <div className="matchheight live-health-products">
                        <div className="product-thumb">
                          <img src={p1} />
                        </div>
                        <h2> Shop Yoga Mats </h2>
                        <h4 className="price"> From $25.00 </h4>
                      </div>
                    </div>
                    <div className="item">
                      <div className="matchheight live-health-products">
                        <div className="product-thumb">
                          <img src={p2} />
                        </div>
                        <h2> Shop Wood Beads Bracelets </h2>
                        <h4 className="price"> From $80.00 </h4>
                      </div>
                    </div>
                    <div className="item">
                      <div className="matchheight live-health-products">
                        <div className="product-thumb">
                          <img src={p1} />
                        </div>
                        <h2> Shop Yoga Mats </h2>
                        <h4 className="price"> From $25.00 </h4>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-12">
              <div className="product-ads-outer">
                <img src={ads} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Product;
