import React from 'react';
import { Link } from 'react-router-dom';
import CoursesOverview from './CoursesOverview';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
<<<<<<< HEAD
      <Link  to="/contact">  Contact Page   </Link>
      <Link  to="/about">About</Link>
=======
      {/* Link to Contact Page */}
      <Link 
        to="/contact" 
        className="text-blue-500 underline hover:text-blue-700 mb-4"
      >
        Contact Page
      </Link>
      
      {/* Courses Overview Section */}
      <CoursesOverview />
>>>>>>> cfa09768829a1959d12c6e0e628d7eebfdb12131
    </div>
  );
};

export default Home;
