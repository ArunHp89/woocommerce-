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
import Cart from "./components/Cart";
import CardDraw from "./components/common-components/CardDraw";
function App({ products }) {
  // Close Draw

  // add to cart functionality
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [cartDraw, setCartDraw] = useState(true);
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    const storedTotalCost = JSON.parse(localStorage.getItem("totalCost"));
    if (storedCartItems && storedTotalCost) {
      setCartItems(storedCartItems);
      setTotalCost(storedTotalCost);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("totalCost", JSON.stringify(totalCost));
  }, [cartItems, totalCost]);

  const addToCartHandler = (product) => {
    setCartDraw(false);
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );
    if (existingCartItemIndex !== -1) {
      const cartItemsCopy = [...cartItems];
      cartItemsCopy[existingCartItemIndex].quantity += 1;
      setCartItems(cartItemsCopy);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setTotalCost(totalCost + product.price);
  };
  // end
  // remove item from card
  const removeFromCartHandler = (itemId) => {
    const itemToRemoveIndex = cartItems.findIndex((item) => item.id === itemId);
    if (itemToRemoveIndex !== -1) {
      const cartItemsCopy = [...cartItems];
      const removedItem = cartItemsCopy.splice(itemToRemoveIndex, 1)[0];
      setCartItems(cartItemsCopy);
      setTotalCost(totalCost - removedItem.price * removedItem.quantity);
    }
  };
  // end
  const [orgData, setOrgData] = useState(null);
  const [data, setData] = useState(orgData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productID, setSroductID] = useState(
    window.location.pathname
      .replace("http://localhost:3000/collection/", "")
      .replace("/collection/", "")
      .replace("collection", "")
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
      <Layout data={orgData} cartItems={cartItems} setSroductID={setSroductID}>
        <CardDraw
          cartDraw={cartDraw}
          setCartDraw={setCartDraw}
          shadow="hidden"
          cartItems={cartItems}
          onRemoveFromCart={removeFromCartHandler}
          totalCost={totalCost}
          onAddToCart={addToCartHandler}
        />
        <Routes>
          <Route path="/">
            <Route
              index={true}
              element={<Home setSroductID={setSroductID} data={data} />}
            />
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
          <Route path="cart">
            <Route
              index={true}
              element={
                <Cart
                  cartItems={cartItems}
                  onRemoveFromCart={removeFromCartHandler}
                  totalCost={totalCost}
                  onAddToCart={addToCartHandler}
                />
              }
            />
          </Route>
          <Route path="/collection">
            <Route
              index={true}
              element={
                <Product
                  setSroductID={setSroductID}
                  data={data}
                  setData={setData}
                  orgData={orgData}
                  products={products}
                  onAddToCart={addToCartHandler}
                  cartItems={cartItems}
                  totalCost={totalCost}
                />
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
