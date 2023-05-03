import React from "react";
import { Link } from "react-router-dom";
import insta from "../../images/footer-insta.jpg";
import insta1 from "../../images/footer-insta2.jpg";
import insta2 from "../../images/footer-insta3.jpg";
import insta3 from "../../images/footer-insta4.jpg";
import insta4 from "../../images/footer-insta5.jpg";
import insta5 from "../../images/footer-insta6.jpg";
import FooterMenu from "./FooterMenu";

function Footer({ props }) {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="top-footer">
            <div className="row">
              <FooterMenu />
              <div className="col-sm-3 col-12">
                <div className="footer-links">
                  <h3>useful links</h3>
                  <ul>
                    <li>
                      <Link to="/">
                        <a>Home</a>
                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="/collection">
                        <a>Collection</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        <a>Blog</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/login">
                        <a>Contact Us</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3 col-12">
                <div className="footer-links">
                  <h3>shop</h3>
                  <ul>
                    <li>
                      <Link to="/collection/1">
                        <a onClick={() => props.setSroductID("1")}>
                          {" "}
                          Fits 15 Laptops
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/collection/11">
                        <a onClick={() => props.setSroductID("11")}>
                          Boost SATA
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/collection/2">
                        <a onClick={() => props.setSroductID("2")}>
                          Mens Casual
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/collection/4">
                        <a onClick={() => props.setSroductID("4")}>
                          Mens Casual Slim Fit
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/collection/6">
                        <a onClick={() => props.setSroductID("6")}>
                          Solid Gold
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/collection/9">
                        <a onClick={() => props.setSroductID("9")}>
                          External Hard Drive
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/collection/10">
                        <a onClick={() => props.setSroductID("10")}>
                          SanDisk SSD PLUS
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3 col-12">
                <div className="footer-links insta-thumb">
                  <h3>instagram</h3>
                  <ul>
                    {props?.data?.slice(10, 16).map((item, i) => (
                      <li key={i}>
                        <a>
                          <img src={item?.image} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-6 col-12">
                <div className="copyright-text">
                  <p>
                    Copyright © 2019, Yoga Bits And Bobs. All rights reserved.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-12">
                <div className="bottom-footer-links text-right">
                  <p>
                    <a>Privacy Policy</a>, <a>Terms &amp; Conditions</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
