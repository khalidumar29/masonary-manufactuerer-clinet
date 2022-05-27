import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useProductDetails from "../../Hooks/ProductDetails/useProductDetails";

const Purchase = () => {
  const { id } = useParams();
  const [productsDetails] = useProductDetails(id);
  const { name, img, quantity, minQuantity, price, des } = productsDetails;
  const [user] = useAuthState(auth);
  const [userName, setUserName] = useState("watch name & email");
  const handleName = () => {
    setUserName(`name:${user.displayName}, email:${user.email}`);
  };
  const [OrderQuantity, setOrderQuantity] = useState("");
  let orderErrorMessage;
  let error = true;
  const orderQuantity = OrderQuantity;
  if (orderQuantity < minQuantity) {
    error = false;
    orderErrorMessage = (
      <p className='text-error text-sm'>
        minimum order quantity is {minQuantity}
      </p>
    );
  } else if (orderQuantity > quantity) {
    error = false;
    orderErrorMessage = (
      <p className='text-error text-sm'>please order under {quantity}</p>
    );
  } else {
    error = true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const productName = name;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const orderPrice = orderQuantity * price;
    const order = {
      name,
      productName,
      email,
      phone,
      orderQuantity,
      orderPrice,
      address,
    };
    console.log(order);
    fetch("https://shielded-mesa-62585.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <p className='cursor-pointer' onClick={handleName}>
        {userName}
      </p>
      <div className='hero min-h-screen bg-base-100'>
        <div className='hero-content flex-col lg:flex-row'>
          <img src={img} className='max-w-sm rounded-lg shadow-2xl' alt='' />
          <div className='card w-96 bg-base-100 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title'>{name}</h2>
              <p>{des}</p>
              <p className='font-bold'>price per unit {price}</p>

              <form onSubmit={handleSubmit}>
                <label htmlFor=''>Name</label>
                <input
                  className='input input-bordered w-full max-w-xs'
                  name='name'
                  value={user.displayName}
                  readOnly
                />
                <label htmlFor=''>Email</label>{" "}
                <input
                  className='input input-bordered w-full max-w-xs'
                  name='email'
                  value={user.email}
                  readOnly
                />
                <label htmlFor=''>Phone</label>{" "}
                <input
                  className='input input-bordered w-full max-w-xs'
                  name='phone'
                  required
                />
                <label htmlFor=''>Order Quantity</label>{" "}
                <input
                  type='number'
                  className='input input-bordered w-full max-w-xs'
                  name='orderQuantity'
                  value={OrderQuantity}
                  onChange={(e) => setOrderQuantity(e.target.value)}
                  placeholder={`minimum order quantity ${minQuantity}`}
                  required
                />
                {orderErrorMessage}
                <label htmlFor=''>Address</label>{" "}
                <input
                  className='input input-bordered w-full max-w-xs'
                  name='address'
                  required
                />
                <p className='font-bold'>
                  totall price:{" "}
                  {OrderQuantity ? OrderQuantity * price : price * minQuantity}
                </p>
                <input
                  disabled={!error}
                  className='btn btn-primary block w-full my-2'
                  type='submit'
                  value={"Order"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
