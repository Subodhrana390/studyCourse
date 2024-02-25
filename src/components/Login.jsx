import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  return (
    <>
      <section className="relative w-full h-[400px] py-20 z-0 bg-[#765ec1] pb-20">
        <div
          className="block text-center pt-28
        "
        >
          <h1 className="text-white font-bold text-5xl">Login page</h1>
          <p className="text-white">Home / Login</p>
        </div>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="curve">
          <path
            d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#FCFCFC" }}
          ></path>
        </svg>
      </section>

      <div className="grid sm:grid-cols-2 grid-cols-1 px-4 sm:px-20 py-8">
        <div className="left-panel block bg-[#F7F7F7] py-10 px-8 border-r-2">
          <div className="input-field py-2">
            <span className="font-semibold text-[14px] pl-5">
              Username or Email
            </span>
            <input
              type="email"
              placeholder="Username or Email"
              className="w-full sm:w-full rounded-3xl p-5 my-2 mr-2 focus:border-pink-500 outline-none border-none login-"
            />
          </div>
          <div className="input-field py-2">
            <span className="font-semibold text-[14px] pl-5"> Password</span>
            <input
              type="password"
              placeholder="password"
              className="w-full sm:w-full rounded-3xl p-5 my-2 mr-2 focus:border-pink-500 outline-none border-none"
            />
          </div>

          <span className=" w-full inline-flex items-center gap-3 my-4">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="outline-none bg-white"
            />
            <p>Remember Me</p>
          </span>

          <button type="submit" className="bg-pink-400 py-4 px-6 rounded-3xl">
            Login Now
          </button>
        </div>

        <div className="right-panel block bg-[#F7F7F7] py-10 px-8">
          <p className="block text-center text-gray-400 font-bold">
            Or login with
          </p>

          <a
            type="submit"
            className="flex items-center justify-center w-full py-5 bg-[#3b5998] my-3 rounded-3xl text-white"
          >
            <i class="fa-brands fa-facebook mx-2"></i>
            <span className="text-xs font-bold">Login with facebook</span>
          </a>

          <a className="flex items-center justify-center w-full py-5 bg-[#1DA1F2] my-3 rounded-3xl text-white">
            <i class="fa-brands fa-twitter mx-2 "></i>
            <span className="text-xs font-bold">Login with twitter</span>
          </a>
          <span className="block w-full text-center text-xs">
            Not yet registered?{" "}
            <a href="" className="hover:text-pink-400">
              Signup
            </a>{" "}
            here
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
