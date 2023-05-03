import React from "react";
import seenlogo1 from "../../images/brands.png";
import seenlogo2 from "../../images/brands2.png";
import seenlogo3 from "../../images/brands3.png";
import seenlogo4 from "../../images/brands4.png";
import seenlogo5 from "../../images/brands5.png";
import seenlogo6 from "../../images/brands6.png";

function Seen() {
  return (
    <>
      <section className="sponsor-brands-wrap">
        <div className="container">
          <div className="brands-list-outer">
            <p>AS SEEN IN</p>
            <ul>
              <li>
                <div className="brand-thumb">
                  <img src={seenlogo1} />
                </div>
              </li>
              <li>
                <div className="brand-thumb">
                  <img src={seenlogo2} />
                </div>
              </li>
              <li>
                <div className="brand-thumb">
                  <img src={seenlogo3} />
                </div>
              </li>
              <li>
                <div className="brand-thumb">
                  <img src={seenlogo4} />
                </div>
              </li>
              <li>
                <div className="brand-thumb">
                  <img src={seenlogo5} />
                </div>
              </li>
              <li>
                <div className="brand-thumb">
                  <img src={seenlogo6} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default Seen;
