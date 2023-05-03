import React from "react";

function Newslater() {
  return (
    <>
      <section className="newsletter-wrap">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-12">
              <div className="newletter-content">
                <h3>
                  Join Our Newsletter For <span>OFFERS AND MORE</span>
                </h3>
              </div>
            </div>
            <div className="col-sm-6 col-12">
              <div className="form-input form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email Address"
                />
                <button type="submit" className="btn btn-primary">
                  {" "}
                  Subscribe <i className="fa fa-angle-double-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Newslater;
