import React from "react";
import img1 from "../../assets/images/banner-2-thumb-1.png";
import line from "../../assets/images/bannerline2-svg-1.svg";
import img2 from "../../assets/images/banner-2-thumb-2.png";
import line1 from "../../assets/images/greenline2-svg-2.svg";

const ViewPrograms = () => {
  return (
    <div className="container py-20">
      <div className="programs-wrapper grid grid-cols-2 gap-8 ">
        <div className="programs-item flex justify-between relative overflow-hidden  bg-[#E2EFE4] rounded-3xl">
          <div className="pl-16 ">
            <p className="text-3xl  pt-12">Earn a</p>
            <p className="text-3xl   font-semibold ">Certificate</p>
            <img src={line} alt="line" className="pl-5" />
            <button className=" my-8 bg-[#0C7D81] text-white py-2 px-5 rounded-lg font-semibold border-2  border-[#0C7D81] hover:text-[#0C7D81] hover:bg-transparent  duration-300">
              View Programs
            </button>
          </div>
          <div className=" ">
            <img
              src={img1}
              alt="img"
              className="absolute right-0 transition-transform duration-300 ease-in-out transform hover:scale-110 bottom-0 "
            />
          </div>
        </div>
        <div className="programs-item flex justify-between relative overflow-hidden    bg-[#FFF3F4] rounded-3xl">
          <div className="pl-16 ">
            <p className="text-3xl  pt-12">Best</p>
            <p className="text-3xl   f ">
              Rated <b> Courses </b>
            </p>
            <img src={line1} alt="line" className="pl-24 text-[#0C7D81] " />
            <button className=" my-8 bg-[#FD8B6C] text-white py-2 px-5 rounded-lg font-semibold border-2  border-[#FD8B6C] hover:text-[#FD8B6C] hover:bg-transparent  duration-300">
              View Programs
            </button>
          </div>
          <div className=" ">
            <img
              src={img2}
              alt="img"
              className="absolute right-0 transition-transform duration-300 ease-in-out transform hover:scale-110 bottom-0 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPrograms;
