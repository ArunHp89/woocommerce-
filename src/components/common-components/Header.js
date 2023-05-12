import React, { useState } from "react";
import logo from "../../images/Logo.png";
import { Link } from "react-router-dom";

function Header({ props }) {
  const [searchData, setSearchData] = useState(null);
  const [fieldData, setFieldData] = useState("");
  const [toggle, setToggle] = useState(false);
  const itemCount = props.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
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
          <p className="font-light">
            {" "}
            created by Arun.Sharma - devChallenges.io
          </p>
        </div>
      </div>
      <div className="main-navigation-outer">
        <div className="container1 px-4 ">
          <div className="row align-items-center items-center">
            <div className="logo-container col-sm-3 col-12">
              <Link to="/">
                {" "}
                <img src={logo} />
              </Link>
            </div>
            <div className="flex   middle-nav-container col-sm-9 col-12 justify-end items-center ">
              <div
                id="nav-toggle"
                onClick={() => setToggle(!toggle)}
                className="toogle-menu"
              >
                {/* <span />
                <span />
                <span />
                <span /> */}
                {toggle ? (
                  <svg
                    height={24}
                    viewBox="0 0 48 48"
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
                    <path d="M0 0h48v48h-48z" fill="none" />
                  </svg>
                ) : (
                  <svg
                    fill="none"
                    height={24}
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 5H21"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 12H21"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 19H21"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <div
                className={`${
                  toggle ? "d-block" : ""
                } category-naviagtion bg-white`}
              >
                <div className="middle-nav text-right">
                  <ul className="menu">
                    <li>
                      {" "}
                      <Link onClick={() => setToggle(!toggle)} to="/collection">
                        <a> WHOLESALE </a>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => setToggle(!toggle)} to="/careers">
                        <a href> Careers</a>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => setToggle(!toggle)} to="/blog">
                        <a href> BLOG</a>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => setToggle(!toggle)} to="/careers">
                        <a href> SPRI</a>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => setToggle(!toggle)} to="/careers">
                        <a href> YOGA STUDIO APP</a>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => setToggle(!toggle)} to="/login">
                        <a href> Login</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="category-right ml-3">
                <div className="category-search">
                  <div className="form-group">
                    <input
                      onChange={searchFilter}
                      className="form-control"
                      placeholder="Search"
                    />
                    <button className="btn btn-primary">
                      <i className="fa fa-search" />
                    </button>
                    {fieldData != "" ? (
                      <div className="absolute max-h-96 overflow-y-scroll shadow-sm sm:-ml-4 ml-[-34px] mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 z-30">
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
                <div className="header-cart relative">
                  <Link to="cart">
                    <div className="header-cart-inner ">
                      <i className="fa fa-shopping-bag" />
                      <span className="absolute -right-1 -top-1 w-5 h-5 rounded-full bg-white border-2 flex items-center justify-center">
                        {itemCount}
                      </span>
                    </div>
                  </Link>
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
