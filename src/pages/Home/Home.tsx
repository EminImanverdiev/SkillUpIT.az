import React from 'react';
import CoursesOverview from './CoursesOverview';
import Funfact from './Funfact';
import Category from './Category';

const Home = () => {
  return (
    <div>   
      <CoursesOverview />
      <Funfact/>
      <Category/>
    </div>
  );
};

export default Home;
