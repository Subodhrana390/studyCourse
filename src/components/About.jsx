import { faAward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ImageSlider from "./ImageSlider";

const sliderImages = [
  {
    index: 1,
    url: "https://images.unsplash.com/photo-1682686580186-b55d2a91053c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    title: "50% Discount on all Popular Courses",
    description: " Take the first step to your journey to success with us",
  },
  {
    index: 2,
    url: "https://images.unsplash.com/photo-1692885228334-e3cdcb9cfad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    title: "50% Discount on all Popular Courses",
    description: " Take the first step to your journey to success with us",
  },
  {
    index: 3,
    url: "https://images.unsplash.com/photo-1694823925781-61293d74cace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "50% Discount on all Popular Courses",
    description: " Take the first step to your journey to success with us",
  },
  {
    index: 4,
    url: "https://images.unsplash.com/photo-1694823925781-61293d74cace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "50% Discount on all Popular Courses",
    description: " Take the first step to your journey to success with us",
  },
  {
    index: 5,
    url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "50% Discount on all Popular Courses",
    description: " Take the first step to your journey to success with us",
  },
];
const About = () => {
  return (
    <div className="w-full h-max">
      <section className="relative w-full h-max sm:h-[600px] py-20 z-0 bg-[#765ec1] pb-60">
        <div
          className="block text-center pt-28
        "
        >
          <h1 className="text-white font-bold text-5xl">About Company</h1>
          <p className="text-white">Home / About us</p>
        </div>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="curve">
          <path
            d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#FCFCFC" }}
          ></path>
        </svg>

        {/* Featured  */}
        <div className="relative sm:absolute sm:bottom-[-60px] bottom-0 top-56 sm:top-20 grid grid-cols-1 sm:grid-cols-3 gap-8 px-3 sm:px-20 md:px-6 sm:py-9 z-1 ">
          <div
            className="feature h-[250px] py-4 my-auto bg-white rounded-md
        "
          >
            <div className="flex px-10 justify-start gap-10 sm:gap-2 items-center py-4">
              <FontAwesomeIcon
                icon={faAward}
                className=" w-3 h-3 sm:w-20 sm:h-20 md:w-6 md:h-6 bg-[#F8F9FA] text-pink-500 p-4 border-none rounded-full hover:text-white hover:bg-pink-500"
              />
              <p className="text-gray-500">
                Our <br />
                <span className=" font-bold  sm:text-4xl md:text-xl text-black hover:text-pink-500">
                  Mission
                </span>
              </p>
            </div>
            <p className="px-10">
              If you are looking for high-quality and reliable online courses.
            </p>
          </div>
          <div
            className="feature h-[250px] py-4 my-auto bg-white rounded-md
        "
          >
            <div className="flex px-10 justify-start gap-10 items-center py-4">
              <FontAwesomeIcon
                icon={faAward}
                className="w-10 h-10 bg-[#F8F9FA] text-pink-500 p-4 border-none rounded-full hover:text-white hover:bg-pink-500"
              />
              <p className="text-gray-500">
                Our <br />
                <span className="font-bold sm:text-4xl md:text-xl text-black hover:text-pink-500">
                  Mission
                </span>
              </p>
            </div>
            <p className="px-10">
              If you are looking for high-quality and reliable online courses.
            </p>
          </div>
          <div
            className="feature h-[250px] py-4 my-auto bg-white rounded-md
        "
          >
            <div className="flex px-10 justify-start gap-10 items-center py-4">
              <FontAwesomeIcon
                icon={faAward}
                className="w-10 h-10 bg-[#F8F9FA] text-pink-500 p-4 border-none rounded-full hover:text-white hover:bg-pink-500"
              />
              <p className="text-gray-500">
                Our <br />
                <span className="font-bold sm:text-4xl md:text-xl text-black hover:text-pink-500">
                  Mission
                </span>
              </p>
            </div>
            <p className="px-10">
              If you are looking for high-quality and reliable online courses.
            </p>
          </div>
        </div>
      </section>

      {/* About us  */}
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 bg-[#FCFCFC] px-3 sm:px-20 py-9 pt-28">
        <div>
          <span className="font-normal text-gray-400">ABOUT US</span>
          <h1 className="text-4xl font-bold py-4 text-black">
            Welcome to the Coursing - all available online courses
          </h1>
          <p className="py-4 font-normal  text-gray-400">
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
            ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Non quae, fugiat.
          </p>
          <p className="py-4 font-normal text-gray-400">
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
            ligula. Semper at. Lorem ipsum dolor sit amet elit. Non quae.
          </p>
        </div>
        <div>
          <img
            src="https://p.w3layouts.com/demos_new/template_demo/18-03-2021/study-course-starter-demo_Free/1612283260/web/assets/images/about.jpg"
            alt=""
          />
        </div>
      </div>

      {/* Skills us  */}
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 bg-white px-3 sm:px-20 py-9 ">
        <div>
          <span className="font-normal text-gray-400">START ONLINE COURSE</span>
          <h1 className="text-4xl font-bold py-4 text-black">
            Enhance your skills with best online courses
          </h1>
          <p className="py-4 font-normal  text-gray-400">
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
            in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit.
            Non quae, fugiat libero ut justo, ultrices in ligula amet dolor sit
          </p>
          <div className="flex gap-4">
            <div>
              <h1 className="text-2xl font-bold py-4">Global Certificate</h1>
              <span className="text-gray-400 font-normal">
                Pellen tesque libero ut justo, ultrices in ligula elit sed.
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold py-4">Books and library</h1>
              <span className="text-gray-400 font-normal">
                Pellen tesque libero ut justo, ultrices in ligula elit sed.
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <img
            className="rounded-lg"
            src="https://p.w3layouts.com/demos_new/template_demo/18-03-2021/study-course-starter-demo_Free/1612283260/web/assets/images/about2.jpg"
            alt=""
          />
          <img
            className="rounded-lg"
            src="https://p.w3layouts.com/demos_new/template_demo/18-03-2021/study-course-starter-demo_Free/1612283260/web/assets/images/about2.jpg"
            alt=""
          />
        </div>
      </div>

      {/* Our Achivements  */}
      <div className="bg-[#6C6AD5] px-3 sm:px-20 py-10">
        <p className="text-center text-white font-bold">OUR ACHIEVEMENTS</p>
        <h1 className="text-3xl sm:text-4xl text-white  font-bold text-center py-10">
          Our progress never Ends
        </h1>
        <div className="grid grid-cols-4 text-center py-8">
          <div>
            <h1 className="text-xl sm:text-5xl font-bold text-white">500 +</h1>
            <p className="text-xs sm:text-xl font-bold text-white ">
              Student Enrolled
            </p>
          </div>
          <div>
            <h1 className="text-xl sm:text-5xl font-bold text-white">2 +</h1>
            <p className="text-xs sm:text-xl text-white font-bold">
              Courses Uploaded
            </p>
          </div>
          <div>
            <h1 className="text-xl sm:text-5xl font-bold text-white">10</h1>
            <p className="text-xs sm:text-xl text-white font-bold">
              Certified Students
            </p>
          </div>
          <div>
            <h1 className="text-xl sm:text-5xl font-bold text-white">10</h1>
            <p className="text-xs sm:text-xl text-white font-bold">
              Global Teachers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
