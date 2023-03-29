import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
const ManageProducts = () => {
  const { isLoading, data } = useQuery("product", () =>
    fetch("https://masonary-server.onrender.com/review/products").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className='text-2xl text-primary py-2'>Manage Product</h1>
      <div className='overflow-x-auto'>
        <table className='table w-[93vw]'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>price</th>
              <th>Available Quantity</th>
              <th>Minimum Quantity</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => (
              <tr key={product._id}>
                <th>{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.minQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
