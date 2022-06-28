import { useEffect, useState } from "react";

const useProductDetails = (id) => {
  const [productsDetails, setProductsDetails] = useState({});
  useEffect(() => {
    const url = `https://masonary-manufactuer.herokuapp.com/review/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProductsDetails(data);
      });
  }, [id]);
  return [productsDetails, setProductsDetails];
};

export default useProductDetails;
