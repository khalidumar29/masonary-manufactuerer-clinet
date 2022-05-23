import React from "react";

const MyProtfolio = () => {
  return (
    <div>
      <div class='hero min-h-screen '>
        <div class='hero-content flex-col lg:flex-row items-start'>
          <img
            src={"https://i.ibb.co/4gSNxjZ/Untitled-1.png"}
            class='max-w-sm  rounded-lg shadow-2xl'
            alt=''
          />
          <div className='lg:w-screen md:w-screen w-[90vw]'>
            <p className='text-xl'>Muhammad Khalid Umar</p>
            <p className='mt-1 '>Email: khalid100umar@gmail.com</p>
            <br />
            <h1 className='text-xl text-slate-400 pb-2'>
              Educational Qualfication
            </h1>
            <div class='overflow-x-auto'>
              <table class='table w-full'>
                <thead className='lg:text-lg md:text-lg text-xs'>
                  <tr>
                    <th>Name Of Exam</th>
                    <th>Board / Institute</th>
                    <th>Technology / Subject</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> (S.S.C)</td>
                    <td>Dhaka (2019)</td>
                    <td>Science</td>
                    <td>3.61</td>
                  </tr>
                  <tr>
                    <td>Diploma in Engineering</td>
                    <td>Mist (2019-2023)</td>
                    <td>Computer Technology</td>
                    <td>Result Not Given</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='mt-5 w-full'>
            <h1 className='py-2 text-2xl capitalize'>skill</h1>
            <h1>HTML</h1>
            <progress class='progress w-full' value='98' max='100'></progress>
            <h1>CSS</h1>
            <progress class='progress w-full' value='92' max='100'></progress>
            <h1>JAVASCRIP</h1>
            <progress class='progress w-full' value='70' max='100'></progress>
            <h1>REACT</h1>
            <progress class='progress w-full' value='70' max='100'></progress>
            <h1>FIGMA</h1>
            <progress class='progress w-full' value='95' max='100'></progress>
            <h1>EXPRESS.js</h1>
            <progress class='progress w-full' value='65' max='100'></progress>
            <h1>MONGODB</h1>
            <progress class='progress w-full' value='85' max='100'></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProtfolio;
