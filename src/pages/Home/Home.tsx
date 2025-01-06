import React from "react";
import CoursesOverview from "./CoursesOverview";
import Funfact from "./Funfact";
import Category from "./Category";
import Subscribe from "./Subscribe";
import PopularCourses from "./PopularCourses";

const Home = () => {
  return (
    <div>
      <CoursesOverview />
      <Funfact />
      <Category />
      <PopularCourses />
      <Subscribe />
    </div>
  );
};

export default Home;
