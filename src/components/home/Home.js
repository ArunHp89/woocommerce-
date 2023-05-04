import React from "react";
import Layout from "../common-components/Layout";
import Banner from "./Banner";
import Product from "./Product";
import Support from "./Support";
import FeatureProduct from "./FeatureProduct";
import Control from "./Control";
import Seen from "./Seen";
import Newslater from "./Newslater";
function Home({ data , setSroductID}) {
  return (
    <>
      <Banner />
      <Product data={data} setSroductID={setSroductID}/>
      <Support data={data} setSroductID={setSroductID} />
      <FeatureProduct data={data} setSroductID={setSroductID} />
      <Control />
      <Seen />
      <Newslater />
    </>
  );
}
export default Home;
