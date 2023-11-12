import { useEffect, useState } from "react";

const useCategory = (categoryID) => {
  const [categoryInfo , setCategoryInfo] = useState(null);

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    const data = await fetch(
      "https://fakestoreapi.com/products/category/" + categoryID
    );
    const json = await data.json();
    console.log(json)
    setCategoryInfo(json)
  }
  return categoryInfo;

};

export default useCategory;
