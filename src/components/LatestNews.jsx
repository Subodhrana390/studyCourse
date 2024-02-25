import React from "react";
import Profile from "../assets/img/profile.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const LatestNews = () => {
  return (
    <>
      <section className="relative w-full h-[400px] py-20 z-0 bg-[#765ec1] pb-20">
        <div
          className="block text-center pt-28
        "
        >
          <h1 className="text-white font-bold text-5xl">Latest News</h1>
          <p className="text-white">Home / Latest News</p>
        </div>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="curve">
          <path
            d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#FCFCFC" }}
          ></path>
        </svg>
      </section>

      <div className="w-full min-h-max px-2 py-10 bg-[#FCFCFC] flex flex-col">
        <div className="latest_news grid grid-cols-1 sm:grid-cols-3 gap-8 py-6 md:grid-cols-2  lg:grid-cols-3 px-6 overflow-y-auto sm:overflow-hidden">
          <div className="relative min-w-[300px] max-w-full h-[400px]">
            <img
              className="w-[100%] h-[100%] object-cover rounded-md courseimg"
              src="https://images.unsplash.com/photo-1682687220208-22d7a2543e88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80"
              alt=""
            />
            <div className="absolute bottom-10 mx-5 news_content gap-4">
              <h1 className="text-xl font-bold text-white py-4">
                Enhance your educational skills and also experience with best
                online courses
              </h1>
              <div className="flex gap-4 justify-start items-center w-full">
                <div className="w-10 h-10 rounded-[50%]">
                  <img
                    className="w-full h-full object-cover rounded-[50%]"
                    src={Profile}
                    alt=""
                  />
                </div>
                <h1 className="text-white">Isabella ava</h1>
                <span className="text-white">Nov 19, 2020</span>
                <span className="text-white">
                  <FontAwesomeIcon icon={faClock} /> 1 min
                </span>
              </div>
            </div>
          </div>
          <div className="relative min-w-[300px] max-w-full h-[400px] ">
            <img
              className=" w-[100%] h-[100%] object-cover rounded-md "
              src="https://images.unsplash.com/photo-1489486501123-5c1af10d0be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="absolute bottom-10 mx-5 news_content gap-4">
              <h1 className="text-xl font-bold text-white py-4">
                Enhance your educational skills and also experience with best
                online courses
              </h1>
              <div className="flex gap-4 justify-start items-center w-full">
                <div className="w-10 h-10 rounded-[50%]">
                  <img
                    className="w-full h-full object-cover rounded-[50%]"
                    src={Profile}
                    alt=""
                  />
                </div>
                <h1 className="text-white">Isabella ava</h1>
                <span className="text-white">Nov 19, 2020</span>
                <span className="text-white">
                  <FontAwesomeIcon icon={faClock} /> 1 min
                </span>
              </div>
            </div>
          </div>
          <div className="relative min-w-[300px] max-w-full h-[400px] ">
            <img
              className=" w-[100%] h-[100%] object-cover rounded-md "
              src="https://images.unsplash.com/photo-1581726690015-c9861fa5057f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="absolute bottom-10 mx-5 news_content gap-4">
              <h1 className="text-xl font-bold text-white py-4">
                Enhance your educational skills and also experience with best
                online courses
              </h1>
              <div className="flex gap-4 justify-start items-center w-full">
                <div className="w-10 h-10 rounded-[50%]">
                  <img
                    className="w-full h-full object-cover rounded-[50%]"
                    src={Profile}
                    alt=""
                  />
                </div>
                <h1 className="text-white">Isabella ava</h1>
                <span className="text-white">Nov 19, 2020</span>
                <span className="text-white">
                  <FontAwesomeIcon icon={faClock} /> 1 min
                </span>
              </div>
            </div>
          </div>
          <div className="relative min-w-[300px] max-w-full h-[400px] ">
            <img
              className=" w-[100%] h-[100%] object-cover rounded-md "
              src="https://images.unsplash.com/photo-1581726690015-c9861fa5057f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="absolute bottom-10 mx-5 news_content gap-4">
              <h1 className="text-xl font-bold text-white py-4">
                Enhance your educational skills and also experience with best
                online courses
              </h1>
              <div className="flex gap-4 justify-start items-center w-full">
                <div className="w-10 h-10 rounded-[50%]">
                  <img
                    className="w-full h-full object-cover rounded-[50%]"
                    src={Profile}
                    alt=""
                  />
                </div>
                <h1 className="text-white">Isabella ava</h1>
                <span className="text-white">Nov 19, 2020</span>
                <span className="text-white">
                  <FontAwesomeIcon icon={faClock} /> 1 min
                </span>
              </div>
            </div>
          </div>
          <div className="relative min-w-[300px] max-w-full h-[400px] ">
            <img
              className=" w-[100%] h-[100%] object-cover rounded-md "
              src="https://images.unsplash.com/photo-1581726690015-c9861fa5057f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="absolute bottom-10 mx-5 news_content gap-4">
              <h1 className="text-xl font-bold text-white py-4">
                Enhance your educational skills and also experience with best
                online courses
              </h1>
              <div className="flex gap-4 justify-start items-center w-full">
                <div className="w-10 h-10 rounded-[50%]">
                  <img
                    className="w-full h-full object-cover rounded-[50%]"
                    src={Profile}
                    alt=""
                  />
                </div>
                <h1 className="text-white">Isabella ava</h1>
                <span className="text-white">Nov 19, 2020</span>
                <span className="text-white">
                  <FontAwesomeIcon icon={faClock} /> 1 min
                </span>
              </div>
            </div>
          </div>
          <div className="relative min-w-[300px] max-w-full h-[400px] ">
            <img
              className=" w-[100%] h-[100%] object-cover rounded-md "
              src="https://images.unsplash.com/photo-1581726690015-c9861fa5057f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="absolute bottom-10 mx-5 news_content gap-4">
              <h1 className="text-xl font-bold text-white py-4">
                Enhance your educational skills and also experience with best
                online courses
              </h1>
              <div className="flex gap-4 justify-start items-center w-full">
                <div className="w-10 h-10 rounded-[50%]">
                  <img
                    className="w-full h-full object-cover rounded-[50%]"
                    src={Profile}
                    alt=""
                  />
                </div>
                <h1 className="text-white">Isabella ava</h1>
                <span className="text-white">Nov 19, 2020</span>
                <span className="text-white">
                  <FontAwesomeIcon icon={faClock} /> 1 min
                </span>
              </div>
            </div>
          </div>
          <div className="relative min-w-[300px] max-w-full h-[400px] ">
            <img
              className=" w-[100%] h-[100%] object-cover rounded-md "
              src="https://images.unsplash.com/photo-1581726690015-c9861fa5057f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="absolute bottom-10 mx-5 news_content gap-4">
              <h1 className="text-xl font-bold text-white py-4">
                Enhance your educational skills and also experience with best
                online courses
              </h1>
              <div className="flex gap-4 justify-start items-center w-full">
                <div className="w-10 h-10 rounded-[50%]">
                  <img
                    className="w-full h-full object-cover rounded-[50%]"
                    src={Profile}
                    alt=""
                  />
                </div>
                <h1 className="text-white">Isabella ava</h1>
                <span className="text-white">Nov 19, 2020</span>
                <span className="text-white">
                  <FontAwesomeIcon icon={faClock} /> 1 min
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
