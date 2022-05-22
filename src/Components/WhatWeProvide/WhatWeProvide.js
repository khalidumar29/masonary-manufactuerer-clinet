import React from "react";
import { GiComputerFan } from "react-icons/gi";
const WhatWeProvide = () => {
  return (
    <div className='py-10'>
      <h1 className='text-3xl text-center py-5'>What We Provide</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5'>
        <div class='card lg:w-96 md:w-96 w-[21.5rem] bg-base-100 shadow-xl'>
          <div class='card-body text-center'>
            <GiComputerFan className='mx-auto text-[40px]' />
            <h2 class='font-semibold text-xl'>Card title!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam a
              quis id tempore nulla esse, reprehenderit alias! Molestiae,
              similique laudantium?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;
