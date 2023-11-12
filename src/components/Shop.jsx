import React from "react";
import Navbar from "./Navbar";
import ProductsContainer from "./ProductsContainer";

const Shop = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-white">
      <Navbar />
      <ProductsContainer />
    </div>
  );
};

export default Shop;
