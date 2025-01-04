import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Link  to="/contact">  Contact Page   </Link>
      <Link  to="/about">About</Link>
    </div>
  );
};

export default Home;
