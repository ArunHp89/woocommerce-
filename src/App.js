import logo from "./logo.svg";

import { useState, useEffect } from "react";
import Home from "./components/home/Home";
import "./App.css";
import Product from "./components/product";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/common-components/Layout";
import SingleProduct from "./components/singleProduct/SingleProduct";
import Login from "./components/login/Login";
import Career from "./components/Career";
import Blog from "./components/Blog";
import Error from "./components/Error";
function App() {
  const [orgData, setOrgData] = useState(null);
  const [data, setData] = useState(orgData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productID, setSroductID] = useState(
    window.location.pathname.replace("/collection/", "")
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setOrgData(actualData);
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setOrgData(null);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <BrowserRouter>
      <Layout data={orgData} setSroductID={setSroductID}>
        <Routes>
          <Route path="/">
            <Route index={true} element={<Home data={data} />} />
          </Route>
          <Route path="/login">
            <Route index={true} element={<Login />} />
          </Route>
          <Route path="careers">
            <Route index={true} element={<Career />} />
          </Route>
          <Route path="blog">
            <Route index={true} element={<Blog />} />
          </Route>
          <Route path="/collection">
            <Route
              index={true}
              element={
                <Product data={data} setData={setData} orgData={orgData} />
              }
            />
            <Route
              index={true}
              path=":teamId"
              element={
                <SingleProduct
                  productID={productID}
                  setSroductID={setSroductID}
                />
              }
            />
            <Route index={false} path="new" element={"hi"} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
