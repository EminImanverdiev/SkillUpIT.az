import React from "react";
import vector from "../../assets/images/title-vector (1).png";
import img1 from "../../assets/images/course-col-1.jpg";
import teacher1 from "../../assets/images/teacher-1.png";

const PopularCourses = () => {
  return (
    <div className="bg-[#F1F3F9] pb-7 ">
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
        <div className="courses-wrapper grid grid-cols-2 py-14 gap-10">
          <div className="course p-4 bg-white rounded-xl">
            <div className="course-item flex">
              <div className="img-wrapper pr-8">
                <img
                  src={img1}
                  width={220}
                  alt="course img"
                  className="rounded-lg  "
                />
              </div>
              <div className="course-content">
                <div className="pt-7 pb-4">
                  <span className="bg-[#EDF8F9] px-3 py-1 text-[13px] rounded-[4px] mr-3 font-semibold text-[#18A2B8]">
                    Data Science
                  </span>
                  <span className="text-[#EA2F57] font-semibold   text-[13px] border-opacity-30 p-1 px-2 rounded-[4px]   border border-[#e990a3]">
                    -25%
                  </span>
                </div>
                <div className="flex text-[#94928E] text-sm pb-4">
                  <span className="flex items-center pr-5 ">
                    <span className="inline-block pr-1 ">
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
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7.46118 2.81787V12.4506"
                          stroke="#94928E"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    12 Lessons
                  </span>
                  <span className="flex items-center">
                    <span className="inline-block pr-1  ">
                      <svg
                        width="13"
                        height="15"
                        viewBox="0 0 13 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.57134 7.5C8.36239 7.5 9.81432 6.04493 9.81432 4.25C9.81432 2.45507 8.36239 1 6.57134 1C4.7803 1 3.32837 2.45507 3.32837 4.25C3.32837 6.04493 4.7803 7.5 6.57134 7.5Z"
                          stroke="#94928E"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M12.1426 14C12.1426 11.4845 9.64553 9.44995 6.57119 9.44995C3.49684 9.44995 0.999756 11.4845 0.999756 14"
                          stroke="#94928E"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    45 Student
                  </span>
                </div>
                <div className="text-[22px] hover:text-primary duration-300 font-semibold pb-4">
                  <h1>Interior design concepts Masterclass</h1>
                </div>
                <div className="user flex items-center pb-7 pt-2 mb-5 w-full border-b text-slate-600 text-[14px]">
                  <div className="user-img pr-3">
                    <img src={teacher1} width={30} alt="teacher" />
                  </div>
                  <div className="user-name">Benjamin Evalent</div>
                </div>
                <div className="flex text-sm justify-between">
                  <span>
                    <b>5.0 </b>/ 5
                  </span>
                  <span className="line-through text-gray-400  ">$62.00</span>
                </div>
                <div className="flex justify-between pt-1 items-center ">
                  <div className="text-[#FFB21D] text-[14px]">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="text-[#5169F1] font-semibold text-[18px]">
                    $96.00
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="course p-4 bg-white rounded-xl">
            <div className="course-item flex">
              <div className="img-wrapper pr-8">
                <img
                  src={img1}
                  width={220}
                  alt="course img"
                  className="rounded-lg  "
                />
              </div>
              <div className="course-content">
                <div className="pt-7 pb-4">
                  <span className="bg-[#EDF8F9] px-3 py-1 text-[13px] rounded-[4px] mr-3 font-semibold text-[#18A2B8]">
                    Data Science
                  </span>
                  <span className="text-[#EA2F57] font-semibold   text-[13px] border-opacity-30 p-1 px-2 rounded-[4px]   border border-[#e990a3]">
                    -25%
                  </span>
                </div>
                <div className="flex text-[#94928E] text-sm pb-4">
                  <span className="flex items-center pr-5 ">
                    <span className="inline-block pr-1 ">
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
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7.46118 2.81787V12.4506"
                          stroke="#94928E"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    12 Lessons
                  </span>
                  <span className="flex items-center">
                    <span className="inline-block pr-1  ">
                      <svg
                        width="13"
                        height="15"
                        viewBox="0 0 13 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.57134 7.5C8.36239 7.5 9.81432 6.04493 9.81432 4.25C9.81432 2.45507 8.36239 1 6.57134 1C4.7803 1 3.32837 2.45507 3.32837 4.25C3.32837 6.04493 4.7803 7.5 6.57134 7.5Z"
                          stroke="#94928E"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M12.1426 14C12.1426 11.4845 9.64553 9.44995 6.57119 9.44995C3.49684 9.44995 0.999756 11.4845 0.999756 14"
                          stroke="#94928E"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    45 Student
                  </span>
                </div>
                <div className="text-[22px] hover:text-primary duration-300 font-semibold pb-4">
                  <h1>Interior design concepts Masterclass</h1>
                </div>
                <div className="user flex items-center pb-7 pt-2 mb-5 w-full border-b text-slate-600 text-[14px]">
                  <div className="user-img pr-3">
                    <img src={teacher1} width={30} alt="teacher" />
                  </div>
                  <div className="user-name">Benjamin Evalent</div>
                </div>
                <div className="flex text-sm justify-between">
                  <span>
                    <b>5.0 </b>/ 5
                  </span>
                  <span className="line-through text-gray-400  ">$62.00</span>
                </div>
                <div className="flex justify-between pt-1 items-center ">
                  <div className="text-[#FFB21D] text-[14px]">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="text-[#5169F1] font-semibold text-[18px]">
                    $96.00
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="course p-4 bg-white rounded-xl">
            <div className="course-item flex">
              <div className="img-wrapper pr-8">
                <img
                  src={img1}
                  width={220}
                  alt="course img"
                  className="rounded-lg  "
                />
              </div>
              <div className="course-content">
                <div className="pt-7 pb-4">
                  <span className="bg-[#EDF8F9] px-3 py-1 text-[13px] rounded-[4px] mr-3 font-semibold text-[#18A2B8]">
                    Data Science
                  </span>
                  <span className="text-[#EA2F57] font-semibold   text-[13px] border-opacity-30 p-1 px-2 rounded-[4px]   border border-[#e990a3]">
                    -25%
                  </span>
                </div>
                <div className="flex text-[#94928E] text-sm pb-4">
                  <span className="flex items-center pr-5 ">
                    <span className="inline-block pr-1 ">
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
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7.46118 2.81787V12.4506"
                          stroke="#94928E"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    12 Lessons
                  </span>
                  <span className="flex items-center">
                    <span className="inline-block pr-1  ">
                      <svg
                        width="13"
                        height="15"
                        viewBox="0 0 13 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.57134 7.5C8.36239 7.5 9.81432 6.04493 9.81432 4.25C9.81432 2.45507 8.36239 1 6.57134 1C4.7803 1 3.32837 2.45507 3.32837 4.25C3.32837 6.04493 4.7803 7.5 6.57134 7.5Z"
                          stroke="#94928E"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M12.1426 14C12.1426 11.4845 9.64553 9.44995 6.57119 9.44995C3.49684 9.44995 0.999756 11.4845 0.999756 14"
                          stroke="#94928E"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    45 Student
                  </span>
                </div>
                <div className="text-[22px] hover:text-primary duration-300 font-semibold pb-4">
                  <h1>Interior design concepts Masterclass</h1>
                </div>
                <div className="user flex items-center pb-7 pt-2 mb-5 w-full border-b text-slate-600 text-[14px]">
                  <div className="user-img pr-3">
                    <img src={teacher1} width={30} alt="teacher" />
                  </div>
                  <div className="user-name">Benjamin Evalent</div>
                </div>
                <div className="flex text-sm justify-between">
                  <span>
                    <b>5.0 </b>/ 5
                  </span>
                  <span className="line-through text-gray-400  ">$62.00</span>
                </div>
                <div className="flex justify-between pt-1 items-center ">
                  <div className="text-[#FFB21D] text-[14px]">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="text-[#5169F1] font-semibold text-[18px]">
                    $96.00
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="course p-4 bg-white rounded-xl">
            <div className="course-item flex">
              <div className="img-wrapper pr-8">
                <img
                  src={img1}
                  width={220}
                  alt="course img"
                  className="rounded-lg  "
                />
              </div>
              <div className="course-content">
                <div className="pt-7 pb-4">
                  <span className="bg-[#EDF8F9] px-3 py-1 text-[13px] rounded-[4px] mr-3 font-semibold text-[#18A2B8]">
                    Data Science
                  </span>
                  <span className="text-[#EA2F57] font-semibold   text-[13px] border-opacity-30 p-1 px-2 rounded-[4px]   border border-[#e990a3]">
                    -25%
                  </span>
                </div>
                <div className="flex text-[#94928E] text-sm pb-4">
                  <span className="flex items-center pr-5 ">
                    <span className="inline-block pr-1 ">
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
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7.46118 2.81787V12.4506"
                          stroke="#94928E"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    12 Lessons
                  </span>
                  <span className="flex items-center">
                    <span className="inline-block pr-1  ">
                      <svg
                        width="13"
                        height="15"
                        viewBox="0 0 13 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.57134 7.5C8.36239 7.5 9.81432 6.04493 9.81432 4.25C9.81432 2.45507 8.36239 1 6.57134 1C4.7803 1 3.32837 2.45507 3.32837 4.25C3.32837 6.04493 4.7803 7.5 6.57134 7.5Z"
                          stroke="#94928E"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M12.1426 14C12.1426 11.4845 9.64553 9.44995 6.57119 9.44995C3.49684 9.44995 0.999756 11.4845 0.999756 14"
                          stroke="#94928E"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    45 Student
                  </span>
                </div>
                <div className="text-[22px] hover:text-primary duration-300 font-semibold pb-4">
                  <h1>Interior design concepts Masterclass</h1>
                </div>
                <div className="user flex items-center pb-7 pt-2 mb-5 w-full border-b text-slate-600 text-[14px]">
                  <div className="user-img pr-3">
                    <img src={teacher1} width={30} alt="teacher" />
                  </div>
                  <div className="user-name">Benjamin Evalent</div>
                </div>
                <div className="flex text-sm justify-between">
                  <span>
                    <b>5.0 </b>/ 5
                  </span>
                  <span className="line-through text-gray-400  ">$62.00</span>
                </div>
                <div className="flex justify-between pt-1 items-center ">
                  <div className="text-[#FFB21D] text-[14px]">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="text-[#5169F1] font-semibold text-[18px]">
                    $96.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="courses-find my-10 flex justify-center ">
          <div className="flex justify-between w-1/2 bg-[#E0E0FA] rounded-full p-7 ">
            <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M0.022625 42.2503C0.022625 41.2266 0 40.2354 0 39.2388C0 36.4395 1.1905 35.2087 6.44887 35.2087C5.123 33.76 4.35012 32.2624 3.85925 30.6667C3.532 29.5993 3.4925 28.4501 3.36837 27.3283C3.28937 26.6312 3.34012 25.9178 3.24987 25.2206C3.04112 23.5487 2.7195 21.8823 2.5615 20.2049C2.46562 19.1592 2.522 18.1299 2.85488 17.0625C3.30063 15.6357 4.0285 14.4213 5.07788 13.4082C6.66338 11.8779 8.62675 11.0937 10.9061 11.1209C12.2941 11.1372 15.2787 11.1318 16.2322 11.1699C15.3465 14.1489 15.5214 16.2129 15.0756 18.7671C13.9867 24.9647 4.604 22.3778 4.604 22.3778C4.604 22.819 4.58138 23.1457 4.604 23.4724C4.745 25.0573 4.88037 26.6475 5.06662 28.2269C5.15687 28.9839 5.2415 29.7626 5.51237 30.4706C6.116 32.0391 6.93975 33.4822 8.26562 34.6422C9.90187 36.0801 11.696 37.0549 13.9867 36.8479C14.4494 36.8044 14.8951 36.6192 15.3465 36.4885C15.4762 36.4504 15.606 36.4123 15.7301 36.3687C16.1532 36.2216 16.6103 36.4612 16.7344 36.8751V36.8915C16.8641 37.2999 16.6497 37.7302 16.2379 37.8773C15.1941 38.253 13.0896 38.6833 10.0372 37.8119C8.37287 43.1163 12.4351 43.492 14.0826 43.4322C14.4494 43.4213 14.7597 43.6935 14.7879 44.0475C14.8161 44.4124 14.5284 44.7228 14.156 44.7555C12.9372 44.8535 10.3476 44.7774 8.78475 42.6533C8.48013 42.2395 8.36725 41.9672 7.89325 42.0488C7.109 42.1851 6.3305 42.3539 5.52362 42.5172C5.2585 42.5717 5.05538 42.795 5.03837 43.0563C5.02712 43.2578 5.01587 43.4539 5.01587 43.6445C5.01025 45.017 4.982 46.3948 5.01587 47.7673C5.06662 49.7387 4.89737 49.7605 2.93387 49.7168C1.83375 49.6951 1.687 49.5644 1.68137 48.4806C1.68137 47.6474 1.64188 45.6051 1.61938 44.5867C1.61938 44.2926 1.37675 44.0694 1.072 44.0312C0.609375 43.9768 0.0113773 43.6337 0.0113773 42.2449L0.022625 42.2503Z"
                fill="#5956E9"
              ></path>
              <path
                d="M13.2697 31.2333C12.7168 31.2333 12.1583 31.2115 11.6053 31.2387C10.9169 31.2769 10.6179 31.8051 11.0298 32.3333C11.6279 33.0958 12.3557 33.6186 13.4559 33.6623C14.6013 33.7058 15.1373 32.9597 15.7466 32.3171C16.1303 31.9086 15.6958 31.2769 15.0357 31.2387C14.4489 31.206 13.8566 31.2333 13.2697 31.2333Z"
                fill="#5956E9"
              ></path>
              <path
                d="M10.6635 27.5411C10.1369 27.5411 9.71002 26.8949 9.71002 26.0979C9.71002 25.3008 10.1369 24.6546 10.6635 24.6546C11.1901 24.6546 11.617 25.3008 11.617 26.0979C11.617 26.8949 11.1901 27.5411 10.6635 27.5411Z"
                fill="#5956E9"
              ></path>
              <path
                d="M15.5267 27.541C15.0001 27.541 14.5732 26.8949 14.5732 26.0978C14.5732 25.3008 15.0001 24.6545 15.5267 24.6545C16.0533 24.6545 16.4802 25.3008 16.4802 26.0978C16.4802 26.8949 16.0533 27.541 15.5267 27.541Z"
                fill="#5956E9"
              ></path>
              <path
                d="M18.5449 35.1918C18.7649 34.5927 18.7988 33.9501 18.6464 33.3292C17.5632 29.0214 13.6927 10.7718 23.3237 2.35222C25.1687 0.740193 27.8092 0.380756 30.2296 0.0648861C32.6274 -0.240092 41.7056 0.0594397 46.7609 9.50829C48.036 11.8936 48.3237 14.4533 48.3181 17.0892C48.3181 21.5114 47.8724 30.1541 46.8455 33.0787C46.5747 33.8466 46.6029 34.6798 46.9132 35.4368C47.6862 37.2994 49.17 40.9263 49.9317 42.9523C50.1912 43.6494 49.6157 44.39 48.8484 44.3138C46.2023 44.0633 45.1247 43.2083 44.0301 42.8325C43.0935 42.5057 42.1795 42.1136 41.2204 41.8904C40.5602 41.7379 39.7986 41.6833 39.161 41.8577C38.8563 41.9394 38.2752 43.3172 38.1793 43.4534C37.2314 44.793 36.1029 45.8115 34.3991 46.3016C31.8263 47.0423 28.8361 45.7788 27.5383 45.1199C27.1434 44.9184 26.9289 44.4936 27.0079 44.0742C27.1377 43.3444 27.9897 43.0123 28.6216 43.4152C29.3156 43.8618 30.2917 44.3138 31.5554 44.4881C33.6036 44.7713 35.5613 43.6984 36.3851 42.2063C36.8308 41.4002 36.9042 40.616 36.8986 39.7663C36.8986 38.5138 36.8986 37.2613 36.8986 35.8671C29.7726 38.4158 25.3887 34.7015 25.3887 34.7015C25.3887 34.7015 27.8712 43.3009 20.7792 49.5584C20.2206 50.0539 19.5999 50.2228 19.2219 49.5746C15.2612 42.7672 18.5506 35.1918 18.5506 35.1918H18.5449ZM21.4731 26.9683C22.6636 28.9996 25.3153 32.8554 28.7514 33.9501C30.7656 34.5927 32.7064 35.0882 34.9012 34.304C42.456 32.229 43.8552 22.4753 44.1373 18.4615C44.2163 17.3397 43.6408 16.2505 42.6252 15.695C39.5108 13.9903 37.3217 15.1341 35.1721 15.4445C25.3718 16.8658 23.7494 10.8586 23.7494 10.8586C23.7494 10.8586 24.3744 14.4783 23.9187 18.5593C23.5738 21.6481 22.5564 23.1669 21.5803 24.5829C21.0838 25.3018 21.0331 26.2167 21.4731 26.9683Z"
                fill="#5956E9"
              ></path>
              <path
                d="M32.2107 27.1432C31.4604 27.1432 30.71 27.1051 29.9652 27.1542C29.102 27.2086 28.6901 27.8893 29.181 28.5483C29.9596 29.5885 30.9131 30.34 32.4082 30.4217C34.005 30.5089 34.7836 29.5013 35.6242 28.5701C36.0869 28.0581 35.5396 27.214 34.7385 27.1542C33.8977 27.0942 33.0515 27.1432 32.2107 27.1378V27.1432Z"
                fill="#5956E9"
              ></path>
              <path
                d="M36.9159 21.768C36.2989 21.768 35.7988 21.0122 35.7988 20.0798C35.7988 19.1473 36.2989 18.3915 36.9159 18.3915C37.5329 18.3915 38.033 19.1473 38.033 20.0798C38.033 21.0122 37.5329 21.768 36.9159 21.768Z"
                fill="#5956E9"
              ></path>
              <path
                d="M27.8661 21.768C27.2491 21.768 26.749 21.0122 26.749 20.0798C26.749 19.1473 27.2491 18.3915 27.8661 18.3915C28.4831 18.3915 28.9832 19.1473 28.9832 20.0798C28.9832 21.0122 28.4831 21.768 27.8661 21.768Z"
                fill="#5956E9"
              ></path>
            </svg>
            <div className="pl-7 font-semibold">
              <span className="text-[16px] text-primary ">Let Us Help</span>
              <p className="text-lg">Finding Your Right Courses</p>
            </div>
          </div>
          <div className="started-btn flex bg-[#FFC221] px-8 text-[15px] hover:border-2 hover:border-black duration-300 border-2  hover:bg-[#E0E0FA] font-semibold  py-3 rounded-full">
            <button>Get Started</button>
          </div></div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
