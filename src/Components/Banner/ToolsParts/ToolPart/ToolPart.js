import React from "react";
import { useNavigate } from "react-router-dom";

const ToolPart = ({ product }) => {
  const { _id, name, img, price, quantity, des, minQuantity } = product;
  const navigate = useNavigate();
  return (
    <div class='card lg:w-96 md:w-96 sm:w-96 w-[21.5rem] bg-base-100 shadow-xl mt-5'>
      <figure className='h-[225px] w-[400px]'>
        <img className=' w-full' src={img} alt='products' />
      </figure>
      <div class='card-body'>
        <h2 class='card-title'>{name}</h2>
        <h3>Price: ${price}</h3>
        <h3>Minimum Order Quantity: {minQuantity}</h3>
        <h3>Available Quantity: {quantity}</h3>
        <p>{des}</p>
        <div class='card-actions justify-end'>
          <button
            onClick={() => {
              navigate(`/purchase/${_id}`);
            }}
            class='btn btn-primary'
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolPart;
