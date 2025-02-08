
import React from "react";
import CoursesOverview from "./CoursesOverview";
import Funfact from "./Funfact";
import Category from "./Category";
import Subscribe from "./Subscribe";
import PopularCourses from "./PopularCourses";
import PopularPost from "./PopularPost";
import Testimonials from "./Testimonials";
import Instructors from "./Instructors";
import ViewPrograms from "./ViewPrograms";

const Home = () => {
  return (
    <div>
      <CoursesOverview />
      <Funfact />
      <Category />
      <PopularCourses />
      <Instructors/>
      <ViewPrograms/>
      <Testimonials/>
      <PopularPost/>
      <Subscribe />
{/* =======
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this import is included for navigation links.
import CoursesOverview from './CoursesOverview';
import Funfact from './Funfact';
import Category from './Category'; */}

{/* const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Link to="/about" className="text-blue-500 underline hover:text-blue-700 mb-4">
        About Page
      </Link>
      <Link to="/instructor" className="text-blue-500 underline hover:text-blue-700 mb-4">
        Instructor Page
      </Link>
      <Link to="/faq" className="text-blue-500 underline hover:text-blue-700 mb-4">
        Faq
      </Link> */}
      {/* Main Sections
      <CoursesOverview />
      <Funfact />
      <Category />
>>>>>>> e5a214bac2325c7ef4d54b5f142781f29ba21115 */}
    </div>
  );
};

export default Home;
