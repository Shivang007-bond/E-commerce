import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/productsSlice";

const ProductsContainer = () => {
  const [products, setProducts] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setfilteredProducts] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchShopApi();
  }, []);

  const fetchShopApi = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setProducts(json);
    setfilteredProducts(json);
    dispatch(addProducts(products));
  };

  console.log(products)

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {
    const filteredProducts = products.filter(
      (product) => 
        product.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setfilteredProducts(filteredProducts);
  };

//   console.log(filteredProducts);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="search products"
          value={searchText}
          className="p-2 m-2 border-2 w-64"
          onChange={handleChange}
        />
        <button
          className=" p-2 m-2 w-20 bg-red-900 text-white font-bold rounded-md"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
      <div className=" flex flex-wrap">
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
