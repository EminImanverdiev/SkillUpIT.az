import React from "react";
import categorySvg from "../../assets/svg/category.svg";
import Category from "module";

const CategoryBar = () => {
  return (
    <div className="header-category flex items-center pl-6">
      <img src={categorySvg} width={17} alt="category svg" className=" " />
      <button aria-haspopup="true" aria-expanded="false" className="ml-2 font-bold text-[#5956E9] text-[16px]">Category</button>
    </div>
  );
};

export default CategoryBar;
