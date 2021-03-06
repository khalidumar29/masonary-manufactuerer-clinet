import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import UseAdmin from "../../Hooks/useAdmin/useAdmin";
const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = UseAdmin(user);
  return (
    <div className='drawer mx-6'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* <!-- Page content here --> */}
        <label htmlFor='my-drawer' className='btn btn-gost drawer-button'>
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
      <div className='drawer-side'>
        <label htmlFor='my-drawer' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to={"/dashboard"}>My Profile</Link>
          </li>
          {!admin && (
            <>
              <li>
                <Link to='orders'>My Orders</Link>{" "}
              </li>
              <li>
                <Link to='review'>Add A Review</Link>{" "}
              </li>
            </>
          )}
          {admin && (
            <>
              <li>
                <Link to='manageproducts'>Manage Products</Link>{" "}
              </li>
              <li>
                <Link to='addaproduct'>Add Products</Link>{" "}
              </li>
              <li>
                <Link to='alluser'>All User</Link>{" "}
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
