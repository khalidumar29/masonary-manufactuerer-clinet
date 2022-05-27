import React from "react";
import toast from "react-hot-toast";

const AddAProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const img = e.target.img.value;
    const quantity = e.target.quantity.value;
    const minQuantity = e.target.minQuantity.value;
    const des = e.target.des.value;
    const product = { name, price, img, quantity, minQuantity, des };
    console.log(product);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("product add done");
          e.target.reset();
        } else {
          toast.error("faild to add product");
        }
      });
  };
  return (
    <div class='hero '>
      <div class='hero-content flex-col '>
        <div class='text-center lg:text-left'>
          <h1 class='text-5xl font-bold'>Add Products</h1>
        </div>
        <div class='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form onSubmit={handleSubmit} class='card-body'>
            <div class='form-control'>
              <label class='label'>
                <span class='label-text'>Name</span>
              </label>
              <input
                type='text'
                name='name'
                placeholder='name'
                class='input input-bordered'
                required
              />
            </div>
            <div class='form-control'>
              <label class='label'>
                <span class='label-text'>Price</span>
              </label>
              <input
                type='text'
                name='price'
                placeholder='price'
                class='input input-bordered'
                required
              />
            </div>
            <div class='form-control'>
              <label class='label'>
                <span class='label-text'>image</span>
              </label>
              <input
                type='text'
                name='img'
                placeholder='url'
                class='input input-bordered'
              />
            </div>
            <div class='form-control'>
              <label class='label'>
                <span class='label-text'>Quantity</span>
              </label>
              <input
                type='text'
                name='quantity'
                placeholder='quantity'
                class='input input-bordered'
                required
              />
            </div>
            <div class='form-control'>
              <label class='label'>
                <span class='label-text'>Minimum Order Quantity</span>
              </label>
              <input
                type='text'
                name='minQuantity'
                placeholder='minimum quantity'
                class='input input-bordered'
                required
              />
            </div>
            <div class='form-control'>
              <label class='label'>
                <span class='label-text'>Description</span>
              </label>
              <textarea
                type='text'
                name='des'
                placeholder='minimum quantity'
                class='textarea textarea-border
                requireded'
              />
            </div>
            <div class='form-control mt-6'>
              <button type='submit' class='btn btn-primary'>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAProduct;
