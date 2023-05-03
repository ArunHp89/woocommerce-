import React, { useState } from "react";
import logo from "../../images/Logo.png";
import { Link } from "react-router-dom";

function Header({ props }) {
  const [searchData, setSearchData] = useState(null);
  const [fieldData, setFieldData] = useState("");
  const [toggle, setToggle] = useState(false);
  const searchFilter = (e) => {
    setFieldData(e.target.value);
    const finterData = props.data.filter((item) => {
      if (
        item.title.includes(e.target.value) ||
        item.category.includes(e.target.value)
      ) {
        return item;
      }
    });

    //  return console.log(finterData , 'finterData');
    return setSearchData(finterData);
  };
  return (
    <header className="site-header">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="top-header-info">
        <div className="container">
          <p> FREE SHIPPING ON ORDERS $75+! </p>
        </div>
      </div>
      <div className="main-navigation-outer">
        <div className="container">
          <div className="row align-items-center">
            <div className="logo-container col-sm-3 col-12">
              <Link to="/">
                {" "}
                <img src={logo} />
              </Link>
              <div
                id="nav-toggle"
                onClick={() => setToggle(!toggle)}
                className="toogle-menu"
              >
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="middle-nav-container col-sm-9 col-12">
              <div className="middle-nav text-right">
                <ul className="menu">
                  <li>
                    {" "}
                    <Link to="/collection">
                      <a> WHOLESALE </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers">
                      <a href> Careers</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      <a href> BLOG</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers">
                      <a href> SPRI</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers">
                      <a href> YOGA STUDIO APP</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <a href> Login</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${toggle ? "d-block" : ""} category-naviagtion`}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="category-nav">
              <ul className="menu">
                <li className="mobile-menu">
                  <a href>
                    {" "}
                    YOGA <i className="fa fa-angle-down" />{" "}
                  </a>
                </li>
                <li className="mobile-menu">
                  <a href>
                    {" "}
                    ACTIVE BALANCE <i className="fa fa-angle-down" />{" "}
                  </a>
                </li>
                <li className="mobile-menu">
                  <a href>
                    {" "}
                    APPAREL <i className="fa fa-angle-down" />{" "}
                  </a>
                </li>
                <li className="mobile-menu">
                  <a href>
                    {" "}
                    RECOVER <i className="fa fa-angle-down" />{" "}
                  </a>
                </li>
                <li className="mobile-menu">
                  <a href>
                    {" "}
                    MEDITATION <i className="fa fa-angle-down" />{" "}
                  </a>
                </li>
                <li className="mobile-menu">
                  <a href>
                    {" "}
                    SALE <i className="fa fa-angle-down" />{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="category-right">
              <div className="category-search">
                <div className="form-group">
                  {console.log(props.data, "search")}
                  <input
                    onChange={searchFilter}
                    className="form-control"
                    placeholder="Search"
                  />
                  <button className="btn btn-primary">
                    <i className="fa fa-search" />
                  </button>
                  {fieldData != "" ? (
                    <div className="absolute max-h-96 overflow-y-scroll shadow-sm -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 z-30">
                      <div className="rounded-lg shadow-lg">
                        <div className="rounded-lg shadow-xs overflow-hidden">
                          <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {searchData?.length > 0 ? (
                              searchData?.map((item, i) => {
                                return (
                                  <Link key={i} to={`collection/${item.id}`}>
                                    <a
                                      onClick={() =>
                                        props.setSroductID(item.id)
                                      }
                                      className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                                    >
                                      <img
                                        className="w-10 h-10 object-cover"
                                        src={item.image}
                                      />
                                      <div className="space-y-1">
                                        <p className="text-base leading-6 font-medium text-gray-900">
                                          {item.title}
                                        </p>
                                        {/* <p className="text-sm leading-5 text-gray-500">
                              {item.description}
                              </p> */}
                                      </div>
                                    </a>
                                  </Link>
                                );
                              })
                            ) : (
                              <p className="text-center text-red-500 font-semibold m-0">
                                No Data Abilable on {fieldData} search
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="header-cart">
                <div className="header-cart-inner">
                  <i className="fa fa-shopping-bag" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
