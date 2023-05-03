/* eslint-disable */ import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar rounded-lg container pt-12 pb-6 mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost bg-white lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul className="menu menu-compact gap-5 text-white dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-white text-xl">FoodiesHeaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-5 menu-horizontal text-white px-1">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <label className="avatar">
          <div className="w-10 mr-4 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          {user ? <button className="btn btn-outline btn-warning">Logout</button> : <Link to='/login'><button className="btn btn-outline btn-warning">Login</button></Link>}
        </label>
      </div>
    </div>
  );
};

export default NavigationBar;
