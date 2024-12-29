import React from "react";
import pencilSvg from "../../assets/svg/home/pencil.svg";
import girlFoto from "../../assets/images/girl.png";
import underLine from "../../assets/images/title-vector.png";
import line from "../../assets/images/linee.png";
import ziczacLine from "../../assets/images/shape-ziczac.png";
import dots from "../../assets/images/dots.png";
import twoZiczac from "../../assets/images/hero-6-shape-2.png";
import leftDots from "../../assets/images/hero-2-shape-3.png";
import user1 from "../../assets/images/hero-6-user-1.jpg";
import user2 from "../../assets/images/hero-6-user-2.jpg";
import user3 from "../../assets/images/hero-6-user-3.jpg";
import user4 from "../../assets/images/hero-6-user-4.jpg";

const CoursesOverview = () => {
  return (
    <div className="relative ">
      <div className="bg-[#F1F3F9] relative pt-12">
        <img
          src={twoZiczac}
          alt="animation"
          className="ml-32 animate-move-up-down"
        />
        <div className="container ">
          <div className="flex ">
            <div className="left content-center w-[50%]">
              <div className=" inline-block px-6 py-1 mb-6 rounded-2xl text-[14px] border">
                <span className="flex text-[#5956E9]  font-semibold ">
                  <img src={pencilSvg} alt="pencil svg" />
                  <span className="pl-2">World Class Education</span>
                </span>
              </div>
              <div className="text-7xl font-semibold ">
                <div className="mb-3">
                  Get
                  <span className="text-primary absolute ml-5  ">
                    2500+
                    <img
                      src={underLine}
                      className="relative  "
                      alt="under line"
                    />
                  </span>
                </div>
                Best Online Courses <br />
                From Acadia
              </div>
              <div className="text-[#11325b] font-semibold my-8 text-[18px]">
                Acquire global knowledge and build your professional skills
              </div>
              <div className="flex">
                <span className="flex items-center px-5 py-3 text-xl rounded-xl bg-primary text-white font-semibold  ">
                  <a href="" className="pr-3">
                    Find courses
                  </a>
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
                <div className="flex relative  items-center ml-10 justify-center  w-12 h-12 rounded-full bg-gray-100 animate-pulse">
                  <a
                    href=""
                    className="border-4 rounded-full w-12 h-12 text-6xl border-[#FFD25D] flex justify-center items-center "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="15"
                      viewBox="0 0 11 12"
                      fill="none"
                      className="relative z-10"
                    >
                      <path
                        d="M0.0399028 0.755673C0.0421193 0.177043 0.67266 -0.187 1.17488 0.100395L10.2148 5.27351C10.717 5.56091 10.7142 6.2842 10.2098 6.57543L1.12999 11.8177C0.62556 12.1089 -0.00221065 11.7496 5.85292e-06 11.171L0.0399028 0.755673Z"
                        fill="#031F42"
                      ></path>
                    </svg>
                  </a>
                  <div className="absolute top-0 pl-2 left-0 w-12 h-12 rounded-full border-2 border-[#FFD25D]  animate-slowPing"></div>
                </div>
              </div>
            </div>
            <div className="right w-[50%] flex relative  justify-center items-center ">
              <div className="custom-color absolute"></div>
              <img
                src={dots}
                alt="dots"
                className="absolute left-0 top-16 animate-move-left-right  "
              />
              <img src={line} alt="line" className="mb-44    " />
              <img src={girlFoto} alt="girl foto" className="z-20" />
              <img
                src={ziczacLine}
                alt="line"
                className="absolute right-0 top-96   "
              />
              <div className="instructor-users animate-move-up-down  absolute z-30 left-0 bottom-44 py-3 rounded-md flex w-[220px] bg-white">
                <div>
                  <div className="pb-3 text-[22px] font-semibold ml-8">
                    Instructor
                  </div>
                  <div className="flex ">
                    <div className="flex ">
                      <img
                        src={user1}
                        width={30}
                        height={30}
                        className="absolute left-[25px] w-8 h-8  z-5"
                        alt="user"
                      />
                      <img
                        src={user2}
                        width={30}
                        height={30}
                        className="absolute left-[47px] w-8 h-8 z-10"
                        alt="user"
                      />
                      <img
                        src={user3}
                        width={30}
                        height={30}
                        alt="user"
                        className="absolute left-[72px] w-8 h-8 z-20"
                      />
                      <img
                        src={user4}
                        width={30}
                        height={30}
                        alt="user"
                        className="absolute right-0 left-[97px] w-8 h-8 z-20"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-semibold text-sm justify-center mt-9 ml-2 ">
                  <p className="text-primary ">200+</p>
                  <p>Instructors</p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={leftDots}
            alt="animation"
            className="left-14 bottom-6 pb-14 absolute animate-move-left-right"
          />
        </div>
      </div>
    </div>
  );
};

export default CoursesOverview;
