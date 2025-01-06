import React from "react";
import CoursesOverview from "./CoursesOverview";
import Funfact from "./Funfact";
import Category from "./Category";
import Subscribe from "./Subscribe";
import PopularCourses from "./PopularCourses";
import PopularPost from "./PopularPost";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <CoursesOverview />
      <Funfact />
      <Category />
      <PopularCourses />
      <Testimonials/>
      <PopularPost/>
      <Subscribe />
    </div>
  );
};

export default Home;
