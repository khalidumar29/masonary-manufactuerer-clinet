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
    fetch("https://masonary-manufactuer.herokuapp.com/review/products", {
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
    <div className='hero '>
      <div className='hero-content flex-col '>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Add Products</h1>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form onSubmit={handleSubmit} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                name='name'
                placeholder='name'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Price</span>
              </label>
              <input
                type='text'
                name='price'
                placeholder='price'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>image</span>
              </label>
              <input
                type='text'
                name='img'
                placeholder='url'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Quantity</span>
              </label>
              <input
                type='text'
                name='quantity'
                placeholder='quantity'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Minimum Order Quantity</span>
              </label>
              <input
                type='text'
                name='minQuantity'
                placeholder='minimum quantity'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Description</span>
              </label>
              <textarea
                type='text'
                name='des'
                placeholder='minimum quantity'
                className='textarea textarea-border
                requireded'
              />
            </div>
            <div className='form-control mt-6'>
              <button type='submit' className='btn btn-primary'>
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
