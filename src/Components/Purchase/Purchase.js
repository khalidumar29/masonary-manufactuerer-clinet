import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <p className='cursor-pointer' onClick={handleName}>
        {userName}
      </p>
      <div class='hero min-h-screen bg-base-100'>
        <div class='hero-content flex-col lg:flex-row'>
          <img src={img} class='max-w-sm rounded-lg shadow-2xl' alt='' />
          <div class='card w-96 bg-base-100 shadow-xl'>
            <div class='card-body'>
              <h2 class='card-title'>{name}</h2>
              <p>{des}</p>
              <p className='font-bold'>price per unit {price}</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor=''>Name</label>{" "}
                <input
                  class='input input-bordered w-full max-w-xs'
                  value={user.displayName}
                  {...register("name")}
                  readOnly
                />
                <label htmlFor=''>Email</label>{" "}
                <input
                  class='input input-bordered w-full max-w-xs'
                  {...register("email", { required: true })}
                  value={user.email}
                />
                <label htmlFor=''>Phone</label>{" "}
                <input
                  class='input input-bordered w-full max-w-xs'
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <>
                    <span className='text-error block'>
                      phone number is required
                    </span>
                  </>
                )}
                <label htmlFor=''>Order Quantity</label>{" "}
                <input
                  class='input input-bordered w-full max-w-xs'
                  {...register("orderQuantity", { required: true })}
                />
                {errors.phone && (
                  <>
                    <span className='text-error block'>
                      order quantity is required
                    </span>
                  </>
                )}
                <label htmlFor=''>Address</label>{" "}
                <input
                  class='input input-bordered w-full max-w-xs'
                  {...register("Address", { required: true })}
                />
                {errors.phone && (
                  <>
                    <span className='text-error block'>
                      address is required
                    </span>
                  </>
                )}
                <p className='font-bold'>totall price: {price}</p>
                <input
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
