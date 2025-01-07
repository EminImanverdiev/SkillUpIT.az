import React from "react";
import team1 from "../../assets/images/team-6-2.jpg";

const Instructors = () => {
  return (
    <div className="container py-20">
      <div className="instructors flex">
        <div className="instructors-title w-[25%] leading-[45px] content-center ">
          <p className="text-[18px] text-primary font-semibold">Instructors</p>
          <h2 className="text-[40px] font-bold">
            Classes <br /> Taught by Real <br />
            <span className="text-primary relative">
              Creators
              <svg
                className="tp-underline-shape-9 wow bounceIn absolute right-0 top-[43px] "
                data-wow-duration="1.5s"
                data-wow-delay=".4s"
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="18"
                viewBox="0 0 160 18"
                fill="none"
              >
                <path
                  d="M89.9659 2.96387C87.065 3.23809 75.8039 3.97718 65.0006 4.61383C36.7693 6.24814 24.8776 7.22541 15.2698 8.55523C7.78143 9.59488 0.695115 10.9663 0.321747 11.4549C0.253862 11.5437 0.220657 12.6257 0.227425 13.8359C0.224376 15.7814 0.342789 16.1231 1.14682 16.7867C1.6582 17.2011 2.34684 17.6094 2.63496 17.729C3.13881 17.9276 22.3077 15.9613 26.8611 15.2403C28.8743 14.9538 91.0564 11.8313 106.228 11.2583C111.687 11.0676 124.387 10.8835 134.432 10.8786C144.476 10.8737 153.559 10.7726 154.586 10.6936C157.135 10.5181 159.351 8.92762 159.4 7.28315C159.401 6.28882 159.289 6.11982 158.472 6.10511C157.584 6.09288 157.582 6.04971 158.671 5.70908C160.18 5.22407 160.348 4.95881 159.441 4.38527C158.571 3.85367 158.403 3.12459 159.183 3.09736C159.467 3.08746 159.707 2.8629 159.7 2.64701C159.691 2.38794 159.507 2.22142 159.259 2.23009C159.047 2.23751 158.11 1.83792 157.205 1.35073L155.541 0.457764L125.407 1.46685C108.85 2.00179 92.9023 2.6884 89.9659 2.96387ZM114.487 3.8368C114.706 4.00208 116.839 4.10052 119.285 4.0151C121.732 3.97286 126.347 3.98464 129.58 4.08787C134.733 4.25379 134.167 4.31678 124.979 4.4647C119.234 4.57889 109.836 4.82059 104.093 5.02114C98.3502 5.22169 93.7387 5.29626 93.8066 5.20743C93.9084 5.07418 97.8389 4.80724 102.552 4.59941C107.264 4.34841 111.299 4.03457 111.54 3.81001C112.058 3.40284 113.939 3.38041 114.487 3.8368ZM151.096 3.25008C150.39 3.36119 149.255 3.40081 148.614 3.33674C148.009 3.27142 148.608 3.16402 149.955 3.11698C151.338 3.0687 151.837 3.13773 151.096 3.25008ZM73.1865 6.27334C73.1187 6.36218 64.9342 6.77768 54.9756 7.2119C45.0541 7.68806 39.3805 7.84295 42.3893 7.60819C48.7243 7.08435 73.3902 6.00685 73.1865 6.27334ZM90.8438 5.7432C90.742 5.87645 90.4244 5.93077 90.1718 5.8099C89.8836 5.69027 89.9855 5.55702 90.3754 5.5434C90.7639 5.48661 90.9811 5.60871 90.8438 5.7432ZM153.618 6.36107C153.877 6.65465 152.852 6.7769 150.44 6.81791C148.487 6.79964 141.538 7.04228 135.017 7.31324C128.496 7.5842 122.255 7.7589 121.188 7.70968C118.023 7.51762 100.97 8.06989 88.2152 8.73145C75.1076 9.44856 74.2847 9.26114 86.2473 8.2814C96.9707 7.38816 153.138 5.81585 153.618 6.36107ZM68.0205 9.7825C57.3266 10.5018 46.3016 10.8868 48.8759 10.4078C49.9333 10.198 56.558 9.83694 63.5772 9.59182C76.0927 9.19801 76.199 9.19429 68.0205 9.7825ZM114.829 8.53701C114.836 8.7529 114.591 8.84792 114.303 8.72829C114.013 8.56548 113.759 8.40143 113.756 8.31508C113.753 8.22872 113.998 8.1337 114.282 8.1238C114.565 8.11389 114.82 8.27794 114.829 8.53701ZM115.892 8.49987C115.9 8.71576 115.73 8.93784 115.517 8.94527C115.34 8.95146 115.261 8.73804 115.36 8.51844C115.458 8.25566 115.629 8.07676 115.735 8.07304C115.806 8.07057 115.883 8.2408 115.892 8.49987ZM118.551 8.40702C118.665 8.6192 118.53 8.84004 118.247 8.84994C117.928 8.86109 117.672 8.65386 117.665 8.43797C117.656 8.1789 117.791 8.00124 117.969 7.99505C118.181 7.98762 118.435 8.15167 118.551 8.40702ZM152.244 7.66275C152.894 7.98589 152.895 8.02907 152.079 8.01436C151.582 8.03169 150.725 7.88869 150.117 7.73702L149.041 7.42874L150.282 7.38541C150.955 7.36189 151.846 7.46047 152.244 7.66275ZM70.2577 10.8284C64.9431 11.1004 56.3287 11.4012 51.1145 11.4969C45.9018 11.6357 50.2607 11.4402 60.7894 11.0726C71.3182 10.7049 75.5737 10.5995 70.2577 10.8284ZM3.58991 14.5831C3.59745 14.799 3.07324 15.0334 2.46907 15.0113C1.47646 15.046 1.40255 14.9621 1.99465 14.6388C2.96916 14.086 3.57182 14.0649 3.58991 14.5831ZM9.21747 14.1272C9.14958 14.216 7.8794 14.4333 6.43046 14.6136C4.69943 14.8469 3.95346 14.8298 4.29892 14.5583C4.78165 14.1524 9.5584 13.7262 9.21747 14.1272ZM147.827 10.2811C147.299 10.386 146.342 10.4195 145.7 10.3554C145.059 10.2913 145.482 10.1901 146.652 10.1493C147.821 10.1084 148.356 10.1762 147.827 10.2811Z"
                  fill="#FFD25D"
                ></path>
              </svg>
            </span>
          </h2>
          <div className="flex pt-10">
            <span className="px-4 py-3 hover:bg-primary duration-300 hover:text-white font-semibold border mr-3 rounded-full">
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 11L1 6L6 1"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
            <span className="px-4 py-3 hover:bg-primary duration-300 hover:text-white font-semibold border rounded-full">
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11L6 6L1 1"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div className="instructors-content w-[75%] grid grid-cols-3 py-10 gap-20  px-7">
          <div className="bg-[#F8F8FA] duration-300 text-center py-7 hover:border-primary hover:border border border-[#F8F8FA]  rounded-xl">
            <div className=" flex justify-center ">
              <img src={team1} alt="teacher" />
            </div>
            <h3 className="font-bold text-lg opacity-85 pt-5">Hollace</h3>
            <p className="opacity-70 font-semibold text-sm  pb-7 ">Math Teacher</p>
            <div className="item-social  text-gray-500 ">
              <a href="#" className="mr-3 border py-2 px-3 rounded-full hover:bg-primary hover:text-white duration-300">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="mr-3 border py-2 px-3 rounded-full hover:bg-primary hover:text-white duration-300">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="mr-3 border py-2 px-3 rounded-full hover:bg-primary hover:text-white duration-300">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="border py-2 px-3 rounded-full hover:bg-primary hover:text-white duration-300">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="bg-[#F8F8FA] duration-300 text-center py-7 hover:border-primary hover:border border border-[#F8F8FA]  rounded-xl">
            <div className=" flex justify-center ">
              <img src={team1} alt="teacher" />
            </div>
            <h3 className="font-bold text-lg opacity-85 pt-5">Hollace</h3>
            <p className="opacity-70 font-semibold text-sm  pb-7 ">Math Teacher</p>
            <div className="item-social  text-gray-500 ">
              <a href="#" className="mr-3 border py-2 px-3 rounded-full hover:bg-primary hover:text-white duration-300">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="mr-3 border py-2 px-3 rounded-full hover:bg-primary hover:text-white duration-300">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="mr-3 border py-2 px-3 rounded-full hover:bg-primary hover:text-white duration-300">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="border py-2 px-3 rounded-full hover:bg-primary hover:text-white duration-300">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="bg-[#F8F8FA] duration-300 text-center py-7 hover:border-primary hover:border border border-[#F8F8FA]  rounded-xl">
            <div className=" flex justify-center ">
              <img src={team1} alt="teacher" />
            </div>
            <h3 className="font-bold text-lg opacity-85 pt-5">Hollace</h3>
            <p className="opacity-70 font-semibold text-sm  pb-7 ">Math Teacher</p>
            <div className="item-social  text-gray-500 ">
              <a href="#" className="mr-3 border py-2 px-3 rounded-full hover:bg-primary hover:text-white duration-300">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="mr-3 border py-2 px-3 rounded-full hover:bg-primary hover:text-white duration-300">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="mr-3 border py-2 px-3 rounded-full hover:bg-primary hover:text-white duration-300">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="border py-2 px-3 rounded-full hover:bg-primary hover:text-white duration-300">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
