import React from "react";
import vector from "../../assets/images/title-vector (1).png";
const PopularCourses = () => {
  return (
    <div className="bg-[#F1F3F9] ">
      <div className="container py-14">
        <div className="text-primary font-semibold">Our Courses</div>
        <div className="flex justify-between">
          <div className="text-[50px] font-semibold  relative z-30">
            Most Popular
            <span className="text-primary pl-3  ">
              Courses
              <img
                src={vector}
                alt="underline"
                className="absolute right-0  top-14"
              />
            </span>
          </div>
          <div>
            <button className="bg-primary text-white font-semibold px-7 py-3 rounded-xl border-2 border-primary hover:bg-white hover:text-primary duration-300 ">
              View all
              <span>
                Courses
                <span className="inline-block pl-3 ">
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
              </span>
            </button>
          </div>
        </div>
        <div className="courses-wrapper grid grid-cols-2">
            <div className="course"></div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
