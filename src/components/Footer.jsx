import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-Shade text-white'>
             <div className="container max-w-fit mx-auto grid grid-cols-1  md:grid-cols-4 gap-2 px-4 py-24">
            <div className="w-full col-span-1 md:col-span-2">
                <img src="./images/cup.png" alt=""/>
            </div>
            <div className="w-full col-span-1 md:col-span-2">
                <p className="">Ready to get strated? <Link to='/register'
                        className="px-5 text-primary cursor-pointer rounded-lg py-4 bg-gradient-to-r from-yellow to-yellow2">Register</Link>
                </p>
            </div>
            <div className="w-full ">
                <h5 className="text-primary text-xl font-semibold">Quick Links</h5>
                <ul>
                    <li className="text-grey text-base">Home</li>
                    <li className="text-grey text-base">About Us</li>
                    <li className="text-grey text-base">Privacy Policy</li>
                </ul>
            </div>
            <div className="w-full">
                <h5 className="text-primary text-xl font-semibold">Our Sevices</h5>
                <ul>
                    <li className="text-grey text-base">Customised Recipe</li>
                    <li className="text-grey text-base">Wide Range Of Options</li>
                    <li className="text-grey text-base">VEG and NON-VEG Menu</li>
                    <li className="text-grey text-base">Home Delivery</li>
                </ul>
            </div>
            <div className="w-full">
                <h5 className="text-primary text-xl font-semibold">Help</h5>
                <ul>
                    <li className="text-grey text-base">Faqs</li>
                    <li className="text-grey text-base">Contact Us</li>
                </ul>
            </div>
            <div className="w-full">
                <h4 className="text-2xl font-semibold text-primary">Subscribe to our newsletter</h4>
                <div className="flex items-center">
                    <input className="bg-inherit outline-none border-grey border-b-2" type="email"
                        placeholder="Email address"/><button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="white" className=" w-6 h-6 bg-gradient-to-r from-yellow to-yellow2 rounded-full">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="w-full col-span-1 md:col-span-4 text-center">
                <p>&#169; 2027 UIDesign.to - All rights reserved.</p>
            </div>
        </div>
        </div>
    );
};

export default Footer;