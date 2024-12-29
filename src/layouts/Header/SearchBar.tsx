import React from "react";


const SearchBar = () => {
  return (
    <div className="header-search flex relative mx-4">
      <input
        type="search"
        placeholder="Search for courses..."
        className="focus:outline-none focus:ring-4 focus:ring-blue-200 focus:ring-opacity-30 focus:border-blue-500  px-2 py-2  bg-[#F4F4F3] text-[14px] font-semibold border rounded-[5px] w-[250px]"
      />
      <div className=" absolute right-7 top-1/3 text-gray-200 text-gray-{shade}  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          className="text-gray-400 hover:text-blue-500 duration-300"
        >
          <path
            d="M16.0004 16L12.3754 12.375M14.3333 7.66665C14.3333 11.3485 11.3485 14.3333 7.66665 14.3333C3.98476 14.3333 1 11.3485 1 7.66665C1 3.98476 3.98476 1 7.66665 1C11.3485 1 14.3333 3.98476 14.3333 7.66665Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
