import React from 'react';
import { Link } from 'react-router-dom';
import CoursesOverview from './CoursesOverview';
import Funfact from './Funfact';

const Home = () => {
  return (
    <div>   
      <CoursesOverview />
      <Funfact/>
    </div>
  );
};

export default Home;
