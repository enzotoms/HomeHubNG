import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-500 text-white h-300">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
           
            <span className="text-3xl font-bold">HomeHubNG</span>
          </div>
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
          <ul>
            <li className="font-bold mb-2 text-2xl">Company</li>
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact us</a></li>
            <li><a href="#" className="hover:text-gray-400">About HomeHubNG</a></li>
            <li><a href="#" className="hover:text-gray-400">Get started</a></li>
          </ul>
          <ul>
            <li className="font-bold mb-2 text-2xl">Services</li>
            <li><a href="#" className="hover:text-gray-400">Become a host</a></li>
            <li><a href="#" className="hover:text-gray-400">Check Favorites</a></li>
            <li><a href="#" className="hover:text-gray-400">View trips</a></li>
            <li><a href="#" className="hover:text-gray-400">View host</a></li>
          </ul>
          <ul>
            <li className="font-bold mb-2 text-2xl">Account</li>
            <li><a href="#" className="hover:text-gray-400">Profile</a></li>
            <li><a href="#" className="hover:text-gray-400">Your account</a></li>
            <li><a href="#" className="hover:text-gray-400">Preferences</a></li>
            <li><a href="#" className="hover:text-gray-400">Bookings</a></li>
          </ul>
          <ul>
            <li className="font-bold mb-2 text-2xl">Find a place</li>
            <li><a href="#" className="hover:text-gray-400">Anywhere</a></li>
            <li><a href="#" className="hover:text-gray-400">Any week</a></li>
            <li><a href="#" className="hover:text-gray-400">listings</a></li>
            <li><a href="#" className="hover:text-gray-400">Terms and conditions</a></li>
          </ul>
          <ul>
            <li className="font-bold mb-2 text-2xl">Subscribe</li>
            <li><input type="text" placeholder="Enter your email" className="p-2 w-full text-black rounded-md mb-2" /></li>
            <li><input type="button" value="Subscribe" className="p-2 w-full bg-green-500 hover:bg-green-800 text-white rounded-md cursor-pointer" /></li>
          </ul>

          <div className="flex items-center space-x-5">
            <a href="#" className="text-xl hover:text-gray-400"><FaFacebookF /></a>
            <a href="#" className="text-xl hover:text-gray-400"><FaTwitter /></a>
            <a href="#" className="text-xl hover:text-gray-400"><FaInstagram /></a>
            <a href="#" className="text-xl hover:text-gray-400"><FaLinkedinIn /></a>
            <a href="#" className="text-xl hover:text-gray-400"><FaYoutube /></a>
          </div>
        </div>

        

        <div className="flex justify-between items-center border-t border-gray-700 pt-4">
          <span>&copy; 2024 <a href="#" className="hover:text-gray-400">HomeHubNG</a> All rights reserved</span>
          <span>
            <a href="#" className="hover:text-gray-400">Privacy policy</a> | 
            <a href="#" className="hover:text-gray-400 ml-2">Terms & condition</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
