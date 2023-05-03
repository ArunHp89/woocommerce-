import React from "react";
import Layout from "../common-components/Layout";
import Banner from "./Banner";
import Product from "./Product";
import Support from "./Support";
import FeatureProduct from "./FeatureProduct";
import Control from "./Control";
import Seen from "./Seen";
import Newslater from "./Newslater";
function Home({ data }) {
  return (
    <>
      <Banner />
      <Product data={data} />
      <Support data={data} />
      <FeatureProduct data={data} />
      <Control />
      <Seen />
      <Newslater />
    </>
  );
}
export default Home;
