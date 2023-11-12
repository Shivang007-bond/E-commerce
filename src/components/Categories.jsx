import React from "react";
import { useParams } from "react-router-dom";
import useCategory from "../utils/useCategory";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";

const Categories = () => {
  const { categoryID } = useParams();
  // console.log(categoryID)

  const categoryInfo = useCategory(categoryID);

  return (
    <div className="flex flex-col justify-center items-center px-4">
      <Navbar />
      <div className="flex flex-wrap">
        {categoryInfo?.map((info) => {
          return <ProductCard key={info.id} data={info} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
