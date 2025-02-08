// ... other imports
import React from "react";
import '../../App.css'
import { useLocation } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import bgImgg from "../../assets/images/bgbgbg.png";
import backgI from '../../assets/images/course-thumb-4.jpg';

const Detail = () => {
  const location = useLocation();
  const { member } = location.state || {};

  if (!member) {
    return <div className="container mx-auto px-4 py-8">No details available.</div>;
  }

  return (
    <div className="min-h-screen flex justify-center">
      <div className="max-w-[1140px] px-10 w-full rounded-lg">
        {/* Background Image */}
        <img src={bgImgg} alt="Background" className="max-w-1225 rounded-lg h-64 object-cover" />

        {/* Header Section */}
        <div className="hh flex justify-between m-auto">
          <div className="relative">
            {/* Profile Section */}
            <div className="absolute bottom-[-30px] gap-4 ml-[180px] transform -translate-x-1/2 flex flex-col md:flex-row items-center text-white">
              <img
                src={member.image}
                alt="Member"
                className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
              />
              <div className="special flex flex-col mb-6">
                <h5 className="mt-3 text-xl font-semibold">{member.name}</h5>
                <div className="flex gap-3 text-white min-w-72">
                  <p>{member.courses} Courses</p>
                  <p>{member.students} Students</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-2 mt-[-80px] mr-8">
            <FaFacebook className="text-white border-[1px] border-white rounded-full hover:text-gray-600 hover:bg-white w-8 h-8 p-[8px] text-xl cursor-pointer" />
            <FaTwitter className="text-white border-[1px] border-white rounded-full hover:text-gray-600 hover:bg-white w-8 h-8 p-[8px] text-xl cursor-pointer" />
            <FaLinkedin className="text-white border-[1px] border-white rounded-full hover:text-gray-600 hover:bg-white w-8 h-8 p-[8px] text-xl cursor-pointer" />
            <FaYoutube className="text-white border-[1px] border-white rounded-full hover:text-gray-600 hover:bg-white w-8 h-8 p-[8px] text-xl cursor-pointer" />
          </div>
        </div>

        {/* Biography Section */}
        <div className="container mx-auto py-12">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Biography</h3>
            <p className="text-gray-700">{member.biography}</p>
          </div>
        </div>

        {/* Popular Courses Section */}
        {member.popularCourses && member.popularCourses.length > 0 && (
  <div className="popular-courses mt-8">
    <h3 className="text-2xl font-semibold mb-4">Popular Courses</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {member.popularCourses.map((course, index) => (
        <div
          key={index}
          className="group relative bg-white shadow-lg rounded-lg overflow-hidden px-4 py-4"
        >
          {/* Resim */}
          <img
            src={backgI}
            alt={course.title}
            className="w-full h-40 object-cover rounded-lg"
          />
          
          {/* İçerik */}
          <div className="content-wrapper relative bg-white">
            <div className="p-4 flex flex-col gap-4">
              <p className="inline-block rounded-md max-w-[100px] bg-[rgba(23,162,184,0.08)] text-[#17A2B8] text-[13px] font-medium px-3 py-1 leading-none">
                {course.category}
              </p>
              <p className="text-gray-700">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-md ">
                  {/* Book Icon */}
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9228 10.0426V2.29411C13.9228 1.51825 13.2949 0.953997 12.5252 1.01445H12.4847C11.1276 1.12529 9.07163 1.82055 7.91706 2.53596L7.80567 2.6065C7.62337 2.71733 7.30935 2.71733 7.11692 2.6065L6.9549 2.50573C5.81046 1.79033 3.75452 1.1152 2.3974 1.00437C1.62768 0.943911 0.999756 1.51827 0.999756 2.28405V10.0426C0.999756 10.6573 1.50613 11.2417 2.12393 11.3122L2.30622 11.3425C3.70386 11.5238 5.87126 12.2392 7.10685 12.9143L7.1372 12.9244C7.30937 13.0252 7.59293 13.0252 7.75498 12.9244C8.99057 12.2393 11.1681 11.5339 12.5758 11.3425L12.7885 11.3122C13.4164 11.2417 13.9228 10.6674 13.9228 10.0426Z"
                      stroke="#94928E"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M7.46118 2.81787V12.4506"
                      stroke="#94928E"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                {course.lessons} Lessons | 
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-md ">
  <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.57134 7.5C8.36239 7.5 9.81432 6.04493 9.81432 4.25C9.81432 2.45507 8.36239 1 6.57134 1C4.7803 1 3.32837 2.45507 3.32837 4.25C3.32837 6.04493 4.7803 7.5 6.57134 7.5Z" stroke="#94928E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M12.1426 14C12.1426 11.4845 9.64553 9.44995 6.57119 9.44995C3.49684 9.44995 0.999756 11.4845 0.999756 14" stroke="#94928E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
</span>
{course.students} Student
              </p>
              <h4 className="text-lg font-semibold">{course.title}</h4>
              <hr />
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-gray-800 font-medium text-sm">
                    5.0 <span className="text-gray-500">/5</span>
                  </p>
                  <div className="flex text-yellow-500 space-x-1">
                    {/* Stars */}
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className="text-right">
                  <del className="text-gray-500 text-sm">{course.originalPrice}</del>
                  <span className="text-lg font-semibold text-blue-600 ml-2">
                    {course.price}
                  </span>
                </div>
              </div>
            </div>
            {/* Buton */}
            <div className="btn-course absolute bottom-4 left-1/2 transform -translate-x-1/2 mb-[-40px]">
              <button className="bg-blue-500 text-white font-semibold min-w-[240px] rounded-3xl py-2 px-9">
                Preview this Course
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default Detail;
