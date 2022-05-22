import React from "react";

const Contact = () => {
  return (
    <div className='text-center py-10'>
      <h1 className='text-3xl'>Contact Us</h1>
      <div class='card mx-auto lg:w-96 md:w-96 w-[21rem] bg-base-100 shadow-xl py-5 '>
        <div className='mx-auto w-80 text-left'>
          <div>
            <label htmlFor='firstName'>First Name</label> <br />
            <input
              type='text'
              name='firstName'
              placeholder='Type here'
              class='input input-bordered w-full max-w-xs'
            />
          </div>
          <div className='mt-2'>
            <label className='' htmlFor='lastName'>
              Last Name
            </label>
            <br />
            <input
              type='text'
              placeholder='Type here'
              name='lastName'
              class='input input-bordered w-full max-w-xs'
            />
          </div>
          <div className='mt-2'>
            <label htmlFor='lastName'>Your Email</label>
            <input
              type='email'
              placeholder='Type here'
              name='lastName'
              class='input input-bordered w-full max-w-xs'
            />
          </div>
          <div className='mt-2'>
            <label htmlFor='lastName'>Your Message</label> <br />
            <textarea
              class='textarea input-bordered w-full max-w-xs'
              placeholder='message..'
            ></textarea>
          </div>
          <button className='btn btn-primary mt-3'>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
