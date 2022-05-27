import { useEffect, useState } from "react";

const useAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("https://shielded-mesa-62585.herokuapp.com/products", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, [allProducts]);
  return [allProducts, setAllProducts];
};

export default useAllProducts;
