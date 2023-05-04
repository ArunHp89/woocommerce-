import React from "react";
import Product from "./Product";
import yogaPro from "../../images/yogamat-product-1.jpg";
import { Link } from "react-router-dom";

function FeatureProduct({ data, setSroductID }) {
  return (
    <>
      <section className="feature-collection-wrapper">
        <div className="container">
          <div className="section-title text-center">
            <h2> FEATURED COLLECTION </h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusm god tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sight ammet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="row">
            {data?.slice(9, 13).map((item, index) => (
              <div key={index} className="col-sm-3 col-6">
                <div className="feature-collection-item matchheight">
                  <Link
                    to={`/collection/${item?.id}`}
                    onClick={() => setSroductID(item.id)}
                  >
                    <div className="feature-collection-thumb">
                      <img className="bg-white" src={item?.image} />
                      <span className="price">$8.00</span>
                    </div>
                  </Link>
                  <div className="feature-collection-content">
                    <h3>
                      {" "}
                      <span>{item?.title}</span>
                    </h3>
                    <h5> {item.category}</h5>
                    <p>{item?.description} </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="see-more-product text-center">
            <Link to="/collection">
              <a href className="btn btn-primary">
                {" "}
                See More Products <i className="fa fa-angle-double-right" />{" "}
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default FeatureProduct;
