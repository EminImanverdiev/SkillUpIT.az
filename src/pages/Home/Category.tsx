import React from "react";
import img1 from "../../assets/images/category-6-1.jpg";
import img2 from "../../assets/images/category-6-2.jpg";
import img3 from "../../assets/images/category-6-3.jpg";
import img4 from "../../assets/images/category-6-4.jpg";
import line from "../../assets/images/line-2-category-2.svg";

const Category = () => {
  return (
      <div className="container">
    <div className="my-20">
        <div className="text-center mt-20">
          <p className="text-primary font-semibold ">Top Categories</p>
          <h1 className="text-[50px]  font-semibold">
            Most demanding
            <span className="relative">
              <span className="relative z-10 text-primary"> Categories</span>
              <img src={line} alt="" className="absolute top-14 right-0 " />
            </span>
          </h1>
        </div>
        <div className="category grid grid-cols-4 py-10 gap-6">
          <div className="border rounded-3xl text-center py-2">
            <div className="w-full px-4 overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105   ">
              <img
                src={img1}
                alt="phone"
                className="object-contain w-full rounded-2xl "
              />
            </div>
            <h2 className="text-black font-semibold py-4 text-xl hover:text-primary duration-300">
              Mobile Application
            </h2>
            <p className="text-secondary text-[14px] pb-4  font-semibold ">
              20 Courses
            </p>
          </div>
          <div className="border rounded-3xl text-center py-2">
            <div className="w-full px-4 overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105   ">
              <img
                src={img2}
                alt="phone"
                className="object-contain w-full rounded-2xl "
              />
            </div>
            <h2 className="text-black font-semibold py-4 text-xl hover:text-primary duration-300">
              Photography
            </h2>
            <p className="text-secondary text-[14px] pb-4  font-semibold ">
              10 Courses
            </p>
          </div>
          <div className="border rounded-3xl text-center py-2">
            <div className="w-full px-4 overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105   ">
              <img
                src={img3}
                alt="phone"
                className="object-contain w-full rounded-2xl "
              />
            </div>
            <h2 className="text-black font-semibold py-4 text-xl hover:text-primary duration-300">
              UI/UX Design
            </h2>
            <p className="text-secondary text-[14px] pb-4  font-semibold ">
              8 Courses
            </p>
          </div>
          <div className="border rounded-3xl text-center py-2">
            <div className="w-full px-4 overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105   ">
              <img
                src={img4}
                alt="phone"
                className="object-contain w-full rounded-2xl "
              />
            </div>
            <h2 className="text-black font-semibold py-4 text-xl hover:text-primary duration-300">
              Development
            </h2>
            <p className="text-secondary text-[14px] pb-4  font-semibold ">
              12 Courses
            </p>
          </div>
        </div>
        <div className="all-category text-center pt-9">
          <button className="bg-primary py-3 px-6 text-white font-semibold rounded-xl border-2 border-primary hover:bg-white duration-300 hover:text-primary">
            View all Categories
            <span className="inline-block pl-2 ">
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.71533 1L13 5.28471L8.71533 9.56941"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M1 5.28473H12.88"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
