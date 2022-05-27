import { useEffect, useState } from "react";

const useProductDetails = (id) => {
  const [productsDetails, setProductsDetails] = useState({});
  useEffect(() => {
    const url = `https://shielded-mesa-62585.herokuapp.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProductsDetails(data);
      });
  }, [id]);
  return [productsDetails, setProductsDetails];
};

export default useProductDetails;
