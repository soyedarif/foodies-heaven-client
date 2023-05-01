/* eslint-disable */ import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="navbar container mt-4 mx-auto bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Item-1
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Item-1
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Item-1
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Item-1
              </NavLink>
            </li>
            
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">FoodiesHeaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-2 menu-horizontal px-1">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Item 1
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Item 1
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Item 1
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Item 1
            </NavLink>
          </li>
         
        </ul>
      </div>
      <div className="navbar-end">
        <label className="avatar">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          <button className="btn btn-outline btn-warning">Logout</button>
        </label>
      </div>
    </div>
  );
};

export default NavigationBar;
