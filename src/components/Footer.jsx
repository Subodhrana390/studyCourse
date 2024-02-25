import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import googlePlay from "../assets/img/googleplay.png";
import appstore from "../assets/img/appstore.png";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full min-h-max py-3 bg-[#26243C]">
      <div className="flex flex-col sm:flex-row justify-evenly items-start py-10 px-10 text-white">
        <div className="contact_info">
          <h1 className=" text-2xl my-2 font-bold">Contact Info</h1>
          <p className="text-gray-400 py-2 font-medium">
            Address : Study course, 343 marketing,
            <br />
            #2214 cravel street, NY - 62617.
          </p>
          <p className="text-gray-400 py-2 font-medium">
            Phone : +1(21) 234 4567
          </p>
          <p className="text-gray-400 py-2 font-medium">
            Email : info@example.com
          </p>
          <div className="social-icons"></div>
        </div>
        <div>
          <h1 className="text-2xl my-2 font-bold">Company</h1>
          <ul>
            <li>
              <a className="block text-gray-400 py-2 font-medium" href="">
                About company
              </a>
            </li>
            <li>
              <a className=" block text-gray-400 py-2 font-medium" href="">
                Latest Blog posts
              </a>
            </li>
            <li>
              <a className=" block text-gray-400 py-2 font-medium" href="">
                Became a teacher
              </a>
            </li>
            <li>
              <a className=" block text-gray-400 py-2 font-medium" href="">
                online Courses
              </a>
            </li>
            <li>
              <a className=" block text-gray-400 py-2 font-medium" href="">
                Get in touch
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl my-2 font-bold">Programs</h1>
          <ul>
            <li>
              <a className=" block text-gray-400 py-2 font-medium" href="">
                Training Center
              </a>
            </li>
            <li>
              <a className=" block text-gray-400 py-2 font-medium" href="">
                Documentation
              </a>
            </li>
            <li>
              <a className=" block text-gray-400 py-2 font-medium" href="">
                Release Status
              </a>
            </li>
            <li>
              <a className=" block text-gray-400 py-2 font-medium" href="">
                Customers
              </a>
            </li>
            <li>
              <a className=" block text-gray-400 py-2 font-medium" href="">
                Help Center
              </a>
            </li>
          </ul>
        </div>
        <div className="support">
          <h1 className="text-2xl my-2 font-bold">Support</h1>
          <img src={googlePlay} className="my-2 rounded-lg" alt="" />
          <img src={appstore} className="my-2 rounded-lg" alt="" />
        </div>
      </div>
      <hr className="py-2" />
      <span className="block text-center text-gray-400">
        © 2020 Study Course. All rights reserved. Design by Subodh Rana
      </span>
    </div>
  );
};

export default Footer;
