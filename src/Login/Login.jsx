import React from "react";
import NavigationBar from "../components/NavigationBar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
        <div className='bg-black mb-12'>
            <NavigationBar></NavigationBar>
        </div>
            <h2 className="section-title text-center">Please Login</h2>
      <div className="mb-32">
          <form className="w-1/3 mx-auto">
            
            
            <div className="flex mb-6 items-center justify-between">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="Your Email" id="email" name="email" className="input input-bordered w-full max-w-xs" required />
            </div>
            <div className="flex mb-6 items-center justify-between">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Password" id="password" name="password" className="input input-bordered w-full max-w-xs" required />
            </div >
            
            <p className='mb-6'>New to this Site? <Link className='text-blue-500' to="/register">Register</Link></p>
            <div className='flex justify-center'><button className="btn btn-wide bg-primary text-Shade border-0 hover:text-white">Login</button></div>
          </form>
      </div>
        </>
  );
};

export default Login;
