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
    </div>
  );
};

export default Home;
