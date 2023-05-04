import React from "react";
import feedback from '../../assets/eating.jpg'

const Feedback = () => {
  return (
    <div className="container mx-auto mb-28">
      <div className="text-center">
        <h2 className="section-title">We appreciate your valuable Feedback</h2>
        <p className="section-description">
          Elevate your dining experience with authentic Indian cuisine by choosing your perfect Indian Recipe. Our expert chefs offer <br /> a diverse range of traditional and regional specialties. Discover your ideal chef today!
        </p>
      </div>
      <div className="flex justify-center items-center">
      <form className="w-1/3 mb-8 mx-auto">
            
            
            <div className="flex mb-6 items-center justify-between">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="Your Email" id="email" name="email" className="input input-bordered w-full max-w-xs" required />
            </div>
            <div className="flex mb-6 items-center justify-between">
              <label htmlFor="textArea">Password</label>
              <textarea placeholder="Your Message" id="textArea" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
            </div >
            <div className='flex justify-center'><button className="btn btn-wide bg-primary text-Shade border-0 hover:text-white">Submit</button></div>
            </form>
        <figure className="w-1/3 sm:hidden lg:block"><img src={feedback} alt="" /></figure>
      </div>
    </div>
  );
};

export default Feedback;
