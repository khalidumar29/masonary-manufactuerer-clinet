import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const menuElements = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      <li>
        <Link to={"/myprotfolio"}>Protfolio</Link>
      </li>
      {user && (
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
      )}

      <li>
        <Link to={"/blogs"}>Blogs</Link>
      </li>
      {user ? (
        <li>
          <Link onClick={() => signOut(auth)} to={"/login"}>
            Sign Out
          </Link>
        </li>
      ) : (
        <li>
          <Link to={"/login"}>Log In</Link>
        </li>
      )}
    </>
  );
  return (
    <div className='navbar bg-base-100 justify-between'>
      <Link to='/' className='btn btn-ghost normal-case text-xl'>
        masonry Marshaltown
      </Link>
      <div className='justify-end'>
        <div className='dropdown dropdown-end sm:ml-36'>
          <label tabIndex='0' className='btn btn-ghost lg:hidden'>
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
            </svg>
          </label>
          <ul
            tabIndex='0'
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            {menuElements}
          </ul>
        </div>
      </div>
      <div className='justify-end hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>{menuElements}</ul>
      </div>
    </div>
  );
};

export default Navbar;
