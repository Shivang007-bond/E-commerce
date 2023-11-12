import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />

      {
        <div className="flex flex-wrap">
          {cartItems?.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      }
    </div>
  );
};

export default Cart;
