import React from "react";
import banner3 from "../../images/banner3.jpg";

function Control() {
  return (
    <>
      <section
        className="control-banner-wrap"
        style={{ backgroundImage: `url(${banner3})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-12">
              <div className="banner-content">
                <h3>
                  YOU CAN ALWAYS CONTROL <span>WHAT GOES ON INSIDE</span>
                </h3>
                <p>
                  Through the practices of yoga, we discover that concern for
                  the happiness and well being of others, including animals,
                  must be an essential part of our own quest for happiness and
                  well being.
                </p>
                <a href className="btn btn-primary">
                  {" "}
                  Shop Now <i className="fa fa-angle-double-right" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Control;
