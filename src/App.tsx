import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Apply from './pages/Apply/Apply';
import Contact from './pages/Contact/Contact'; 
import Login from './pages/login&SignIn/LogIn/Login';
import SignIn from './pages/login&SignIn/SignIn/SignIn';
import Students from './pages/Students/Students';
import Teachers from './pages/Teachers/Teachers';
import Vacancies from './pages/Vacancies/Vacancies';
import Courses from './pages/Courses/Courses';
import Event from './pages/Event/Event';
import Header from './layouts/Header/Header';

function App() {
  return (
    <Router>
      {/* Place Header outside Routes to render it on all pages */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/student" element={<Students />} />
        <Route path="/teacher" element={<Teachers />} />
        <Route path="/vacancies" element={<Vacancies />} />
      </Routes>
    </Router>
  );
}

export default App;
