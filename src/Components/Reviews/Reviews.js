import React from "react";

const Reviews = () => {
  return (
    <div className='text-center  py-10'>
      <h1 className='pb-10 text-3xl'>customer reviews</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
        <div className='card card-compact lg:w-96 md:w-96 w-[21.5rem] bg-base-100 shadow-xl'>
          <div className='card-body shadow-xl '>
            <div className='flex items-center'>
              <div className='avatar mt-[-75px]'>
                <div className='w-20 rounded-full'>
                  <img
                    alt=''
                    src='https://api.lorem.space/image/face?hash=92310'
                  />
                </div>
              </div>
              <div className='ml-4 text-left'>
                <h1 className='text-xl font-semibold'>Jhon Doe</h1>
                <h1 className='py-2'>Alma, Georgia(GA), 31510</h1>
                <p className='text-slate-800'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur atque mollitia itaque nihil debitis! Explicabo
                  non dolor alias commodi rem!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='card card-compact lg:w-96 md:w-96 w-[21.5rem] bg-base-100 shadow-xl'>
          <div className='card-body shadow-xl '>
            <div className='flex items-center'>
              <div className='avatar mt-[-75px]'>
                <div className='w-20 rounded-full'>
                  <img
                    alt=''
                    src='https://api.lorem.space/image/face?hash=92310'
                  />
                </div>
              </div>
              <div className='ml-4 text-left'>
                <h1 className='text-xl font-semibold'>Jhon Doe</h1>
                <h1 className='py-2'>Alma, Georgia(GA), 31510</h1>
                <p className='text-slate-800'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur atque mollitia itaque nihil debitis! Explicabo
                  non dolor alias commodi rem!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='card card-compact lg:w-96 md:w-96 w-[21.5rem] bg-base-100 shadow-xl'>
          <div className='card-body shadow-xl '>
            <div className='flex items-center'>
              <div className='avatar mt-[-75px]'>
                <div className='w-20 rounded-full'>
                  <img
                    alt=''
                    src='https://api.lorem.space/image/face?hash=92310'
                  />
                </div>
              </div>
              <div className='ml-4 text-left'>
                <h1 className='text-xl font-semibold'>Jhon Doe</h1>
                <h1 className='py-2'>Alma, Georgia(GA), 31510</h1>
                <p className='text-slate-800'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur atque mollitia itaque nihil debitis! Explicabo
                  non dolor alias commodi rem!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
