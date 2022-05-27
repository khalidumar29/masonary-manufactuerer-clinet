import React from "react";
import { GiDiamondHard } from "react-icons/gi";
import { BiMoney } from "react-icons/bi";
import { MdHighQuality } from "react-icons/md";
const WhatWeProvide = () => {
  return (
    <div className='py-10'>
      <h1 className='text-3xl text-center py-5'>What We Provide</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5'>
        <div className='card lg:w-96 md:w-96 w-[21.5rem] bg-base-100 shadow-xl'>
          <div className='card-body text-center'>
            <MdHighQuality className='mx-auto text-[40px]' />
            <h2 className='font-semibold text-xl'>Well Quality</h2>
            <p>
              A high-quality product shouldn’t be complicated to use. Customers
              shouldn’t have to spend too much time trying to figure out how to
              assemble or work it.
            </p>
          </div>
        </div>
        <div className='card lg:w-96 md:w-96 w-[21.5rem] bg-base-100 shadow-xl'>
          <div className='card-body text-center'>
            <GiDiamondHard className='mx-auto text-[40px]' />
            <h2 className='font-semibold text-xl'>Long Lasting</h2>
            <p>
              We do not mass-produce any of our range, but operate a batch
              process system. This means that all our items are made with that
              bit more care and love –
            </p>
          </div>
        </div>
        <div className='card lg:w-96 md:w-96 w-[21.5rem] bg-base-100 shadow-xl'>
          <div className='card-body text-center'>
            <BiMoney className='mx-auto text-[40px]' />
            <h2 className='font-semibold text-xl'>Value For Money</h2>
            <p>
              Best value for money is defined as the most advantageous
              combination of cost, quality and sustainability to meet customer
              requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;
