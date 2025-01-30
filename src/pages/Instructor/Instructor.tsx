import React from "react";
import { useNavigate } from "react-router-dom";
import ins1 from "../../assets/images/leadership-thumb-1.jpg";
import ins2 from "../../assets/images/leadership-thumb-2.jpg";
import ins3 from "../../assets/images/leadership-thumb-3.jpg";
import courseImg from '../../assets/images/course-thumb-5.jpg';
import courseImg2 from '../../assets/images/course-thumb-4.jpg'
import { FaFacebook, FaTwitter, FaArrowRight } from "react-icons/fa";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  facebook?: string;
  twitter?: string;
  courses: number;
  students: number;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Courtney Henry",
    role: "Principal",
    image: ins1,
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    courses: 12,
    students: 1500,
  },
  {
    id: 2,
    name: "Kristin Watson",
    role: "Athletic Assistant",
    image: ins2,
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    courses: 8,
    students: 1200,
  },
  {
    id: 3,
    name: "Chea-Lene Chang",
    role: "Principal",
    image: ins3,
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    courses: 10,
    students: 1300,
  },
  {
    id: 4,
    name: "James Warren",
    role: "Owner & Founder",
    image: ins1,
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    courses: 15,
    students: 2000,
  },
  {
    id: 5,
    name: "Indigo Violet",
    role: "Professor of Computer Science",
    image: ins1,
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    courses: 20,
    students: 37,
    biography: `Indigo Violet is an accomplished educator and expert in the field of computer science, with over 15 years of experience 
    in both academia and industry. She currently serves as a Professor of Computer Science at Tech University.\n\n
    As an English lecturer, I am fervently dedicated to shaping the linguistic and literary acumen of my students.
    With a profound passion for language education, I employ dynamic and innovative teaching methods to inspire a love 
    for literature and effective communication. My commitment extends beyond the curriculum, fostering an environment 
    where students develop critical thinking skills and a deep appreciation for the nuances of the English language.`,
    
    popularCourses: [
      {
        title: "Computer Science: Mathematical and Analytical",
        category: "Art & Design",
        lessons: 12,
        imgCourse:courseImg2,
        students: 45,
        rating: 5.0,
        price: "$26.00",
        originalPrice: "$54.00",
      },
      {
        title: "Machine Learning A-Z: Hands-on Python and Java",
        category: "Art & Design",
        lessons: 12,
        students: 45,
        imgCourse:courseImg,
        rating: 5.0,
        price: "$26.00",
        originalPrice: "$84.00",
      },
      {
        title: "The Complete Guide to Build RESTful API Application",
        category: "Art & Design",
        lessons: 12,
        imgCourse:courseImg,
        students: 45,
        rating: 5.0,
        price: "Free",
      },
      {
        title: "Grow Personal Financial Security Thinking & Principles",
        category: "Art & Design",
        lessons: 12,
        imgCourse:courseImg,
        students: 45,
        rating: 5.0,
        price: "$86.00",
      },
      {
        title: "Starting SEO as Your Home-Based Business",
        category: "Art & Design",
        lessons: 12,
        students: 45,
        imgCourse:courseImg,
        rating: 5.0,
        price: "$26.00",
        originalPrice: "$54.00",
      },
      {
        title: "Interior Design Concepts Masterclass",
        category: "Art & Design",
        lessons: 12,
        students: 45,
        imgCourse:courseImg,
        rating: 5.0,
        price: "Free",
      },
    ],
  },
];



const Instructor = () => {
  const navigate = useNavigate();

  const handleDetails = (member) => {
    navigate(`/instructor/${member.id}`, { state: { member } });
  };
  
  

  return (
    <div className="full bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative bg-white rounded-lg overflow-hidden flex flex-col "
            >
              {/* Image Container with Hover */}
              <div className="relative group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover mb-2 rounded-lg transform transition-transform duration-300 group-hover:shadow-lg"
                />
                {/* Overlay */}
                <div className="absolute flex inset-0 bg-gradient-to-b from-transparent to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 items-end justify-between  ">
                  <div className="flex space-x-4 mb-4">
                    {member.facebook && (
                      <a
                        href={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white hover:text-blue-400 h-8 w-8 flex items-center justify-center text-black rounded-full transition-colors"
                      >
                        <FaFacebook />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white hover:text-blue-400 h-8 w-8 flex items-center justify-center text-black rounded-full transition-colors"
                      >
                        <FaTwitter />
                      </a>
                    )}
                  </div>
                  <div className="flex items-center mb-4 gap-2">
                    <button
                      onClick={() => handleDetails(member)}
                      className="text-white uppercase  text-xs font-semibold transition-colors  rounded-full"
                    >
                      Details
                    </button>
                    <span
  onClick={() => handleDetails(member)}
  className="group hover:bg-white w-8 h-8 border-[1px] border-white hover:border-blue-500 rounded-full text-lg transition-transform transform group-hover:-rotate-45 cursor-pointer flex items-center justify-center"
>
  <FaArrowRight className="w-4 h-4 text-white group hover:text-blue-500" />
</span>

                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-left flex-1 py-4">
                <p className="text-gray-500 font-semibold text-xs">
                  {member.role}
                </p>
                <h3 className="text-lg font-semibold">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructor;






