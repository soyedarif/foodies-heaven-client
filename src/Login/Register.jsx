import React from 'react';
import NavigationBar from '../components/NavigationBar';

const Register = () => {
    return (
        <>
        <div className='bg-black mb-12'>
            <NavigationBar></NavigationBar>
        </div>
            <h2 className="section-title text-center">Please Register</h2>
      <form className="w-1/3 mx-auto">
        <div className="flex mb-6 items-center justify-between">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Your Name" id="name" name="name" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="flex mb-6 items-center justify-between">
          <label htmlFor="photoUrl">Photo Url</label>
          <input type="text" placeholder="Photo URL" id="photoUrl" name="photoUrl" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="flex mb-6 items-center justify-between">
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Your Email" id="email" name="email" className="input input-bordered w-full max-w-xs" required />
        </div>
        <div className="flex mb-6 items-center justify-between">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" name="password" className="input input-bordered w-full max-w-xs" required />
        </div >
        <div className="flex mb-6 items-center justify-between">
          <label htmlFor="rePassword">Confirm Password</label>
          <input type="password" placeholder="Confirm Password" id="rePassword" name="rePassword" className="input input-bordered w-full max-w-xs" required />
        </div>
        <div className='flex justify-center'><button className="btn btn-wide bg-primary text-Shade border-0 hover:text-white">Register</button></div>
      </form>
        </>
    );
};

export default Register;