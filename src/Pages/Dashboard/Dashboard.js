import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class='drawer mx-6'>
      <input id='my-drawer' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content'>
        {/* <!-- Page content here --> */}
        <label for='my-drawer' class='btn btn-gost drawer-button'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h8m-8 6h16'
            />
          </svg>{" "}
        </label>
        <Outlet />
      </div>
      <div class='drawer-side'>
        <label for='my-drawer' class='drawer-overlay'></label>
        <ul class='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to={"/dashboard"}>My Profile</Link>
          </li>
          <li>
            <Link to='orders'>My Orders</Link>{" "}
          </li>
          <li>
            <Link to='dashboard/review'>Add A Review</Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
