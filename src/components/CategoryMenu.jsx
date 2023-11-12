import React, { useState, useEffect } from "react";
import { CATEGORIES_API } from "../assets/constants";
import { useNavigate } from "react-router-dom";

const CategoryMenu = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategoryApi();
  }, []);

  const fetchCategoryApi = async () => {
    const data = await fetch(CATEGORIES_API);
    const json = await data.json();
    setCategory(json);
  };

  return (
    <div>
      <div className="flex justify-evenly m-10">
        {category?.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-red-900 text-white font-mono text-lg rounded-md"
            onClick={() => navigate("/categories/" + item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
