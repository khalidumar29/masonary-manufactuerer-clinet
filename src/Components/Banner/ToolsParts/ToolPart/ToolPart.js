import React from "react";
import { useNavigate } from "react-router-dom";

const ToolPart = () => {
  const navigate = useNavigate();
  return (
    <div class='card lg:w-96 md:w-96 sm:w-96 w-[21.5rem] bg-base-100 shadow-xl mt-5'>
      <figure>
        <img
          src='https://api.lorem.space/image/shoes?w=400&h=225'
          alt='Shoes'
        />
      </figure>
      <div class='card-body'>
        <h2 class='card-title'>Name: {}</h2>
        <h3>Price: {}</h3>
        <h3>Minimum Order Quantity: {}</h3>
        <h3>Available Quantity: {}</h3>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class='card-actions justify-end'>
          <button
            onClick={() => {
              navigate("/purchase");
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
