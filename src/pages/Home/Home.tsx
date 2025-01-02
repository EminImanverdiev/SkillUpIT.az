import React from 'react';
import { Link } from 'react-router-dom';
import CoursesOverview from './CoursesOverview';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Link to Contact Page */}
      <Link 
        to="/contact" 
        className="text-blue-500 underline hover:text-blue-700 mb-4"
      >
        Contact Page
      </Link>
      
      {/* Courses Overview Section */}
      <CoursesOverview />
    </div>
  );
};

export default Home;
