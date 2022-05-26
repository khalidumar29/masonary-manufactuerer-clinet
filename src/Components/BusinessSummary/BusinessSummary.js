import React from "react";
import { FaFlag, FaUserFriends } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineDollarCircle } from "react-icons/ai";
const BusinessSummary = () => {
  return (
    <div className='text-center'>
      <h1 className='text-3xl capitalize my-8'>
        {" "}
        <span className='text-blue-400'>business</span>{" "}
        <span className='text-purple-400'>summary</span>
      </h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mb-10 stats-vertical lg:w-full lg:stats-horizontal shadow'>
        <div className='stat '>
          <div className='stat-title '>
            <FaFlag className='mx-auto text-2xl text-accent' />
          </div>
          <div className='stat-value text-primary'>72</div>
          <div className='stat-desc'>Countries</div>
        </div>

        <div className='stat '>
          <div className='stat-title'>
            <AiOutlineDollarCircle className='text-accent mx-auto text-2xl' />
          </div>
          <div className='stat-value text-primary'>
            5M
            <span className='uppercase text-base-300 text-xs font-normal'>
              {" "}
              usd
            </span>{" "}
          </div>
          <div className='stat-desc'>Revenue</div>
        </div>

        <div className='stat'>
          <div className='stat-title'>
            <FaUserFriends className='text-accent mx-auto text-2xl' />
          </div>
          <div className='stat-value text-primary'>4,200+</div>
          <div className='stat-desc'>Users</div>
        </div>

        <div className='stat'>
          <div className='stat-title'>
            <AiOutlineShoppingCart className='text-accent mx-auto text-2xl' />
          </div>
          <div className='stat-value text-primary'>1M+</div>
          <div className='stat-desc'>Total Order</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
