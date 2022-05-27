import React from "react";
import banner1 from "../../assets/images/banner-image/Marchaltown-Tool-Products.jpg";
import banner2 from "../../assets/images/banner-image/Masonry-Tools-300x225-1.jpg";
import banner3 from "../../assets/images/banner-image/Slide3.JPG";
const Banner = () => {
  return (
    <div className='lg:mt-4'>
      <div className='carousel w-full rounded shadow-xl'>
        <div id='slide1' className='carousel-item relative  w-full'>
          <img src={banner1} className='w-full ' alt='' />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide4' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide2' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' className='carousel-item relative w-full'>
          <img src={banner2} className='w-full' alt='' />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide1' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide3' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' className='carousel-item relative w-full'>
          <img src={banner3} className='w-full' alt='' />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide2' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide4' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
