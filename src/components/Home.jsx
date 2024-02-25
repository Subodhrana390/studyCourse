import Hero from "./Hero";
import React from "react";
import CourseImg from "../assets/img/c1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faClock,
  faPerson,
  faSun,
  faBook,
  faAward,
  faGraduationCap,
  faRightLong,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import Profile from "../assets/img/profile.jpeg";

const Home = () => {
  return (
    <div className="Home_section z-0">
      <Hero />
      {/* Courses */}
      <div className="w-full max-h-max gap-6 py-10 bg-[#F2F2F1]">
        <div className="flex flex-col items-center justify-center py-10">
          <span className="text-sm font-bold text-gray-300">
            JOIN OUR LEARN COURSES
          </span>
          <h1 className="text-xl sm:text-4xl font-bold my-2">
            Featured Online Class
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-3 mx-4 sm:mx-[120px]">
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
        </div>
        <div className="mx-6 h-20 sm:w-full text-center">
          Control your personal preference settings to get notified about <br />
          appropriate course{" "}
          <a href={"/Courses"} className="text-pink-300 font-extrabold">
            View All Courses →
          </a>
        </div>
      </div>
      {/* Facailities */}
      <div className="w-full max-h-max flex flex-col sm:flex-row items-center gap-3 bg-[#F8F9FA]">
        <div className="Facilites_section sm:w-[650px] sm:pl-20  md:w-[80vw] gap-6 py-20 flex flex-col ">
          <span className="uppercase text-gray-500">study and graduate</span>
          <h1 className=" text-3xl font-bold">Our Facailites</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa
            officiis eum cupiditate architecto, esse totam nisi dolorem quo
            nobis porro possimus suscipit deserunt soluta laboriosam officia
            sapiente perferendis. Minima.
          </p>
          <p>
            Curabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi
            ac sed, lacinia est. Quisque ut lectus consequat, venenatis eros et,
            commodo risus. Nullam sit amet laoreet elit. Suspendisse non magna a
            velit efficitur.
          </p>
          <div className="text-center">
            <button className="text-xl bg-pink-500 text-white font-semibold py-2 px-4 rounded-full">
              Discover more
            </button>
          </div>
        </div>
        <div className=" w-auto grid grid-cols-2 p-5 sm:py-10 gap-5 place-content-center">
          <div className="sm:w-[254px] sm:h-[224px] md:w-auto flex flex-col justify-center items-start gap-3 bg-white py-5 px-5 rounded-lg">
            <FontAwesomeIcon
              className="text-pink-400 text-2xl"
              icon={faSun}
            ></FontAwesomeIcon>
            <h1 className="text-xl sm:text-2xl font-semibold">
              Global Certificate
            </h1>
            <p>
              Vivamus a ligula quam. Ut blandit eu leo non. Duis sed doloramet
              laoreet.
            </p>
          </div>
          <div className=" sm:w-[254px] sm:h-[224px]  md:w-auto flex flex-col justify-center items-start gap-3 bg-white py-5 px-5 rounded-lg">
            <FontAwesomeIcon
              className="text-pink-400 text-2xl"
              icon={faBook}
            ></FontAwesomeIcon>
            <h1 className="text-xl sm:text-2xl font-semibold">
              Books & Library
            </h1>
            <p>
              Vivamus a ligula quam. Ut blandit eu leo non. Duis sed doloramet
              laoreet.
            </p>
          </div>
          <div className="  sm:w-[254px] sm:h-[224px] md:w-auto  flex flex-col justify-center items-start gap-3 bg-white py-5 px-5 rounded-lg">
            <FontAwesomeIcon
              className="text-pink-400 text-2xl"
              icon={faAward}
            ></FontAwesomeIcon>
            <h1 className="text-xl sm:text-2xl font-semibold">Scholarship</h1>
            <p>
              Vivamus a ligula quam. Ut blandit eu leo non. Duis sed doloramet
              laoreet.
            </p>
          </div>
          <div className=" sm:w-[254px] sm:h-[224px]  md:w-auto  flex flex-col justify-center items-start gap-3 bg-white py-5 px-5 rounded-lg">
            <FontAwesomeIcon
              className="text-pink-400 text-2xl"
              icon={faGraduationCap}
            ></FontAwesomeIcon>
            <h1 className="text-xl sm:text-2xl font-semibold">
              Alumni Support
            </h1>
            <p>
              Vivamus a ligula quam. Ut blandit eu leo non. Duis sed doloramet
              laoreet.
            </p>
          </div>
        </div>
      </div>
      {/* Latest News  */}
      <div className="w-full min-h-max px-2 py-10 flex flex-col">
        <span className="text-gray-200 font-normal w-full text-center">
          FROM THE NEWS
        </span>
        <h1 className="text-4xl font-bold my-4 w-full text-center">
          Latest News
        </h1>
        <div className="latest_news flex gap-6 py-6">
          <div className="relative min-w-[400px] max-w-full h-[400px] ">
            <img
              className=" w-[100%] h-[100%] object-cover rounded-md "
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
          <div className="relative min-w-[400px] max-w-full h-[400px] ">
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
          <div className="relative min-w-[400px] max-w-full h-[400px] ">
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
          <div className="relative min-w-[400px] max-w-full h-[400px] ">
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
          <div className="relative min-w-[400px] max-w-full h-[400px] ">
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
        <a href={"/latestNews "} className="w-full text-center">
          <span className=" text-pink-400 font-bold">View All Posts </span>
          <FontAwesomeIcon
            className="mx-4"
            icon={faRightLong}
          ></FontAwesomeIcon>
        </a>
      </div>
      {/* Contact us  */}
      <div className=" w-full h-[400px] py-20 bg-[#6A5EC6] flex flex-col justify-center items-center ">
        <span className="text-white opacity-50">START LEARNING ONLINE</span>
        <div className="w-[60%] text-center my-5">
          <h1 className="text-2xl sm:text-5xl text-white font-bold">
            Enhance your skills with best online courses
          </h1>
        </div>
        <div className=" w-full sm:w-[30%] flex justify-evenly">
          <button className="px-2 sm:px-8 py-3 border-white border-2 rounded-[20px] bg-transparent text-white font-bold hover:bg-white hover:text-black ">
            Get started now
          </button>
          <button className="px-2 sm:px-8 py-3 rounded-[20px] bg-pink-500 text-white">
            Contact Us
          </button>
        </div>
      </div>
      {/* Expericenced teacher */}
      <div className="w-full max-h-max flex flex-col sm:flex-row items-center gap-3 bg-[#F8F9FA]">
        <div className="Facilites_section sm:w-[650px] sm:pl-20 md:w-[50vw] gap-6 py-20 flex flex-col ">
          <span className="uppercase text-gray-500">
            EXPERIENCED PROFESSIONALS
          </span>
          <h1 className=" text-3xl font-bold">Meet our teachers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa
            officiis eum cupiditate architecto, esse totam nisi dolorem quo
            nobis porro possimus suscipit deserunt soluta laboriosam officia
            sapiente perferendis. Minima.
          </p>
          <p>
            Curabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi
            ac sed, lacinia est. Quisque ut lectus consequat, venenatis eros et,
            commodo risus. Nullam sit amet laoreet elit. Suspendisse non magna a
            velit efficitur.
          </p>
          <div className="text-center">
            <button className="text-xl bg-pink-500 text-white font-semibold py-2 px-4 rounded-full">
              Discover more
            </button>
          </div>
        </div>
        <div className="w-auto grid grid-cols-2 p-5 sm:py-10 gap-5 place-content-center">
          <div className="relative sm:w-[254px] sm:h-[350px] md:w-auto flex flex-col justify-center items-start gap-3 bg-white rounded-lg">
            <img src={Profile} alt="" className="w-full h-full rounded-lg" />
            <div className="absolute bottom-4 w-full text-center">
              <h1 className="text-xl text-white sm:text-2xl font-semibold">
                James
              </h1>
              <p className="font-medium text-gray-500">Director</p>
            </div>
          </div>
          <div className="relative sm:w-[254px] sm:h-[350px] md:w-auto flex flex-col justify-center items-start gap-3 bg-white rounded-lg">
            <img src={Profile} alt="" className="w-full h-full rounded-lg" />
            <div className="absolute bottom-4 w-full text-center">
              <h1 className="text-xl text-white sm:text-2xl font-semibold">
                James
              </h1>
              <p className="font-medium text-gray-500">Director</p>
            </div>
          </div>
          <div className="relative sm:w-[254px] sm:h-[350px] md:w-auto flex flex-col justify-center items-start gap-3 bg-white rounded-lg">
            <img src={Profile} alt="" className="w-full h-full rounded-lg" />
            <div className="absolute bottom-4 w-full text-center">
              <h1 className="text-xl text-white sm:text-2xl font-semibold">
                James
              </h1>
              <p className="font-medium text-gray-500">Director</p>
            </div>
          </div>
          <div className="relative sm:w-[254px] sm:h-[350px] md:w-auto flex flex-col justify-center items-start gap-3 bg-white rounded-lg">
            <img src={Profile} alt="" className="w-full h-full rounded-lg" />
            <div className="absolute bottom-4 w-full text-center">
              <h1 className="text-xl text-white sm:text-2xl font-semibold">
                James
              </h1>
              <p className="font-medium text-gray-500">Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
