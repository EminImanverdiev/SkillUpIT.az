import React from "react";
import men from "../../assets/images/men1.png";
import animation from "../../assets/images/shape-2.png";
import CoursesCategory from "./CoursesCategory";
import ViewPrograms from "../Home/ViewPrograms";

const Courses = () => {
  return (
    <>
      <div className="bg-[url('./assets/images/course-categories-bg.png')] flex items-center bg-cover bg-center h-[485px] relative">
        <div className="container">
          <div className="absolute right-60 animate-move-up-down bottom-20 ">
            <img src={animation} alt="" />
          </div>
          <div className="courses-wrapper flex justify-center items-center relative ">
            <div className="flex items-end">
              <img src={men} alt="men" className="absolute left-24 top-0 " />
            </div>
            <div className="pl-10">
              <h1 className="text-[54px] font-bold">All Categories</h1>
              <p className="text-gray-600 pt-2 pb-8">
                Grow your skill with the most reliable online courses and
                certifications
              </p>
              <div className="relative ">
                <input
                  type="text"
                  placeholder="Search Courses..."
                  className="w-[650px] pl-5 border-2 border-gray-300 focus:border-blue-500 duration-500 focus:ring focus:ring-blue-200 focus:outline-none  rounded-full py-4"
                />
                <button className="absolute right-2 top-2  bg-primary px-5 py-2 rounded-full text-white font-semibold ">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CoursesCategory />
      <ViewPrograms />
    </>
  );
};

export default Courses;
