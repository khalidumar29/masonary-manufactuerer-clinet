import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const AddAReview = () => {
  const [user] = useAuthState(auth);
  const handleSubbmit = (e) => {
    e.preventDefault();
    const name = user.displayName;
    const message = e.target.message.value;
    const address = e.target.address.value;
    const review = { message, address, name };
    fetch("http://localhost:5000/review", {
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
    <div class='hero min-h-screen '>
      <div class='hero-content flex-col lg:flex-row-reverse'>
        <div class='text-center lg:text-left'>
          <h1 class='text-5xl font-bold capitalize text-primary'>
            Please add a review
          </h1>
        </div>
        <div class='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form onSubmit={handleSubbmit} class='card-body'>
            <div class='form-control'>
              <label class='label'>
                <span class='label-text'>Address</span>
              </label>
              <input
                name='address'
                class='input input-bordered w-full max-w-xs'
                placeholder='write address...'
                required
              ></input>
            </div>
            <div class='form-control'>
              <label class='label'>
                <span class='label-text'>Review</span>
              </label>
              <textarea
                name='message'
                class='textarea textarea-bordered'
                placeholder='write message...'
                required
              ></textarea>
            </div>
            <div class='form-control mt-6'>
              <button type='submit' class='btn btn-primary'>
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
