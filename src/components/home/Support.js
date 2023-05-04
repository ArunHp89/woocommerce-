import React from "react";
import product1 from "../../images/product-thumb.jpg";
import yogaPro from "../../images/yogamat-product-1.jpg";
import yogaPro1 from "../../images/yogamat-product.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
function Support({ data, setSroductID }) {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="yogamats-products-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-12">
              <div className="yogamats-carousel-wrapper">
                <h2 className="title"> YOGA SUPPORT MATS </h2>
                <div className="yogamats-carousel owl-carousel owl-theme">
                  <Slider {...settings}>
                    {data?.slice(0, 6).map((item, index) => (
                      <div key={index} className="item">
                        <Link
                          to={`/collection/${item?.id}`}
                          onClick={() => setSroductID(item.id)}
                        >
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
                  </Slider>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-12">
              <div className="yogamats-big-product">
                <img src={yogaPro1} />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-12">
              <div className="yogamats-big-product">
                <img src={yogaPro} />
              </div>
            </div>
            <div className="col-sm-6 col-12">
              <div className="yogamats-carousel-wrapper">
                <h2 className="title"> YOGA SUPPORT MATS</h2>
                <div className="yogamats-carousel owl-carousel owl-theme">
                  <Slider {...settings}>
                    {data?.slice(7, 12).map((item, index) => (
                      <div key={index} className="item">
                        <Link to={`/collection/${item?.id}`}>
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
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Support;
