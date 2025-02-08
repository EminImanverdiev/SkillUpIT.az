import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="header-navigation">
      <nav className="ml-7 ">
        <ul className="flex space-x-6 font-semibold text-gray-700">
          <li className="relative group">
            <button className="flex items-center space-x-2 hover:text-blue-500">
              <span><Link to="/demos">Demos</Link></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </li>
          <li className="relative group">
            <button className="flex items-center space-x-2 hover:text-blue-500">
              <span><Link to="/courses">Courses</Link></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </li>
          <li className="relative group">
            <button className="flex items-center space-x-2 hover:text-blue-500">
              <span><Link to="/pages">Pages</Link></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </li>
          <li className="relative group">
            <button className="flex items-center space-x-2 hover:text-blue-500">
              <span><Link to="/blog">Blog</Link></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </li>
          <li className="relative group">
            <button className="flex items-center space-x-2 hover:text-blue-500">
              <span className="font-semibold"><Link to="/contact">Contact</Link> </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
