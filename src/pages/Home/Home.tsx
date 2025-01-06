import React from "react";
import CoursesOverview from "./CoursesOverview";
import Funfact from "./Funfact";
import Category from "./Category";
import Subscribe from "./Subscribe";
import PopularCourses from "./PopularCourses";
import PopularPost from "./PopularPost";

const Home = () => {
  return (
    <div>
      <CoursesOverview />
      <Funfact />
      <Category />
      <PopularCourses />
      <PopularPost/>
      <Subscribe />
    </div>
  );
};

export default Home;
