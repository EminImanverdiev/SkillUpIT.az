import React from "react";


const UserActions = () => {
  return (
    <div className="userAction flex items-center relative group  text-gray-500 hover:text-blue-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="16"
        viewBox="0 0 15 16"
        fill="none"
      
      >
        <path
          d="M13.4102 14.9697C13.4102 12.2666 10.721 10.0803 7.41016 10.0803C4.09933 10.0803 1.41016 12.2666 1.41016 14.9697M10.9027 4.49243C10.9027 6.42125 9.33909 7.98487 7.41028 7.98487C5.48146 7.98487 3.91784 6.42125 3.91784 4.49243C3.91784 2.56362 5.48146 1 7.41028 1C9.33909 1 10.9027 2.56362 10.9027 4.49243Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <span className="pl-1 font-medium">
        Admin
      </span>
      <button className="px-6  ml-4 rounded-xl text-white font-bold py-2 bg-[#5956E9]">
        Free Trial
      </button>
    </div>
  );
};

export default UserActions;
