import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const AddAReview = () => {
  const [user] = useAuthState(auth);
  const handleSubbmit = (e) => {
    e.preventDefault();
    const name = user.displayName;
    const message = e.target.message.value;
    const ratings = e.target.ratings.value;
    const address = e.target.address.value;
    const review = { message, ratings, address, name };
    fetch("https://masonary-manufactuer.herokuapp.com/review/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className='hero min-h-screen '>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold capitalize text-primary'>
            Please add a review
          </h1>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form onSubmit={handleSubbmit} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Address</span>
              </label>
              <input
                name='address'
                className='input input-bordered w-full max-w-xs'
                placeholder='write address...'
                required
              ></input>
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Ratings</span>
              </label>
              <input
                type='number'
                name='ratings'
                className='input input-bordered w-full max-w-xs'
                placeholder='write ratings...'
                required
              ></input>
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Review</span>
              </label>
              <textarea
                name='message'
                className='textarea textarea-bordered'
                placeholder='write message...'
                required
              ></textarea>
            </div>
            <div className='form-control mt-6'>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAReview;
