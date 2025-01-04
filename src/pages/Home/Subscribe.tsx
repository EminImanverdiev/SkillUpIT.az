import React from "react";
import line from "../../assets/images/cta-2-svg-1.svg";

const Subscribe = () => {
  return (
    <div className="bg-primary py-36 text-center">
      <div className="container">
        <div className="text-white  py-7">
          <h2 className="text-[50px] font-semibold">
            Get Started With
            <span className="relative px-3 text-[#FFC221]">
              Acadia
              <img
                src={line}
                alt="underline"
                width={200}
                className="absolute top-16 right-0 "
              />
            </span>
            Now
          </h2>
          <p className="pt-3 text-lg font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="relative  inline-block  content-center text-center  ">
          <span className="absolute left-3 bottom-10   rounded-full bg-[#94A3B8] px-3 py-3 text-[#FFC221]  ">
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.2 1.01465H11.8C12.46 1.01465 13 1.55465 13 2.21465V9.41465C13 10.0746 12.46 10.6146 11.8 10.6146H2.2C1.54 10.6146 1 10.0746 1 9.41465V2.21465C1 1.55465 1.54 1.01465 2.2 1.01465Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M13 2.21436L7 6.41436L1 2.21436"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
          <input
            type="email"
            placeholder=" Enter your email address"
            className="w-[800px] h-[57px] my-7 pl-14 focus:border-white border-[#94A3B8] rounded-full bg-primary border-2"
          />
          <button className="absolute right-4 top-9  px-5 py-2 rounded-full border border-black font-semibold bg-[#FFC221]  ">
            Subscribe!
          </button>
        </div>
        <div className="flex justify-center ">
          <div className="text-[#94A3B8] px-8">
            <span className="inline-block pr-2 ">
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.6"
                  d="M13 1.01465L4.75 9.26465L1 5.51465"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
            Easy to Access
          </div>
          <div className="text-[#94A3B8] px-8">
            <span className="inline-block pr-2 ">
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.6"
                  d="M13 1.01465L4.75 9.26465L1 5.51465"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
            Easy to Access
          </div>
          <div className="text-[#94A3B8] px-8">
            <span className="inline-block pr-2 ">
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.6"
                  d="M13 1.01465L4.75 9.26465L1 5.51465"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
            Easy to Access
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
