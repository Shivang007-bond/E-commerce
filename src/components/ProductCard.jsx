import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ data }) => {
  const { id, title, image, price, rating } = data;
  const dispatch = useDispatch();
  const [showAddToCartBtn, setShowAddToCartBtn] = useState(true);
  const isItemInCart = useSelector((store) =>
    store.cart.items.some((item) => item.id === id)
  );

  useEffect(() => {
    setShowAddToCartBtn(!isItemInCart);
  }, [isItemInCart]);

  const handleAddToCardClick = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="w-72 h-auto border-2 border-black shadow-black rounded-md m-10">
      <div className="p-4">
        <img
          src={image}
          alt="item-img"
          className="h-auto w-56 mx-4 rounded-md"
        />
      </div>
      <div className="px-4 py-2 mt-4 mx-4">
        <ul>
          <li className="font-bold text-black">{title}</li>
          <li className="font-semibold m-2 text-black">$ {price}</li>
          <li className="font-semibold m-2 text-black">{rating.rate} stars</li>
          {showAddToCartBtn ? (
            <button
              className="bg-red-900 px-4 py-2 text-white rounded-md"
              onClick={() => handleAddToCardClick(data)}
            >
              Add to cart
            </button>
          ) : (
            <div className="flex">
              <span className="px-2 font-extrabold"> - </span>
              <span className="px-2 font-extrabold"> + </span>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
