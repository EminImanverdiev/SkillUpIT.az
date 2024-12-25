import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Apply from './pages/Apply/Apply';
import Blog from './pages/Blog/Blog';
import Contack from './pages/Contack/Contack';
import Login from './pages/login&SignIn/LogIn/Login';
import SignIn from './pages/login&SignIn/SignIn/SignIn';
import Students from './pages/Students/Students';
import Teachers from './pages/Teachers/Teachers';
import Vacancies from './pages/Vacancies/Vacancies';
import Courses from './pages/Courses/Courses';
import Event from './pages/Event/Event';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/contack" element={<Contack />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/student" element={<Students />} />
        <Route path="/teacher" element={<Teachers />} />
        <Route path="/vacancies" element={<Vacancies />} />
      </Routes>
    </Router>
  )
}

export default App
