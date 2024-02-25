import {
  faLocation,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <>
      <section className="relative w-full h-[400px] py-20 z-0 bg-[#765ec1] pb-20">
        <div
          className="block text-center pt-28
        "
        >
          <h1 className="text-white font-bold text-5xl">Get in touch</h1>
          <p className="text-white">Home / Contact us</p>
        </div>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="curve">
          <path
            d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "white" }}
          ></path>
        </svg>
      </section>

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 px-4 sm:px-20 py-8">
        <div className="px-10">
          <span className="font-bold text-gray-400 text-xs">GET IN TOUCH</span>
          <h1 className="font-bold text-4xl py-4">Feel free to contact us</h1>
          <p className="text-gray-400 py-4">
            Start working with Us, We guarantee that you’ll be able to have any
            issue resolved within 24 hours.
          </p>
          <div className="contact-detail">
            <span className="flex items-start justify-start gap-5 my-3">
              <FontAwesomeIcon icon={faLocation} />
              <div>
                <h1 className="font-bold text-xl">Our head office address</h1>
                <p>
                  Address here, 208 Trainer Avenue street, Illinois, UK - 62617.
                </p>
              </div>
            </span>
            <span className="flex items-start justify-start gap-5 my-3">
              <FontAwesomeIcon icon={faPhone} />
              <div>
                <h1 className="font-bold text-xl">Call for help</h1>
                <p>+(21) 255 999 8888</p>
              </div>
            </span>
            <span className="flex items-start justify-start gap-5 my-3">
              <FontAwesomeIcon icon={faMailBulk} />
              <div>
                <h1 className="font-bold text-xl">Our head office address</h1>
                <p>coursing@mail.com</p>
              </div>
            </span>
          </div>
        </div>
        <div className="right-panel block bg-[#F7F7F7] py-10 px-8 rounded-lg">
          <h1 className="font-bold text-2xl">Write to us</h1>

          <input
            type="text"
            placeholder="Name"
            className="w-full sm:w-[48%] rounded-3xl p-5 my-2 mr-2 focus:border-pink-500 outline-none border-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full sm:w-[48%] rounded-3xl p-5 my-2  focus:border-pink-500 outline-none border-none"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-2xl p-4 my-2 focus:border-pink-500 outline-none border-none"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Message"
            className="w-full rounded-2xl p-4 my-2 focus:border-pink-500 outline-none border-none"
          ></textarea>
          <button
            type="submit"
            className="bg-pink-400 p-4 rounded-3xl float-right"
          >
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
