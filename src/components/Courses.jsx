import React from "react";
import CourseImg from "../assets/img/c1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock, faPerson } from "@fortawesome/free-solid-svg-icons";

const Courses = () => {
  return (
    <>
      <section className="relative w-full h-[400px] py-20 z-0 bg-[#765ec1] pb-20">
        <div
          className="block text-center pt-28
        "
        >
          <h1 className="text-white font-bold text-5xl">Online Courses</h1>
          <p className="text-white">Home / Courses</p>
        </div>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="curve">
          <path
            d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#FCFCFC" }}
          ></path>
        </svg>
      </section>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-3 mx-4 sm:mx-[120px] pt-10">
        <div className="Course bg-white min-w-[230px] min-h-[300px] w-max-[300px] border-gray-200">
          <div className="relative course-img w-full h-[250px]">
            <img
              src={CourseImg}
              alt=""
              className="w-full h-full object-cover"
            />
            <h4 className="absolute top-6 left-6 border-none bg-[#7F87DE] px-3 py-1 rounded-md text-white text-sm">
              Beginner
            </h4>
          </div>
          <div className="course-content">
            <div className="price flex justify-between mx-10 my-5">
              <h3>$ 35.00</h3>
              <div className="rating text-blue-400">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
            </div>
            <h1 className="mx-10">
              Open Programming Courses for everyone : Python
            </h1>
            <div className="duration flex gap-4 mx-10 my-5">
              <span>
                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                <p>20 hrs</p>
              </span>
              <span>
                <FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>
                <p>50</p>
              </span>
            </div>
            <span>
              <img icon={faPerson} alt="" />
            </span>
          </div>
        </div>
        <div className="Course bg-white min-w-[230px] min-h-[300px] w-max-[300px] border-gray-200">
          <div className="relative course-img w-full h-[250px]">
            <img
              src={CourseImg}
              alt=""
              className="w-full h-full object-cover"
            />
            <h4 className="absolute top-6 left-6 border-none bg-[#7F87DE] px-3 py-1 rounded-md text-white text-sm">
              Beginner
            </h4>
          </div>
          <div className="course-content">
            <div className="price flex justify-between mx-10 my-5">
              <h3>$ 35.00</h3>
              <div className="rating ">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
            </div>
            <h1 className="mx-10">
              Open Programming Courses for everyone : Python
            </h1>
            <div className="duration flex gap-4 mx-10 my-5">
              <span>
                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                <p>20 hrs</p>
              </span>
              <span>
                <FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>
                <p>50</p>
              </span>
            </div>
            <span>
              <img icon={faPerson} alt="" />
            </span>
          </div>
        </div>
        <div className="Course bg-white min-w-[230px] min-h-[300px]w-max-[300px] border-gray-200">
          <div className="relative course-img w-full h-[250px]">
            <img
              src={CourseImg}
              alt=""
              className="w-full h-full object-cover"
            />
            <h4 className="absolute top-6 left-6 border-none bg-[#7F87DE] px-3 py-1 rounded-md text-white text-sm">
              Beginner
            </h4>
          </div>
          <div className="course-content">
            <div className="price flex justify-between mx-10 my-5">
              <h3>$ 35.00</h3>
              <div className="rating ">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
            </div>
            <h1 className="mx-10">
              Open Programming Courses for everyone : Python
            </h1>
            <div className="duration flex gap-4 mx-10 my-5">
              <span>
                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                <p>20 hrs</p>
              </span>
              <span>
                <FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>
                <p>50</p>
              </span>
            </div>
            <span>
              <img icon={faPerson} alt="" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
