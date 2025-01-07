import React from 'react';
import CoursesOverview from './CoursesOverview';
import Funfact from './Funfact';
import Category from './Category';
import { Link } from 'react-router-dom'; // Ensure this import is included if you're using `Link`.

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Navigation Links */}
      <Link to="/contact" className="text-blue-500 underline hover:text-blue-700 mb-4">
        Contact Page
      </Link>
      <Link to="/about" className="text-blue-500 underline hover:text-blue-700 mb-4">
        About Page
      </Link>

      {/* Main Sections */}
      <CoursesOverview />
      <Funfact />
      <Category />
    </div>
  );
};

export default Home;
