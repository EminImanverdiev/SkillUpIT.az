import React from "react";
import fun1 from "../../assets/svg/funfact/funfact-2-icon-1.svg";
import fun2 from "../../assets/svg/funfact/fun2-icon-2.svg";
import fun3 from "../../assets/svg/funfact/fun3-icon-3.svg";
import fun4 from "../../assets/svg/funfact/fun4-icon-4.svg";

const Funfact = () => {
  return (
    <div className="bg-primary ">
      <div className="container">
        <div className="grid grid-cols-4 justify-between  text-white ">
          <div className="flex items-center py-8">
            <div>
              <img src={fun1} alt="fun1" />
            </div>
            <div className="ml-5">
              <h2 className="text-xl font-semibold">Flexible classes</h2>
              <p className="text-[15px]">You pick schedule.</p>
            </div>
          </div>
          <div className="flex items-center ml-5 py-8">
            <div>
              <img src={fun2} alt="fun1" />
            </div>
            <div className="ml-5">
              <h2 className="text-xl font-semibold">Offline mode</h2>
              <p className="text-[15px]">Download classes.</p>
            </div>
          </div>
          <div className="flex items-center justify-center py-8">
            <div>
              <img src={fun3} alt="fun1" />
            </div>
            <div className="ml-5">
              <h2 className="text-xl font-semibold">10k online courses</h2>
              <p className="text-[15px]">Explore a fresh topics.</p>
            </div>
          </div>
          <div className="flex items-center justify-end py-8">
            <div>
              <img src={fun4} alt="fun1" />
            </div>
            <div className="ml-5"> 
              <h2 className="text-xl font-semibold">Educator help</h2>
              <p className="text-[15px]"> Always get answers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funfact;
